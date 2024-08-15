var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(646574),
  o = n(543241),
  l = n(747613),
  u = n(533432),
  c = n(149203),
  d = n(185923),
  _ = n(23022);
t.Z = e => {
  let {
accessory: t,
pickerIntention: n,
headerClassName: i,
emojiListRef: E,
onKeyDown: f,
onFocus: h,
autoFocus: p,
searchBarRef: m,
hasTabWrapper: I,
diversitySurrogate: T,
isBurstReaction: g,
onBurstReactionToggle: S,
renderHeader: A
  } = e, N = (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(u.Z, {
    emojiListRef: E,
    gridNavigatorId: c.Vr,
    onKeyDown: f,
    className: _.searchBar,
    ref: m,
    isFullRow: !1,
    onFocus: h,
    autoFocus: p,
    defaultSearchPlaceholder: (0, o.nV)(n, g)
  }),
  n === d.Hz.REACTION ? (0, r.jsx)('div', {
    className: _.burstToggle,
    children: (0, r.jsx)(s.Z, {
      checked: g,
      onClick: S
    })
  }) : null,
  null != t ? t : (0, r.jsx)(l.Z, {
    searchBarRef: m,
    className: _.diversitySelector,
    hasTabWrapper: I,
    selectedSurrogate: T
  })
]
  });
  return (0, r.jsx)('div', {
className: a()(_.header, i),
children: null != A ? A(N) : N
  });
};