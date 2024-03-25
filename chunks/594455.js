"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  i = s("43837"),
  n = e => {
    let {
      percentage: t = 0,
      children: s,
      animationClassName: n,
      initialPercentage: l = 0,
      progressCircleStrokeSize: o = 2
    } = e, u = 43 + o / 2, d = 2 * Math.PI * u, [c, _] = r.useState(l);
    return r.useEffect(() => {
      let e = setTimeout(() => {
        _(t)
      }, 200);
      return () => clearTimeout(e)
    }, [t]), (0, a.jsxs)("div", {
      className: i.circleContainer,
      children: [(0, a.jsxs)("svg", {
        viewBox: "0 0 100 100",
        className: i.circleSVG,
        children: [(0, a.jsx)("circle", {
          className: i.baseProgressCircle,
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
        className: i.childrenContainer,
        children: s
      })]
    })
  }