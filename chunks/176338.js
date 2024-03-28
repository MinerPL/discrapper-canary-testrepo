"use strict";
r.r(t);
var n = r("548015"),
  a = r("463619"),
  o = r("286134"),
  i = n.default ? n.default.toStringTag : void 0;
t.default = function(e) {
  return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? (0, a.default)(e) : (0, o.default)(e)
}