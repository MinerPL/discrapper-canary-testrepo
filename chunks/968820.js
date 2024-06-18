"use strict";
t.d(s, {
  Z: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(791382),
  a = t(937615),
  r = t(217597),
  o = t(685389),
  c = t(981631),
  d = t(689938),
  u = t(719440);

function E(e) {
  let {
    children: s,
    revenue: t,
    revenueTrend: E,
    summaryMetricLabel: _,
    summaryMetricValue: I,
    summaryMetricTrend: T,
    summaryMetricTrendIsPercent: N
  } = e;
  return (0, n.jsx)(i.FormSection, {
    title: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_HEADER,
    children: (0, n.jsxs)("div", {
      className: u.paymentInfoGroup,
      children: [(0, n.jsxs)(o.H, {
        children: [(0, n.jsx)(r.Z, {
          label: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_REVENUE,
          value: (0, a.T4)(null != t ? t : 0, c.pKx.USD),
          additionalContent: (0, n.jsx)(l.H, {
            value: E,
            isPercent: !0
          })
        }), (0, n.jsx)(r.Z, {
          label: _,
          value: I,
          additionalContent: (0, n.jsx)(l.H, {
            value: T,
            isPercent: N
          })
        })]
      }), s]
    })
  })
}