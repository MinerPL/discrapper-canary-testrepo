"use strict";
let i;
n.d(t, {
  y: function() {
    return s
  }
});
var r = n(37082);
try {
  i = window.sessionStorage
} catch (e) {}
try {
  delete window.sessionStorage
} catch (e) {}
let s = ! function() {
  let e = "test";
  try {
    return i.setItem(e, e), i.removeItem(e), !0
  } catch (e) {
    return !1
  }
}() ? new r.R : new class e {
  get(e, t) {
    let n = i.getItem(e);
    if (null != n) try {
      n = JSON.parse(n)
    } catch (e) {
      n = t
    } else n = t;
    return n
  }
  set(e, t) {
    i.setItem(e, JSON.stringify(t))
  }
  remove(e) {
    i.removeItem(e)
  }
  clear() {
    i.clear()
  }
}