"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("791382"),
  i = s("937615"),
  r = s("217597"),
  o = s("685389"),
  d = s("981631"),
  u = s("689938"),
  c = s("296229");

function E(e) {
  let {
    children: t,
    revenue: s,
    revenueTrend: E,
    summaryMetricLabel: _,
    summaryMetricValue: I,
    summaryMetricTrend: T,
    summaryMetricTrendIsPercent: S
  } = e;
  return (0, a.jsx)(l.FormSection, {
    title: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_HEADER,
    children: (0, a.jsxs)("div", {
      className: c.paymentInfoGroup,
      children: [(0, a.jsxs)(o.MetricsContainer, {
        children: [(0, a.jsx)(r.default, {
          label: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_REVENUE,
          value: (0, i.formatPrice)(null != s ? s : 0, d.CurrencyCodes.USD),
          additionalContent: (0, a.jsx)(n.MetricTrend, {
            value: E,
            isPercent: !0
          })
        }), (0, a.jsx)(r.default, {
          label: _,
          value: I,
          additionalContent: (0, a.jsx)(n.MetricTrend, {
            value: T,
            isPercent: S
          })
        })]
      }), t]
    })
  })
}