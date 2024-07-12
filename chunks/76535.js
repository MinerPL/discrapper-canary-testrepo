t.d(n, {
  H: function() {
return a;
  },
  R: function() {
return s;
  }
});
var i = t(470079),
  r = t(442837),
  o = t(584825),
  l = t(17079),
  u = t(281320);

function s(e, n) {
  let t = (0, r.e7)([u.Z], () => u.Z.getPriceTiersForGuildAndType(e, n)),
o = (0, r.e7)([u.Z], () => u.Z.getPriceTiersFetchStateForGuildAndType(e, n));
  return i.useEffect(() => {
o === u.M.NOT_FETCHED && (0, l.T)(e, n);
  }, [
e,
o,
n
  ]), {
loading: o === u.M.FETCHING,
priceTiers: t
  };
}

function a(e) {
  let {
fetchSubscriptionsSettings: n,
loading: t,
error: r
  } = (0, o.JH)();
  i.useEffect(() => {
n(e);
  }, [
n,
e
  ]);
  let l = (0, o.YB)(e);
  return {
loaded: null != l && !t,
subscriptionsSettings: l,
loading: t,
error: r
  };
}