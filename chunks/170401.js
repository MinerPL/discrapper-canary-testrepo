"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("47120"), s("653041");
var a = s("658722"),
  n = s.n(a);

function i(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class r {
  getMatchingSettings(e) {
    let t = this.cache[e];
    if (null != t) return t;
    {
      let t = [];
      return this.terms.forEach(s => {
        let [a, i] = s;
        n()(e.toLowerCase(), i.toLowerCase()) && t.push(a)
      }), this.cache[e] = t, t
    }
  }
  search(e) {
    return new Promise(t => {
      t(this.getMatchingSettings(e))
    })
  }
  constructor(e) {
    i(this, "terms", void 0), i(this, "cache", void 0), this.terms = e, this.cache = {}
  }
}