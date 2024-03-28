"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303"),
  i = r("329022"),
  l = r("464854");
t.default = function(e) {
  var t = e.colors,
    r = e.onClick,
    n = e.onSwatchHover,
    u = (0, o.default)({
      default: {
        swatches: {
          marginRight: "-10px"
        },
        swatch: {
          width: "22px",
          height: "22px",
          float: "left",
          marginRight: "10px",
          marginBottom: "10px",
          borderRadius: "4px"
        },
        clear: {
          clear: "both"
        }
      }
    });
  return a().createElement("div", {
    style: u.swatches
  }, (0, i.default)(t, function(e) {
    return a().createElement(l.Swatch, {
      key: e,
      color: e,
      style: u.swatch,
      onClick: r,
      onHover: n,
      focusStyle: {
        boxShadow: "0 0 4px " + e
      }
    })
  }), a().createElement("div", {
    style: u.clear
  }))
}