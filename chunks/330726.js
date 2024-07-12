n.d(t, {
  Z: function() {
return o;
  }
}), n(47120);
var r = n(470079),
  i = n(77866),
  a = n(846519);

function o(e, t) {
  let [n, o] = (0, r.useState)(e), s = (0, i.Z)(() => new a.V7());
  return (0, r.useEffect)(() => () => s.stop(), [s]), [
n,
(0, r.useCallback)(n => {
  o(n), n !== e && s.start(t, () => o(e));
}, [
  t,
  e,
  s
])
  ];
}