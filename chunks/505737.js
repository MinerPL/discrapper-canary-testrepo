"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(442837),
  r = n(41776),
  s = n(695346),
  o = n(314897),
  a = n(271383),
  l = n(699516);

function u(e, t) {
  let n = (0, i.e7)([o.default], () => o.default.getId() === e),
    u = (0, i.e7)([r.Z], () => null != t && r.Z.isLurking(t)),
    _ = s.h2.useSetting();
  return (0, i.e7)([l.Z, a.ZP], () => !n && !u && (l.Z.isFriend(e) || null != a.ZP.memberOf(e).find(e => !_.includes(e))))
}