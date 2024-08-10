n.d(t, {
  y: function() {
return _;
  }
});
var s = n(735250);
n(470079);
var o = n(481060),
  r = n(617136),
  a = n(497505),
  l = n(918701),
  i = n(796111),
  c = n(667105),
  d = n(760171),
  u = n(46140),
  p = n(689938),
  m = n(941624);
let x = e => {
let {
  quest: t
} = e;
return (0, s.jsx)(o.Button, {
  className: m.cta,
  size: o.Button.Sizes.SMALL,
  onClick: () => (0, l.FE)(t, {
    content: a.jn.QUEST_BAR_V2,
    ctaContent: r.jZ.OPEN_GAME_LINK
  }),
  children: p.Z.Messages.QUESTS_GET_THIS_GAME
});
  },
  g = e => {
let {
  quest: t
} = e;
return (0, s.jsx)(o.Button, {
  fullWidth: !0,
  className: m.cta,
  onClick: () => (0, l.gI)({
    quest: t,
    showInline: !1
  }, {
    content: a.jn.QUEST_BAR_V2,
    ctaContent: r.jZ.CONNECT_CONSOLE
  }),
  size: o.Button.Sizes.SMALL,
  children: p.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CTA
});
  },
  f = e => {
let {
  quest: t,
  useReducedMotion: n,
  isExpanded: r
} = e, l = (0, c.hf)({
  quest: t,
  location: a.jn.QUEST_BAR_V2
});
return (0, s.jsx)(o.ShinyButton, {
  fullWidth: !0,
  size: o.Button.Sizes.SMALL,
  onClick: l,
  pauseAnimation: n || !r,
  className: m.cta,
  buttonShineClassName: m.shine,
  children: p.Z.Messages.QUESTS_CLAIM_REWARD
});
  },
  C = e => {
var t;
let {
  quest: n,
  useReducedMotion: o,
  isExpanded: r,
  awaitingConsoleConnections: a,
  hasMadeProgress: l,
  isProgressing: c,
  activeScreen: p
} = e, m = (null === (t = n.userStatus) || void 0 === t ? void 0 : t.completedAt) != null, C = (0, i.P)({
  location: u.dr.QUESTS_BAR
});
if (m)
  return (0, s.jsx)(f, {
    quest: n,
    useReducedMotion: o,
    isExpanded: r
  });
if (p === d.L.CONSOLE && a && !C)
  return (0, s.jsx)(g, {
    quest: n
  });
if (p !== d.L.SELECT && !l && !c)
  return (0, s.jsx)(x, {
    quest: n
  });
return null;
  };

function _(e) {
  return (0, s.jsxs)('div', {
className: m.ctaButtons,
children: [
  e.showBackButton && (0, s.jsx)(o.Button, {
    className: m.backButton,
    innerClassName: m.backButtonInner,
    look: 'blank',
    grow: !1,
    fullWidth: !1,
    size: 'none',
    onClick: e.onBack,
    children: (0, s.jsx)(o.ChevronSmallLeftIcon, {
      className: m.backIcon
    })
  }),
  (0, s.jsx)(C, {
    ...e
  })
]
  });
}