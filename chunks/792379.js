n.d(t, {
  Z: function() {
return L;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(597312),
  s = n(727637),
  r = n(410030),
  o = n(100527),
  c = n(906732),
  d = n(580552),
  u = n(680295),
  h = n(5192),
  p = n(785717),
  m = n(318661),
  _ = n(78675),
  f = n(741308),
  E = n(588822),
  C = n(899007),
  g = n(900927),
  I = n(678738),
  x = n(502762),
  T = n(530),
  v = n(256059),
  N = n(679332),
  S = n(544989),
  Z = n(171368),
  A = n(308829),
  M = n(228168),
  b = n(689938),
  R = n(642402),
  j = n(790884);

function L(e) {
  let {
user: t,
channel: n
  } = e, L = __OVERLAY__ || !(0, d.Z)(t.id), {
analyticsLocations: P
  } = (0, c.ZP)(o.Z.PROFILE_PANEL), O = (0, m.ZP)(t.id), y = (0, r.ZP)(), D = a.useRef(null), k = (0, s.Z)(D), U = e => {
(0, Z.openUserProfileModal)({
  sourceAnalyticsLocations: P,
  userId: t.id,
  channelId: n.id,
  ...e
});
  };
  return (0, i.jsx)(c.Gt, {
value: P,
children: (0, i.jsx)(p.Mt, {
  layout: 'SIMPLIFIED_DM_PANEL',
  userId: t.id,
  channelId: n.id,
  children: (0, i.jsxs)(x.Z, {
    ref: D,
    user: t,
    displayProfile: O,
    profileType: M.y0.PANEL,
    themeOverride: y,
    className: R.container,
    children: [
      (0, i.jsxs)(l.u2, {
        children: [
          (0, i.jsx)(S.Z, {
            profileType: M.y0.PANEL,
            children: (0, i.jsx)(N.Z, {
              user: t
            })
          }),
          (0, i.jsxs)('header', {
            className: R.header,
            children: [
              (0, i.jsx)(_.Z, {
                user: t,
                displayProfile: O,
                profileType: M.y0.PANEL,
                animateOnHover: !k
              }),
              (0, i.jsx)(C.Z, {
                user: t,
                displayProfile: O,
                channelId: n.id,
                profileType: M.y0.PANEL,
                onOpenProfile: L ? void 0 : U
              }),
              (0, i.jsx)(v.Z, {
                user: t
              })
            ]
          }),
          (0, i.jsxs)('div', {
            className: j.body,
            children: [
              (0, i.jsx)(T.Z, {
                user: t,
                profileType: M.y0.PANEL,
                nickname: h.ZP.getName(null, n.id, t),
                pronouns: null == O ? void 0 : O.pronouns,
                onOpenProfile: L ? void 0 : U,
                tags: (0, i.jsx)(f.Z, {
                  displayProfile: O,
                  profileType: M.y0.PANEL
                })
              }),
              (0, i.jsxs)(x.Z.Overlay, {
                className: j.overlay,
                children: [
                  (0, i.jsx)(I.Z, {
                    title: b.Z.Messages.USER_POPOUT_ABOUT_ME,
                    headingColor: 'header-primary',
                    children: (0, i.jsx)(E.Z, {
                      userBio: null == O ? void 0 : O.bio,
                      userId: t.id,
                      animateOnHover: !0,
                      isHovering: k
                    })
                  }),
                  (0, i.jsx)(I.Z, {
                    title: b.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                    headingColor: 'header-primary',
                    children: (0, i.jsx)(g.Z, {
                      userId: t.id
                    })
                  })
                ]
              })
            ]
          })
        ]
      }),
      (0, i.jsx)(A.Z, {
        user: t,
        channelId: n.id
      }),
      (null == O ? void 0 : O.profileEffectId) != null && (0, i.jsx)(u.Z, {
        profileEffectId: null == O ? void 0 : O.profileEffectId,
        isHovering: k
      })
    ]
  })
})
  });
}