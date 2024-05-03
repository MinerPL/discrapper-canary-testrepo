"use strict";
r.r(t), r("47120");
var s = r("735250"),
  i = r("470079"),
  n = r("780384"),
  l = r("410030"),
  a = r("119269"),
  o = r("475290");
let u = "url(#gradient)",
  d = (e, t) => {
    switch (e) {
      case a.ProgressCircleVariation.NITRO_LOGO:
        return t ? "0.3" : "0.2";
      case a.ProgressCircleVariation.NITRO_GEM:
      default:
        return
    }
  },
  c = e => {
    switch (e) {
      case a.ProgressCircleVariation.NITRO_GEM:
        return "var(--background-primary)";
      case a.ProgressCircleVariation.NITRO_LOGO:
        return "var(--premium-tier-2-purple)";
      default:
        return
    }
  },
  _ = (e, t) => {
    switch (t) {
      case a.ProgressCircleVariation.NITRO_GEM:
        return u;
      case a.ProgressCircleVariation.NITRO_LOGO:
        return e ? "url(#gradient_nitro_logo)" : u;
      default:
        return
    }
  };
t.default = e => {
  let {
    percentage: t = 0,
    children: r,
    animationClassName: u,
    initialPercentage: C = 0,
    progressCircleStrokeSize: f = 2,
    progressCircleVariation: p
  } = e, E = 43 + f / 2, x = 2 * Math.PI * E, [R, h] = i.useState(C);
  i.useEffect(() => {
    let e = setTimeout(() => {
      h(t)
    }, 200);
    return () => clearTimeout(e)
  }, [t]);
  let T = (0, l.default)(),
    m = (0, n.isThemeLight)(T),
    S = c(p),
    O = d(p, m),
    w = _(m, p);
  return (0, s.jsxs)("div", {
    className: o.circleContainer,
    children: [(0, s.jsxs)("svg", {
      viewBox: "0 0 100 100",
      className: o.circleSVG,
      children: [(0, s.jsx)("circle", {
        className: p === a.ProgressCircleVariation.NITRO_GEM ? o.baseProgressCircle : void 0,
        fill: "transparent",
        strokeWidth: f,
        r: "".concat(E),
        cx: "50%",
        cy: "50%",
        stroke: S,
        strokeOpacity: O
      }), (0, s.jsx)("circle", {
        stroke: w,
        strokeWidth: f,
        strokeLinecap: "round",
        strokeDasharray: "".concat(x, " ").concat(x),
        className: u,
        style: {
          strokeDashoffset: (1 - R / 100) * x
        },
        r: "".concat(E),
        cx: "50%",
        cy: "50%"
      })]
    }), (0, s.jsxs)("svg", {
      width: "0",
      height: "0",
      children: [(0, s.jsxs)("linearGradient", {
        id: "gradient",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%",
        children: [(0, s.jsx)("stop", {
          offset: "0%",
          style: {
            stopColor: "#FFBDF2"
          }
        }), (0, s.jsx)("stop", {
          offset: "100%",
          style: {
            stopColor: "#E742E1"
          }
        })]
      }), (0, s.jsxs)("linearGradient", {
        id: "gradient_nitro_logo",
        x1: "2.99995",
        y1: "67.6298",
        x2: "132.55",
        y2: "67.6298",
        gradientUnits: "userSpaceOnUse",
        children: [(0, s.jsx)("stop", {
          stopColor: "#F9A0E8"
        }), (0, s.jsx)("stop", {
          offset: "1",
          stopColor: "#E742E1"
        })]
      })]
    }), (0, s.jsx)("div", {
      className: o.childrenContainer,
      children: r
    })]
  })
}