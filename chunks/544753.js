"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303"),
  i = r("464854"),
  l = function(e) {
    var t = e.color,
      r = e.onClick,
      n = e.onSwatchHover,
      l = e.hover,
      u = e.active,
      s = e.circleSize,
      f = e.circleSpacing,
      c = (0, o.default)({
        default: {
          swatch: {
            width: s,
            height: s,
            marginRight: f,
            marginBottom: f,
            transform: "scale(1)",
            transition: "100ms transform ease"
          },
          Swatch: {
            borderRadius: "50%",
            background: "transparent",
            boxShadow: "inset 0 0 0 " + (s / 2 + 1) + "px " + t,
            transition: "100ms box-shadow ease"
          }
        },
        hover: {
          swatch: {
            transform: "scale(1.2)"
          }
        },
        active: {
          Swatch: {
            boxShadow: "inset 0 0 0 3px " + t
          }
        }
      }, {
        hover: l,
        active: u
      });
    return a().createElement("div", {
      style: c.swatch
    }, a().createElement(i.Swatch, {
      style: c.Swatch,
      color: t,
      onClick: r,
      onHover: n,
      focusStyle: {
        boxShadow: c.Swatch.boxShadow + ", 0 0 5px " + t
      }
    }))
  };
l.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
}, t.default = (0, o.handleHover)(l)