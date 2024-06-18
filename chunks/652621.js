"use strict";
var a = r(599295),
  n = r(383237),
  s = r(470079),
  o = r(639519),
  i = r.n(o),
  c = r(863850),
  u = ["data"];

function l(e) {
  return "".concat(e.length, " ").concat(1 !== e.length ? "items" : "item")
}
var b = function(e) {
  var t = e.data,
    r = (0, n.Z)(e, u);
  return s.createElement(c.Z, (0, a.Z)({}, r, {
    data: t,
    nodeType: "Array",
    nodeTypeIndicator: "[]",
    createItemString: l,
    expandable: t.length > 0
  }))
};
b.propTypes = {
  data: i().array
}, t.Z = b