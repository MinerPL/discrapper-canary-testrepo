"use strict";
r.r(t);
var n = r("132889"),
  a = r("917173"),
  o = r("44661"),
  i = r("331653"),
  l = r("165061");

function u(e) {
  var t = -1,
    r = null == e ? 0 : e.length;
  for (this.clear(); ++t < r;) {
    var n = e[t];
    this.set(n[0], n[1])
  }
}
u.prototype.clear = n.default, u.prototype.delete = a.default, u.prototype.get = o.default, u.prototype.has = i.default, u.prototype.set = l.default, t.default = u