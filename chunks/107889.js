i.d(s, {
  Z: function() {
return P;
  }
}), i(47120);
var n = i(735250),
  l = i(470079),
  t = i(442837),
  o = i(481060),
  a = i(727637),
  r = i(58540),
  d = i(100527),
  c = i(906732),
  u = i(54994),
  I = i(680295),
  _ = i(699516),
  f = i(5192),
  m = i(785717),
  E = i(481046),
  v = i(910128),
  S = i(318661),
  x = i(78675),
  Z = i(113557),
  h = i(169979),
  p = i(502762),
  T = i(544989),
  g = i(481932),
  N = i(195387),
  j = i(272510),
  C = i(171368),
  A = i(900687),
  R = i(806926),
  M = i(228168),
  U = i(981631),
  L = i(689938),
  O = i(505451);

function P(e) {
  let {
user: s,
currentUser: i,
guildId: P,
channelId: b,
messageId: y,
roleId: D,
friendToken: F,
initialSection: B,
initialSubsection: G,
transitionState: w,
onClose: k,
showGuildProfile: Y = !0,
sourceAnalyticsLocations: V = []
  } = e, H = P === U.ME ? void 0 : P, {
analyticsLocations: W
  } = (0, c.ZP)([
...V,
d.Z.SIMPLIFIED_PROFILE_MODAL
  ]), z = (0, m.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
guildId: H,
channelId: b,
messageId: y,
roleId: D,
showGuildProfile: Y
  }), {
profileStatusEditEnabled: K
  } = (0, E.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: q,
activeInviteToCallCtaEnabled: J
  } = (0, v.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), [Q, X] = l.useState(), $ = e => {
X(e);
  }, ee = (0, S.ZP)(s.id, Y ? H : void 0), es = (0, S.ZP)(s.id, H), ei = (0, t.e7)([_.Z], () => _.Z.getRelationshipType(s.id)), en = l.useMemo(() => null != H ? {
[H]: [s.id]
  } : {}, [
H,
s.id
  ]);
  (0, r.$)(en), (0, u.Z)(s);
  let el = l.createRef(),
et = (0, a.Z)(el),
eo = () => (null == es ? void 0 : es.guildId) == null ? null : (null == ee ? void 0 : ee.guildId) != null ? (0, n.jsx)(o.MenuItem, {
  id: 'view-main-profile',
  label: L.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: L.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: f.ZP.getName(void 0, void 0, s)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: W
    }), k(), (0, C.openUserProfileModal)({
      userId: s.id,
      showGuildProfile: !1,
      guildId: H,
      channelId: b,
      messageId: y,
      roleId: D,
      friendToken: F,
      sourceAnalyticsLocations: V
    });
  }
}) : (0, n.jsx)(o.MenuItem, {
  id: 'view-server-profile',
  label: L.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: L.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: f.ZP.getName(H, b, s)
  }),
  action: () => {
    z({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: W
    }), k(), (0, C.openUserProfileModal)({
      userId: s.id,
      showGuildProfile: !0,
      guildId: H,
      channelId: b,
      messageId: y,
      roleId: D,
      friendToken: F,
      sourceAnalyticsLocations: V
    });
  }
});
  return (0, n.jsx)(c.Gt, {
value: W,
children: (0, n.jsx)(m.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: s.id,
  guildId: H,
  channelId: b,
  messageId: y,
  roleId: D,
  showGuildProfile: Y,
  children: (0, n.jsxs)(o.ModalRoot, {
    transitionState: w,
    className: O.root,
    hideShadow: !0,
    'aria-label': L.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, n.jsxs)(p.Z, {
        user: s,
        displayProfile: ee,
        profileType: M.y0.FULL_SIZE,
        ref: el,
        children: [
          (0, n.jsxs)(T.Z, {
            profileType: M.y0.FULL_SIZE,
            children: [
              (0, n.jsx)(N.Z, {
                user: s,
                guildId: H,
                channelId: b,
                onClose: k
              }),
              (0, n.jsx)(g.Z, {
                profileType: M.y0.FULL_SIZE,
                user: s,
                friendToken: F
              }),
              (0, n.jsx)(j.Z, {
                user: s,
                guildId: H,
                viewProfileItem: eo()
              })
            ]
          }),
          (0, n.jsxs)('header', {
            children: [
              (0, n.jsx)(x.Z, {
                user: s,
                displayProfile: ee,
                profileType: M.y0.FULL_SIZE,
                hasProfileEffect: (null == ee ? void 0 : ee.profileEffectId) != null
              }),
              (0, n.jsxs)('div', {
                className: O.headerInner,
                children: [
                  (0, n.jsx)(Z.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: ee,
                    guildId: H,
                    channelId: b,
                    profileType: M.y0.FULL_SIZE,
                    showReplyPopout: Q === M.N9.AVATAR,
                    onReply: $
                  }),
                  (0, n.jsx)(A.Z, {
                    user: s,
                    isCurrentUser: s.id === i.id,
                    guildId: H,
                    relationshipType: ei,
                    persistentCallCtaEnabled: q,
                    activeInviteToCallCtaEnabled: J,
                    viewProfileItem: eo(),
                    onClose: k
                  }),
                  (0, n.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    guildId: H,
                    channelId: b,
                    profileType: M.y0.FULL_SIZE,
                    editEnabled: K,
                    hasEntered: w === o.ModalTransitionState.ENTERED,
                    showReplyPopout: Q === M.N9.STATUS,
                    onReply: $,
                    onClose: k
                  })
                ]
              })
            ]
          }),
          (0, n.jsx)(R.Z, {
            user: s,
            currentUser: i,
            channelId: b,
            displayProfile: ee,
            initialSection: B,
            initialSubsection: G,
            friendToken: F,
            onClose: k
          })
        ]
      }),
      (null == ee ? void 0 : ee.profileEffectId) != null && (0, n.jsx)(I.Z, {
        profileEffectId: null == ee ? void 0 : ee.profileEffectId,
        isHovering: et
      })
    ]
  })
})
  });
}