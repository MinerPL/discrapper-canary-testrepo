"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var n = r("884691"),
  a = r.n(n),
  o = r("849122"),
  i = r("123090"),
  u = function(e) {
    var t = e.color,
      r = e.onClick,
      n = e.onSwatchHover,
      u = e.hover,
      l = e.active,
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
        hover: u,
        active: l
      });
    return a.createElement("div", {
      style: c.swatch
    }, a.createElement(i.Swatch, {
      style: c.Swatch,
      color: t,
      onClick: r,
      onHover: n,
      focusStyle: {
        boxShadow: c.Swatch.boxShadow + ", 0 0 5px " + t
      }
    }))
  };
u.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};
var l = (0, o.handleHover)(u)