i.d(e, {
  Z: function() {
return c;
  },
  q: function() {
return u;
  }
}), i(47120);
var l = i(470079),
  t = i(442837),
  s = i(241159),
  r = i(496929),
  a = i(558381),
  o = i(270144),
  d = i(238);

function u(n, e) {
  l.useEffect(() => {
c(n);
  }, [n]);
  let {
subscriptionGroupListing: i
  } = (0, o.F5)(n, e), s = null == i ? void 0 : i.subscription_listings;
  return (0, t.cj)([d.Z], () => {
var e;
let {
  subscriptions: l,
  otps: t
} = d.Z.getStoreLayout(n), r = new Set(l.map(n => n.id));
return {
  subs: null !== (e = null == s ? void 0 : s.filter(n => r.has(n.id))) && void 0 !== e ? e : [],
  otps: t,
  subscriptionGroupListing: null != i ? i : void 0
};
  }, [
n,
s,
i
  ]);
}

function c(n) {
  (0, s.k)(n), (0, a.oJ)(n), (0, r.yD)(n, !1);
}