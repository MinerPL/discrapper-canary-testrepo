n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(960870),
    d = n(848966),
    _ = n(689938),
    E = n(139665);
function f(e) {
    let { user: t, activity: n, entry: a, display: f, className: h, onSelect: p, onClose: I, onRequestOpen: m } = e,
        [T, S] = i.useState(!1),
        { analyticsLocations: g } = (0, u.ZP)(l.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        A = (0, c.Z)({
            display: f,
            user: t,
            activity: n,
            entry: a,
            analyticsLocations: g
        }),
        N = (0, d.Z)({
            entry: a,
            activity: n,
            user: t,
            display: f,
            onClose: I,
            onAction: A,
            isMenuOpen: T
        });
    return 0 === N.length || t.bot
        ? null
        : (0, r.jsx)(o.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  A({ action: 'OPEN_MENU' }), S(!0), null == m || m();
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(o.Menu, {
                      navId: 'content-inventory-context',
                      onClose: () => {
                          t(), S(!1);
                      },
                      'aria-label': _.Z.Messages.USER_PROFILE_ACTIVITY_ACTION_MENU_A11Y_LABEL,
                      onSelect: p,
                      children: (0, r.jsx)(o.MenuGroup, { children: N })
                  });
              },
              children: (e) =>
                  (0, r.jsx)(o.Clickable, {
                      ...e,
                      onContextMenu: (t) => {
                          t.preventDefault(), e.onClick(t);
                      },
                      className: s()(E.contextMenu, h),
                      children: (0, r.jsx)(o.MoreHorizontalIcon, {
                          color: o.tokens.colors.INTERACTIVE_NORMAL,
                          size: 'xs'
                      })
                  })
          });
}
