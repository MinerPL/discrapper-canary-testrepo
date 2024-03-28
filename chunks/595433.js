"use strict";
a.r(t), a.d(t, {
  useShowAnimation: function() {
    return l
  }
}), a("47120");
var s = a("470079"),
  n = a("718017");

function l(e) {
  let [t, a] = s.useState(!0);
  return {
    transitions: (0, n.useTransition)(t, {
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
    }),
    setVisible: a
  }
}
let r = {
  mass: 1,
  tension: 250,
  friction: 18,
  clamp: !0
}