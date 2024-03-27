"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var r = n("884691"),
  s = n("775560"),
  i = n("862337");

function l(e, t) {
  let [n, l] = (0, r.useState)(e), a = (0, s.useLazyValue)(() => new i.Timeout);
  (0, r.useEffect)(() => () => a.stop(), [a]);
  let o = (0, r.useCallback)(n => {
    l(n), n !== e && a.start(t, () => l(e))
  }, [t, e, a]);
  return [n, o]
}