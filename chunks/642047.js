"use strict";
n.d(t, {
  Z: function() {
    return s
  }
}), n(47120);
var i = n(251625);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class s {
  keys() {
    return this.cachedKeys(this.version)
  }
  values() {
    return this.cachedValues(this.version)
  }
  size() {
    return this.data.size
  }
  get(e) {
    return this.data.get(e)
  }
  set(e, t) {
    this.data.get(e) !== t && (this.data.set(e, t), this.version++)
  }
  delete(e) {
    let t = this.data.delete(e);
    return t && this.version++, t
  }
  clear() {
    0 !== this.data.size && (this.data.clear(), this.version++)
  }
  constructor() {
    r(this, "version", 0), r(this, "data", new Map), r(this, "cachedValues", void 0), r(this, "cachedKeys", void 0), this.cachedValues = (0, i.oH)(e => Array.from(this.data.values())), this.cachedKeys = (0, i.oH)(e => Array.from(this.data.keys()))
  }
}