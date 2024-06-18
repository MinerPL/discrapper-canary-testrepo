"use strict";
n.d(t, {
  _: function() {
    return d
  }
});
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(567580);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = Object.freeze({
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 4
});
class d extends(i = s.Component) {
  renderCircle() {
    let {
      strokeSize: e,
      percent: t,
      colorOverride: n,
      background: i
    } = this.props, s = Math.min(Math.max(t, 0), 100), o = (20 - e) / 2, u = o * Math.PI * 2;
    return (0, r.jsxs)("svg", {
      viewBox: "0 0 ".concat(20, " ").concat(20),
      className: l.circle,
      children: [(0, r.jsx)("circle", {
        className: l.circleBackgroundAlt,
        cx: 10,
        cy: 10,
        r: 10
      }), (0, r.jsx)("circle", {
        className: a()(l.circleBackground, i),
        cx: 10,
        cy: 10,
        r: (20 - 2 * e) / 2
      }), (0, r.jsx)("circle", {
        className: l.circleProgress,
        cx: 10,
        cy: 10,
        r: o,
        strokeWidth: "".concat(e, "px"),
        strokeLinecap: "round",
        transform: "rotate(-90 ".concat(10, " ").concat(10, ")"),
        stroke: null != n ? n : "currentColor",
        style: {
          strokeDasharray: u,
          strokeDashoffset: (1 - s / 100) * u
        }
      })]
    })
  }
  render() {
    let {
      className: e,
      children: t
    } = this.props;
    return (0, r.jsxs)("div", {
      className: a()(l.progressCircle, e),
      children: [this.renderCircle(), null != t ? (0, r.jsx)("div", {
        className: l.circleOverlay,
        children: t
      }) : null]
    })
  }
}
u(d, "StrokeSizes", _), u(d, "defaultProps", {
  strokeSize: _.MEDIUM
})