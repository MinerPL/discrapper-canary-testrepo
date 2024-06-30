n.d(t, {
    Z: function () {
        return h;
    }
}), n(47120), n(653041), n(411104);
var r, i, a = n(442837), o = n(710845), s = n(483012), l = n(138859), u = n(91247);
function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let d = new o.Z('GatewaySocket'), _ = new Set([
        'INITIAL_GUILD',
        'READY'
    ]), E = new Set([
        'READY',
        'INITIAL_GUILD'
    ]), f = new Set([
        'READY',
        'READY_SUPPLEMENTAL',
        'RESUMED'
    ]);
(i = r || (r = {}))[i.NotStarted = 0] = 'NotStarted', i[i.Loading = 1] = 'Loading', i[i.Loaded = 2] = 'Loaded';
class h {
    hasStuffToDispatchNow() {
        return this.queue.length > 0 && 2 === this.queue[0].status;
    }
    processFirstQueuedDispatch(e) {
        let t = [];
        for (; this.queue.length > 0 && e.has(this.queue[0].type) && 2 === this.queue[0].status;)
            t.push(this.queue.shift());
        this.dispatchMultiple(t);
    }
    unpauseDispatchQueue() {
        for (let e of (this.paused = !1, this.queue))
            this.maybePreload(e);
        this.flush();
    }
    receiveDispatch(e, t, n) {
        if (null == this.getDispatchHandler)
            throw Error('getDispatchHandler needs to be passed in first!');
        let r = {
            data: e,
            type: t,
            compressionAnalytics: n,
            status: 0,
            preloadPromise: null,
            preloadedData: null
        };
        this.queue.push(r), !this.maybePreload(r) && this.scheduleFlush(t);
    }
    maybePreload(e) {
        if (this.paused && !_.has(e.type))
            return !1;
        if (0 === e.status) {
            var t;
            let n = null === (t = this.getDispatchHandler(e.type)) || void 0 === t ? void 0 : t.preload(e.data);
            if (e.status = null == n ? 2 : 1, e.preloadPromise = n, null != n)
                return n.then(t => {
                    e.preloadedData = t, e.status = 2, this.scheduleFlush(e.type);
                }).catch(t => this.socket.resetSocketOnDispatchError({
                    error: t,
                    action: e.type
                })), !0;
        }
        return !1;
    }
    scheduleFlush(e) {
        !this.paused && (E.has(e) ? (null != this.dispatchTimeout && clearTimeout(this.dispatchTimeout), this.flush()) : null == this.dispatchTimeout && (this.dispatchTimeout = setTimeout(this.flush, this.nextDispatchTimeout)));
    }
    dispatchMultiple(e) {
        if (0 === e.length)
            return;
        let t = 'none', n = !1;
        try {
            this.socket.connectionState === l.Z.RESUMING && a.ZP.Emitter.pause(150), a.ZP.Emitter.batched(() => {
                e.forEach(e => {
                    t = e.type, n = n || f.has(e.type), this.dispatchOne(e);
                }), s.Z.flush();
            }), n && a.ZP.Emitter.resume();
        } catch (e) {
            this.socket.resetSocketOnDispatchError({
                error: e,
                action: t
            });
        }
    }
    dispatchOne(e) {
        var t, n, r;
        let {
                data: i,
                type: a,
                compressionAnalytics: o,
                preloadedData: c
            } = e, d = performance.now();
        if (this.socket.connectionState === l.Z.RESUMING) {
            let e = d - this.resumeAnalytics.lastUpdateTime;
            0 === this.resumeAnalytics.numEvents ? this.resumeAnalytics.initialWaitTime = e : e > this.resumeAnalytics.largestWaitTime && (this.resumeAnalytics.largestWaitTime = e), this.resumeAnalytics.totalWaitTime += e, this.resumeAnalytics.lastUpdateTime = d, this.resumeAnalytics.numEvents += 1;
        }
        if (s.Z.flush(a, i), 'READY' === a) {
            let e = (0, u.vW)(i);
            null === (t = this.getDispatchHandler(a)) || void 0 === t || t.dispatch(i, a, c), (0, u.dm)(this.socket, i, d, o, e);
        } else
            'RESUMED' === a ? (null === (n = this.getDispatchHandler(a)) || void 0 === n || n.dispatch(i, a, c), (0, u.uB)(this.resumeAnalytics), this.resumeAnalytics = (0, u.zH)(), this.socket.handleResumeDispatched()) : null === (r = this.getDispatchHandler(a)) || void 0 === r || r.dispatch(i, a, c);
        this.socket.connectionState === l.Z.RESUMING && (this.resumeAnalytics.dispatchTime += performance.now() - d);
    }
    clear() {
        this.paused = !1, this.queue.length = 0;
    }
    constructor(e) {
        c(this, 'socket', void 0), c(this, 'queue', void 0), c(this, 'dispatchTimeout', void 0), c(this, 'nextDispatchTimeout', void 0), c(this, 'paused', void 0), c(this, 'resumeAnalytics', void 0), c(this, 'getDispatchHandler', void 0), c(this, 'flush', void 0), this.socket = e, this.queue = [], this.dispatchTimeout = null, this.nextDispatchTimeout = 33, this.paused = !0, this.resumeAnalytics = (0, u.zH)(), this.getDispatchHandler = null, this.flush = () => {
            if (this.paused)
                return;
            clearTimeout(this.dispatchTimeout), this.dispatchTimeout = null;
            let e = Date.now(), t = 0;
            for (; t < this.queue.length && 2 === this.queue[t].status; t++);
            if (0 === t)
                return;
            let n = this.queue.splice(0, t);
            this.dispatchMultiple(n);
            let r = Date.now() - e;
            r > 100 ? (d.log('Dispatched '.concat(n.length, ' messages in ').concat(r, 'ms')), this.nextDispatchTimeout = 250) : this.nextDispatchTimeout = 33;
        };
    }
}
