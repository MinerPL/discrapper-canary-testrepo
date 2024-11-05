n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(37258),
    i = n(652853),
    a = n(347328),
    s = n(540440),
    o = n(553375),
    l = n(365583),
    u = n(582546),
    c = n(888317),
    d = n(228168),
    f = n(388032);
function _(e) {
    let { onAction: t } = e,
        { profileType: n } = (0, i.z)(),
        _ = (0, r.Z)({
            userId: e.user.id,
            section: d.oh.ACTIVITY,
            label: f.intl.string(f.t.pD1L1t),
            onAction: () => (null == t ? void 0 : t({ action: 'PRESS_VIEW_ALL_ACTIVITY_MENU_ITEM' }))
        });
    return [n === d.y0.BITE_SIZE ? _ : null, (0, u.Z)(e), (0, o.ZP)(e), (0, o.uj)(e), (0, c.Z)(e), (0, l.Z)(e), (0, a.Z)(e), (0, s.B)(e)].filter((e) => null != e);
}
