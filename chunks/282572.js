"use strict";
n.d(e, {
  F: function() {
    return u
  }
});
var r = n(358133),
  i = n(233863),
  s = n(416097),
  a = n(544457),
  o = n(527475);
let u = t => {
  let e;
  let n = (0, i.Y)(),
    u = (0, s.I)("FID"),
    l = t => {
      t.startTime < n.firstHiddenTime && (u.value = t.processingStart - t.startTime, u.entries.push(t), e(!0))
    },
    c = t => {
      t.forEach(l)
    },
    d = (0, a.N)("first-input", c);
  e = (0, r._)(t, u), d && (0, o.u)(() => {
    c(d.takeRecords()), d.disconnect()
  }, !0)
}