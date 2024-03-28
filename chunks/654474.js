"use strict";
r.r(t);
var n = r("470079"),
  a = r.n(n),
  o = r("844303"),
  i = r("476400"),
  l = r.n(i),
  u = function(e) {
    var t = (0, o.default)({
      default: {
        picker: {
          width: "20px",
          height: "20px",
          borderRadius: "22px",
          border: "2px #fff solid",
          transform: "translate(-12px, -13px)",
          background: "hsl(" + Math.round(e.hsl.h) + ", " + Math.round(100 * e.hsl.s) + "%, " + Math.round(100 * e.hsl.l) + "%)"
        }
      }
    });
    return a().createElement("div", {
      style: t.picker
    })
  };
u.propTypes = {
  hsl: l().shape({
    h: l().number,
    s: l().number,
    l: l().number,
    a: l().number
  })
}, u.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: .2,
    s: .5
  }
}, t.default = u