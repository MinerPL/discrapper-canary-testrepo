"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("43837"),
  i = e => {
    let {
      percentage: t = 0,
      children: s,
      animationClassName: i,
      initialPercentage: l = 0,
      progressCircleStrokeSize: o = 2
    } = e, u = 43 + o / 2, d = 2 * Math.PI * u, [c, _] = r.useState(l);
    return r.useEffect(() => {
      let e = setTimeout(() => {
        _(t)
      }, 200);
      return () => clearTimeout(e)
    }, [t]), (0, a.jsxs)("div", {
      className: n.circleContainer,
      children: [(0, a.jsxs)("svg", {
        viewBox: "0 0 100 100",
        className: n.circleSVG,
        children: [(0, a.jsx)("circle", {
          className: n.baseProgressCircle,
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
          className: i,
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
        className: n.childrenContainer,
        children: s
      })]
    })
  }