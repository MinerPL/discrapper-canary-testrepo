n.d(s, {
  Z: function() {
return R;
  }
}), n(47120);
var i = n(735250),
  t = n(470079),
  l = n(481060),
  o = n(727637),
  a = n(100527),
  r = n(906732),
  d = n(680295),
  c = n(5192),
  u = n(785717),
  _ = n(318661),
  I = n(78675),
  f = n(741308),
  E = n(588822),
  m = n(899007),
  S = n(900927),
  x = n(678738),
  v = n(502762),
  Z = n(530),
  h = n(679332),
  p = n(544989),
  T = n(228168),
  g = n(981631),
  N = n(689938),
  C = n(392214),
  j = n(408277),
  A = n(455749);

function R(e) {
  let {
user: s,
guildId: n,
channelId: R,
messageId: O,
roleId: L,
sessionId: M,
transitionState: U,
onClose: b,
sourceAnalyticsLocations: P = []
  } = e, y = n === g.ME ? void 0 : n, D = (0, _.ZP)(s.id, y), {
analyticsLocations: F
  } = (0, r.ZP)([
...P,
a.Z.SIMPLIFIED_PROFILE_MODAL
  ]), B = (0, u.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
sourceSessionId: M,
guildId: y,
channelId: R,
messageId: O,
roleId: L
  }), G = t.createRef(), w = (0, o.Z)(G);
  return (0, i.jsx)(r.Gt, {
value: F,
children: (0, i.jsx)(u.Mt, {
  value: B,
  children: (0, i.jsxs)(l.ModalRoot, {
    transitionState: U,
    className: C.root,
    hideShadow: !0,
    'aria-label': N.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, i.jsxs)(v.Z, {
        user: s,
        displayProfile: D,
        profileType: T.y0.FULL_SIZE,
        ref: G,
        children: [
          (0, i.jsx)(p.Z, {
            profileType: T.y0.FULL_SIZE,
            children: (0, i.jsx)(h.Z, {
              user: s
            })
          }),
          (0, i.jsxs)('header', {
            children: [
              (0, i.jsx)(I.Z, {
                user: s,
                displayProfile: D,
                profileType: T.y0.FULL_SIZE,
                hasProfileEffect: (null == D ? void 0 : D.profileEffectId) != null
              }),
              (0, i.jsx)('div', {
                className: C.headerInner,
                children: (0, i.jsx)(m.Z, {
                  user: s,
                  displayProfile: D,
                  guildId: y,
                  channelId: R,
                  profileType: T.y0.FULL_SIZE
                })
              })
            ]
          }),
          (0, i.jsxs)('div', {
            className: C.body,
            children: [
              (0, i.jsx)(Z.Z, {
                user: s,
                profileType: T.y0.FULL_SIZE,
                nickname: c.ZP.getName(y, R, s),
                pronouns: null == D ? void 0 : D.pronouns,
                nicknameVariant: 'heading-xl/bold',
                tags: (0, i.jsx)(f.Z, {
                  displayProfile: D,
                  profileType: T.y0.FULL_SIZE,
                  onClose: b
                })
              }),
              (0, i.jsx)(v.Z.Overlay, {
                className: C.overlay,
                children: (0, i.jsxs)('div', {
                  className: A.container,
                  children: [
                    (0, i.jsx)(l.TabBar, {
                      className: A.tabBar,
                      type: 'top',
                      selectedItem: T.oh.BOT_INFO,
                      onItemSelect: g.dG4,
                      children: (0, i.jsx)(l.TabBar.Item, {
                        className: A.tabBarItem,
                        id: T.oh.BOT_INFO,
                        'aria-label': N.Z.Messages.USER_PROFILE_ABOUT_ME,
                        children: (0, i.jsx)(l.Text, {
                          variant: 'text-sm/normal',
                          children: N.Z.Messages.USER_PROFILE_ABOUT_ME
                        })
                      }, T.oh.BOT_INFO)
                    }),
                    (0, i.jsxs)(l.ScrollerThin, {
                      fade: !0,
                      className: j.scroller,
                      children: [
                        (0, i.jsx)(E.Z, {
                          userId: s.id,
                          userBio: null == D ? void 0 : D.bio,
                          setLineClamp: !1
                        }),
                        (0, i.jsx)(x.Z, {
                          heading: N.Z.Messages.BOT_PROFILE_CREATED_ON,
                          children: (0, i.jsx)(S.Z, {
                            userId: s.id,
                            guildId: y,
                            tooltipDelay: T.vB
                          })
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        ]
      }),
      (null == D ? void 0 : D.profileEffectId) != null && (0, i.jsx)(d.Z, {
        profileEffectId: null == D ? void 0 : D.profileEffectId,
        isHovering: w
      })
    ]
  })
})
  });
}