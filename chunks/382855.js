"use strict";
r.r(t);
var n, a = r("451530");
var o = (n = /[^.]+$/.exec(a.default && a.default.keys && a.default.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
t.default = function(e) {
  return !!o && o in e
}