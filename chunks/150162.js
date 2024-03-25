"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
}), l("222007");
var a = l("37983"),
  s = l("884691"),
  n = l("969176"),
  o = l.n(n),
  i = l("146606"),
  r = l("458960"),
  d = l("669491"),
  u = l("77078"),
  C = l("84339");
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
    equalityFn: n = o,
    style: r,
    ...E
  } = e, f = (0, C.default)(t), [{
    spring: M
  }, h] = (0, i.useSpring)(() => ({
    spring: 0
  })), _ = (0, u.useToken)(d.default.colors.BACKGROUND_PRIMARY).hex(), T = (0, u.useToken)(d.default.colors.CONTROL_BRAND_FOREGROUND).hex(), S = s.useCallback(() => {
    h({
      spring: 1,
      config: c
    }), h({
      spring: 0,
      config: m,
      delay: 300
    })
  }, [h]);
  s.useEffect(() => {
    if (null != t && null != f) !n(t, f) && S()
  }, [S, t, f, n]);
  let x = null == M ? void 0 : M.to({
      range: [0, 1],
      output: ["".concat(_, "00"), "".concat(T, "27")]
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