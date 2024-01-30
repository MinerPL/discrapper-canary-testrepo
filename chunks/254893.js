"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983"),
  r = s("884691"),
  n = s("456015"),
  l = s("982457"),
  i = s("154889"),
  u = s("917247"),
  o = s("157829"),
  d = s("143476"),
  c = s("646718"),
  _ = e => {
    let {
      entrypoint: t
    } = e, s = (0, u.usePremiumTrialOffer)(), _ = (0, i.usePremiumDiscountOffer)(), E = t === c.PremiumMarketingEntrypoints.ApplicationStoreHome;
    return r.useEffect(() => {
      if (null != s || null != _) {
        let e = (0, o.shouldHitUserOfferEndPoints)("PremiumMarketing");
        e ? (0, n.acknowledgeUserOffer)(s, _) : null != s && l.default.acknowledgeUserTrialOffer(s)
      }
    }, [s, _]), (0, a.jsx)(d.default, {
      isFullscreen: E
    })
  }