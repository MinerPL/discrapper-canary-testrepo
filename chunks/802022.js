var s = n(735250),
  r = n(470079),
  a = n(120356),
  i = n.n(a),
  o = n(399606),
  c = n(780384),
  l = n(481060),
  d = n(774078),
  u = n(727637),
  f = n(607070),
  p = n(210887),
  g = n(689938),
  C = n(445968),
  _ = n(712643),
  m = n(458597);
t.Z = function() {
  let e = r.useRef(null),
t = (0, u.Z)(e),
n = (0, o.e7)([f.Z], () => f.Z.useReducedMotion),
a = (0, o.e7)([p.Z], () => (0, c.wj)(p.Z.theme)),
{
  days: h,
  hours: b
} = (0, d.Z)(new Date('2024-08-23T08:15:00-07:00')),
x = r.useMemo(() => {
  if (0 === h && 0 === b)
    return g.Z.Messages.COLLECTIBLES_QUEUING_UP;
  let e = ''.concat(h.toString().padStart(2, '0')).concat(g.Z.Messages.COUNTDOWN_UNITS_DAYS),
    t = ''.concat(b.toString().padStart(2, '0')).concat(g.Z.Messages.COUNTDOWN_UNITS_HOURS);
  return ''.concat(e, ':').concat(t);
}, [
  h,
  b
]);
  return (0, s.jsxs)('div', {
ref: e,
className: i()(a ? C.shopCardDark : C.shopCard, _.notInteractive, {
  [C.shopCardAnimation]: !n,
  [a ? C.shopCardDarkHighlighted : C.shopCardHighlighted]: t
}),
children: [
  (0, s.jsx)('div', {
    className: C.preview,
    children: (0, s.jsx)('div', {
      className: i()(C.avatarContainer, C.mysteryAvatarContainer),
      children: (0, s.jsx)('img', {
        src: m,
        className: _.spark,
        alt: ''
      })
    })
  }),
  (0, s.jsxs)('div', {
    className: C.cardText,
    children: [
      (0, s.jsx)('div', {
        className: i()(C.cardBackground, a ? C.darkCardBackground : C.lightCardBackground)
      }),
      (0, s.jsx)(l.Text, {
        variant: 'text-lg/bold',
        className: _.productName,
        children: g.Z.Messages.COLLECTIBLES_STORM_MYSTERY_CARD_TITLE
      })
    ]
  }),
  (0, s.jsx)(l.TextBadge, {
    text: x,
    disableColor: !0,
    className: C.newBadge
  })
]
  });
};