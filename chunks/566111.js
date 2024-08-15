n.d(t, {
  Z: function() {
return o;
  }
}), n(47120);
var r = n(470079),
  s = n(442837),
  i = n(365943),
  l = n(25251),
  a = n(223143);

function o() {
  let {
isFetching: e,
error: t,
categories: n,
purchases: o
  } = (0, a.Z)(), [c, d, u] = (0, s.Wu)([l.Z], () => [
l.Z.isFetching,
l.Z.fetchError,
l.Z.profileEffects
  ]);
  return r.useEffect(() => {
(0, i.z)(!0);
  }, []), {
isFetching: e || c,
error: null != t ? t : d,
profileEffects: u,
categories: n,
purchases: o
  };
}