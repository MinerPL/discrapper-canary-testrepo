"use strict";
var r = n(470079),
  i = n(844303),
  a = n(958491),
  o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  s = function(e) {
    var t = e.white,
      n = e.grey,
      s = e.size,
      u = e.renderers,
      c = e.borderRadius,
      l = e.boxShadow,
      d = e.children,
      f = (0, i.default)({
        default: {
          grid: {
            borderRadius: c,
            boxShadow: l,
            absolute: "0px 0px 0px 0px",
            background: "url(" + a.U(t, n, s, u.canvas) + ") center left"
          }
        }
      });
    return (0, r.isValidElement)(d) ? r.cloneElement(d, o({}, d.props, {
      style: o({}, d.props.style, f.grid)
    })) : r.createElement("div", {
      style: f.grid
    })
  };
s.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
}, t.Z = s