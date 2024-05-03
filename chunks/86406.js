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
  o = n("408263");
let l = ["#00ff00"],
  u = ["#000000", "#ed1c24"],
  d = [.7],
  _ = [{
    base: 1,
    tint: 2
  }],
  c = [0, .2],
  E = [{
    base: 1,
    tint: 0
  }, {
    base: 1,
    tint: 4
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
          id: "line-gradient",
          x1: "0",
          x2: "1",
          y1: "0",
          y2: "1",
          children: [(0, i.jsx)("stop", {
            stopColor: h[1],
            offset: "0%"
          }), (0, i.jsx)("stop", {
            stopColor: S[0],
            offset: "50%"
          }), (0, i.jsx)("stop", {
            stopColor: S[0],
            offset: "80%"
          }), (0, i.jsx)("stop", {
            stopColor: h[1],
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
      href: "".concat(o, "#heightmap-lines-0"),
      style: {
        fill: "url(#line-gradient)"
      }
    }), (0, i.jsx)("use", {
      href: "".concat(o, "#heightmap-lines-1"),
      style: {
        fill: "url(#line-gradient)"
      }
    }), (0, i.jsx)("use", {
      href: "".concat(o, "#heightmap-lines-2"),
      style: {
        fill: "url(#line-gradient)"
      }
    })]
  })
}