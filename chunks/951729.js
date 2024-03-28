"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("476400"),
  i = r.n(o),
  l = r("844303"),
  u = r("707850"),
  s = r("464854"),
  f = r("781466"),
  c = r("522082"),
  d = function(e) {
    var t = e.hsl,
      r = e.onChange,
      n = e.pointer,
      o = e.styles,
      i = e.className,
      c = (0, l.default)((0, u.default)({
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
    return a().createElement("div", {
      style: c.wrap || {},
      className: "slider-picker " + (void 0 === i ? "" : i)
    }, a().createElement("div", {
      style: c.hue
    }, a().createElement(s.Hue, {
      style: c.Hue,
      hsl: t,
      pointer: n,
      onChange: r
    })), a().createElement("div", {
      style: c.swatches
    }, a().createElement(f.default, {
      hsl: t,
      onClick: r
    })))
  };
d.propTypes = {
  styles: i().object
}, d.defaultProps = {
  pointer: c.default,
  styles: {}
}, (0, s.ColorWrap)(d)