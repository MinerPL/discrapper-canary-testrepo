"use strict";
t.d(s, {
  Z: function() {
    return r
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(41542),
  a = t(719440);

function r(e) {
  let {
    label: s,
    sublabel: t,
    value: r,
    additionalContent: o,
    tooltip: c
  } = e;
  return (0, n.jsxs)("div", {
    className: a.metricCard,
    "aria-label": s,
    children: [(0, n.jsxs)("div", {
      className: a.metricCardLabelContainer,
      children: [(0, n.jsx)(i.Text, {
        className: a.metricCardLabel,
        variant: "text-xs/medium",
        color: "interactive-normal",
        "aria-hidden": !0,
        children: s
      }), null != c && (0, n.jsx)(i.Tooltip, {
        text: c,
        children: e => (0, n.jsx)(l.Z, {
          className: a.__invalid_labelTooltipIcon,
          ...e
        })
      }), null != t ? (0, n.jsx)(i.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: t
      }) : null]
    }), (0, n.jsx)(i.Text, {
      tag: "span",
      variant: "heading-xl/medium",
      color: "header-primary",
      children: r
    }), o]
  })
}