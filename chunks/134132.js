"use strict";
s.r(t), s.d(t, {
  useMaybeFetchReferralsRemaining: function() {
    return _
  }
});
var a = s("884691"),
  r = s("446674"),
  i = s("697218"),
  n = s("719923"),
  l = s("182650"),
  o = s("324878"),
  u = s("540692"),
  d = s("1607"),
  c = s("646718");
let _ = e => {
  let t = (0, r.useStateFromStores)([i.default], () => i.default.getCurrentUser()),
    s = (0, l.useHasDiscountApplied)(),
    _ = (0, o.useHasActiveTrial)(),
    {
      enabled: E
    } = d.default.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    }),
    T = E && null != t && t.verified && (0, n.isPremiumExactly)(t, c.PremiumTypes.TIER_2) && !s && !_;
  a.useEffect(() => {
    T && u.default.checkAndFetchReferralsRemaining()
  }, [T])
}