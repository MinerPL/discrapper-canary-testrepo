var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(607070),
  c = n(810090),
  d = n(617136),
  _ = n(918701),
  E = n(566078),
  f = n(78826),
  h = n(341907),
  p = n(689938),
  m = n(165302);
t.Z = function(e) {
  let {
className: t,
quest: n,
autoplay: a = !0,
learnMoreStyle: I = null
  } = e, T = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), g = (0, _.gO)(n), S = i.useMemo(() => (0, _.nP)(g.name), [g.name]), A = i.useCallback(t => {
var r;
(0, d._3)({
  questId: n.id,
  questContent: e.questContent,
  questContentPosition: e.questContentPosition,
  questContentCTA: d.jZ.REWARD_LEARN_MORE
}), (0, h.navigateToQuestHome)(e.location, n.id), null === (r = e.onClick) || void 0 === r || r.call(e, t);
  }, [
n.id,
e
  ]), N = i.useRef(null), v = i.useRef(a);
  i.useEffect(() => {
S && !T && null != N.current && (a && !v.current ? N.current.play() : !a && v.current && (N.current.currentTime = 0, N.current.pause()), v.current = a);
  }, [
a,
S,
T
  ]);
  let O = S ? (0, r.jsx)(f.Fl, {
id: 'QuestRewardTile_rewardTileAnimated',
children: e => (0, r.jsx)(c.Z, {
  ref: t => {
    e.current = t, N.current = t;
  },
  autoPlay: !T && a,
  loop: !0,
  muted: !0,
  playsInline: !0,
  className: m.questRewardTileAsset,
  controls: !1,
  children: (0, r.jsx)('source', {
    src: g.url,
    type: (0, _.mN)(g.url)
  })
})
  }) : (0, r.jsx)(f.Fl, {
id: 'QuestRewardTile_rewardTileStatic',
children: e => (0, r.jsx)('img', {
  ref: e,
  alt: E.r.build(n.config).defaultReward.messages.name,
  className: s()(m.questRewardTileAsset, m.questRewardTileAssetStatic),
  src: g.url
})
  });
  return null == I ? (0, r.jsx)('div', {
className: s()(m.questRewardTile, t),
children: O
  }) : (0, r.jsxs)(l.Clickable, {
className: s()(m.questRewardTile, m.questRewardTileInteractive, t),
onClick: A,
children: [
  'text' === I && (0, r.jsx)(l.Text, {
    color: 'always-white',
    variant: 'text-xs/normal',
    className: m.questRewardTileDetailsLearnMore,
    children: p.Z.Messages.QUESTS_LEARN_MORE_STACKED.format()
  }),
  'icon' === I && (0, r.jsx)('div', {
    className: m.questRewardTileDetailsLearnMore,
    children: (0, r.jsx)(l.CircleInformationIcon, {
      size: 'xxs',
      color: l.tokens.colors.WHITE.css
    })
  }),
  O
]
  });
};