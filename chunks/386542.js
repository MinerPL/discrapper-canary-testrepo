n.d(t, {
  k: function() {
return s;
  }
});
var r = n(442837),
  i = n(114064),
  a = n(485731);

function s(e) {
  var t, n;
  let {
demos: s,
activated: o
  } = (0, r.cj)([i.Z], () => ({
demos: i.Z.getPerksDemos(),
activated: i.Z.getActivated()
  })), l = (0, r.cj)([a.Z], () => a.Z.getState());
  return {
available: null !== (t = null == s ? void 0 : s[e]) && void 0 !== t && t,
activated: null !== (n = o[e]) && void 0 !== n && n,
hqStreamingState: l
  };
}