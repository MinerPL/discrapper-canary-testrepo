"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  }
});
var E = s("470079"),
  _ = s("817460"),
  a = s("293810"),
  n = s("474936"),
  T = s("689938");

function i(e) {
  return E.useMemo(() => {
    var t;
    let s = a.TIER_TRIAL_INTERVALS.map(e => ({
        value: e,
        label: e.interval === n.SubscriptionIntervalTypes.DAY && 7 === e.interval_count ? T.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETUP_TIER_TRIAL_TIME_LIMIT_DEFAULT_OPTION.format({
          defaultLimit: (0, _.formatPlanIntervalDuration)(e)
        }) : (0, _.formatPlanIntervalDuration)(e),
        isDefault: e.interval === n.SubscriptionIntervalTypes.DAY && 7 === e.interval_count
      })),
      E = null != e ? null === (t = s.find(t => null != t.value && t.value.interval === e.interval && t.value.interval_count === e.interval_count)) || void 0 === t ? void 0 : t.value : e;
    return {
      options: s,
      selectedOption: E
    }
  }, [e])
}