"use strict";
var e = r("581031"),
  i = r("959318"),
  u = r("714050"),
  c = r("676125"),
  o = e("".charAt),
  s = e("".charCodeAt),
  a = e("".slice),
  f = function(t) {
    return function(n, r) {
      var e, f, l = u(c(n)),
        h = i(r),
        v = l.length;
      return h < 0 || h >= v ? t ? "" : void 0 : (e = s(l, h)) < 55296 || e > 56319 || h + 1 === v || (f = s(l, h + 1)) < 56320 || f > 57343 ? t ? o(l, h) : e : t ? a(l, h, h + 2) : (e - 55296 << 10) + (f - 56320) + 65536
    }
  };
t.exports = {
  codeAt: f(!1),
  charAt: f(!0)
}