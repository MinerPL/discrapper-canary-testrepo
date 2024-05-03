"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var i = n("735250");
n("470079");
var r = n("249849"),
  a = n("907561"),
  s = n("689938"),
  o = n("585025");
let l = ["#0fa3dd", "#a7e4e4", "#a2ccdd"],
  u = ["#0b3215", "#a6b51a", "#35748a", "#65a88f", "#621c12", "#f96748", "#ffbbbb"],
  d = [.25, .9, .9],
  _ = [{
    base: 8,
    tint: 1
  }, {
    base: 14,
    tint: 1
  }, {
    base: 5,
    tint: 1
  }],
  c = [.05, .4, .15, .33, .1, .3, .6],
  E = [{
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }, {
    base: 8,
    tint: 1
  }];

function I(e) {
  let {
    width: t,
    height: n,
    primaryTintColor: I,
    secondaryTintColor: T,
    ...f
  } = e, {
    primaryColorsTransformed: S,
    secondaryColorsTransformed: h
  } = (0, r.getTransformedBadgeColors)({
    primaryBaseColors: l,
    primaryTintColor: I,
    primaryTintLuminances: d,
    primaryLuminanceWeights: _,
    secondaryBaseColors: u,
    secondaryTintColor: T,
    secondaryTintLuminances: c,
    secondaryLuminanceWeights: E
  }), {
    styleContent: A,
    containerId: m
  } = (0, a.useClanBannerStyleInjection)(S, h);
  return (0, i.jsxs)("svg", {
    ...f,
    "aria-label": s.default.Messages.CLAN_LOOK_BANNER,
    width: t,
    height: n,
    viewBox: "0 0 ".concat(a.CLAN_BANNER_WIDTH, " ").concat(a.CLAN_BANNER_HEIGHT),
    children: [(0, i.jsxs)("defs", {
      children: [(0, i.jsx)("defs", {
        children: (0, i.jsxs)("linearGradient", {
          id: "sky-gradient",
          x1: "0",
          x2: "1",
          y1: "0",
          y2: "1",
          children: [(0, i.jsx)("stop", {
            stopColor: S[2],
            offset: "0%"
          }), (0, i.jsx)("stop", {
            stopColor: S[0],
            offset: "100%"
          })]
        })
      }), (0, i.jsx)("style", {
        children: A
      })]
    }), (0, i.jsx)("use", {
      href: "".concat(o, "#sky"),
      style: {
        fill: "url(#sky-gradient)"
      }
    }), (0, i.jsx)("use", {
      href: "".concat(o, "#wrapper-layer"),
      id: m
    })]
  })
}