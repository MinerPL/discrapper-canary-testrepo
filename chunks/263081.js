"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.Checkboard = void 0;
var n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  a = r("470079"),
  o = u(a),
  i = u(r("844303")),
  l = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
  }(r("360575"));

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var s = t.Checkboard = function(e) {
  var t = e.white,
    r = e.grey,
    u = e.size,
    s = e.renderers,
    f = e.borderRadius,
    c = e.boxShadow,
    d = e.children,
    p = (0, i.default)({
      default: {
        grid: {
          borderRadius: f,
          boxShadow: c,
          absolute: "0px 0px 0px 0px",
          background: "url(" + l.get(t, r, u, s.canvas) + ") center left"
        }
      }
    });
  return (0, a.isValidElement)(d) ? o.default.cloneElement(d, n({}, d.props, {
    style: n({}, d.props.style, p.grid)
  })) : o.default.createElement("div", {
    style: p.grid
  })
};
s.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
}, t.default = s