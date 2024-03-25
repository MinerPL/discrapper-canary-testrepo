"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var n = s("884691"),
  l = s("913144");

function i(e) {
  let t = (0, n.useRef)(e);
  (0, n.useEffect)(() => {
    t.current = e
  }, [e]), (0, n.useEffect)(() => {
    if (__OVERLAY__) {
      function e(e) {
        e.locked && t.current()
      }
      return l.default.subscribe("OVERLAY_SET_INPUT_LOCKED", e), () => {
        l.default.unsubscribe("OVERLAY_SET_INPUT_LOCKED", e)
      }
    }
  }, [])
}