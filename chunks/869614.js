"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("47120");
let l = new Set(["nvidia"]);

function r(e) {
  for (let t of Object.keys(e)) {
    let n = e[t];
    if (null != n && null == n.error && l.has(t)) return !0
  }
  return !1
}