"use strict";
var a = r(599295),
  n = r(383237),
  s = r(470079),
  o = r(639519),
  i = r.n(o),
  c = r(863850),
  u = ["data"];

function l(e) {
  var t = Object.getOwnPropertyNames(e).length;
  return "".concat(t, " ").concat(1 !== t ? "keys" : "key")
}
var b = function(e) {
  var t = e.data,
    r = (0, n.Z)(e, u);
  return s.createElement(c.Z, (0, a.Z)({}, r, {
    data: t,
    nodeType: "Object",
    nodeTypeIndicator: "Error" === r.nodeType ? "Error()" : "{}",
    createItemString: l,
    expandable: Object.getOwnPropertyNames(t).length > 0
  }))
};
b.propTypes = {
  data: i().object,
  nodeType: i().string.isRequired
}, t.Z = b