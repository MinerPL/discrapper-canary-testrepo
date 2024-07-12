n.d(t, {
  Z: function() {
return a;
  }
});
var l = n(470079),
  r = n(442837),
  i = n(480608),
  s = n(243730);
let u = {};

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
n = (0, r.e7)([s.Z], () => s.Z.getRoleMemberCount(e));
  return l.useEffect(() => {
if (null == e)
  return;
let n = u[e];
!(null != n && t > 0 && Date.now() - n < t) && (u[e] = Date.now(), i.E(e));
  }, [
e,
t
  ]), n;
}