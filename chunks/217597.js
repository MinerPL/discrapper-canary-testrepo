"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("41542"),
  i = s("296229");

function r(e) {
  let {
    label: t,
    sublabel: s,
    value: r,
    additionalContent: o,
    tooltip: d
  } = e;
  return (0, a.jsxs)("div", {
    className: i.metricCard,
    "aria-label": t,
    children: [(0, a.jsxs)("div", {
      className: i.metricCardLabelContainer,
      children: [(0, a.jsx)(l.Text, {
        className: i.metricCardLabel,
        variant: "text-xs/medium",
        color: "interactive-normal",
        "aria-hidden": !0,
        children: t
      }), null != d && (0, a.jsx)(l.Tooltip, {
        text: d,
        children: e => (0, a.jsx)(n.default, {
          className: i.__invalid_labelTooltipIcon,
          ...e
        })
      }), null != s ? (0, a.jsx)(l.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: s
      }) : null]
    }), (0, a.jsx)(l.Text, {
      tag: "span",
      variant: "heading-xl/medium",
      color: "header-primary",
      children: r
    }), o]
  })
}