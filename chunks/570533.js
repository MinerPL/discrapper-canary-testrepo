t.d(n, {
  Z: function() {
return a;
  }
});
var r = t(470079),
  i = t(442837),
  o = t(339085),
  l = t(889564);
let u = [];

function a(e) {
  let n = (0, i.e7)([o.ZP], () => o.ZP.getGuildEmoji(e), [e]);
  return r.useMemo(() => null == n ? u : n.filter(n => (0, l.Kt)(n, e)), [
n,
e
  ]);
}