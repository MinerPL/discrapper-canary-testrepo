"use strict";
t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(470079),
  i = t(766434),
  l = t(310291),
  a = t(730647),
  r = t(495298),
  o = t(198139);

function c(e, s) {
  let t = null == s ? void 0 : s.team,
    {
      payoutsByPeriod: c,
      loading: d
    } = (0, l.Z)(null == s ? void 0 : s.id, {
      groupType: o.uw.SERVER_ROLE_SUBSCRIPTION,
      teamId: null == t ? void 0 : t.id
    }),
    u = (0, a.f)("useEarningMetrics"),
    E = (0, r.Z)(e),
    {
      currentPeriod: _,
      previousPeriods: I,
      metrics: T
    } = n.useMemo(() => {
      let {
        currentPeriod: e,
        previousPeriods: s
      } = (0, i.Br)(c), t = (0, i.Uj)(e, s[0]);
      return {
        currentPeriod: e,
        previousPeriods: s,
        metrics: {
          ...t,
          subscribers: E,
          subscriberChange: t.paymentsCountChange
        }
      }
    }, [c, E]);
  return {
    loading: d || !u,
    team: t,
    currentPeriod: _,
    previousPeriods: I,
    allPeriods: c,
    metrics: T
  }
}