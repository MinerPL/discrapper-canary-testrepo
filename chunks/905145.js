"use strict";
var e = n(581031),
  o = Error,
  i = e("".replace),
  u = String(o("zxcasd").stack),
  c = /\n\s*at [^:]*:[^\n]*/,
  f = c.test(u);
t.exports = function(t, r) {
  if (f && "string" == typeof t && !o.prepareStackTrace)
    for (; r--;) t = i(t, c, "");
  return t
}