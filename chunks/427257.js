"use strict";
r.r(t), r.d(t, {
  default: function() {
    return s
  }
});
var n = r("884691"),
  a = r.n(n),
  o = r("849122"),
  i = r("281859"),
  u = r("123090"),
  l = r("479023"),
  s = function(e) {
    var t = e.color,
      r = e.onClick,
      n = e.onSwatchHover,
      s = e.first,
      f = e.last,
      c = e.active,
      d = (0, o.default)({
        default: {
          color: {
            width: "40px",
            height: "24px",
            cursor: "pointer",
            background: t,
            marginBottom: "1px"
          },
          check: {
            color: i.getContrastingColor(t),
            marginLeft: "8px",
            display: "none"
          }
        },
        first: {
          color: {
            overflow: "hidden",
            borderRadius: "2px 2px 0 0"
          }
        },
        last: {
          color: {
            overflow: "hidden",
            borderRadius: "0 0 2px 2px"
          }
        },
        active: {
          check: {
            display: "block"
          }
        },
        "color-#FFFFFF": {
          color: {
            boxShadow: "inset 0 0 0 1px #ddd"
          },
          check: {
            color: "#333"
          }
        },
        transparent: {
          check: {
            color: "#333"
          }
        }
      }, {
        first: s,
        last: f,
        active: c,
        "color-#FFFFFF": "#FFFFFF" === t,
        transparent: "transparent" === t
      });
    return a.createElement(u.Swatch, {
      color: t,
      style: d.color,
      onClick: void 0 === r ? function() {} : r,
      onHover: n,
      focusStyle: {
        boxShadow: "0 0 4px " + t
      }
    }, a.createElement("div", {
      style: d.check
    }, a.createElement(l.default, null)))
  }