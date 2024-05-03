"use strict";
a.r(t), a.d(t, {
  useEmitAppealIngestionEvent: function() {
    return u
  }
});
var l = a("470079"),
  s = a("442837"),
  n = a("626135"),
  i = a("236289"),
  o = a("451284"),
  d = a("613734"),
  r = a("800530"),
  c = a("981631");
let u = () => {
  let e = (0, s.useStateFromStores)([i.default], () => i.default.getAppealClassificationId()),
    t = (0, d.useSafetyHubClassification)(null != e ? e : c.EMPTY_STRING_SNOWFLAKE_ID),
    a = (0, o.useSafetyHubAccountStanding)(),
    u = (0, s.useStateFromStores)([i.default], () => i.default.getIsDsaEligible());
  return l.useCallback(l => {
    n.default.track(c.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: l,
      account_standing: a.state,
      classification_ids: null != e ? [Number(e)] : null,
      source: r.SafetyHubAnalyticsActionSource.AppealIngestion,
      is_dsa_eligible: u,
      violation_type: t.violationType
    })
  }, [a.state, e, t, u])
}