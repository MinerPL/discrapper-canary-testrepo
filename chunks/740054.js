"use strict";
let r;
n.d(e, {
  c: function() {
    return s
  }
});
var i = n(442853);
class s {
  constructor() {
    s.prototype.__init.call(this)
  }
  static __initStatic() {
    this.id = "FunctionToString"
  }
  __init() {
    this.name = s.id
  }
  setupOnce() {
    r = Function.prototype.toString;
    try {
      Function.prototype.toString = function(...t) {
        let e = (0, i.HK)(this) || this;
        return r.apply(e, t)
      }
    } catch (t) {}
  }
}
s.__initStatic()