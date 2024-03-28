"use strict";
s.r(t);
var a = s("470079"),
  n = s("442837"),
  i = s("78839"),
  l = s("231338");
t.default = function(e) {
  let {
    subscriptionFilter: t
  } = e, s = (0, n.useStateFromStores)([i.default], () => i.default.getSubscriptions(!0)), r = a.useMemo(() => null == s ? [] : Object.values(s).filter(e => !!(e.type === l.SubscriptionTypes.PREMIUM && (null == t || t(e)) && (0, i.authenticatedUserFilter)(e)) || !1), [s, t]);
  return r.sort((e, t) => {
    var s, a;
    let n = null !== (s = e.paymentGateway) && void 0 !== s ? s : 0,
      i = null !== (a = t.paymentGateway) && void 0 !== a ? a : 0;
    return n < i ? -1 : n > i ? 1 : 0
  }), r
}