"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007");
var r = n("884691");

function i(e) {
  let [t, n] = (0, r.useState)(!1), i = (0, r.useRef)(e.current);
  return (0, r.useEffect)(() => {
    i.current = e.current
  }, [e]), (0, r.useEffect)(() => {
    let e = i.current;
    if (null == e) return;
    let t = () => n(!0),
      r = () => n(!1);
    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", r), () => {
      e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", r)
    }
  }, [i]), t
}