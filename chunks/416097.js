"use strict";
n.d(e, {
  I: function() {
    return o
  }
});
var r = n(607190),
  i = n(134954),
  s = n(726300),
  a = n(27583);
let o = (t, e) => {
  let n = (0, a.W)(),
    o = "navigate";
  return n && (o = r.m.document.prerendering || (0, s.A)() > 0 ? "prerender" : n.type.replace(/_/g, "-")), {
    name: t,
    value: void 0 === e ? -1 : e,
    rating: "good",
    delta: 0,
    entries: [],
    id: (0, i.f)(),
    navigationType: o
  }
}