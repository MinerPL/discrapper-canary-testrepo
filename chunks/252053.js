"use strict";
var r = n(470079),
  i = n(844303),
  a = n(476400),
  o = n.n(a),
  s = function(e) {
    var t = (0, i.default)({
      default: {
        picker: {
          width: "20px",
          height: "20px",
          borderRadius: "22px",
          transform: "translate(-10px, -7px)",
          background: "hsl(" + Math.round(e.hsl.h) + ", 100%, 50%)",
          border: "2px white solid"
        }
      }
    });
    return r.createElement("div", {
      style: t.picker
    })
  };
s.propTypes = {
  hsl: o().shape({
    h: o().number,
    s: o().number,
    l: o().number,
    a: o().number
  })
}, s.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: .2,
    s: .5
  }
}, t.Z = s