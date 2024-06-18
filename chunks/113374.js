"use strict";
var r = n(926080),
  i = n(97445),
  a = n(175056),
  o = n(429296),
  s = n(725180),
  u = n(17071);
t.Z = function(e, t, n) {
  t = (0, r.Z)(t, e);
  for (var c = -1, l = t.length, d = !1; ++c < l;) {
    var f = (0, u.Z)(t[c]);
    if (!(d = null != e && n(e, f))) break;
    e = e[f]
  }
  return d || ++c != l ? d : !!(l = null == e ? 0 : e.length) && (0, s.Z)(l) && (0, o.Z)(f, l) && ((0, a.Z)(e) || (0, i.Z)(e))
}