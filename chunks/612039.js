"use strict";
i.r(t), i.d(t, {
  default: function() {
    return a
  }
}), i("222007");
var n = i("884691"),
  l = i("775560"),
  s = i("862337");

function a(e, t) {
  let [i, a] = (0, n.useState)(e), r = (0, l.useLazyValue)(() => new s.Timeout);
  (0, n.useEffect)(() => () => r.stop(), [r]);
  let o = (0, n.useCallback)(i => {
    a(i), i !== e && r.start(t, () => a(e))
  }, [t, e, r]);
  return [i, o]
}