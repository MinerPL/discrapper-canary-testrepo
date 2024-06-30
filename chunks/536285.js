n.r(t), n(411104);
var r = n(836560), i = n(525654), a = n.n(i), o = n(664751), s = n(772848), l = n(544891), u = n(996106), c = n(981631);
let d = c.V6Z + c.frH - 1;
function _(e, t) {
    if (null == e || null == t)
        throw Error('cmd and name required');
    return ''.concat(e, ':').concat(t);
}
let E = o.parse(location.search.slice(1)), f = parseInt(null != E.rpc && '' !== E.rpc ? E.rpc : c.V6Z, 10), h = null;
class p extends r.EventEmitter {
    get port() {
        return f;
    }
    get connected() {
        return null != h && h.readyState === WebSocket.OPEN;
    }
    connect() {
        if (null == h) {
            if (f > d) {
                f = c.V6Z, this.emit('disconnected');
                return;
            }
            try {
                h = new WebSocket('ws://127.0.0.1:'.concat(this.port, '/?v=').concat(c.X6Q));
            } catch (e) {
                this.disconnect({ code: c.$VG.CLOSE_ABNORMAL });
                return;
            }
            null != h && (h.onmessage = e => {
                let t;
                try {
                    if ('string' == typeof e.data)
                        t = JSON.parse(e.data);
                    else
                        throw Error('payload data not a string');
                } catch (e) {
                    this.emit('error', e), this.disconnect();
                    return;
                }
                let {
                    cmd: n,
                    evt: r,
                    nonce: i,
                    data: a
                } = t;
                if (n === c.Etm.DISPATCH) {
                    if (r === c.zMe.READY) {
                        this.emit('connected');
                        return;
                    }
                    if (r === c.zMe.ERROR) {
                        this.emit('error', new u.Z({ errorCode: a.code }, a.message)), this.disconnect();
                        return;
                    }
                    this.emit(_(n, r), a);
                    return;
                }
                let o = null;
                r === c.zMe.ERROR && (o = new u.Z({ errorCode: a.code }, a.message), a = null), this.emit(_(n, i), o, a);
            }, h.onclose = h.onerror = e => this.disconnect(e));
        }
    }
    disconnect(e) {
        if (null != e && 'code' in e && [
                c.$VG.CLOSE_ABNORMAL,
                c.$VG.INVALID_CLIENTID
            ].includes(e.code)) {
            f++, h = null, this.connect();
            return;
        }
        null != h && (this.emit('disconnected'), h.close(), h = null);
    }
    subscribe(e, t, n) {
        return this.on(_(c.Etm.DISPATCH, e), n), this.request(c.Etm.SUBSCRIBE, t, e);
    }
    unsubscribe(e, t, n) {
        return this.removeListener(_(c.Etm.DISPATCH, e), n), this.request(c.Etm.UNSUBSCRIBE, t, e);
    }
    request(e, t, n) {
        return new Promise((r, i) => {
            if (!this.connected) {
                this.once('connected', () => {
                    this.removeAllListeners('disconnected'), r(this.request(e, t, n));
                }), this.once('disconnected', () => {
                    this.removeAllListeners('connected'), i(Error('disconnected during request'));
                }), this.connect();
                return;
            }
            let a = (0, s.Z)(), o = JSON.stringify({
                    cmd: e,
                    args: t,
                    evt: n,
                    nonce: a
                });
            this.once(_(e, a), (e, t) => null != e ? i(e) : r(t)), null == h || h.send(o);
        });
    }
    requestOnce(e, t, n) {
        return l.tn.post({
            url: 'http://127.0.0.1:'.concat(this.port, '/rpc?v=').concat(c.X6Q),
            body: {
                cmd: e,
                args: t,
                evt: n,
                nonce: (0, s.Z)()
            }
        }).then(e => {
            let {
                body: {
                    evt: t,
                    data: n
                }
            } = e;
            if (t === c.zMe.ERROR)
                throw new u.Z({ errorCode: n.code }, n.message);
            return n;
        });
    }
    requestRedirect(e, t, n) {
        if ('Chrome' === a().name && parseInt(a().version, 10) >= 58)
            return this.requestOnce(e, t, n);
        let r = encodeURIComponent(JSON.stringify({
                cmd: e,
                args: t,
                evt: n,
                nonce: (0, s.Z)()
            })), i = encodeURIComponent(''.concat(location.protocol, '//').concat(location.host).concat(location.pathname, '?done=true'));
        return window.open('http://127.0.0.1:'.concat(this.port, '/rpc?v=').concat(c.X6Q, '&payload=').concat(r, '&callback=').concat(i), '_self'), new Promise(() => null);
    }
}
t.default = new p();
