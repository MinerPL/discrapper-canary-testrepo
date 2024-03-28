"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("47120");
var a = s("470079"),
  l = s("584825"),
  n = s("14263");

function i(e) {
  let t = (0, l.useSubscriptionListingsForGuild)(e),
    s = (0, n.default)(e);
  return a.useMemo(() => {
    let e = 0;
    for (let a of t) {
      let t = null == a ? void 0 : a.role_id;
      if (null != t) {
        let a = null == s ? void 0 : s[t];
        null != a && (e += a)
      }
    }
    return e
  }, [t, s])
}