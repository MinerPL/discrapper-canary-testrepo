"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var i = n("884691");

function a(e) {
  let [t, n] = (0, i.useState)(!1), a = (0, i.useRef)(e.current);
  return (0, i.useEffect)(() => {
    a.current = e.current
  }, [e]), (0, i.useEffect)(() => {
    let e = a.current;
    if (null == e) return;
    let t = () => n(!0),
      i = () => n(!1);
    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
      e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
    }
  }, [a]), t
}