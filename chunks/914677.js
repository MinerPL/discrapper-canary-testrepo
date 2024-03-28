"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("163681");
t.default = e => {
  let {
    percentage: t = 0,
    children: s,
    animationClassName: n,
    initialPercentage: l = 0,
    progressCircleStrokeSize: o = 2
  } = e, u = 43 + o / 2, d = 2 * Math.PI * u, [c, _] = i.useState(l);
  return i.useEffect(() => {
    let e = setTimeout(() => {
      _(t)
    }, 200);
    return () => clearTimeout(e)
  }, [t]), (0, a.jsxs)("div", {
    className: r.circleContainer,
    children: [(0, a.jsxs)("svg", {
      viewBox: "0 0 100 100",
      className: r.circleSVG,
      children: [(0, a.jsx)("circle", {
        className: r.baseProgressCircle,
        fill: "transparent",
        strokeWidth: o,
        r: "".concat(u),
        cx: "50%",
        cy: "50%"
      }), (0, a.jsx)("circle", {
        stroke: "url(#gradient)",
        strokeWidth: o,
        strokeLinecap: "round",
        strokeDasharray: "".concat(d, " ").concat(d),
        className: n,
        style: {
          strokeDashoffset: (1 - c / 100) * d
        },
        r: "".concat(u),
        cx: "50%",
        cy: "50%"
      })]
    }), (0, a.jsx)("svg", {
      width: "0",
      height: "0",
      children: (0, a.jsxs)("linearGradient", {
        id: "gradient",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%",
        children: [(0, a.jsx)("stop", {
          offset: "0%",
          style: {
            stopColor: "#FFBDF2"
          }
        }), (0, a.jsx)("stop", {
          offset: "100%",
          style: {
            stopColor: "#E742E1"
          }
        })]
      })
    }), (0, a.jsx)("div", {
      className: r.childrenContainer,
      children: s
    })]
  })
}