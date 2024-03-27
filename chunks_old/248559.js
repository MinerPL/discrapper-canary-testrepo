"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
}), n("222007");
var r = n("884691"),
  l = () => {
    let [e, t] = (0, r.useState)(null);
    return (0, r.useEffect)(() => {
      var e;
      (null === (e = window) || void 0 === e ? void 0 : e.EyeDropper) != null && t(new window.EyeDropper)
    }, []), e
  }