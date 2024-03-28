"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("498607"),
  o = l.n(n),
  i = l("718017"),
  r = l("748780"),
  d = l("692547"),
  u = l("481060"),
  C = l("110924");
let c = {
    duration: 100,
    easing: r.default.Easing.inOut(r.default.Easing.back()),
    clamp: !0
  },
  m = {
    duration: 2e3,
    easing: r.default.Easing.quad,
    clamp: !0
  };

function E(e) {
  let {
    value: t,
    children: l,
    equalityFn: n = o(),
    style: r,
    ...E
  } = e, f = (0, C.default)(t), [{
    spring: _
  }, M] = (0, i.useSpring)(() => ({
    spring: 0
  })), h = (0, u.useToken)(d.default.colors.BACKGROUND_PRIMARY).hex(), T = (0, u.useToken)(d.default.colors.CONTROL_BRAND_FOREGROUND).hex(), S = s.useCallback(() => {
    M({
      spring: 1,
      config: c
    }), M({
      spring: 0,
      config: m,
      delay: 300
    })
  }, [M]);
  s.useEffect(() => {
    if (null != t && null != f) !n(t, f) && S()
  }, [S, t, f, n]);
  let x = null == _ ? void 0 : _.to({
      range: [0, 1],
      output: ["".concat(h, "00"), "".concat(T, "27")]
    }),
    A = null != r ? {
      ...r,
      backgroundColor: x
    } : {
      backgroundColor: x
    };
  return (0, a.jsx)(i.animated.tr, {
    ...E,
    style: A,
    children: l
  })
}