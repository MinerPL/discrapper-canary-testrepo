"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
});
var a = s("37983");
s("884691");
var r = s("75196"),
  n = e => {
    let {
      className: t,
      backgroundColor: s,
      backgroundCircleSize: n,
      ...i
    } = e;
    return (0, a.jsxs)("svg", {
      width: "100%",
      height: "100%",
      viewBox: "0 0 100 100",
      fill: "none",
      style: {
        overflow: "visible"
      },
      xmlns: "http://www.w3.org/2000/svg",
      ...(0, r.default)({
        ...i
      }),
      children: [(0, a.jsx)("circle", {
        r: null != n ? n : "40%",
        cx: "50%",
        cy: "50%",
        className: s
      }), (0, a.jsxs)("g", {
        transform: "translate(50, 50) scale(0.6) translate(-51, -52)",
        children: [(0, a.jsx)("path", {
          d: "M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z",
          fill: "#FF6BFA",
          className: t
        }), (0, a.jsx)("path", {
          d: "M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z",
          fill: "#FFDEF9"
        }), (0, a.jsx)("path", {
          d: "M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z",
          fill: "#FFB0FF"
        })]
      })]
    })
  }