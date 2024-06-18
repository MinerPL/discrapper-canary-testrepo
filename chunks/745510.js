"use strict";
n.d(t, {
  d: function() {
    return d
  },
  h: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(887024),
  o = n(399606),
  a = n(607070),
  l = n(981631);
let u = {
    confettiCanvas: null,
    cannon: null,
    createConfetti: () => void 0,
    createConfettiAt: () => void 0,
    createMultipleConfetti: () => [],
    createMultipleConfettiAt: () => [],
    addClickListener: () => l.dG4,
    removeClickListener: l.dG4
  },
  _ = r.createContext(u);

function d(e) {
  let {
    children: t,
    confettiCanvas: n,
    spriteCanvas: l,
    baseConfig: d,
    addClickListener: c,
    removeClickListener: E
  } = e, I = (0, s.uR)(n, l), T = (0, o.e7)([a.Z], () => a.Z.useReducedMotion), h = r.useMemo(() => T ? u : {
    confettiCanvas: n,
    cannon: I,
    createConfetti: (e, t) => I.createConfetti({
      ...d,
      ...e
    }, t),
    createConfettiAt: (e, t, n, i) => I.createConfetti({
      ...d,
      position: {
        type: "static",
        value: {
          x: e,
          y: t
        }
      },
      ...n
    }, i),
    createMultipleConfetti: function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
        n = arguments.length > 2 ? arguments[2] : void 0;
      return I.createMultipleConfetti({
        ...d,
        ...e
      }, t, n)
    },
    createMultipleConfettiAt: function(e, t, n) {
      let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
        r = arguments.length > 4 ? arguments[4] : void 0;
      return I.createMultipleConfetti({
        ...d,
        position: {
          type: "static",
          value: {
            x: e,
            y: t
          }
        },
        ...n
      }, i, r)
    },
    addClickListener: c,
    removeClickListener: E
  }, [c, d, I, n, T, E]);
  return (0, i.jsx)(_.Provider, {
    value: h,
    children: t
  })
}