"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var i = n("884691"),
  r = n("446674"),
  l = n("895026"),
  s = n("36402");
let u = {};

function o(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = (0, r.useStateFromStores)([s.default], () => s.default.getRoleMemberCount(e));
  return i.useEffect(() => {
    if (null == e) return;
    let n = u[e],
      i = null != n && t > 0 && Date.now() - n < t;
    !i && (u[e] = Date.now(), l.fetchMemberCounts(e))
  }, [e, t]), n
}