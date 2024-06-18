"use strict";
n.d(e, {
  N: function() {
    return c
  }
});
var r = n(358133),
  i = n(726300),
  s = n(233863),
  a = n(416097),
  o = n(544457),
  u = n(527475);
let l = {},
  c = t => {
    let e;
    let n = (0, s.Y)(),
      c = (0, a.I)("LCP"),
      d = t => {
        let r = t[t.length - 1];
        if (r) {
          let t = Math.max(r.startTime - (0, i.A)(), 0);
          t < n.firstHiddenTime && (c.value = t, c.entries = [r], e())
        }
      },
      h = (0, o.N)("largest-contentful-paint", d);
    if (h) {
      e = (0, r._)(t, c);
      let n = () => {
        !l[c.id] && (d(h.takeRecords()), h.disconnect(), l[c.id] = !0, e(!0))
      };
      return ["keydown", "click"].forEach(t => {
        addEventListener(t, n, {
          once: !0,
          capture: !0
        })
      }), (0, u.u)(n, !0), n
    }
  }