"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303");
t.default = function(e) {
  var t = e.hsl,
    r = (0, o.default)({
      default: {
        picker: {
          width: "12px",
          height: "12px",
          borderRadius: "6px",
          boxShadow: "inset 0 0 0 1px #fff",
          transform: "translate(-6px, -6px)"
        }
      },
      "black-outline": {
        picker: {
          boxShadow: "inset 0 0 0 1px #000"
        }
      }
    }, {
      "black-outline": t.l > .5
    });
  return a().createElement("div", {
    style: r.picker
  })
}