"use strict";
n.d(e, {
  m: function() {
    return o
  }
});
var r = n(358133),
  i = n(416097),
  s = n(544457),
  a = n(527475);
let o = t => {
  let e;
  let n = (0, i.I)("CLS", 0),
    o = 0,
    u = [],
    l = t => {
      t.forEach(t => {
        if (!t.hadRecentInput) {
          let r = u[0],
            i = u[u.length - 1];
          o && 0 !== u.length && t.startTime - i.startTime < 1e3 && t.startTime - r.startTime < 5e3 ? (o += t.value, u.push(t)) : (o = t.value, u = [t]), o > n.value && (n.value = o, n.entries = u, e && e())
        }
      })
    },
    c = (0, s.N)("layout-shift", l);
  if (c) {
    e = (0, r._)(t, n);
    let i = () => {
      l(c.takeRecords()), e(!0)
    };
    return (0, a.u)(i), i
  }
}