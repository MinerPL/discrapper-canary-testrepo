"use strict";
n.d(e, {
  i: function() {
    return s
  }
});
var r = n(147658),
  i = n(590171);
class s {
  static __initStatic() {
    this.id = "LinkedErrors"
  }
  __init() {
    this.name = s.id
  }
  constructor(t = {}) {
    s.prototype.__init.call(this), this._key = t.key || "cause", this._limit = t.limit || 5
  }
  setupOnce(t, e) {
    t((t, n) => {
      let a = e(),
        o = a.getClient(),
        u = a.getIntegration(s);
      if (!o || !u) return t;
      let l = o.getOptions();
      return (0, r.Z)(i.GJ, l.stackParser, l.maxValueLength, u._key, u._limit, t, n), t
    })
  }
}
s.__initStatic()