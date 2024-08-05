var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(26305);
t.Z = e => {
  let {
message: t,
className: n,
noResultsImageURL: i,
forceLightTheme: o,
suggestions: l
  } = e;
  return (0, r.jsx)('div', {
className: a()({
  [s.forceLightTheme]: o
}, n),
children: (0, r.jsxs)('div', {
  className: s.wrapper,
  children: [
    (0, r.jsx)('div', {
      className: s.sadImage,
      style: null != i ? {
        backgroundImage: 'url('.concat(i, ')')
      } : {}
    }),
    (0, r.jsx)('div', {
      children: t
    }),
    l
  ]
})
  });
};