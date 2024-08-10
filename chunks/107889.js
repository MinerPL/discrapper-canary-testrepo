n.d(s, {
  Z: function() {
return b;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  t = n(442837),
  o = n(481060),
  a = n(727637),
  r = n(58540),
  d = n(100527),
  c = n(906732),
  u = n(680295),
  _ = n(699516),
  I = n(5192),
  f = n(785717),
  E = n(221292),
  m = n(481046),
  x = n(910128),
  S = n(318661),
  v = n(78675),
  Z = n(113557),
  h = n(169979),
  p = n(502762),
  T = n(544989),
  g = n(481932),
  N = n(195387),
  j = n(272510),
  C = n(171368),
  A = n(900687),
  R = n(806926),
  O = n(228168),
  L = n(981631),
  M = n(689938),
  U = n(505451);

function b(e) {
  let {
user: s,
currentUser: n,
guildId: b,
channelId: P,
messageId: y,
roleId: D,
sessionId: F,
friendToken: B,
initialSection: G,
initialSubsection: w,
transitionState: k,
onClose: V,
showGuildProfile: Y,
sourceAnalyticsLocations: W = []
  } = e, H = b === L.ME ? void 0 : b, {
analyticsLocations: z
  } = (0, c.ZP)([
...W,
d.Z.SIMPLIFIED_PROFILE_MODAL
  ]), K = (0, f.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
sourceSessionId: F,
guildId: H,
channelId: P,
messageId: y,
roleId: D,
showGuildProfile: Y
  }), {
profileStatusEditEnabled: q
  } = (0, m.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: Q,
activeInviteToCallCtaEnabled: J
  } = (0, x.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), [X, $] = l.useState(), ee = e => {
$(e);
  }, es = (0, S.ZP)(s.id, Y ? H : void 0), en = (0, S.ZP)(s.id, H), ei = (0, t.e7)([_.Z], () => _.Z.getRelationshipType(s.id)), el = l.useMemo(() => null != H ? {
[H]: [s.id]
  } : {}, [
H,
s.id
  ]);
  (0, r.$)(el);
  let et = l.createRef(),
eo = (0, a.Z)(et),
ea = () => (null == en ? void 0 : en.guildId) == null ? null : (null == es ? void 0 : es.guildId) != null ? (0, i.jsx)(o.MenuItem, {
  id: 'view-main-profile',
  label: M.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: I.ZP.getName(void 0, void 0, s)
  }),
  action: () => {
    V(), (0, C.openUserProfileModal)({
      ...K,
      showGuildProfile: !1,
      friendToken: B,
      sourceAnalyticsLocations: W
    }), (0, E.pQ)({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: z,
      ...K
    });
  }
}) : (0, i.jsx)(o.MenuItem, {
  id: 'view-server-profile',
  label: M.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: M.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: I.ZP.getName(H, P, s)
  }),
  action: () => {
    V(), (0, C.openUserProfileModal)({
      ...K,
      showGuildProfile: !0,
      friendToken: B,
      sourceAnalyticsLocations: W
    }), (0, E.pQ)({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: z,
      ...K
    });
  }
});
  return (0, i.jsx)(c.Gt, {
value: z,
children: (0, i.jsx)(f.Mt, {
  value: K,
  children: (0, i.jsxs)(o.ModalRoot, {
    transitionState: k,
    className: U.root,
    hideShadow: !0,
    'aria-label': M.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, i.jsxs)(p.Z, {
        user: s,
        displayProfile: es,
        profileType: O.y0.FULL_SIZE,
        ref: et,
        children: [
          (0, i.jsxs)(T.Z, {
            profileType: O.y0.FULL_SIZE,
            children: [
              (0, i.jsx)(N.Z, {
                user: s,
                guildId: H,
                channelId: P,
                onClose: V
              }),
              (0, i.jsx)(g.Z, {
                profileType: O.y0.FULL_SIZE,
                user: s,
                friendToken: B
              }),
              (0, i.jsx)(j.Z, {
                user: s,
                guildId: H,
                viewProfileItem: ea()
              })
            ]
          }),
          (0, i.jsxs)('header', {
            children: [
              (0, i.jsx)(v.Z, {
                user: s,
                displayProfile: es,
                profileType: O.y0.FULL_SIZE,
                hasProfileEffect: (null == es ? void 0 : es.profileEffectId) != null
              }),
              null != X && (0, i.jsx)('div', {
                className: U.backdrop
              }),
              (0, i.jsxs)('div', {
                className: U.headerInner,
                children: [
                  (0, i.jsx)(Z.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: es,
                    guildId: H,
                    channelId: P,
                    profileType: O.y0.FULL_SIZE,
                    isReplySource: X === O.N9.AVATAR || X === O.N9.STATUS,
                    onReply: ee,
                    showReplyPopout: X === O.N9.AVATAR,
                    showGuildProfile: Y
                  }),
                  (0, i.jsx)(A.Z, {
                    user: s,
                    isCurrentUser: s.id === n.id,
                    guildId: H,
                    relationshipType: ei,
                    persistentCallCtaEnabled: Q,
                    activeInviteToCallCtaEnabled: J,
                    viewProfileItem: ea(),
                    onClose: V
                  }),
                  (0, i.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    guildId: H,
                    channelId: P,
                    profileType: O.y0.FULL_SIZE,
                    editEnabled: q,
                    hasEntered: k === o.ModalTransitionState.ENTERED,
                    isReplySource: X === O.N9.STATUS,
                    onReply: ee,
                    showReplyPopout: X === O.N9.STATUS,
                    showGuildProfile: Y,
                    onClose: V
                  })
                ]
              })
            ]
          }),
          (0, i.jsx)(R.Z, {
            user: s,
            currentUser: n,
            channelId: P,
            displayProfile: es,
            initialSection: G,
            initialSubsection: w,
            friendToken: B,
            onClose: V
          })
        ]
      }),
      (null == es ? void 0 : es.profileEffectId) != null && (0, i.jsx)(u.Z, {
        profileEffectId: null == es ? void 0 : es.profileEffectId,
        isHovering: eo
      })
    ]
  })
})
  });
}