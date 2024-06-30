n(724458);
var r, i, a, o, s = n(442837), l = n(570140), u = n(786761), c = n(651530), d = n(163268);
let _ = {};
function E(e) {
    return ''.concat(e.channel_id, ':').concat(e.id);
}
function f(e) {
    return !!(0, c.Kh)() && null != e.messages && (_ = e.messages.reduce((e, t) => (t.forEach(t => {
        e[E(t)] = (0, u.e5)(t);
    }), e), {}), !0);
}
function h() {
    _ = {};
}
class p extends (r = s.ZP.Store) {
    getMessage(e, t) {
        return _[E({
            id: e,
            channel_id: t
        })];
    }
}
o = 'SearchMessageStore', (a = 'displayName') in (i = p) ? Object.defineProperty(i, a, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : i[a] = o, t.Z = new p(l.Z, {
    SEARCH_FINISH: f,
    MOD_VIEW_SEARCH_FINISH: f,
    MESSAGE_UPDATE: function (e) {
        let {message: t} = e;
        if (!(0, c.Kh)() || null == t.id || null == t.channel_id)
            return !1;
        let n = E(t), r = _[n];
        return null != r && (_[n] = (0, u.wi)(r, {
            attachments: t.attachments,
            embeds: t.embeds
        }), !0);
    },
    LOGOUT: function () {
        (function () {
            _ = {};
        }());
    },
    CONNECTION_OPEN: function () {
        (function () {
            _ = {};
        }());
    },
    MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function (e) {
        let {
                messageId: t,
                channelId: n
            } = e, r = E({
                id: t,
                channel_id: n
            }), i = _[r];
        null != i && (_[r] = (0, d.Cm)(i));
    }
});
