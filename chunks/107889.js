n.d(s, {
  Z: function() {
return P;
  }
}), n(47120);
var i = n(735250),
  t = n(470079),
  l = n(442837),
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
  S = n(910128),
  x = n(318661),
  v = n(78675),
  Z = n(113557),
  h = n(169979),
  p = n(119096),
  T = n(502762),
  g = n(544989),
  N = n(481932),
  C = n(195387),
  j = n(272510),
  A = n(171368),
  R = n(900687),
  O = n(806926),
  L = n(228168),
  M = n(981631),
  U = n(689938),
  b = n(392214);

function P(e) {
  let {
user: s,
currentUser: n,
guildId: P,
channelId: y,
messageId: D,
roleId: F,
sessionId: B,
friendToken: G,
initialSection: w,
initialSubsection: k,
transitionState: V,
onClose: Y,
showGuildProfile: H = !0,
sourceAnalyticsLocations: W = []
  } = e, z = P === M.ME ? void 0 : P, {
analyticsLocations: K
  } = (0, c.ZP)([
...W,
d.Z.SIMPLIFIED_PROFILE_MODAL
  ]), q = (0, f.ZB)({
layout: 'SIMPLIFIED_MODAL',
userId: s.id,
sourceSessionId: B,
guildId: z,
channelId: y,
messageId: D,
roleId: F,
showGuildProfile: H
  }), {
profileStatusEditEnabled: Q
  } = (0, m.K)({
location: 'SimplifiedUserProfileModalHeader'
  }), {
persistentCallCtaEnabled: J,
activeInviteToCallCtaEnabled: X
  } = (0, S.l)({
location: 'SimplifiedUserProfileModalHeader'
  }), [$, ee] = t.useState(), [es, en] = t.useState(), ei = e => {
ee(e.interactionType), en(e.interactionSourceType);
  }, et = (0, x.ZP)(s.id, H ? z : void 0), el = (0, x.ZP)(s.id, z), eo = (0, l.e7)([_.Z], () => _.Z.getRelationshipType(s.id)), ea = t.useMemo(() => null != z ? {
[z]: [s.id]
  } : {}, [
z,
s.id
  ]);
  (0, r.$)(ea);
  let er = t.createRef(),
ed = (0, a.Z)(er),
[ec, eu] = t.useState(!1),
[e_, eI] = t.useState(!1),
[ef, eE] = t.useState(!1),
em = () => (null == el ? void 0 : el.guildId) == null ? null : (null == et ? void 0 : et.guildId) != null ? (0, i.jsx)(o.MenuItem, {
  id: 'view-main-profile',
  label: U.Z.Messages.VIEW_MAIN_PROFILE,
  subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: I.ZP.getName(void 0, void 0, s)
  }),
  action: () => {
    Y(), (0, A.openUserProfileModal)({
      ...q,
      showGuildProfile: !1,
      friendToken: G,
      sourceAnalyticsLocations: W
    }), (0, E.pQ)({
      action: 'PRESS_VIEW_MAIN_PROFILE',
      analyticsLocations: K,
      ...q
    });
  }
}) : (0, i.jsx)(o.MenuItem, {
  id: 'view-server-profile',
  label: U.Z.Messages.VIEW_SERVER_PROFILE,
  subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({
    displayName: I.ZP.getName(z, y, s)
  }),
  action: () => {
    Y(), (0, A.openUserProfileModal)({
      ...q,
      showGuildProfile: !0,
      friendToken: G,
      sourceAnalyticsLocations: W
    }), (0, E.pQ)({
      action: 'PRESS_VIEW_SERVER_PROFILE',
      analyticsLocations: K,
      ...q
    });
  }
});
  return (0, i.jsx)(c.Gt, {
value: K,
children: (0, i.jsx)(f.Mt, {
  value: q,
  children: (0, i.jsxs)(o.ModalRoot, {
    transitionState: V,
    className: b.root,
    hideShadow: !0,
    'aria-label': U.Z.Messages.USER_PROFILE_MODAL,
    children: [
      (0, i.jsxs)(T.Z, {
        user: s,
        displayProfile: et,
        profileType: L.y0.FULL_SIZE,
        ref: er,
        children: [
          (0, i.jsxs)(g.Z, {
            profileType: L.y0.FULL_SIZE,
            children: [
              (0, i.jsx)(C.Z, {
                user: s,
                guildId: z,
                channelId: y,
                onClose: Y
              }),
              (0, i.jsx)(N.Z, {
                profileType: L.y0.FULL_SIZE,
                user: s,
                friendToken: G
              }),
              (0, i.jsx)(j.Z, {
                user: s,
                guildId: z,
                viewProfileItem: em()
              })
            ]
          }),
          (0, i.jsxs)('header', {
            children: [
              (0, i.jsx)(v.Z, {
                user: s,
                displayProfile: et,
                profileType: L.y0.FULL_SIZE,
                hasProfileEffect: (null == et ? void 0 : et.profileEffectId) != null
              }),
              (0, i.jsx)(p.Z, {
                isReply: ef,
                sent: e_,
                shown: ec,
                className: b.toast
              }),
              null != $ && (0, i.jsx)('div', {
                className: b.backdrop
              }),
              (0, i.jsxs)('div', {
                className: b.headerInner,
                children: [
                  (0, i.jsx)(Z.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: et,
                    guildId: z,
                    channelId: y,
                    profileType: L.y0.FULL_SIZE,
                    isInteractionSource: es === L.n_.AVATAR || es === L.n_.STATUS,
                    onInteraction: ei,
                    showReplyPopout: $ === L.P.REPLY && es === L.n_.AVATAR,
                    setInteractionToastShown: eu,
                    setInteractionSent: eI,
                    setIsReplyInteraction: eE
                  }),
                  (0, i.jsx)(R.Z, {
                    user: s,
                    isCurrentUser: s.id === n.id,
                    guildId: z,
                    relationshipType: eo,
                    persistentCallCtaEnabled: J,
                    activeInviteToCallCtaEnabled: X,
                    viewProfileItem: em(),
                    onClose: Y
                  }),
                  (0, i.jsx)(h.Z, {
                    location: 'SimplifiedUserProfileModal',
                    user: s,
                    displayProfile: et,
                    guildId: z,
                    channelId: y,
                    profileType: L.y0.FULL_SIZE,
                    editEnabled: Q,
                    hasEntered: V === o.ModalTransitionState.ENTERED,
                    isInteractionSource: es === L.n_.STATUS,
                    onInteraction: ei,
                    showReplyPopout: $ === L.P.REPLY && es === L.n_.STATUS,
                    onClose: Y,
                    setInteractionToastShown: eu,
                    setInteractionSent: eI,
                    setIsReplyInteraction: eE
                  })
                ]
              })
            ]
          }),
          (0, i.jsx)(O.Z, {
            user: s,
            currentUser: n,
            channelId: y,
            displayProfile: et,
            initialSection: w,
            initialSubsection: k,
            friendToken: G,
            onClose: Y
          })
        ]
      }),
      (null == et ? void 0 : et.profileEffectId) != null && (0, i.jsx)(u.Z, {
        profileEffectId: null == et ? void 0 : et.profileEffectId,
        isHovering: ed
      })
    ]
  })
})
  });
}