"use strict";
var e = n(161581),
  o = n(936940),
  i = n(80270),
  u = n(192291).NATIVE_ARRAY_BUFFER_VIEWS,
  c = e.ArrayBuffer,
  f = e.Int8Array;
t.exports = !u || !o(function() {
  f(1)
}) || !o(function() {
  new f(-1)
}) || !i(function(t) {
  new f, new f(null), new f(1.5), new f(t)
}, !0) || o(function() {
  return 1 !== new f(new c(2), 1, void 0).length
})