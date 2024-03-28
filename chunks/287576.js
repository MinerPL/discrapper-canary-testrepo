"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("470079"),
  l = s("725803"),
  n = s("766434"),
  i = s("310291"),
  r = s("674563"),
  o = s("198139");

function d(e) {
  var t;
  let {
    application: s,
    loading: d
  } = (0, l.default)(e, r.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS), {
    payoutsByPeriod: u,
    loading: c
  } = (0, i.default)(null == s ? void 0 : s.id, {
    groupType: o.PaymentPayoutGroupTypes.GUILD_PRODUCT,
    teamId: null == s ? void 0 : null === (t = s.team) || void 0 === t ? void 0 : t.id
  }), {
    currentPeriod: E,
    previousPeriods: _,
    metrics: I
  } = a.useMemo(() => {
    let {
      currentPeriod: e,
      previousPeriods: t
    } = (0, n.splitCurrentPeriod)(u), s = (0, n.calculateMetrics)(e, t[0]);
    return {
      currentPeriod: e,
      previousPeriods: t,
      metrics: s
    }
  }, [u]);
  return {
    loading: d || c,
    payoutsByPeriod: u,
    currentPeriod: E,
    previousPeriods: _,
    metrics: I,
    application: s
  }
}