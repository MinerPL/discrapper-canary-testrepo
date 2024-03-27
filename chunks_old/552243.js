"use strict";
l.r(a), l.d(a, {
  default: function() {
    return s
  }
});
var t = l("37983");
l("884691");
var i = l("146606"),
  n = l("65597"),
  r = l("206230"),
  s = e => {
    let {
      children: a,
      initTranslate3d: l
    } = e, s = (0, n.useStateFromStores)([r.default], () => r.default.useReducedMotion), o = (0, i.useSpring)({
      immediate: s,
      from: {
        transform: l
      },
      to: {
        transform: "translate3d(0, 0, 0)"
      }
    });
    return (0, t.jsx)(i.animated.div, {
      style: o,
      children: a
    })
  }