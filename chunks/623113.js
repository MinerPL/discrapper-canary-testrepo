"use strict";
n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(470079);

function r(e) {
  let t = i.useRef(null),
    n = i.useCallback(n => {
      null != e && ("function" == typeof e ? e(n) : e.current = n, t.current = n)
    }, [e]);
  return [t, n]
}