"use strict";
r.r(t);
var n = r("675717"),
  a = Object.create,
  o = function() {
    function e() {}
    return function(t) {
      if (!(0, n.default)(t)) return {};
      if (a) return a(t);
      e.prototype = t;
      var r = new e;
      return e.prototype = void 0, r
    }
  }();
t.default = o