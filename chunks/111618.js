var i, a, r, l, o = t(442837), s = t(570140);
let u = {};
class c extends (l = o.ZP.Store) {
    getOptions(e) {
        return u[e];
    }
}
r = 'SendMessageOptionsStore', (a = 'displayName') in (i = c) ? Object.defineProperty(i, a, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = r, n.Z = new c(s.Z, {
    MESSAGE_CREATE: function (e) {
        let {
            message: n,
            sendMessageOptions: t
        } = e;
        null != t && (u[n.id] = t), null != n.nonce && n.nonce in u && delete u[n.nonce];
    }
});
