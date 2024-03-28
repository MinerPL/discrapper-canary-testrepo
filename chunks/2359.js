"use strict";
s.r(t);
var a = s("735250"),
  i = s("470079"),
  r = s("937579"),
  n = s("316941"),
  l = s("104494"),
  o = s("639119"),
  u = s("633361"),
  d = s("702328"),
  c = s("474936");
t.default = e => {
  let {
    entrypoint: t
  } = e, s = (0, o.usePremiumTrialOffer)(), _ = (0, l.usePremiumDiscountOffer)(), E = t === c.PremiumMarketingEntrypoints.ApplicationStoreHome;
  return i.useEffect(() => {
    (null != s || null != _) && ((0, u.shouldHitUserOfferEndPoints)("PremiumMarketing") ? (0, r.acknowledgeUserOffer)(s, _) : null != s && n.default.acknowledgeUserTrialOffer(s))
  }, [s, _]), (0, a.jsx)(d.default, {
    isFullscreen: E
  })
}