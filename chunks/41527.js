i.d(n, {
  Z: function() {
return R;
  }
}), i(47120);
var s = i(735250);
i(470079);
var l = i(481060),
  o = i(100527),
  t = i(906732),
  r = i(5192),
  a = i(785717),
  d = i(318661),
  c = i(78675),
  u = i(741308),
  I = i(899007),
  _ = i(438163),
  f = i(681837),
  E = i(502762),
  m = i(530),
  S = i(645410),
  Z = i(437758),
  x = i(666665),
  v = i(544989),
  h = i(934861),
  p = i(616140),
  T = i(29530),
  g = i(228168),
  N = i(981631),
  C = i(689938),
  j = i(984904),
  A = i(505451);

function R(e) {
  let {
user: n,
currentUser: i,
guildId: R,
channelId: O,
messageId: U,
roleId: M,
initialSection: L,
initialSubsection: P,
transitionState: b,
onClose: y,
sourceAnalyticsLocations: D = []
  } = e, F = R === N.ME ? void 0 : R, B = (0, d.ZP)(n.id, F), {
analyticsLocations: G
  } = (0, t.ZP)([
...D,
o.Z.SIMPLIFIED_PROFILE_MODAL
  ]), w = (0, T.Z)(n);
  return (0, s.jsx)(t.Gt, {
value: G,
children: (0, s.jsx)(a.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: n.id,
  guildId: F,
  channelId: O,
  messageId: U,
  roleId: M,
  showGuildProfile: !0,
  children: (0, s.jsx)(l.ModalRoot, {
    transitionState: b,
    className: A.root,
    hideShadow: !0,
    'aria-label': C.Z.Messages.USER_PROFILE_MODAL,
    children: (0, s.jsxs)(E.Z, {
      user: n,
      displayProfile: B,
      profileType: g.y0.FULL_SIZE,
      children: [
        (0, s.jsx)(v.Z, {
          profileType: g.y0.FULL_SIZE,
          children: (0, s.jsx)(Z.Z, {
            user: n,
            guildId: F
          })
        }),
        (0, s.jsxs)('header', {
          children: [
            (0, s.jsx)(c.Z, {
              user: n,
              displayProfile: B,
              profileType: g.y0.FULL_SIZE,
              hasProfileEffect: (null == B ? void 0 : B.profileEffectId) != null
            }),
            (0, s.jsxs)('div', {
              className: A.headerInner,
              children: [
                (0, s.jsx)(I.Z, {
                  user: n,
                  displayProfile: B,
                  guildId: F,
                  channelId: O,
                  profileType: g.y0.FULL_SIZE
                }),
                (0, s.jsxs)('div', {
                  className: j.buttons,
                  children: [
                    (0, s.jsx)(x.V, {
                      user: n,
                      guildId: F
                    }),
                    (0, s.jsx)(S.Z, {
                      user: n
                    }),
                    (0, s.jsx)(h.c, {
                      userId: n.id,
                      onClose: y
                    })
                  ]
                }),
                (0, s.jsx)(_.Z, {
                  user: n,
                  profileType: g.y0.FULL_SIZE,
                  hasEntered: b === l.ModalTransitionState.ENTERED,
                  onClose: y
                })
              ]
            })
          ]
        }),
        (0, s.jsxs)('div', {
          className: A.body,
          children: [
            (0, s.jsx)(m.Z, {
              user: n,
              profileType: g.y0.FULL_SIZE,
              nickname: r.ZP.getName(F, O, n),
              pronouns: null == B ? void 0 : B.pronouns,
              nicknameVariant: 'heading-xl/bold',
              nicknameIcons: (0, s.jsx)(f.Z, {
                userId: n.id
              }),
              tags: (0, s.jsx)(u.Z, {
                displayProfile: B,
                profileType: g.y0.FULL_SIZE,
                onClose: y
              })
            }),
            (0, s.jsx)(E.Z.Overlay, {
              className: A.overlay,
              children: (0, s.jsx)(p.Z, {
                user: n,
                currentUser: i,
                displayProfile: B,
                items: w,
                initialSection: null != L ? L : g.oh.BOT_INFO,
                initialSubsection: P,
                onClose: y
              })
            })
          ]
        })
      ]
    })
  })
})
  });
}