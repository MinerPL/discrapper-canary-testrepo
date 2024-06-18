"use strict";
n.d(t, {
  E$: function() {
    return o
  },
  KV: function() {
    return r
  }
});
var s = n(149765),
  l = n(605436),
  a = n(700785);
let i = (e, t, n) => {
  if (null == e.id) return !1;
  let l = a.I0({
    forceRoles: {
      [e.id]: e
    },
    context: n
  });
  return s.e$(l, t)
};

function r(e, t) {
  return Object.values(t).sort(l.W).map(e => (0, l.X0)(e))
}

function o(e, t, n, s) {
  return Object.values(t).filter(e => (0, l.GJ)(e) || i(e, s, n))
}