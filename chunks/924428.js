n.d(t, {
  Z: function() {
return a;
  }
}), n(47120);
var r = n(470079),
  i = n(699581);

function a() {
  let [, e] = (0, r.useState)(0);
  return (0, r.useCallback)(() => (0, i.flushSync)(() => e(e => e + 1)), []);
}