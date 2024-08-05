n.d(t, {
  y: function() {
return C;
  }
});
var s = n(735250);
n(470079);
var o = n(481060),
  r = n(617136),
  a = n(113434),
  l = n(497505),
  i = n(918701),
  c = n(796111),
  d = n(667105),
  u = n(46140),
  p = n(689938),
  m = n(941624);
let x = e => {
let {
  quest: t
} = e;
return (0, s.jsx)('div', {
  className: m.ctaContainer,
  children: (0, s.jsx)(o.Button, {
    className: m.flex,
    size: o.Button.Sizes.SMALL,
    onClick: () => (0, i.FE)(t, {
      content: l.jn.QUEST_BAR_V2,
      ctaContent: r.jZ.OPEN_GAME_LINK
    }),
    children: p.Z.Messages.QUESTS_GET_THIS_GAME
  })
});
  },
  g = e => {
let {
  quest: t
} = e;
return (0, s.jsx)('div', {
  className: m.ctaContainer,
  children: (0, s.jsx)(o.Button, {
    fullWidth: !0,
    onClick: () => (0, i.gI)({
      quest: t,
      showInline: !1
    }, {
      content: l.jn.QUEST_BAR_V2,
      ctaContent: r.jZ.CONNECT_CONSOLE
    }),
    size: o.Button.Sizes.SMALL,
    children: p.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
  })
});
  },
  f = e => {
let {
  quest: t,
  useReducedMotion: n,
  isExpanded: r
} = e, a = (0, d.hf)({
  quest: t,
  location: l.jn.QUEST_BAR_V2
});
return (0, s.jsx)('div', {
  className: m.ctaContainer,
  children: (0, s.jsx)(o.ShinyButton, {
    fullWidth: !0,
    size: o.Button.Sizes.SMALL,
    onClick: a,
    pauseAnimation: n || !r,
    buttonShineClassName: m.shine,
    children: p.Z.Messages.QUESTS_CLAIM_REWARD
  })
});
  },
  C = e => {
var t;
let {
  quest: n,
  useReducedMotion: o,
  isExpanded: r,
  hasMadeProgress: l
} = e, d = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, p = (0, a._s)({
  quest: n
}), m = (0, c.P)({
  location: u.dr.QUESTS_BAR
}), C = (0, a.z)(n);
if (d)
  return (0, s.jsx)(f, {
    quest: n,
    useReducedMotion: o,
    isExpanded: r
  });
if (p && !m)
  return (0, s.jsx)(g, {
    quest: n
  });
if (!l && !C && !(0, i.zK)(n, u.S7.IN_HOUSE_CONSOLE_QUEST))
  return (0, s.jsx)(x, {
    quest: n
  });
return null;
  };