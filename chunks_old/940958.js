"use strict";
s.r(t), s.d(t, {
  MetricTrend: function() {
    return E
  },
  default: function() {
    return _
  }
});
var a = s("37983");
s("884691");
var l = s("414456"),
  n = s.n(l),
  i = s("77078"),
  r = s("68238"),
  o = s("434014"),
  d = s("223968"),
  u = s("782340"),
  c = s("447403");
let E = e => {
  let {
    value: t,
    isPercent: s
  } = e;
  if (null == t) return null;
  let {
    formattedValue: l,
    isPositive: r
  } = (0, o.formatMetricTrend)(t, s);
  return (0, a.jsxs)("div", {
    className: c.trendContainer,
    children: [(0, a.jsx)(d.default, {
      className: n(c.chartLineIcon, {
        [c.chartLineIconNegative]: !r
      })
    }), (0, a.jsx)(i.Text, {
      variant: "text-md/normal",
      className: c.trendDescription,
      children: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_TREND_DESCRIPTION.format({
        value: l
      })
    })]
  })
};
var _ = e => {
  let {
    label: t,
    sublabel: s,
    value: l,
    additionalContent: n,
    tooltip: o
  } = e;
  return (0, a.jsxs)("div", {
    className: c.container,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsxs)("div", {
        className: c.labelContainer,
        children: [(0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          className: c.label,
          children: t
        }), null != o && (0, a.jsx)(i.Tooltip, {
          text: o,
          children: e => (0, a.jsx)(r.default, {
            className: c.labelTooltipIcon,
            ...e
          })
        }), null != s ? (0, a.jsx)(i.Text, {
          variant: "text-xs/normal",
          className: c.sublabel,
          children: s
        }) : null]
      }), (0, a.jsx)(i.Text, {
        className: c.value,
        variant: "text-sm/normal",
        children: l
      })]
    }), n]
  })
}