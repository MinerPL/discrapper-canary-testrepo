"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("47120");
var s = n("470079"),
  a = n("393238");

function l() {
  let {
    ref: e,
    width: t
  } = (0, a.default)(), [n, l] = s.useState();
  return s.useEffect(() => {
    null == n && null != t && l(t)
  }, [n, t]), [e, n]
}