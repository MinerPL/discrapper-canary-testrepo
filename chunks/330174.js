"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303");
t.default = function(e) {
  var t = e.rgb,
    r = e.currentColor,
    n = (0, o.default)({
      default: {
        swatches: {
          border: "1px solid #B3B3B3",
          borderBottom: "1px solid #F0F0F0",
          marginBottom: "2px",
          marginTop: "1px"
        },
        new: {
          height: "34px",
          background: "rgb(" + t.r + "," + t.g + ", " + t.b + ")",
          boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
        },
        current: {
          height: "34px",
          background: r,
          boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
        },
        label: {
          fontSize: "14px",
          color: "#000",
          textAlign: "center"
        }
      }
    });
  return a().createElement("div", null, a().createElement("div", {
    style: n.label
  }, "new"), a().createElement("div", {
    style: n.swatches
  }, a().createElement("div", {
    style: n.new
  }), a().createElement("div", {
    style: n.current
  })), a().createElement("div", {
    style: n.label
  }, "current"))
}