"use strict";
s.r(t), s.d(t, {
  useSubscriptionEntitlements: function() {
    return E
  },
  useUnsupportedExternalSubscriptionModalHandler: function() {
    return c
  }
});
var a = s("470079"),
  n = s("442837"),
  l = s("668781"),
  i = s("509545"),
  r = s("580130"),
  o = s("74538"),
  d = s("231338"),
  u = s("689938");

function c(e, t, s) {
  a.useEffect(() => {
    null != e && e.isPurchasedExternally && null != e.paymentGateway && !s && (l.default.show({
      title: u.default.Messages.BILLING_EXTERNAL_HEADER.format({
        paymentGatewayName: d.PaymentGatewayToFriendlyName[e.paymentGateway]
      }),
      body: u.default.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
        paymentGatewayName: d.PaymentGatewayToFriendlyName[e.paymentGateway],
        subscriptionManagementLink: (0, o.getExternalSubscriptionMethodUrl)(e.paymentGateway, "SUBSCRIPTION_MANAGEMENT")
      }),
      confirmText: u.default.Messages.OKAY
    }), t())
  }, [e])
}
let S = [];

function E(e, t) {
  let s = (0, n.useStateFromStores)([i.default], () => null != e ? i.default.get(e) : null),
    l = (0, n.useStateFromStores)([r.default], () => {
      var e;
      return null != s && null !== (e = r.default.getForSku(s.skuId)) && void 0 !== e ? e : S
    }),
    d = a.useMemo(() => Array.from(l).filter(e => {
      let {
        parentId: t,
        consumed: s
      } = e;
      return null != t && !s
    }), [l]);
  return {
    hasEntitlements: !t && null != s && null != d && d.length >= o.default.getIntervalMonths(s.interval, s.intervalCount),
    entitlements: d
  }
}