"use strict";
var n = e(962557),
  o = Function.prototype,
  i = o.apply,
  a = o.call;
t.exports = "object" == typeof Reflect && Reflect.apply || (n ? a.bind(i) : function() {
  return a.apply(i, arguments)
})