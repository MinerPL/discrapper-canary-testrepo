"use strict";
var r = n(470079),
  i = n(476400),
  a = n.n(i),
  o = n(844303),
  s = n(829307),
  u = n(464854),
  c = n(781466),
  l = n(522082),
  d = function(e) {
    var t = e.hsl,
      n = e.onChange,
      i = e.pointer,
      a = e.styles,
      l = e.className,
      d = (0, o.default)((0, s.Z)({
        default: {
          hue: {
            height: "12px",
            position: "relative"
          },
          Hue: {
            radius: "2px"
          }
        }
      }, void 0 === a ? {} : a));
    return r.createElement("div", {
      style: d.wrap || {},
      className: "slider-picker " + (void 0 === l ? "" : l)
    }, r.createElement("div", {
      style: d.hue
    }, r.createElement(u.PS, {
      style: d.Hue,
      hsl: t,
      pointer: i,
      onChange: n
    })), r.createElement("div", {
      style: d.swatches
    }, r.createElement(c.Z, {
      hsl: t,
      onClick: n
    })))
  };
d.propTypes = {
  styles: a().object
}, d.defaultProps = {
  pointer: l.Z,
  styles: {}
}, (0, u.t1)(d)