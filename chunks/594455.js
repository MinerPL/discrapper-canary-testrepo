"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
}), r("222007");
var n = r("37983"),
  i = r("884691"),
  s = r("43837"),
  u = e => {
    let {
      percentage: t = 0,
      children: r,
      animationClassName: u,
      initialPercentage: l = 0,
      progressCircleStrokeSize: a = 2
    } = e, o = 43 + a / 2, c = 2 * Math.PI * o, [d, E] = i.useState(l);
    return i.useEffect(() => {
      let e = setTimeout(() => {
        E(t)
      }, 200);
      return () => clearTimeout(e)
    }, [t]), (0, n.jsxs)("div", {
      className: s.circleContainer,
      children: [(0, n.jsxs)("svg", {
        viewBox: "0 0 100 100",
        className: s.circleSVG,
        children: [(0, n.jsx)("circle", {
          className: s.baseProgressCircle,
          fill: "transparent",
          strokeWidth: a,
          r: "".concat(o),
          cx: "50%",
          cy: "50%"
        }), (0, n.jsx)("circle", {
          stroke: "url(#gradient)",
          strokeWidth: a,
          strokeLinecap: "round",
          strokeDasharray: "".concat(c, " ").concat(c),
          className: u,
          style: {
            strokeDashoffset: (1 - d / 100) * c
          },
          r: "".concat(o),
          cx: "50%",
          cy: "50%"
        })]
      }), (0, n.jsx)("svg", {
        width: "0",
        height: "0",
        children: (0, n.jsxs)("linearGradient", {
          id: "gradient",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
          children: [(0, n.jsx)("stop", {
            offset: "0%",
            style: {
              stopColor: "#FFBDF2"
            }
          }), (0, n.jsx)("stop", {
            offset: "100%",
            style: {
              stopColor: "#E742E1"
            }
          })]
        })
      }), (0, n.jsx)("div", {
        className: s.childrenContainer,
        children: r
      })]
    })
  }