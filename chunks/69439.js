n.d(t, {
  Z: function() {
return E;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(617136),
  l = n(272008),
  o = n(497505),
  c = n(918701),
  d = n(667105),
  u = n(689938),
  _ = n(207637);

function h(e) {
  let {
onClick: t
  } = e;
  return (0, i.jsx)('div', {
className: _.container,
children: (0, i.jsx)(a.Button, {
  color: a.ButtonColors.BRAND,
  onClick: t,
  className: _.button,
  children: u.Z.Messages.QUESTS_CLAIM_REWARD
})
  });
}

function E(e) {
  var t, n, E, I;
  let {
quest: m
  } = e, g = (null === (t = m.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, p = (null === (n = m.userStatus) || void 0 === n ? void 0 : n.completedAt) != null && (null === (E = m.userStatus) || void 0 === E ? void 0 : E.claimedAt) == null, T = (0, c.iQ)(m), S = !(0, c.zi)(m), C = (null === (I = m.userStatus) || void 0 === I ? void 0 : I.claimedAt) != null, f = (0, d.hf)({
quest: m,
location: o.jn.QUEST_BAR
  }), N = s.useCallback(() => {
(0, l.AH)(m.id, {
  questContent: o.jn.QUEST_HOME_DESKTOP,
  questContentCTA: r.jZ.ACCEPT_QUEST
});
  }, [m]);
  return T && p || S && p ? (0, i.jsx)(h, {
onClick: f
  }) : S && g && !C ? (0, i.jsx)('div', {
className: _.container,
children: (0, i.jsx)(a.Button, {
  color: a.ButtonColors.PRIMARY,
  disabled: !0,
  className: _.button,
  children: u.Z.Messages.QUEST_ACCEPTED
})
  }) : S && !g ? (0, i.jsx)('div', {
className: _.container,
children: (0, i.jsx)(a.Button, {
  color: a.ButtonColors.BRAND,
  onClick: N,
  className: _.button,
  children: u.Z.Messages.QUESTS_ACCEPT
})
  }) : null;
}