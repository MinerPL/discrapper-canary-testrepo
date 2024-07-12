t.d(n, {
  Z: function() {
return s;
  }
});
var i = t(470079),
  r = t(442837),
  o = t(339085),
  l = t(889564);
let u = [];

function s(e) {
  let n = (0, r.e7)([o.Z], () => o.Z.getGuildEmoji(e), [e]);
  return i.useMemo(() => null == n ? u : n.filter(n => (0, l.Kt)(n, e)), [
n,
e
  ]);
}