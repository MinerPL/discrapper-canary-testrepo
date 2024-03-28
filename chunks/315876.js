"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303"),
  i = r("13942"),
  l = r("464854");
t.default = function(e) {
  var t = e.color,
    r = e.onClick,
    n = e.onSwatchHover,
    u = e.active,
    s = (0, o.default)({
      default: {
        color: {
          background: t,
          width: "15px",
          height: "15px",
          float: "left",
          marginRight: "5px",
          marginBottom: "5px",
          position: "relative",
          cursor: "pointer"
        },
        dot: {
          absolute: "5px 5px 5px 5px",
          background: i.getContrastingColor(t),
          borderRadius: "50%",
          opacity: "0"
        }
      },
      active: {
        dot: {
          opacity: "1"
        }
      },
      "color-#FFFFFF": {
        color: {
          boxShadow: "inset 0 0 0 1px #ddd"
        },
        dot: {
          background: "#000"
        }
      },
      transparent: {
        dot: {
          background: "#000"
        }
      }
    }, {
      active: u,
      "color-#FFFFFF": "#FFFFFF" === t,
      transparent: "transparent" === t
    });
  return a().createElement(l.Swatch, {
    style: s.color,
    color: t,
    onClick: void 0 === r ? function() {} : r,
    onHover: n,
    focusStyle: {
      boxShadow: "0 0 4px " + t
    }
  }, a().createElement("div", {
    style: s.dot
  }))
}