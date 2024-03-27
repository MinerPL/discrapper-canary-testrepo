"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("222007");
var a = s("884691"),
  l = s("837008"),
  n = s("795228");

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