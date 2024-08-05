n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(597312),
  l = n(410030),
  r = n(100527),
  o = n(906732),
  c = n(785717),
  u = n(318661),
  d = n(502762),
  h = n(475413),
  p = n(228168),
  m = n(689938),
  _ = n(833802),
  f = n(321975);

function E(e) {
  let {
user: t,
channel: n,
onViewBlockedProfileClick: E
  } = e, g = n.id, C = (0, c.Q1)({
layout: 'BLOCKED_PROFILE_PANEL',
userId: t.id,
channelId: g
  }), {
analyticsLocations: I
  } = (0, o.ZP)(r.Z.BLOCKED_PROFILE_PANEL), x = (0, u.ZP)(t.id), T = (0, l.ZP)(), N = a.useRef(null);
  return (0, i.jsx)(o.Gt, {
value: I,
children: (0, i.jsx)(c.Mt, {
  layout: 'BLOCKED_PROFILE_PANEL',
  userId: t.id,
  channelId: n.id,
  children: (0, i.jsx)(d.Z, {
    ref: N,
    user: t,
    displayProfile: x,
    profileType: p.y0.PANEL,
    themeOverride: T,
    className: _.container,
    children: (0, i.jsx)(s.u2, {
      children: (0, i.jsxs)('div', {
        className: _.container,
        children: [
          (0, i.jsx)('img', {
            alt: '',
            src: f,
            className: _.previewForCollected,
            'aria-hidden': !0
          }),
          (0, i.jsx)(h.tG, {
            className: _.centeredButton,
            action: 'VIEW_BLOCKED_PROFILE',
            text: m.Z.Messages.VIEW_PROFILE,
            autoFocus: !0,
            fullWidth: !1,
            onClick: () => {
              null == E || E(), C({
                action: 'VIEW_BLOCKED_PROFILE',
                analyticsLocations: I
              });
            }
          })
        ]
      })
    })
  })
})
  });
}