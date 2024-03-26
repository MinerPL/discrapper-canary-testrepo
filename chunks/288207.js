"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
let a = new Set(["nvidia"]);

function s(e) {
  for (let t of Object.keys(e)) {
    let n = e[t];
    if (null != n && null == n.error && a.has(t)) return !0
  }
  return !1
}