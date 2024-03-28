"use strict";
r.r(t);
var n = r("686266"),
  a = r("185490"),
  o = r("49767"),
  i = r("627324"),
  l = r("759638");

function u(e) {
  var t = -1,
    r = null == e ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1])
  }
}
u.prototype.clear = n.default, u.prototype.delete = a.default, u.prototype.get = o.default, u.prototype.has = i.default, u.prototype.set = l.default, t.default = u