"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("442837"),
  a = n("314897"),
  s = n("88751");

function i(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return (0, l.useStateFromStoresObject)([s.default, a.default], () => {
    let n = a.default.getId();
    return s.default.getPermissionsForUser(n, e, t)
  }, [e, t])
}