n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(100527),
    l = n(906732),
    u = n(27144),
    c = n(318134),
    d = n(848966),
    _ = n(689938),
    E = n(139665);
function f(e) {
    let { user: t, activity: n, entry: i, display: f, className: h, onSelect: p, onClose: m, onRequestOpen: I } = e,
        { newActivityCardsEnabled: T } = (0, u.z)({ location: 'UserProfileActivityContextMenu' }),
        { analyticsLocations: g } = (0, l.ZP)(o.Z.USER_PROFILE_ACTIVITY_CONTEXT_MENU),
        { onAction: S } = (0, c.Z)({
            display: f,
            user: t,
            activity: n,
            entry: i,
            analyticsLocations: g
        }),
        A = (0, d.Z)({
            entry: i,
            activity: n,
            user: t,
            display: f,
            onClose: m,
            onAction: S
        });
    return !T || 0 === A.length || t.bot
        ? null
        : (0, r.jsx)(s.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              onRequestOpen: () => {
                  S({ action: 'OPEN_MENU' }), null == I || I();
              },
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(s.Menu, {
                      navId: 'content-inventory-context',
                      onClose: t,
                      'aria-label': _.Z.Messages.USER_PROFILE_ACTIVITY_ACTION_MENU_A11Y_LABEL,
                      onSelect: p,
                      children: (0, r.jsx)(s.MenuGroup, { children: A })
                  });
              },
              children: (e) =>
                  (0, r.jsx)(s.Clickable, {
                      ...e,
                      onContextMenu: (t) => {
                          t.preventDefault(), e.onClick(t);
                      },
                      className: a()(E.contextMenu, h),
                      children: (0, r.jsx)(s.MoreHorizontalIcon, {
                          color: s.tokens.colors.INTERACTIVE_NORMAL,
                          size: 'xs'
                      })
                  })
          });
}
