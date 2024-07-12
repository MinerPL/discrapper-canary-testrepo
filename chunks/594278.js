n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(846519),
  o = n(481060),
  c = n(259580),
  d = n(81543),
  u = n(689938),
  _ = n(407604);
t.Z = function(e) {
  let {
items: t,
carouselClassName: n,
paginationCaretClassName: i,
intervalBetweenAutomaticItemRotations: I,
renderItem: E
  } = e, T = a.useMemo(() => new l.Xp(), []), [m, N] = a.useState(d.n.LEFT), [S, h] = a.useState(0), [g, C] = a.useState(!1), [x, p] = a.useState(!1), R = a.useCallback((e, t) => {
h(n => {
  let s = n + t;
  return s < 0 ? s = e.length - 1 : s > e.length - 1 && (s = 0), s;
});
  }, [h]), f = a.useCallback(() => {
if (!x)
  R(t, 1);
  }, [
R,
t,
x
  ]), L = a.useCallback(() => {
if (!x)
  R(t, -1);
  }, [
R,
t,
x
  ]);
  return a.useEffect(() => {
null != I && (g ? g && T.stop() : T.start(I, f));
  }, [
g,
T,
I,
f
  ]), (0, s.jsxs)('div', {
className: _.root,
onMouseEnter: () => C(!0),
onMouseLeave: () => C(!1),
children: [
  (0, s.jsx)(o.Clickable, {
    className: r()(_.carouselCaret, i),
    onClick: L,
    onMouseEnter: () => N(d.n.RIGHT),
    ignoreKeyPress: x,
    children: (0, s.jsx)(c.Z, {
      direction: c.Z.Directions.LEFT,
      height: 48,
      width: 48,
      'aria-label': u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_PREVIOUS_CARD_ARIA_LABEL
    })
  }),
  (0, s.jsx)(d.Z, {
    step: S,
    direction: m,
    onAnimationStart: () => p(!0),
    onAnimationEnd: () => p(!1),
    className: r()(_.carousel, n),
    children: E(t[S])
  }),
  (0, s.jsx)(o.Clickable, {
    className: r()(_.carouselCaret, i),
    onClick: f,
    onMouseEnter: () => N(d.n.LEFT),
    ignoreKeyPress: x,
    children: (0, s.jsx)(c.Z, {
      direction: c.Z.Directions.RIGHT,
      height: 48,
      width: 48,
      'aria-label': u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_OTHER_CREATOR_NEXT_CARD_ARIA_LABEL
    })
  })
]
  });
};