t.d(n, {
    Z: function () {
        return c;
    }
});
var a = t(735250);
t(470079);
var i = t(442837), s = t(481060), r = t(211739), l = t(680089), u = t(592125), d = t(981631), o = t(689938);
function c(e) {
    return (0, i.e7)([
        l.Z,
        u.Z
    ], () => {
        let n = Object.values(u.Z.getMutableBasicGuildChannelsForGuild(e.guild_id)).filter(e => e.type === d.d4z.GUILD_CATEGORY);
        return 0 === n.length || n.every(e => l.Z.isCollapsed(e.id));
    }) ? null : (0, a.jsx)(s.MenuItem, {
        id: 'collapse-all-categories',
        label: o.Z.Messages.COLLAPSE_ALL_CATEGORIES,
        action: () => (0, r.N5)(e.guild_id)
    });
}
