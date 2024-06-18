"use strict";
var e = r(936940),
  i = r(161581).RegExp,
  u = e(function() {
    var t = i("a", "y");
    return t.lastIndex = 2, null !== t.exec("abcd")
  }),
  c = u || e(function() {
    return !i("a", "y").sticky
  }),
  o = u || e(function() {
    var t = i("^r", "gy");
    return t.lastIndex = 2, null !== t.exec("str")
  });
t.exports = {
  BROKEN_CARET: o,
  MISSED_STICKY: c,
  UNSUPPORTED_Y: u
}