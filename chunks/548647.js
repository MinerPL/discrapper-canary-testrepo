"use strict";
a.r(t), a.d(t, {
  useEmitAppealIngestionEvent: function() {
    return c
  }
});
var l = a("470079"),
  s = a("442837"),
  n = a("626135"),
  i = a("236289"),
  o = a("451284"),
  d = a("800530"),
  r = a("981631");
let c = () => {
  let e = (0, s.useStateFromStores)([i.default], () => i.default.getAppealClassificationId()),
    t = (0, o.useSafetyHubAccountStanding)(),
    a = (0, s.useStateFromStores)([i.default], () => i.default.getIsDsaEligible());
  return l.useCallback(l => {
    n.default.track(r.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: l,
      account_standing: t.state,
      classification_ids: null != e ? [Number(e)] : null,
      source: d.SafetyHubAnalyticsActionSource.AppealIngestion,
      is_dsa_eligible: a
    })
  }, [t.state, e, a])
}