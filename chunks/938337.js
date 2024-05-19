"use strict";
n.r(t), n.d(t, {
  TrackedCardDetails: function() {
    return u
  }
});
var i = n("735250"),
  s = n("470079"),
  l = n("512100"),
  r = n("906732"),
  a = n("626135"),
  o = n("981631");

function u(e) {
  let {
    appId: t,
    skuId: n,
    ...u
  } = e, {
    analyticsLocations: d
  } = (0, r.default)();
  return s.useEffect(() => {
    a.default.track(o.AnalyticEvents.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
      application_id: t,
      sku_id: n,
      location_stack: d
    })
  }, [d, t, n]), (0, i.jsx)(l.CardDetails, {
    ...u
  })
}