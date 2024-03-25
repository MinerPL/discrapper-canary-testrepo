"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("884691"),
  n = s("446674"),
  i = s("521012"),
  l = s("843455"),
  r = function(e) {
    let {
      subscriptionFilter: t
    } = e, s = (0, n.useStateFromStores)([i.default], () => i.default.getSubscriptions(!0)), r = a.useMemo(() => {
      if (null == s) return [];
      let e = Object.values(s).filter(e => !!(e.type === l.SubscriptionTypes.PREMIUM && (null == t || t(e)) && (0, i.authenticatedUserFilter)(e)) || !1);
      return e
    }, [s, t]);
    return r.sort((e, t) => {
      var s, a;
      let n = null !== (s = e.paymentGateway) && void 0 !== s ? s : 0,
        i = null !== (a = t.paymentGateway) && void 0 !== a ? a : 0;
      return n < i ? -1 : n > i ? 1 : 0
    }), r
  }