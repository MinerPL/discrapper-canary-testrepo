"use strict";
s.r(t), s.d(t, {
  XboxGamepadButtonHandlers: function() {
    return i
  }
}), s("47120");
var n = s("735250"),
  r = s("470079"),
  l = s("98650");
let a = {
  A: 0,
  B: 1,
  X: 2,
  Y: 3,
  LB: 4,
  RB: 5,
  LT: 6,
  RT: 7,
  Back: 8,
  Start: 9,
  LS: 10,
  RS: 11,
  Up: 12,
  Down: 13,
  Left: 14,
  Right: 15,
  Home: 16
};

function i(e) {
  let {
    children: t,
    ...s
  } = e;
  return ! function(e) {
    let [t] = r.useState(() => ({}));
    (0, l.default)(() => {
      let s = navigator.getGamepads()[0];
      if (null != s)
        for (let [r, l] of Object.entries(e)) {
          var n;
          let e = a[r];
          if (null == e) continue;
          let i = null === (n = s.buttons[e]) || void 0 === n ? void 0 : n.pressed;
          t[r] !== i && (i && l(i), t[r] = i)
        }
    })
  }(s), (0, n.jsx)(n.Fragment, {
    children: t
  })
}