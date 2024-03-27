"use strict";
r.r(t), r.d(t, {
  default: function() {
    return l
  }
});
var n = r("884691"),
  a = r.n(n),
  o = r("849122"),
  i = r("480583"),
  u = r("123090"),
  l = function(e) {
    var t = e.colors,
      r = e.onClick,
      n = e.onSwatchHover,
      l = (0, o.default)({
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
    return a.createElement("div", {
      style: l.swatches
    }, (0, i.default)(t, function(e) {
      return a.createElement(u.Swatch, {
        key: e,
        color: e,
        style: l.swatch,
        onClick: r,
        onHover: n,
        focusStyle: {
          boxShadow: "0 0 4px " + e
        }
      })
    }), a.createElement("div", {
      style: l.clear
    }))
  }