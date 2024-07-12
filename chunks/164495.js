n.d(t, {
  y: function() {
return h;
  }
});
var s = n(735250),
  o = n(470079),
  r = n(481060),
  a = n(617136),
  i = n(113434),
  l = n(497505),
  c = n(918701),
  d = n(796111),
  u = n(667105),
  p = n(46140),
  x = n(689938),
  m = n(941624);
let g = e => {
let {
  quest: t
} = e;
return (0, s.jsx)('div', {
  className: m.ctaContainer,
  children: (0, s.jsx)(r.Button, {
    className: m.flex,
    size: r.Button.Sizes.SMALL,
    onClick: () => (0, c.FE)(t, {
      content: l.jn.QUEST_BAR_V2,
      ctaContent: a.jZ.OPEN_GAME_LINK
    }),
    children: x.Z.Messages.QUESTS_GET_THIS_GAME
  })
});
  },
  C = e => {
let {
  quest: t
} = e;
return (0, s.jsx)('div', {
  className: m.ctaContainer,
  children: (0, s.jsx)(r.Button, {
    fullWidth: !0,
    onClick: () => (0, c.gI)({
      quest: t,
      showInline: !1
    }, {
      content: l.jn.QUEST_BAR_V2,
      ctaContent: a.jZ.CONNECT_CONSOLE
    }),
    size: r.Button.Sizes.SMALL,
    children: x.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
  })
});
  },
  f = e => {
let {
  quest: t,
  useReducedMotion: n,
  isExpanded: o
} = e, a = (0, u.hf)({
  quest: t,
  location: l.jn.QUEST_BAR_V2
});
return (0, s.jsx)('div', {
  className: m.ctaContainer,
  children: (0, s.jsx)(r.ShinyButton, {
    fullWidth: !0,
    size: r.Button.Sizes.SMALL,
    onClick: a,
    pauseAnimation: n || !o,
    buttonShineClassName: m.shine,
    children: x.Z.Messages.QUESTS_CLAIM_REWARD
  })
});
  },
  _ = e => {
let {
  quest: t
} = e, {
  xboxAndPlaystationAccounts: n
} = (0, i.z6)(), s = (0, d.P)({
  location: p.dr.QUESTS_BAR
});
return o.useMemo(() => {
  let e = (0, c.$J)(t),
    o = 0 === n.length;
  return e && o && !s;
}, [
  t,
  n,
  s
]);
  },
  h = e => {
var t;
let {
  quest: n,
  useReducedMotion: o,
  isExpanded: r,
  hasMadeProgress: a
} = e, l = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, d = _({
  quest: n
}), u = (0, i.z)(n);
if (l)
  return (0, s.jsx)(f, {
    quest: n,
    useReducedMotion: o,
    isExpanded: r
  });
if (d)
  return (0, s.jsx)(C, {
    quest: n
  });
if (!a && !u && !(0, c.zK)(n, p.S7.IN_HOUSE_CONSOLE_QUEST))
  return (0, s.jsx)(g, {
    quest: n
  });
return null;
  };