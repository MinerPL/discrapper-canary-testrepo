"use strict";
n.d(t, {
  k: function() {
    return o
  }
});
var i = n(442837),
  r = n(114064),
  s = n(485731);

function o(e) {
  var t, n;
  let {
    demos: o,
    activated: a
  } = (0, i.cj)([r.Z], () => ({
    demos: r.Z.getPerksDemos(),
    activated: r.Z.getActivated()
  })), l = (0, s.j$)();
  return {
    available: null !== (t = null == o ? void 0 : o[e]) && void 0 !== t && t,
    activated: null !== (n = a[e]) && void 0 !== n && n,
    hqStreamingState: l
  }
}