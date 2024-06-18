"use strict";
n.d(t, {
  t: function() {
    return r
  }
});
var i = n(887490);

function r(e, t, n, r) {
  var s, o;
  let a = 0;
  for (let s = 0; s < n.length; s++) {
    let o = n[s];
    if (null == o) continue;
    let l = a + o.length;
    if (r <= l) {
      let n = i.C0.child(t, s),
        o = i.bN.node(e, n)[0];
      if (i.LC.isText(o)) return {
        path: n,
        offset: Math.min(Math.max(r - a, 0), o.text.length)
      }
    }
    a = l
  }
  let l = n.length - 1;
  return {
    path: i.C0.child(t, l),
    offset: null !== (o = null === (s = n[l]) || void 0 === s ? void 0 : s.length) && void 0 !== o ? o : 0
  }
}