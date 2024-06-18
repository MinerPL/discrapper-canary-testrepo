"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.Checkboard = void 0;
var r = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  i = n(470079),
  a = u(i),
  o = u(n(844303)),
  s = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t.default = e, t
  }(n(360575));

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var c = t.Checkboard = function(e) {
  var t = e.white,
    n = e.grey,
    u = e.size,
    c = e.renderers,
    l = e.borderRadius,
    d = e.boxShadow,
    f = e.children,
    p = (0, o.default)({
      default: {
        grid: {
          borderRadius: l,
          boxShadow: d,
          absolute: "0px 0px 0px 0px",
          background: "url(" + s.get(t, n, u, c.canvas) + ") center left"
        }
      }
    });
  return (0, i.isValidElement)(f) ? a.default.cloneElement(f, r({}, f.props, {
    style: r({}, f.props.style, p.grid)
  })) : a.default.createElement("div", {
    style: p.grid
  })
};
c.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
}, t.default = c