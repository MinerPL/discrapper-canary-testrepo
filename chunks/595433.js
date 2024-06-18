"use strict";
n.d(t, {
  H: function() {
    return a
  }
}), n(47120);
var s = n(470079),
  l = n(920906);

function a(e) {
  let [t, n] = s.useState(!0);
  return {
    transitions: (0, l.useTransition)(t, {
      keys: e => e ? "shown" : "hidden",
      config: i,
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
    setVisible: n
  }
}
let i = {
  mass: 1,
  tension: 250,
  friction: 18,
  clamp: !0
}