n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(239091),
    l = n(299206),
    o = n(858042),
    s = n(388032);
function c(e) {
    let { applicationId: t, className: n, viewId: c } = e,
        d = (0, l.Z)({
            id: t,
            label: s.intl.string(s.t['FfCL+/'])
        }),
        u = (0, o.M)({
            applicationId: t,
            viewId: c
        });
    return null == d && null == u
        ? null
        : (0, r.jsx)(i.Popout, {
              align: 'top',
              position: 'right',
              disablePointerEvents: !1,
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, r.jsx)(i.Menu, {
                      navId: 'game-profile-context',
                      onClose: () => {
                          (0, a.Zy)(), t();
                      },
                      'aria-label': s.intl.string(s.t.PNeFgY),
                      onSelect: () => {},
                      children: (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(i.MenuGroup, { children: d }), (0, r.jsx)(i.MenuGroup, { children: u })]
                      })
                  });
              },
              children: (e) =>
                  (0, r.jsx)(i.Tooltip, {
                      text: s.intl.string(s.t.UKOtz8),
                      children: (t) =>
                          (0, r.jsx)(i.Clickable, {
                              className: n,
                              ...t,
                              ...e,
                              children: (0, r.jsx)(i.MoreHorizontalIcon, {
                                  size: 'xs',
                                  color: i.tokens.colors.WHITE
                              })
                          })
                  })
          });
}
