a.d(n, {
    Z: function () {
        return r;
    }
});
var t = a(735250);
a(470079);
var l = a(442837),
    i = a(481060),
    u = a(5036),
    s = a(9156),
    d = a(689938);
function r(e) {
    let n = (0, l.e7)([s.ZP], () => s.ZP.isGuildCollapsed(e), [e]);
    return (0, t.jsx)(i.MenuCheckboxItem, {
        id: 'hide-muted-channels',
        label: d.Z.Messages.HIDE_MUTED_CHANNELS,
        action: () => u.Z.toggleCollapseGuild(e),
        checked: n
    });
}
