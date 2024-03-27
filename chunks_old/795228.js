"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("884691"),
  u = n("446674"),
  i = n("895026"),
  r = n("36402");
let d = {};

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = (0, u.useStateFromStores)([r.default], () => r.default.getRoleMemberCount(e));
  return l.useEffect(() => {
    if (null == e) return;
    let n = d[e],
      l = null != n && t > 0 && Date.now() - n < t;
    !l && (d[e] = Date.now(), i.fetchMemberCounts(e))
  }, [e, t]), n
}