"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303"),
  i = r("464854"),
  l = r("751392"),
  u = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  s = function(e) {
    var t = e.rgb,
      r = e.hsl,
      n = e.width,
      l = e.height,
      s = e.onChange,
      f = e.direction,
      c = e.style,
      d = e.renderers,
      p = e.pointer,
      h = e.className,
      b = (0, o.default)({
        default: {
          picker: {
            position: "relative",
            width: n,
            height: l
          },
          alpha: {
            radius: "2px",
            style: c
          }
        }
      });
    return a().createElement("div", {
      style: b.picker,
      className: "alpha-picker " + (void 0 === h ? "" : h)
    }, a().createElement(i.Alpha, u({}, b.alpha, {
      rgb: t,
      hsl: r,
      pointer: p,
      renderers: d,
      onChange: s,
      direction: f
    })))
  };
s.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: l.default
}, (0, i.ColorWrap)(s)