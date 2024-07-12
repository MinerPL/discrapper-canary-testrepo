n.d(t, {
  Z: function() {
return C;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(481060),
  o = n(727637),
  s = n(100527),
  l = n(906732),
  u = n(580552),
  c = n(680295),
  d = n(5192),
  _ = n(785717),
  E = n(318661),
  f = n(78675),
  h = n(741308),
  p = n(588822),
  m = n(899007),
  I = n(502762),
  T = n(530),
  g = n(256059),
  S = n(679332),
  A = n(544989),
  N = n(171368),
  v = n(228168),
  O = n(689938),
  R = n(335182);

function C(e) {
  let {
user: t,
guildId: n,
channelId: C,
messageId: y,
roleId: D,
setPopoutRef: L,
closePopout: b,
disableUserProfileLink: M = __OVERLAY__,
newAnalyticsLocations: P = []
  } = e, U = (0, E.ZP)(t.id, n), {
analyticsLocations: w
  } = (0, l.ZP)([
...P,
s.Z.BITE_SIZE_PROFILE_POPOUT
  ]), x = (0, _.Q1)({
layout: 'BITE_SIZE_POPOUT',
userId: t.id,
guildId: n,
channelId: C,
messageId: y,
roleId: D
  }), G = i.useRef(null), k = (0, o.Z)(G);
  i.useEffect(() => {
null == L || L(null == G ? void 0 : G.current);
  }, [
G,
L
  ]);
  let B = () => {
  null == b || b(), (0, N.openUserProfileModal)({
    sourceAnalyticsLocations: w,
    userId: t.id,
    guildId: n,
    channelId: C,
    messageId: y,
    roleId: D
  });
},
F = !M && (0, u.Z)(t.id);
  return (0, r.jsx)(l.Gt, {
value: w,
children: (0, r.jsx)(_.Mt, {
  layout: 'BITE_SIZE_POPOUT',
  userId: t.id,
  guildId: n,
  channelId: C,
  messageId: y,
  roleId: D,
  children: (0, r.jsxs)(a.Dialog, {
    ref: G,
    'aria-label': t.username,
    children: [
      (0, r.jsxs)(I.Z, {
        user: t,
        displayProfile: U,
        profileType: v.y0.BITE_SIZE,
        children: [
          (0, r.jsx)(A.Z, {
            profileType: v.y0.BITE_SIZE,
            children: (0, r.jsx)(S.Z, {
              user: t,
              viewProfileItem: F ? (0, r.jsx)(a.MenuItem, {
                id: 'view-profile',
                label: O.Z.Messages.VIEW_FULL_PROFILE,
                action: () => {
                  x({
                    action: 'PRESS_VIEW_PROFILE',
                    analyticsLocations: w
                  }), B();
                }
              }) : null
            })
          }),
          (0, r.jsxs)('header', {
            className: R.header,
            children: [
              (0, r.jsx)(f.Z, {
                user: t,
                displayProfile: U,
                guildId: n,
                profileType: v.y0.BITE_SIZE,
                hasProfileEffect: (null == U ? void 0 : U.profileEffectId) != null
              }),
              (0, r.jsx)(m.Z, {
                user: t,
                displayProfile: U,
                guildId: n,
                channelId: C,
                profileType: v.y0.BITE_SIZE,
                onOpenProfile: F ? B : void 0
              }),
              (0, r.jsx)(g.Z, {
                user: t
              })
            ]
          }),
          (0, r.jsxs)(a.Scroller, {
            fade: !0,
            className: R.body,
            children: [
              (0, r.jsx)(T.Z, {
                user: t,
                profileType: v.y0.BITE_SIZE,
                nickname: d.ZP.getName(n, C, t),
                onOpenProfile: F ? B : void 0,
                tags: (0, r.jsx)(h.Z, {
                  displayProfile: U,
                  profileType: v.y0.BITE_SIZE,
                  onClose: b
                })
              }),
              (0, r.jsx)(p.Z, {
                userId: t.id,
                userBio: null == U ? void 0 : U.bio,
                setLineClamp: !1,
                textColor: 'header-primary'
              })
            ]
          }),
          (0, r.jsx)('footer', {
            className: R.footer
          })
        ]
      }),
      (null == U ? void 0 : U.profileEffectId) != null && (0, r.jsx)(c.Z, {
        profileEffectId: null == U ? void 0 : U.profileEffectId,
        isHovering: k
      })
    ]
  })
})
  });
}