"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("476400"),
  i = r.n(o),
  l = r("844303"),
  u = r("707850"),
  s = r("464854"),
  f = r("353144"),
  c = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  d = function(e) {
    var t = e.width,
      r = e.height,
      n = e.onChange,
      o = e.hsl,
      i = e.direction,
      f = e.pointer,
      d = e.styles,
      p = e.className,
      h = (0, l.default)((0, u.default)({
        default: {
          picker: {
            position: "relative",
            width: t,
            height: r
          },
          hue: {
            radius: "2px"
          }
        }
      }, void 0 === d ? {} : d));
    return a().createElement("div", {
      style: h.picker,
      className: "hue-picker " + (void 0 === p ? "" : p)
    }, a().createElement(s.Hue, c({}, h.hue, {
      hsl: o,
      pointer: f,
      onChange: function(e) {
        return n({
          a: 1,
          h: e.h,
          l: .5,
          s: 1
        })
      },
      direction: i
    })))
  };
d.propTypes = {
  styles: i().object
}, d.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: f.default,
  styles: {}
}, (0, s.ColorWrap)(d)