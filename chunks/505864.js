"use strict";
var r = n(470079),
  i = n(844303),
  a = n(464854),
  o = n(751392),
  s = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  u = function(e) {
    var t = e.rgb,
      n = e.hsl,
      o = e.width,
      u = e.height,
      c = e.onChange,
      l = e.direction,
      d = e.style,
      f = e.renderers,
      p = e.pointer,
      h = e.className,
      m = (0, i.default)({
        default: {
          picker: {
            position: "relative",
            width: o,
            height: u
          },
          alpha: {
            radius: "2px",
            style: d
          }
        }
      });
    return r.createElement("div", {
      style: m.picker,
      className: "alpha-picker " + (void 0 === h ? "" : h)
    }, r.createElement(a.xV, s({}, m.alpha, {
      rgb: t,
      hsl: n,
      pointer: p,
      renderers: f,
      onChange: c,
      direction: l
    })))
  };
u.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: o.Z
}, (0, a.t1)(u)