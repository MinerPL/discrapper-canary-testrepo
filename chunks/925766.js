"use strict";
r.r(t);
var n = r("884691"),
  a = r.n(n),
  o = r("416037"),
  i = r.n(o),
  u = r("849122"),
  l = r("882982"),
  s = r("123090"),
  f = r("878580"),
  c = r("372007"),
  d = function(e) {
    var t = e.hsl,
      r = e.onChange,
      n = e.pointer,
      o = e.styles,
      i = e.className,
      c = (0, u.default)((0, l.default)({
        default: {
          hue: {
            height: "12px",
            position: "relative"
          },
          Hue: {
            radius: "2px"
          }
        }
      }, void 0 === o ? {} : o));
    return a.createElement("div", {
      style: c.wrap || {},
      className: "slider-picker " + (void 0 === i ? "" : i)
    }, a.createElement("div", {
      style: c.hue
    }, a.createElement(s.Hue, {
      style: c.Hue,
      hsl: t,
      pointer: n,
      onChange: r
    })), a.createElement("div", {
      style: c.swatches
    }, a.createElement(f.default, {
      hsl: t,
      onClick: r
    })))
  };
d.propTypes = {
  styles: i.object
}, d.defaultProps = {
  pointer: c.default,
  styles: {}
}, (0, s.ColorWrap)(d)