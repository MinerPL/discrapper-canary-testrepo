"use strict";
r.r(t);
var n = r("595022"),
  a = r("483266"),
  o = r("334389");
t.default = function(e, t) {
  var r = this.__data__;
  if (r instanceof n.default) {
    var i = r.__data__;
    if (!a.default || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new o.default(i)
  }
  return r.set(e, t), this.size = r.size, this
}