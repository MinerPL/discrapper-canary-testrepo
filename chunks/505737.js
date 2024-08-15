n.d(t, {
  Z: function() {
return u;
  }
});
var r = n(442837),
  i = n(41776),
  a = n(695346),
  s = n(314897),
  o = n(271383),
  l = n(699516);

function u(e, t) {
  let n = (0, r.e7)([s.default], () => s.default.getId() === e),
u = (0, r.e7)([i.Z], () => null != t && i.Z.isLurking(t)),
c = a.h2.useSetting();
  return (0, r.e7)([
l.Z,
o.ZP
  ], () => !n && !u && (l.Z.isFriend(e) || null != o.ZP.memberOf(e).find(e => !c.includes(e))));
}