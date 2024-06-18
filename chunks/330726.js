"use strict";
n.d(t, {
  Z: function() {
    return o
  }
}), n(47120);
var i = n(470079),
  r = n(77866),
  s = n(846519);

function o(e, t) {
  let [n, o] = (0, i.useState)(e), a = (0, r.Z)(() => new s.V7);
  return (0, i.useEffect)(() => () => a.stop(), [a]), [n, (0, i.useCallback)(n => {
    o(n), n !== e && a.start(t, () => o(e))
  }, [t, e, a])]
}