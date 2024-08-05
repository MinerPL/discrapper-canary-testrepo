t.d(n, {
  m: function() {
return E;
  }
});
var i = t(735250),
  a = t(470079),
  r = t(481060),
  s = t(474936),
  l = t(815642),
  o = t(426831),
  c = t(257510),
  u = t(74838),
  d = t(720834),
  _ = t(385925),
  p = t(588921),
  m = t(718720),
  I = t(721513);
let f = {
[s.Cj.STANDARD_BOX]: _,
[s.Cj.CAKE]: p,
[s.Cj.CHEST]: m,
[s.Cj.COFFEE]: I,
[s.Cj.SNOWGLOBE]: '',
[s.Cj.BOX]: '',
[s.Cj.CUP]: '',
[s.Cj.SEASONAL_CAKE]: c,
[s.Cj.SEASONAL_CHEST]: u,
[s.Cj.SEASONAL_COFFEE]: d,
[s.Cj.SEASONAL_STANDARD_BOX]: o
  },
  E = a.forwardRef(function(e, n) {
let {
  isSelected: t,
  giftStyle: a,
  setSelectedGiftStyle: s,
  onFocus: o,
  onBlur: c
} = e;
return (0, i.jsx)(r.Clickable, {
  innerRef: n,
  onClick: () => s(a),
  onFocus: o,
  onBlur: c,
  children: (0, i.jsx)('img', {
    style: {
      width: '100%',
      height: '100%'
    },
    alt: '',
    src: f[a],
    className: t ? l.customGiftBoxHighlighted : l.customGiftBox
  })
});
  });