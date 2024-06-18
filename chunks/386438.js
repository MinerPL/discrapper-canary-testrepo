"use strict";
n.d(t, {
  Z: function() {
    return a
  }
}), n(51350);
var i, r, s, o = n(149765);
class a {
  static has(e, t) {
    return (e & t) != 0
  }
  static asBasicFlag(e) {
    return o.ug(20, e)
  }
  static asBigFlag(e) {
    return !Object.hasOwn(this.cache, e) && (this.cache[e] = o.vB(e)), this.cache[e]
  }
}
s = {}, (r = "cache") in(i = a) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s