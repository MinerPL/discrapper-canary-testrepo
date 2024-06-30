t.d(e, {
    Z: function () {
        return _;
    }
});
var i = t(735250);
t(470079);
var a = t(442837), l = t(481060), r = t(594190), d = t(757266), s = t(283595), u = t(417363), c = t(804739), I = t(346329), o = t(592745), A = t(689938);
function _(n, e) {
    let t = (0, a.e7)([r.ZP], () => r.ZP.getRunningVerifiedApplicationIds().includes(n.id), [n.id]), _ = (0, a.e7)([
            s.Z,
            o.Z,
            u.Z,
            d.Z
        ], () => (0, c.t)({
            LibraryApplicationStore: s.Z,
            LaunchableGameStore: o.Z,
            DispatchApplicationStore: u.Z,
            ConnectedAppsStore: d.Z,
            applicationId: n.id,
            branchId: n.branchId
        }), [
            n.branchId,
            n.id
        ]);
    return t || !_ ? null : (0, i.jsx)(l.MenuItem, {
        id: 'launch',
        label: A.Z.Messages.APPLICATION_CONTEXT_MENU_LAUNCH,
        action: () => I.playApplication(n.id, n, { analyticsParams: { location: e } })
    });
}
