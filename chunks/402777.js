n.d(t, {
  Z: function() {
return R;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(597312),
  s = n(727637),
  r = n(410030),
  o = n(100527),
  c = n(906732),
  d = n(680295),
  u = n(785717),
  h = n(718107),
  p = n(318661),
  m = n(78675),
  _ = n(899007),
  f = n(438163),
  E = n(502762),
  C = n(256059),
  g = n(437758),
  I = n(544989),
  x = n(481932),
  T = n(272510),
  v = n(171368),
  N = n(926150),
  S = n(308829),
  Z = n(940885),
  A = n(625015),
  M = n(228168),
  b = n(642402);

function R(e) {
  let {
user: t,
channel: n
  } = e, R = __OVERLAY__, {
analyticsLocations: j
  } = (0, c.ZP)(o.Z.PROFILE_PANEL), L = (0, p.ZP)(t.id), P = (0, r.ZP)(), {
statusReactReplyEnabled: O
  } = (0, h.t)({
location: 'SimplifiedProfilePanel'
  }), y = a.useRef(null), D = (0, s.Z)(y), k = e => {
(0, v.openUserProfileModal)({
  sourceAnalyticsLocations: j,
  userId: t.id,
  channelId: n.id,
  ...e
});
  };
  return (0, i.jsx)(c.Gt, {
value: j,
children: (0, i.jsx)(u.Mt, {
  layout: 'SIMPLIFIED_DM_PANEL',
  userId: t.id,
  channelId: n.id,
  children: (0, i.jsxs)(E.Z, {
    ref: y,
    user: t,
    displayProfile: L,
    profileType: M.y0.PANEL,
    themeOverride: P,
    className: b.container,
    children: [
      (0, i.jsxs)(l.u2, {
        children: [
          (0, i.jsxs)(I.Z, {
            profileType: M.y0.PANEL,
            children: [
              (0, i.jsx)(x.Z, {
                user: t,
                profileType: M.y0.PANEL
              }),
              t.bot ? (0, i.jsx)(g.Z, {
                user: t
              }) : (0, i.jsx)(T.Z, {
                user: t
              })
            ]
          }),
          (0, i.jsxs)('header', {
            className: b.header,
            children: [
              (0, i.jsx)(m.Z, {
                user: t,
                displayProfile: L,
                profileType: M.y0.PANEL,
                animateOnHover: !D
              }),
              (0, i.jsx)(_.Z, {
                user: t,
                displayProfile: L,
                channelId: n.id,
                profileType: M.y0.PANEL,
                onOpenProfile: R ? void 0 : k
              }),
              (0, i.jsx)(f.Z, {
                user: t,
                profileType: M.y0.PANEL,
                reactReplyEnabled: O
              }),
              (0, i.jsx)(C.Z, {
                user: t
              })
            ]
          }),
          (0, i.jsx)(N.Z, {
            user: t,
            displayProfile: L,
            channel: n,
            isHovering: D,
            onOpenProfile: R ? void 0 : k
          }),
          (0, i.jsx)(Z.Z, {
            user: t,
            channelId: n.id
          }),
          (0, i.jsx)(A.Z, {
            user: t,
            displayProfile: L
          })
        ]
      }),
      (0, i.jsx)(S.Z, {
        user: t,
        channelId: n.id
      }),
      (null == L ? void 0 : L.profileEffectId) != null && (0, i.jsx)(d.Z, {
        profileEffectId: null == L ? void 0 : L.profileEffectId,
        isHovering: D
      })
    ]
  })
})
  });
}