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
  var t = Object.getOwnPropertyNames(e).length;
  return "".concat(t, " ").concat(1 !== t ? "keys" : "key")
}
var b = function(e) {
  var t = e.data,
    r = (0, n.default)(e, l);
  return o().createElement(c.default, (0, a.default)({}, r, {
    data: t,
    nodeType: "Object",
    nodeTypeIndicator: "Error" === r.nodeType ? "Error()" : "{}",
    createItemString: f,
    expandable: Object.getOwnPropertyNames(t).length > 0
  }))
};
b.propTypes = {
  data: u().object,
  nodeType: u().string.isRequired
}, t.default = b