"use strict";
t.d(s, {
  H: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var i = t(120356),
  l = t.n(i),
  a = t(481060),
  r = t(41542),
  o = t(264451),
  c = t(75775),
  d = t(689938),
  u = t(364141);
let E = e => {
  let {
    value: s,
    isPercent: t
  } = e;
  if (null == s) return null;
  let {
    formattedValue: i,
    isPositive: r
  } = (0, o.m5)(s, t);
  return (0, n.jsxs)("div", {
    className: u.trendContainer,
    children: [(0, n.jsx)(c.Z, {
      className: l()(u.chartLineIcon, {
        [u.chartLineIconNegative]: !r
      })
    }), (0, n.jsx)(a.Text, {
      variant: "text-md/normal",
      className: u.trendDescription,
      children: d.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_TREND_DESCRIPTION.format({
        value: i
      })
    })]
  })
};
s.Z = e => {
  let {
    label: s,
    sublabel: t,
    value: i,
    additionalContent: l,
    tooltip: o
  } = e;
  return (0, n.jsxs)("div", {
    className: u.container,
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsxs)("div", {
        className: u.labelContainer,
        children: [(0, n.jsx)(a.Text, {
          variant: "text-xs/medium",
          className: u.label,
          children: s
        }), null != o && (0, n.jsx)(a.Tooltip, {
          text: o,
          children: e => (0, n.jsx)(r.Z, {
            className: u.labelTooltipIcon,
            ...e
          })
        }), null != t ? (0, n.jsx)(a.Text, {
          variant: "text-xs/normal",
          className: u.sublabel,
          children: t
        }) : null]
      }), (0, n.jsx)(a.Text, {
        className: u.value,
        variant: "text-sm/normal",
        children: i
      })]
    }), l]
  })
}