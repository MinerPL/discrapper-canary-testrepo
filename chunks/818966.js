"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303");
t.default = function(e) {
  var t = e.hsl,
    r = e.offset,
    n = e.onClick,
    i = void 0 === n ? function() {} : n,
    l = e.active,
    u = e.first,
    s = e.last,
    f = (0, o.default)({
      default: {
        swatch: {
          height: "12px",
          background: "hsl(" + t.h + ", 50%, " + 100 * r + "%)",
          cursor: "pointer"
        }
      },
      first: {
        swatch: {
          borderRadius: "2px 0 0 2px"
        }
      },
      last: {
        swatch: {
          borderRadius: "0 2px 2px 0"
        }
      },
      active: {
        swatch: {
          transform: "scaleY(1.8)",
          borderRadius: "3.6px/2px"
        }
      }
    }, {
      active: l,
      first: u,
      last: s
    });
  return a().createElement("div", {
    style: f.swatch,
    onClick: function(e) {
      return i({
        h: t.h,
        s: .5,
        l: r,
        source: "hsl"
      }, e)
    }
  })
}