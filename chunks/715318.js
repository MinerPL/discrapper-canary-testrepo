t.d(n, {
    Z: function () {
        return c;
    }
});
var a = t(735250);
t(470079);
var r = t(481060),
    s = t(239091),
    i = t(299206),
    o = t(326103),
    l = t(689938);
function c(e) {
    let { applicationId: n, className: c, viewId: d } = e,
        u = (0, o.v)('GameProfileOverflowMenu'),
        _ = (0, i.Z)({
            id: n,
            label: l.Z.Messages.COPY_ID_APPLICATION
        }),
        E = u
            ? (0, a.jsx)(r.MenuItem, {
                  id: 'game-profile-something-wrong',
                  label: l.Z.Messages.GAME_PROFILE_SOMETHING_WENT_WRONG,
                  action: () =>
                      (0, r.openModalLazy)(async () => {
                          let e = (await t.e('46923').then(t.bind(t, 55396))).default;
                          return (t) =>
                              (0, a.jsx)(e, {
                                  applicationId: n,
                                  viewId: d,
                                  ...t
                              });
                      })
              })
            : null;
    return null == _ && null == E
        ? null
        : (0, a.jsx)(r.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: n } = e;
                  return (0, a.jsx)(r.Menu, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, s.Zy)(), n();
                      },
                      'aria-label': l.Z.Messages.GAME_PROFILE_VIEW_MORE,
                      onSelect: () => {},
                      children: (0, a.jsxs)(a.Fragment, {
                          children: [(0, a.jsx)(r.MenuGroup, { children: _ }), (0, a.jsx)(r.MenuGroup, { children: E })]
                      })
                  });
              },
              children: (e) =>
                  (0, a.jsx)(r.Tooltip, {
                      text: l.Z.Messages.MORE,
                      children: (n) =>
                          (0, a.jsx)(r.Clickable, {
                              className: c,
                              ...n,
                              ...e,
                              children: (0, a.jsx)(r.MoreHorizontalIcon, {
                                  size: 'xs',
                                  color: r.tokens.colors.WHITE
                              })
                          })
                  })
          });
}
