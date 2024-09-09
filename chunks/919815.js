t.d(n, {
    Z: function () {
        return r;
    }
});
var s = t(735250);
t(470079);
var i = t(442837),
    a = t(481060),
    l = t(888369),
    u = t(181945),
    o = t(689938);
function r(e, n) {
    let t = e.id,
        r = (0, i.e7)([l.default], () => l.default.getGuildHasUnreadIgnoreMuted(t), [t]);
    return (0, s.jsx)(a.MenuItem, {
        id: 'mark-guild-read',
        label: o.Z.Messages.MARK_AS_READ,
        icon: void 0,
        action: () => (0, u.Z)([t], n.section),
        disabled: !r
    });
}
