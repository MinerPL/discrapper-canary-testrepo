"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("470079"),
  l = s("766434"),
  n = s("310291"),
  i = s("730647"),
  r = s("495298"),
  o = s("198139");

function d(e, t) {
  let s = null == t ? void 0 : t.team,
    {
      payoutsByPeriod: d,
      loading: u
    } = (0, n.default)(null == t ? void 0 : t.id, {
      groupType: o.PaymentPayoutGroupTypes.SERVER_ROLE_SUBSCRIPTION,
      teamId: null == s ? void 0 : s.id
    }),
    c = (0, i.useGroupListingsFetchContext)("useEarningMetrics"),
    E = (0, r.default)(e),
    {
      currentPeriod: _,
      previousPeriods: I,
      metrics: T
    } = a.useMemo(() => {
      let {
        currentPeriod: e,
        previousPeriods: t
      } = (0, l.splitCurrentPeriod)(d), s = (0, l.calculateMetrics)(e, t[0]);
      return {
        currentPeriod: e,
        previousPeriods: t,
        metrics: {
          ...s,
          subscribers: E,
          subscriberChange: s.paymentsCountChange
        }
      }
    }, [d, E]);
  return {
    loading: u || !c,
    team: s,
    currentPeriod: _,
    previousPeriods: I,
    allPeriods: d,
    metrics: T
  }
}