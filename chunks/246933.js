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
  o = n("409814");
let l = ["#cc99ff", "#ffffff"],
  u = ["#2d3dee", "#ffffff"],
  d = [.3, 1],
  _ = [{
    base: 2,
    tint: 1
  }, {
    base: 5,
    tint: 1
  }],
  c = [.3, 1],
  E = [{
    base: 2,
    tint: 1
  }, {
    base: 5,
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
      children: [(0, i.jsxs)("defs", {
        children: [(0, i.jsxs)("radialGradient", {
          id: "fog-gradient-primary",
          cx: ".5",
          cy: ".5",
          r: ".6",
          fx: ".76",
          fy: ".33",
          spreadMethod: "pad",
          children: [(0, i.jsx)("stop", {
            stopColor: S[1],
            offset: "0%"
          }), (0, i.jsx)("stop", {
            stopColor: S[0],
            offset: "70%"
          })]
        }), (0, i.jsxs)("radialGradient", {
          id: "fog-gradient-secondary",
          cx: ".5",
          cy: ".5",
          r: ".6",
          fx: ".76",
          fy: ".33",
          spreadMethod: "pad",
          children: [(0, i.jsx)("stop", {
            stopColor: h[1],
            offset: "0%"
          }), (0, i.jsx)("stop", {
            stopColor: h[0],
            offset: "70%"
          })]
        })]
      }), (0, i.jsx)("style", {
        children: A
      })]
    }), (0, i.jsx)("use", {
      href: "".concat(o, "#wrapper-layer"),
      id: m
    }), (0, i.jsx)("use", {
      href: "".concat(o, "#clan-banner-warp-tunnel-secondary"),
      style: {
        fill: "url(#fog-gradient-secondary)"
      }
    }), (0, i.jsx)("use", {
      href: "".concat(o, "#clan-banner-warp-tunnel-primary"),
      style: {
        fill: "url(#fog-gradient-primary)"
      }
    })]
  })
}