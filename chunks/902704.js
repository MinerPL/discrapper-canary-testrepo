"use strict";

function i(e, t, n, i) {
  if (e === t) return !0;
  if (void 0 === e || void 0 === t) return e === t;
  let r = Object.keys(e),
    s = Object.keys(t);
  if (r.length !== s.length) return null != i && i("shallowEqual: unequal key lengths ".concat(r.length, " !=== ").concat(s.length)), !1;
  let o = [];
  for (let s = 0; s < r.length; s++) {
    let a = r[s];
    if (e[a] !== t[a] && (null == n || !n.includes(a))) {
      if (null == i) return !1;
      o.push(a)
    }
  }
  return null != i && o.length > 0 && i("shallowEqual: unequal keys: ".concat(o.join(", "))), 0 === o.length
}

function r(e, t) {
  return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e)
}
n.d(t, {
  E: function() {
    return r
  },
  Z: function() {
    return i
  }
}), n(653041)