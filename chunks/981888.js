"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
}), s("47120");
var n = s("470079"),
  r = s("881052");

function l(e, t) {
  let [s, l] = n.useState(!1), [a, u] = n.useState(null);
  return [async () => {
    l(!0), u(null);
    try {
      let t = await e();
      return l(!1), u(null), t
    } catch (s) {
      let e = new r.APIError(s);
      return null == t || t(e), u(e), l(!1), null
    }
  }, {
    loading: s,
    error: a
  }]
}