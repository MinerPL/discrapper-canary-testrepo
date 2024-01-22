"use strict";
s.r(t), s.d(t, {
  useShowAnimation: function() {
    return l
  }
}), s("222007");
var a = s("884691"),
  n = s("907002");

function l(e) {
  let [t, s] = a.useState(!0), l = (0, n.useTransition)(t, {
    keys: e => e ? "shown" : "hidden",
    config: r,
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    unique: !0,
    immediate: e
  });
  return {
    transitions: l,
    setVisible: s
  }
}
let r = {
  mass: 1,
  tension: 250,
  friction: 18,
  clamp: !0
}