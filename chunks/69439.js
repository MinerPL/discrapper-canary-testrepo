n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(607070),
  l = n(617136),
  o = n(113434),
  c = n(569984),
  d = n(918701),
  u = n(667105),
  _ = n(46140),
  h = n(689938),
  E = n(207637);

function m(e) {
  var t, n, m, I;
  let {
quest: g,
location: p,
onReceiveErrorHints: T,
contentPosition: S,
rowIndex: f
  } = e, C = (0, a.e7)([r.Z], () => r.Z.useReducedMotion), N = (0, u.g2)({
useReducedMotion: C
  }), A = (0, o._s)({
quest: g
  }), v = (0, o.z)(g), Z = (0, o.B6)(g.config.expiresAt, {
month: 'numeric',
day: 'numeric'
  }), {
isClaiming: L,
isEnrolling: O
  } = (0, a.cj)([c.Z], () => ({
isClaiming: c.Z.isClaimingReward(g.id) || c.Z.isFetchingRewardCode(g.id),
isEnrolling: c.Z.isEnrolling(g.id)
  })), R = (null === (t = g.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, x = (null === (n = g.userStatus) || void 0 === n ? void 0 : n.completedAt) != null, b = x && (null === (m = g.userStatus) || void 0 === m ? void 0 : m.claimedAt) == null, P = (0, d.iQ)(g), M = !(0, d.zi)(g), D = (0, o._Q)(g), y = (0, d.zK)(g, _.S7.IN_HOUSE_CONSOLE_QUEST), j = (0, d.zK)(g, _.S7.MOBILE_CONSOLE_QUEST), U = (0, d.Xv)(g.config), {
text: G,
onClick: k
  } = (0, u.Ks)({
progressState: D,
quest: g,
isInHouseQuest: y,
location: p,
isCollectibleQuest: U,
questContentPosition: S,
questContentRowIndex: f,
inGiftInventory: !0
  }), {
startingConsoleQuest: w,
startConsoleQuest: B
  } = (0, o.GI)({
questId: g.id,
beforeRequest: () => {
  N.startAnimation(), (0, l._3)({
    questId: g.id,
    questContent: p,
    questContentCTA: l.jZ.DEFIBRILLATOR,
    questContentPosition: S,
    questContentRowIndex: f
  });
},
afterRequest: e => {
  N.stopAnimation(), T(e);
}
  }), H = (null === (I = g.userStatus) || void 0 === I ? void 0 : I.claimedAt) != null, V = null;
  return (P && b ? V = (0, i.jsx)(s.Button, {
color: s.ButtonColors.BRAND,
submitting: L,
onClick: null != k ? k : void 0,
className: E.button,
children: G
  }) : x ? V = (0, i.jsx)(s.Button, {
color: s.ButtonColors.BRAND,
className: E.button,
onClick: null != k ? k : void 0,
children: G
  }) : M ? M && b ? V = (0, i.jsx)(s.Button, {
color: s.ButtonColors.BRAND,
submitting: L,
onClick: null != k ? k : void 0,
className: E.button,
children: G
  }) : M && R && !H ? V = j && !v ? A ? (0, i.jsx)(s.Button, {
color: s.ButtonColors.PRIMARY,
className: E.button,
onClick: null != k ? k : void 0,
children: G
  }) : (0, i.jsx)(s.Button, {
color: s.ButtonColors.PRIMARY,
onClick: B,
disabled: w,
className: E.button,
children: (0, i.jsxs)('div', {
  className: E.ctaInner,
  children: [
    N.render(),
    h.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
  ]
})
  }) : (0, i.jsx)(s.Button, {
color: s.ButtonColors.PRIMARY,
disabled: !0,
className: E.button,
children: h.Z.Messages.QUEST_ACCEPTED
  }) : M && !R && (V = (0, i.jsx)(s.Button, {
submitting: O,
color: s.ButtonColors.BRAND,
onClick: null != k ? k : void 0,
className: E.button,
children: G
  })) : V = (0, i.jsx)(s.Button, {
color: s.ButtonColors.PRIMARY,
disabled: !0,
className: E.button,
children: h.Z.Messages.QUESTS_ENDED_ON_DATE.format({
  expiryDate: Z
})
  }), null == V) ? null : (0, i.jsx)('div', {
className: E.container,
children: V
  });
}