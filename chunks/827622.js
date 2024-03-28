"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303"),
  i = r("958491"),
  l = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  u = function(e) {
    var t = e.white,
      r = e.grey,
      u = e.size,
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
            background: "url(" + i.get(t, r, u, s.canvas) + ") center left"
          }
        }
      });
    return (0, n.isValidElement)(d) ? a().cloneElement(d, l({}, d.props, {
      style: l({}, d.props.style, p.grid)
    })) : a().createElement("div", {
      style: p.grid
    })
  };
u.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
}, t.default = u