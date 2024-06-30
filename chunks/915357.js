n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(996106), s = n(631467), a = n(76238), r = n(186901), l = n(981631);
function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class c extends a.Z {
    send(e) {
        var t;
        null === (t = this.onSendingToRPCClient) || void 0 === t || t.call(this, e, this.id), this.postMessageToRPCClient([
            s.Z.FRAME,
            e
        ], this.origin);
    }
    close(e, t) {
        !this.closed && this.postClose(this.origin, {
            code: e,
            message: t
        }, this.postMessageToRPCClient), this.closed = !0;
    }
    constructor({
        origin: e,
        postMessageToRPCClient: t,
        frameId: n,
        version: s,
        encoding: a,
        logger: c,
        postClose: d,
        onSendingToRPCClient: u
    }) {
        if (super(r.He.POST_MESSAGE, s, a), o(this, 'origin', void 0), o(this, 'frameId', void 0), o(this, 'postMessageToRPCClient', void 0), o(this, 'logger', void 0), o(this, 'postClose', void 0), o(this, 'onSendingToRPCClient', void 0), o(this, 'closed', void 0), -1 === [
                'etf',
                'json'
            ].indexOf(a))
            throw new i.Z({ closeCode: l.$VG.INVALID_ENCODING }, 'Invalid Encoding: '.concat(a));
        if ('etf' === a)
            throw new i.Z({ closeCode: l.$VG.INVALID_ENCODING }, 'Erlpack cannot be used on this client');
        this.origin = e, this.postMessageToRPCClient = t, this.frameId = n, this.logger = c, this.postClose = d, this.onSendingToRPCClient = u, this.closed = !1;
    }
}
