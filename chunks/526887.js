"use strict";
n.r(t), n.d(t, {
  ConfettiCannonContext: function() {
    return c
  },
  ConfettiCannonContextProvider: function() {
    return d
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("516555"),
  o = n("65597"),
  s = n("206230"),
  a = n("49111");
let u = {
    confettiCanvas: null,
    cannon: null,
    createConfetti: () => void 0,
    createConfettiAt: () => void 0,
    createMultipleConfetti: () => [],
    createMultipleConfettiAt: () => [],
    addClickListener: () => a.NOOP,
    removeClickListener: a.NOOP
  },
  c = r.createContext(u);

function d(e) {
  let {
    children: t,
    confettiCanvas: n,
    spriteCanvas: a,
    baseConfig: d,
    addClickListener: f,
    removeClickListener: E
  } = e, _ = (0, l.useConfettiCannon)(n, a), I = (0, o.default)([s.default], () => s.default.useReducedMotion), h = r.useMemo(() => I ? u : {
    confettiCanvas: n,
    cannon: _,
    createConfetti: (e, t) => _.createConfetti({
      ...d,
      ...e
    }, t),
    createConfettiAt: (e, t, n, i) => _.createConfetti({
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
      return _.createMultipleConfetti({
        ...d,
        ...e
      }, t, n)
    },
    createMultipleConfettiAt: function(e, t, n) {
      let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
        r = arguments.length > 4 ? arguments[4] : void 0;
      return _.createMultipleConfetti({
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
    addClickListener: f,
    removeClickListener: E
  }, [f, d, _, n, I, E]);
  return (0, i.jsx)(c.Provider, {
    value: h,
    children: t
  })
}