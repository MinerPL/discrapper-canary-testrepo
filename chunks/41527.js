n.d(s, {
  Z: function() {
return R;
  }
}), n(47120);
var i = n(735250);
n(470079);
var t = n(481060),
  l = n(100527),
  o = n(906732),
  a = n(5192),
  r = n(785717),
  d = n(318661),
  c = n(78675),
  u = n(741308),
  _ = n(899007),
  I = n(438163),
  f = n(681837),
  E = n(502762),
  m = n(530),
  S = n(645410),
  x = n(437758),
  v = n(357836),
  Z = n(544989),
  h = n(934861),
  p = n(616140),
  T = n(29530),
  g = n(228168),
  N = n(981631),
  C = n(689938),
  j = n(612309),
  A = n(392214);

function R(e) {
  let {
user: s,
currentUser: n,
guildId: R,
channelId: O,
messageId: L,
roleId: M,
sessionId: U,
initialSection: b,
initialSubsection: P,
transitionState: y,
onClose: D,
sourceAnalyticsLocations: F = []
  } = e, B = R === N.ME ? void 0 : R, G = (0, d.ZP)(s.id, B), {
analyticsLocations: w
  } = (0, o.ZP)([
...F,
l.Z.SIMPLIFIED_PROFILE_MODAL
  ]), k = (0, r.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
sourceSessionId: U,
guildId: B,
channelId: O,
messageId: L,
roleId: M
  }), V = (0, T.Z)(s);
  return (0, i.jsx)(o.Gt, {
value: w,
children: (0, i.jsx)(r.Mt, {
  value: k,
  children: (0, i.jsx)(t.ModalRoot, {
    transitionState: y,
    className: A.root,
    hideShadow: !0,
    'aria-label': C.Z.Messages.USER_PROFILE_MODAL,
    children: (0, i.jsxs)(E.Z, {
      user: s,
      displayProfile: G,
      profileType: g.y0.FULL_SIZE,
      children: [
        (0, i.jsx)(Z.Z, {
          profileType: g.y0.FULL_SIZE,
          children: (0, i.jsx)(x.Z, {
            user: s,
            guildId: B
          })
        }),
        (0, i.jsxs)('header', {
          children: [
            (0, i.jsx)(c.Z, {
              user: s,
              displayProfile: G,
              profileType: g.y0.FULL_SIZE,
              hasProfileEffect: (null == G ? void 0 : G.profileEffectId) != null
            }),
            (0, i.jsxs)('div', {
              className: A.headerInner,
              children: [
                (0, i.jsx)(_.Z, {
                  user: s,
                  displayProfile: G,
                  guildId: B,
                  channelId: O,
                  profileType: g.y0.FULL_SIZE
                }),
                (0, i.jsxs)('div', {
                  className: j.buttons,
                  children: [
                    (0, i.jsx)(h.c, {
                      userId: s.id,
                      onClose: D,
                      className: j.messageTextButton
                    }),
                    (0, i.jsx)(h.v, {
                      userId: s.id,
                      onClose: D,
                      tooltipContainerClassName: j.messageIconButton
                    }),
                    (0, i.jsx)(v.Z, {
                      user: s,
                      guildId: B
                    }),
                    (0, i.jsx)(S.Z, {
                      user: s
                    })
                  ]
                }),
                (0, i.jsx)(I.Z, {
                  user: s,
                  profileType: g.y0.FULL_SIZE,
                  hasEntered: y === t.ModalTransitionState.ENTERED,
                  onClose: D
                })
              ]
            })
          ]
        }),
        (0, i.jsxs)('div', {
          className: A.body,
          children: [
            (0, i.jsx)(m.Z, {
              user: s,
              profileType: g.y0.FULL_SIZE,
              nickname: a.ZP.getName(B, O, s),
              pronouns: null == G ? void 0 : G.pronouns,
              nicknameVariant: 'heading-xl/bold',
              nicknameIcons: (0, i.jsx)(f.Z, {
                userId: s.id
              }),
              tags: (0, i.jsx)(u.Z, {
                displayProfile: G,
                profileType: g.y0.FULL_SIZE,
                onClose: D
              })
            }),
            (0, i.jsx)(E.Z.Overlay, {
              className: A.overlay,
              children: (0, i.jsx)(p.Z, {
                user: s,
                currentUser: n,
                displayProfile: G,
                items: V,
                initialSection: null != b ? b : g.oh.BOT_INFO,
                initialSubsection: P,
                onClose: D
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