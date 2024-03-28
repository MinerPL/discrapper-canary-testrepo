"use strict";
s.r(t), s.d(t, {
  MetricTrend: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var l = s("803997"),
  n = s.n(l),
  i = s("481060"),
  r = s("41542"),
  o = s("264451"),
  d = s("75775"),
  u = s("689938"),
  c = s("113172");
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
      className: n()(c.chartLineIcon, {
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
t.default = e => {
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