"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("513891"),
  a = n("812372"),
  o = n("744648"),
  i = n("784148");

function l() {
  if ("undefined" != typeof Reflect && r) l = a(r).call(r);
  else l = function(e, t, n) {
    var r = (0, i.default)(e, t);
    if (r) {
      var a = o(r, t);
      return a.get ? a.get.call(arguments.length < 3 ? e : n) : a.value
    }
  };
  return l.apply(this, arguments)
}