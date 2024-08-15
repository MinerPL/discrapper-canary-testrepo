var s = n(735250);
n(470079);
var r = n(120356),
  a = n.n(r),
  i = n(53824),
  o = n(291256),
  c = n(801895),
  l = n(775409);
let d = () => 4 * Math.random() + 8,
  u = [
d(),
d(),
d()
  ];
t.Z = () => (0, s.jsx)('div', {
  className: i.skeletons,
  children: u.map(e => (0, s.jsxs)('div', {
className: i.cardsContainer,
children: [
  (0, s.jsx)('div', {
    className: a()(c.skeleton, o.shopBanner),
    children: (0, s.jsx)('div', {
      className: c.bannerBody
    })
  }),
  Array.from({
    length: e
  }, (e, t) => t).map(e => (0, s.jsx)('div', {
    className: a()(c.skeleton, l.shopCard),
    children: (0, s.jsxs)('div', {
      className: c.cardBody,
      children: [
        (0, s.jsx)('div', {
          className: c.cardAvatar
        }),
        (0, s.jsx)('div', {
          className: c.cardTitle
        }),
        (0, s.jsx)('div', {
          className: c.cardDescription
        }),
        (0, s.jsx)('div', {
          className: c.cardSummary
        })
      ]
    })
  }, e))
]
  }, e))
});