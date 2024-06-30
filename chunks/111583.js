let u;
var l, r, i, o, a = t(442837), d = t(544891), c = t(570140), s = t(70956), f = t(314897), g = t(300429), m = t(981631), Z = t(176505);
let E = 10 * s.Z.Millis.SECOND, v = 1.5 * s.Z.Millis.SECOND, h = {}, T = Object.freeze({});
function _(e) {
    var n;
    return null !== (n = h[e]) && void 0 !== n ? n : T;
}
function S(e) {
    var n, t;
    let {
            channelId: u,
            userId: l
        } = e, r = { ..._(u) };
    clearTimeout(r[l]), r[l] = (n = u, t = l, setTimeout(() => {
        c.Z.dispatch({
            type: 'TYPING_STOP',
            channelId: n,
            userId: t
        });
    }, E)), h[u] = r;
}
function I(e) {
    let {
            channelId: n,
            userId: t
        } = e, u = h[n];
    if (null == u || null == u[t])
        return !1;
    let l = { ...u };
    clearTimeout(l[t]), delete l[t], h[n] = l;
}
function M() {
    h = {};
}
class p extends (o = a.ZP.Store) {
    getTypingUsers(e) {
        return _(e);
    }
    isTyping(e, n) {
        return null != _(e)[n];
    }
}
i = 'TypingStore', (r = 'displayName') in (l = p) ? Object.defineProperty(l, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : l[r] = i, n.Z = new p(c.Z, {
    TYPING_START: S,
    TYPING_STOP: I,
    TYPING_START_LOCAL: function (e) {
        let {channelId: n} = e, t = f.default.getId();
        if (null == t || n === Z.V)
            return !1;
        null != u && u.channelId !== n && (null != u.timeout && clearTimeout(u.timeout), u = null);
        let l = Date.now(), r = 0.8 * E;
        if (null != u && (null != u.timeout || u.prevSend + r > l))
            return !1;
        let i = setTimeout(() => {
            if (null == u || u.channelId !== n || t !== f.default.getId() || null == u.timeout)
                return;
            if (u.timeout = null, !(function (e) {
                    let n = _(e);
                    return n === T ? 0 : Object.keys(n).length;
                }(n) > 5))
                d.tn.post({
                    url: m.ANM.TYPING(n),
                    oldFormErrors: !0
                }).then(e => {
                    if (200 === e.status) {
                        var t, u;
                        let l = null !== (t = e.body.message_send_cooldown_ms) && void 0 !== t ? t : 0, r = null !== (u = e.body.thread_create_cooldown_ms) && void 0 !== u ? u : 0;
                        l > 0 && c.Z.dispatch({
                            type: 'SLOWMODE_SET_COOLDOWN',
                            channelId: n,
                            slowmodeType: g.S.SendMessage,
                            cooldownMs: l
                        }), r > 0 && c.Z.dispatch({
                            type: 'SLOWMODE_SET_COOLDOWN',
                            channelId: n,
                            slowmodeType: g.S.CreateThread,
                            cooldownMs: r
                        });
                    }
                });
        }, null == u || u.prevSend > l - 2 * r ? v : 0);
        return u = {
            channelId: n,
            timeout: i,
            prevSend: l
        }, S({
            channelId: n,
            userId: t
        });
    },
    TYPING_STOP_LOCAL: function (e) {
        let {channelId: n} = e, t = f.default.getId();
        return null != t && null != u && u.channelId === n && null != u.timeout && (clearTimeout(u.timeout), u = null, I({
            channelId: n,
            userId: t
        }));
    },
    CONNECTION_OPEN: M,
    OVERLAY_INITIALIZE: M,
    MESSAGE_CREATE: function (e) {
        let {
            channelId: n,
            message: {author: t},
            optimistic: l
        } = e;
        return l && !function (e) {
            if (null == u || u.channelId !== e)
                return;
            null != u.timeout && clearTimeout(u.timeout), u = null;
        }(n), null != t && I({
            channelId: n,
            userId: t.id
        });
    }
});
