n.d(t, {
    f: function () {
        return p;
    }
}),
    n(47120),
    n(789020);
var i = n(602715),
    s = n(812206),
    a = n(258732),
    l = n(314897),
    r = n(630388),
    o = n(786761),
    c = n(3148),
    u = n(981631);
let d = new Map();
function h(e, t) {
    let n = (0, c.ZP)({
            channelId: t,
            type: u.uaV.IN_GAME_MESSAGE_NUX,
            content: '',
            author: e.author,
            flags: u.iLy.EPHEMERAL,
            state: u.yb.SENT
        }),
        i = (0, o.e5)(n);
    return (i.applicationId = e.applicationId), (i.timestamp = e.timestamp), i;
}
function p(e, t) {
    let n = (function (e, t) {
        var n, o;
        if (d.get(t.id) === e.id) return h(e, t.id);
        if (null == e.applicationId || !t.isDM() || e.author.id === l.default.getId() || (0, r.yE)(null !== (n = t.recipientFlags) && void 0 !== n ? n : 0, i.V.DISMISSED_IN_GAME_MESSAGE_NUX) || d.has(t.id)) return null;
        let c = s.Z.getApplication(e.applicationId);
        if (null == c || !(0, r.yE)(c.flags, u.udG.SOCIAL_LAYER_INTEGRATION)) return null;
        let p = h(e, t.id);
        d.set(t.id, e.id);
        let m = (0, r.mB)(null !== (o = t.recipientFlags) && void 0 !== o ? o : 0, i.V.DISMISSED_IN_GAME_MESSAGE_NUX, !0);
        return a.Z.updatePrivateChannelRecipientFlags(t.id, m), p;
    })(e, t);
    return null != n ? n : null;
}
