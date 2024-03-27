"use strict";
Object.defineProperty(t, "__esModule", {
  value: !0
}), t.mergeClasses = void 0;
var n = i(r("511414")),
  a = i(r("464675")),
  o = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  };

function i(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var u = t.mergeClasses = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    r = e.default && (0, a.default)(e.default) || {};
  return t.map(function(t) {
    var a = e[t];
    return a && (0, n.default)(a, function(e, t) {
      !r[t] && (r[t] = {}), r[t] = o({}, r[t], a[t])
    }), t
  }), r
};
t.default = u