t.d(n, {
  H: function() {
return p;
  },
  w: function() {
return u;
  }
});
var i = t(470079),
  r = t(442837),
  o = t(668781),
  a = t(509545),
  s = t(580130),
  l = t(74538),
  c = t(231338),
  d = t(689938);

function u(e, n, t) {
  i.useEffect(() => {
null != e && e.isPurchasedExternally && null != e.paymentGateway && !t && (o.Z.show({
  title: d.Z.Messages.BILLING_EXTERNAL_HEADER.format({
    paymentGatewayName: c.Vz[e.paymentGateway]
  }),
  body: d.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
    paymentGatewayName: c.Vz[e.paymentGateway],
    subscriptionManagementLink: (0, l.JE)(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
  }),
  confirmText: d.Z.Messages.OKAY
}), n());
  }, [e]);
}
let _ = [];

function p(e, n) {
  let t = (0, r.e7)([a.Z], () => null != e ? a.Z.get(e) : null),
o = (0, r.e7)([s.Z], () => {
  var e;
  return null != t && null !== (e = s.Z.getForSku(t.skuId)) && void 0 !== e ? e : _;
}),
c = i.useMemo(() => Array.from(o).filter(e => {
  let {
    parentId: n,
    consumed: t
  } = e;
  return null != n && !t;
}), [o]);
  return {
hasEntitlements: !n && null != t && null != c && c.length >= l.ZP.getIntervalMonths(t.interval, t.intervalCount),
entitlements: c
  };
}