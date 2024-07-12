i.d(n, {
  Z: function() {
return P;
  }
}), i(47120);
var s = i(735250),
  l = i(470079),
  o = i(442837),
  t = i(481060),
  r = i(727637),
  a = i(100527),
  d = i(906732),
  c = i(680295),
  u = i(699516),
  I = i(5192),
  _ = i(785717),
  f = i(481046),
  E = i(910128),
  m = i(642113),
  S = i(718107),
  Z = i(318661),
  x = i(78675),
  v = i(899007),
  h = i(438163),
  p = i(502762),
  T = i(544989),
  g = i(481932),
  N = i(195387),
  C = i(272510),
  j = i(171368),
  A = i(900687),
  R = i(806926),
  O = i(228168),
  U = i(981631),
  M = i(689938),
  L = i(505451);

function P(e) {
  let {
user: n,
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
showGuildProfile: V = !0,
sourceAnalyticsLocations: Y = []
  } = e, H = P === U.ME ? void 0 : P, {
analyticsLocations: W
  } = (0, d.ZP)([
...Y,
a.Z.SIMPLIFIED_PROFILE_MODAL
  ]), z = (0, _.Q1)({
layout: 'SIMPLIFIED_MODAL',
userId: n.id,
guildId: H,
channelId: b,
messageId: y,
roleId: D,
showGuildProfile: V
  }), {
originalFriendingEnabled: K,
improvedFriendingEnabled: q
  } = (0, m.V)({
location: 'SimplifiedUserProfileModal'
  }), {
profileStatusEditEnabled: Q
  } = (0, f.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
statusReactReplyEnabled: J
  } = (0, S.t)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: X,
activeInviteToCallCtaEnabled: $
  } = (0, E.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), ee = (0, Z.ZP)(n.id, V ? H : void 0), en = (0, Z.ZP)(n.id, H), ei = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(n.id)), es = l.createRef(), el = (0, r.Z)(es), eo = () => (null == en ? void 0 : en.guildId) == null ? null : (null == ee ? void 0 : ee.guildId) != null ? (0, s.jsx)(t.MenuItem, {
id: 'view-main-profile',
label: M.Z.Messages.VIEW_MAIN_PROFILE,
subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
  displayName: I.ZP.getName(void 0, void 0, n)
}),
action: () => {
  z({
    action: 'PRESS_VIEW_MAIN_PROFILE',
    analyticsLocations: W
  }), k(), (0, j.openUserProfileModal)({
    userId: n.id,
    showGuildProfile: !1,
    guildId: H,
    channelId: b,
    messageId: y,
    roleId: D,
    friendToken: F,
    sourceAnalyticsLocations: Y
  });
}
  }) : (0, s.jsx)(t.MenuItem, {
id: 'view-server-profile',
label: M.Z.Messages.VIEW_SERVER_PROFILE,
subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
  displayName: I.ZP.getName(H, b, n)
}),
action: () => {
  z({
    action: 'PRESS_VIEW_SERVER_PROFILE',
    analyticsLocations: W
  }), k(), (0, j.openUserProfileModal)({
    userId: n.id,
    showGuildProfile: !0,
    guildId: H,
    channelId: b,
    messageId: y,
    roleId: D,
    friendToken: F,
    sourceAnalyticsLocations: Y
  });
}
  });
  return (0, s.jsx)(d.Gt, {
value: W,
children: (0, s.jsx)(_.Mt, {
  layout: 'SIMPLIFIED_MODAL',
  userId: n.id,
  guildId: H,
  channelId: b,
  messageId: y,
  roleId: D,
  showGuildProfile: V,
  children: (0, s.jsxs)(t.ModalRoot, {
    transitionState: w,
    className: L.root,
    hideShadow: !0,
    'aria-label': M.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, s.jsxs)(p.Z, {
        user: n,
        displayProfile: ee,
        profileType: O.y0.FULL_SIZE,
        ref: es,
        children: [
          K ? (0, s.jsx)(T.Z, {
            profileType: O.y0.FULL_SIZE,
            children: (0, s.jsx)(N.Z, {
              user: n,
              guildId: H,
              channelId: b,
              onClose: k
            })
          }) : (0, s.jsxs)(T.Z, {
            profileType: O.y0.FULL_SIZE,
            children: [
              (0, s.jsx)(N.Z, {
                user: n,
                guildId: H,
                channelId: b,
                onClose: k
              }),
              (0, s.jsx)(g.Z, {
                profileType: O.y0.FULL_SIZE,
                user: n,
                friendToken: F
              }),
              (0, s.jsx)(C.Z, {
                user: n,
                guildId: H,
                viewProfileItem: eo()
              })
            ]
          }),
          (0, s.jsxs)('header', {
            children: [
              (0, s.jsx)(x.Z, {
                user: n,
                displayProfile: ee,
                profileType: O.y0.FULL_SIZE,
                hasProfileEffect: (null == ee ? void 0 : ee.profileEffectId) != null
              }),
              (0, s.jsxs)('div', {
                className: L.headerInner,
                children: [
                  (0, s.jsx)(v.Z, {
                    user: n,
                    displayProfile: ee,
                    guildId: H,
                    channelId: b,
                    profileType: O.y0.FULL_SIZE
                  }),
                  (0, s.jsx)(A.Z, {
                    user: n,
                    isCurrentUser: n.id === i.id,
                    guildId: H,
                    relationshipType: ei,
                    originalFriendingEnabled: K,
                    improvedFriendingEnabled: q,
                    persistentCallCtaEnabled: X,
                    activeInviteToCallCtaEnabled: $,
                    viewProfileItem: eo(),
                    onClose: k
                  }),
                  (0, s.jsx)(h.Z, {
                    user: n,
                    profileType: O.y0.FULL_SIZE,
                    editEnabled: Q,
                    reactReplyEnabled: J,
                    hasEntered: w === t.ModalTransitionState.ENTERED,
                    onClose: k
                  })
                ]
              })
            ]
          }),
          (0, s.jsx)(R.Z, {
            user: n,
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
      (null == ee ? void 0 : ee.profileEffectId) != null && (0, s.jsx)(c.Z, {
        profileEffectId: null == ee ? void 0 : ee.profileEffectId,
        isHovering: el
      })
    ]
  })
})
  });
}