"use strict";
r.r(t), r.d(t, {
  default: function() {
    return u
  }
});
var n = r("884691"),
  a = r.n(n),
  o = r("849122"),
  i = r("123090"),
  u = (0, o.handleHover)(function(e) {
    var t = e.hover,
      r = e.color,
      n = e.onClick,
      u = e.onSwatchHover,
      l = {
        position: "relative",
        zIndex: "2",
        outline: "2px solid #fff",
        boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
      },
      s = (0, o.default)({
        default: {
          swatch: {
            width: "25px",
            height: "25px",
            fontSize: "0"
          }
        },
        hover: {
          swatch: l
        }
      }, {
        hover: t
      });
    return a.createElement("div", {
      style: s.swatch
    }, a.createElement(i.Swatch, {
      color: r,
      onClick: n,
      onHover: u,
      focusStyle: l
    }))
  })