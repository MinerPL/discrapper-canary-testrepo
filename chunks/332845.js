t.d(e, {
    Z: function () {
        return c;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    l = t(481060),
    r = t(417363),
    d = t(877481),
    s = t(358085),
    u = t(689938);
function c(n, e) {
    let t = n.getBranchedName(e),
        c = (0, a.e7)(
            [r.Z],
            () => {
                let e = r.Z.getState(n.id, n.branchId);
                return null == e ? void 0 : e.installPath;
            },
            [n.branchId, n.id]
        );
    return null != c && (0, s.isDesktop)()
        ? (0, i.jsx)(l.MenuItem, {
              id: 'create-shortcut',
              label: u.Z.Messages.APPLICATION_CONTEXT_MENU_CREATE_DESKTOP_SHORTCUT,
              action: () => d.Z.createShortcuts(!0, !1, t, n.id, c)
          })
        : null;
}
