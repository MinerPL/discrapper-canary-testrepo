"use strict";
var r = n("570596"),
  a = n("548828"),
  o = n("735471"),
  i = n("28886"),
  l = TypeError;
e.exports = function(e, t) {
  var n, u = i(this),
    s = a(u.get),
    c = a(u.has),
    d = a(u.set),
    f = arguments.length > 2 ? arguments[2] : void 0;
  if (!o(t) && !o(f)) throw new l("At least one callback required");
  return r(c, u, e) ? (n = r(s, u, e), o(t) && r(d, u, e, n = t(n))) : o(f) && r(d, u, e, n = f()), n
}