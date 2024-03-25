"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
});
var n = r("884691"),
  a = r.n(n),
  o = r("849122"),
  i = r("937458"),
  u = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  l = function(e) {
    var t = e.white,
      r = e.grey,
      l = e.size,
      s = e.renderers,
      f = e.borderRadius,
      c = e.boxShadow,
      d = e.children,
      p = (0, o.default)({
        default: {
          grid: {
            borderRadius: f,
            boxShadow: c,
            absolute: "0px 0px 0px 0px",
            background: "url(" + i.get(t, r, l, s.canvas) + ") center left"
          }
        }
      });
    return (0, n.isValidElement)(d) ? a.cloneElement(d, u({}, d.props, {
      style: u({}, d.props.style, p.grid)
    })) : a.createElement("div", {
      style: p.grid
    })
  };
l.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
};
var s = l