"use strict";

function a(e) {
  let t;
  let n = !1;
  return function() {
    for (var a = arguments.length, s = Array(a), l = 0; l < a; l++) s[l] = arguments[l];
    return !n && (n = !0, t = e(...s)), t
  }
}
n.r(t), n.d(t, {
  callOnce: function() {
    return a
  }
}), n("222007")