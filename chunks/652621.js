"use strict";
r.r(t);
var a = r("194649"),
  n = r("668292"),
  s = r("470079"),
  o = r.n(s),
  i = r("639519"),
  u = r.n(i),
  c = r("863850"),
  l = ["data"];

function f(e) {
  return "".concat(e.length, " ").concat(1 !== e.length ? "items" : "item")
}
var b = function(e) {
  var t = e.data,
    r = (0, n.default)(e, l);
  return o().createElement(c.default, (0, a.default)({}, r, {
    data: t,
    nodeType: "Array",
    nodeTypeIndicator: "[]",
    createItemString: f,
    expandable: t.length > 0
  }))
};
b.propTypes = {
  data: u().array
}, t.default = b