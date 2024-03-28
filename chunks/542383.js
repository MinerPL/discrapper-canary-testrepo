"use strict";
a.r(t), a.d(t, {
  default: function() {
    return s
  }
});
var l = a("470079"),
  n = a("358085");

function s(e) {
  let t = l.useRef(e);
  return l.useEffect(() => {
    t.current = e
  }, [e]), l.useCallback(e => {
    let a = e.ctrlKey && !(e.altKey || e.metaKey || e.shiftKey),
      l = e.metaKey && !(e.altKey || e.ctrlKey || e.shiftKey),
      {
        disabled: s = !1,
        onSubmit: r
      } = t.current;
    if ("enter" === e.key.toLowerCase())("macos" === (0, n.getOS)() ? l : a) && !s && (e.preventDefault(), r())
  }, [])
}