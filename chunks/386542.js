n.d(t, {
  k: function() {
return s;
  }
});
var r = n(442837),
  i = n(114064),
  a = n(485731);

function s(e) {
  let {
available: t,
activated: n
  } = (0, r.cj)([i.Z], () => ({
available: i.Z.isAvailable(e),
activated: i.Z.hasActiveDemo(e)
  }));
  return {
available: t,
activated: n,
hqStreamingState: (0, r.e7)([a.Z], () => a.Z.getState())
  };
}