n.d(t, {
    J: function () {
        return u;
    },
    Z: function () {
        return d;
    }
});
var i = n(55935),
    a = n(70956),
    s = n(709054),
    r = n(463396),
    l = n(901461),
    o = n(981631);
let c = 7 * a.Z.Millis.MINUTE;
function u(e, t, n) {
    return null == t || (t.type === o.ys_.MESSAGE && t.content.id === t.content.channel_id) || (t.type !== o.ys_.MESSAGE && t.type !== o.ys_.THREAD_STARTER_MESSAGE) || d(e, t.content, n);
}
function d(e, t, n) {
    if (n.hasFlag(o.iLy.HAS_THREAD) || n.isCommandType()) return !0;
    if (n.type > o.uaV.DEFAULT) return !(0, l.Z)(t) || n.type === o.uaV.REPLY || !1;
    return !!((0, l.Z)(t) || t.author.id !== n.author.id || t.hasFlag(o.iLy.EPHEMERAL) !== n.hasFlag(o.iLy.EPHEMERAL) || (null != n.webhookId && t.author.username !== n.author.username) || ((null == e ? void 0 : e.isForumPost()) && t.id === s.default.castChannelIdAsMessageId(e.id)) || !(0, i._w)(t.timestamp, n.timestamp, c) || (n.hasFlag(o.iLy.SUPPRESS_NOTIFICATIONS) && !t.hasFlag(o.iLy.SUPPRESS_NOTIFICATIONS)) || (t.hasFlag(o.iLy.SUPPRESS_NOTIFICATIONS) && !n.hasFlag(o.iLy.SUPPRESS_NOTIFICATIONS) && (n.mentions.length > 0 || n.mentionRoles.length > 0 || n.mentionEveryone)) || (0, r.f)(n)) || !1;
}
