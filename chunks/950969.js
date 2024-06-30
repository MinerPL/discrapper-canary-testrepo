var i = n(735250), l = n(470079), r = n(442837), a = n(718528), s = n(220444), o = n(569471), c = n(592125), u = n(306680), d = n(9156), h = n(451478), p = n(816779);
function _(e) {
    let t = c.Z.getChannel(e);
    return null != t && null != t.getGuildId() && !(t.isThread() ? o.Z.isMuted(t.id) : d.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, s.d)(t);
}
function f(e) {
    let t = c.Z.getChannel(e);
    if (null == t)
        return !1;
    let n = t.getGuildId();
    if (null == n)
        return !1;
    let i = d.ZP.isGuildCollapsed(n), l = d.ZP.isChannelMuted(n, t.id);
    return (!i || !l) && u.ZP.getMentionCount(e) > 0;
}
t.Z = l.forwardRef(function (e, t) {
    let {
            guildId: n,
            guildChannels: l,
            guildChannelsVersion: s,
            ...o
        } = e, c = (0, a.T)(n, l, s, !1, { ignoreRecents: !0 }), u = (0, r.e7)([h.Z], () => h.Z.isFocused());
    return (0, i.jsx)(p.Z, {
        ref: t,
        ...o,
        isUnread: _,
        isMentioned: f,
        items: c,
        animate: u
    });
});
