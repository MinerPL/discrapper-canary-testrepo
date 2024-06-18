"use strict";
n.d(t, {
  e: function() {
    return r
  }
}), n(47120);
let i = "_errors";

function r(e) {
  return function e(t, n) {
    let r = t[i];
    if (null != r && Array.isArray(r)) return r[0];
    for (let [r, s] of Object.entries(t)) {
      if (r !== i && null != s) {
        if ("object" == typeof s) return e(s, null != n ? n : r)
      }
    }
    return null
  }(e, void 0)
}