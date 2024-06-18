"use strict";
var r = n(470079),
  i = n(476400),
  a = n.n(i),
  o = n(844303),
  s = n(829307),
  u = n(464854),
  c = n(353144),
  l = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  d = function(e) {
    var t = e.width,
      n = e.height,
      i = e.onChange,
      a = e.hsl,
      c = e.direction,
      d = e.pointer,
      f = e.styles,
      p = e.className,
      h = (0, o.default)((0, s.Z)({
        default: {
          picker: {
            position: "relative",
            width: t,
            height: n
          },
          hue: {
            radius: "2px"
          }
        }
      }, void 0 === f ? {} : f));
    return r.createElement("div", {
      style: h.picker,
      className: "hue-picker " + (void 0 === p ? "" : p)
    }, r.createElement(u.PS, l({}, h.hue, {
      hsl: a,
      pointer: d,
      onChange: function(e) {
        return i({
          a: 1,
          h: e.h,
          l: .5,
          s: 1
        })
      },
      direction: c
    })))
  };
d.propTypes = {
  styles: a().object
}, d.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: c.Z,
  styles: {}
}, (0, u.t1)(d)