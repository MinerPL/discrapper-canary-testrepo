n.d(t, {
  Z: function() {
return i;
  }
});
var s = n(470079),
  a = n(442837),
  r = n(897285),
  l = n(924301);

function i(e, t, n) {
  let i = (0, a.e7)([l.ZP], () => l.ZP.getUserCount(t, n));
  return (0, s.useEffect)(() => {
null != e && null != t && r.Z.getGuildEventUserCounts(e, t, null != n ? [n] : []);
  }, [
t,
e,
n
  ]), i;
}