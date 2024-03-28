"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303"),
  i = r("464854");
t.default = (0, o.handleHover)(function(e) {
  var t = e.hover,
    r = e.color,
    n = e.onClick,
    l = e.onSwatchHover,
    u = {
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
        swatch: u
      }
    }, {
      hover: t
    });
  return a().createElement("div", {
    style: s.swatch
  }, a().createElement(i.Swatch, {
    color: r,
    onClick: n,
    onHover: l,
    focusStyle: u
  }))
})