l.d(t, {
  Z: function() {
return _;
  }
}), l(47120);
var n = l(735250),
  a = l(470079),
  o = l(498607),
  s = l.n(o),
  i = l(338545),
  r = l(748780),
  C = l(692547),
  c = l(481060),
  d = l(110924);
let u = {
duration: 100,
easing: r.Z.Easing.inOut(r.Z.Easing.back()),
clamp: !0
  },
  m = {
duration: 2000,
easing: r.Z.Easing.quad,
clamp: !0
  };

function _(e) {
  let {
value: t,
children: l,
equalityFn: o = s(),
style: r,
..._
  } = e, E = (0, d.Z)(t), [{
spring: h
  }, M] = (0, i.useSpring)(() => ({
spring: 0
  })), x = (0, c.useToken)(C.Z.colors.BACKGROUND_PRIMARY).hex(), b = (0, c.useToken)(C.Z.colors.CONTROL_BRAND_FOREGROUND).hex(), T = a.useCallback(() => {
M({
  spring: 1,
  config: u
}), M({
  spring: 0,
  config: m,
  delay: 300
});
  }, [M]);
  a.useEffect(() => {
if (!(null == t || null == E || o(t, E)))
  T();
  }, [
T,
t,
E,
o
  ]);
  let L = null == h ? void 0 : h.to({
  range: [
    0,
    1
  ],
  output: [
    ''.concat(x, '00'),
    ''.concat(b, '27')
  ]
}),
g = null != r ? {
  ...r,
  backgroundColor: L
} : {
  backgroundColor: L
};
  return (0, n.jsx)(i.animated.tr, {
..._,
style: g,
children: l
  });
}