"use strict";
n.d(t, {
  $: function() {
    return i
  }
});
let i = (e, t) => function(n, i, r) {
  return new Promise(s => {
    var o;
    e.dispatch({
      type: t,
      event: n,
      properties: i,
      flush: null !== (o = null == r ? void 0 : r.flush) && void 0 !== o && o,
      fingerprint: null == r ? void 0 : r.fingerprint,
      resolve: s
    })
  })
}