s.d(n, {
  m: function() {
return N;
  }
});
var l = s(735250),
  t = s(470079),
  i = s(481060),
  r = s(474936),
  a = s(815642),
  c = s(426831),
  o = s(257510),
  u = s(74838),
  d = s(720834),
  _ = s(385925),
  m = s(588921),
  E = s(718720),
  I = s(721513);
let p = {
[r.Cj.STANDARD_BOX]: _,
[r.Cj.CAKE]: m,
[r.Cj.CHEST]: E,
[r.Cj.COFFEE]: I,
[r.Cj.SNOWGLOBE]: '',
[r.Cj.BOX]: '',
[r.Cj.CUP]: '',
[r.Cj.SEASONAL_CAKE]: o,
[r.Cj.SEASONAL_CHEST]: u,
[r.Cj.SEASONAL_COFFEE]: d,
[r.Cj.SEASONAL_STANDARD_BOX]: c
  },
  N = t.forwardRef(function(e, n) {
let {
  isSelected: s,
  giftStyle: t,
  setSelectedGiftStyle: r,
  onFocus: c,
  onBlur: o
} = e;
return (0, l.jsx)(i.Clickable, {
  innerRef: n,
  onClick: () => r(t),
  onFocus: c,
  onBlur: o,
  children: (0, l.jsx)('img', {
    style: {
      width: '100%',
      height: '100%'
    },
    alt: '',
    src: p[t],
    className: s ? a.customGiftBoxHighlighted : a.customGiftBox
  })
});
  });