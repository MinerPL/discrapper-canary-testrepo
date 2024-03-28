"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("470079"),
  u = n("442837"),
  a = n("480608"),
  o = n("243730");
let r = {};

function i(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
    n = (0, u.useStateFromStores)([o.default], () => o.default.getRoleMemberCount(e));
  return l.useEffect(() => {
    if (null == e) return;
    let n = r[e];
    !(null != n && t > 0 && Date.now() - n < t) && (r[e] = Date.now(), a.fetchMemberCounts(e))
  }, [e, t]), n
}