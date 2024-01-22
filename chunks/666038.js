"use strict";
var i;
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007"), i = class e {
  toJS() {
    return {
      ...this
    }
  }
  set(e, t) {
    return this[e] !== t ? new this.constructor({
      ...this,
      [e]: t
    }) : this
  }
  merge(e) {
    let t = null;
    for (let n in e) {
      if (!e.hasOwnProperty(n)) continue;
      let i = e[n];
      this[n] !== i && (null == t && (t = {
        ...this
      }), t[n] = e[n])
    }
    return null != t ? new this.constructor(t) : this
  }
  update(t, n, i) {
    null == i && (i = n, n = void 0);
    let s = this[t];
    return s instanceof e || (s instanceof Array ? s = [...s] : s instanceof Object && (s = {
      ...s
    })), void 0 === s && (s = n), this.set(t, i(s))
  }
}