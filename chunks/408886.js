"use strict";
s.r(t), s("47120");
var n = s("470079");
t.default = () => {
  let [e, t] = (0, n.useState)(null);
  return (0, n.useEffect)(() => {
    var e;
    (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
  }, []), e
}