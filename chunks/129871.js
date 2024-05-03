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
  o = n("136050");
let l = ["#7185f6", "#7799f3", "#7eb2eb", "#85d5e0", "#89e6dd", "#8cefda", "#68eacb"],
  u = ["#ffffff", "#f0f0f0"],
  d = [.15, .23, .32, .45, .57, .62, .7],
  _ = [{
    base: 14,
    tint: 1
  }, {
    base: 10,
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
  }],
  c = [.95, 1],
  E = [{
    base: 1,
    tint: 2
  }, {
    base: 14,
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
        children: (0, i.jsxs)("radialGradient", {
          id: "foam-gradient",
          cx: "0.5",
          cy: "0.5",
          r: "0.65",
          fx: "0.5",
          fy: "0.8",
          children: [(0, i.jsx)("stop", {
            stopColor: h[1],
            offset: "60%"
          }), (0, i.jsx)("stop", {
            stopColor: h[0],
            offset: "100%"
          })]
        })
      }), (0, i.jsx)("style", {
        children: A
      })]
    }), (0, i.jsx)("use", {
      href: "".concat(o, "#wrapper-layer"),
      id: m
    }), (0, i.jsx)("use", {
      href: "".concat(o, "#foam"),
      style: {
        fill: "url(#foam-gradient)"
      }
    })]
  })
}