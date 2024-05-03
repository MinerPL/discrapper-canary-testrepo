"use strict";
s.r(t);
var a = s("735250"),
  r = s("470079"),
  i = s("937579"),
  n = s("104494"),
  l = s("639119"),
  o = s("702328"),
  u = s("474936");
t.default = e => {
  let {
    entrypoint: t
  } = e, s = (0, l.usePremiumTrialOffer)(), d = (0, n.usePremiumDiscountOffer)(), c = t === u.PremiumMarketingEntrypoints.ApplicationStoreHome;
  return r.useEffect(() => {
    (null != s || null != d) && (0, i.acknowledgeUserOffer)(s, d)
  }, [s, d]), (0, a.jsx)(o.default, {
    isFullscreen: c,
    entrypoint: t
  })
}