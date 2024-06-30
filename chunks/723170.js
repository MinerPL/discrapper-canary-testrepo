t.d(n, {
    B: function () {
        return c;
    },
    J: function () {
        return o;
    }
}), t(789020);
var i = t(442837), a = t(592125), s = t(9156), u = t(630388), r = t(569471), l = t(124368), d = t(981631);
function o(e) {
    let n = r.Z.flags(e.id);
    if (null == n)
        return l.iN.NO_MESSAGES;
    if ((0, u.yE)(n, l.iN.ALL_MESSAGES))
        return l.iN.ALL_MESSAGES;
    if ((0, u.yE)(n, l.iN.ONLY_MENTIONS))
        return l.iN.ONLY_MENTIONS;
    if ((0, u.yE)(n, l.iN.NO_MESSAGES))
        return l.iN.NO_MESSAGES;
    let t = a.Z.getChannel(e.parent_id);
    if (null == t || s.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id))
        return l.iN.NO_MESSAGES;
    let i = s.ZP.resolvedMessageNotifications(t);
    return i === d.bL.NO_MESSAGES ? l.iN.NO_MESSAGES : i === d.bL.ONLY_MENTIONS ? l.iN.ONLY_MENTIONS : l.iN.ALL_MESSAGES;
}
function c(e) {
    return (0, i.e7)([
        r.Z,
        s.ZP,
        a.Z
    ], () => o(e), [e]);
}
