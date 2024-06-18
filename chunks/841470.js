"use strict";
var n = t(735250);
t(470079);
var i = t(692547),
  l = t(481060),
  a = t(41542),
  r = t(355011),
  o = t(689938),
  c = t(414131);
s.Z = e => {
  let {
    title: s,
    subtext: t = o.Z.Messages.NOT_AVAILABLE,
    localizedNumber: d,
    isTrendingUp: u,
    isTrendingDown: E,
    tooltipText: _
  } = e, I = "string" == typeof _ ? _ : s, T = null != _ ? (0, n.jsx)(l.Tooltip, {
    text: _,
    position: "top",
    "aria-label": I,
    children: e => (0, n.jsx)(a.Z, {
      ...e,
      className: c.infoIcon,
      height: 16,
      width: 16
    })
  }) : null;
  return (0, n.jsxs)("div", {
    className: c.analyticsCard,
    children: [(0, n.jsxs)(l.FormTitle, {
      className: c.analyticsCardTitle,
      children: [s, T]
    }), (0, n.jsx)("div", {
      className: c.analyticsCardContent,
      children: (0, n.jsx)(l.Heading, {
        className: null != d ? c.analyticsCardNumber : c.analyticsCardNumberNotAvailable,
        variant: "heading-xl/semibold",
        children: null != d ? d : o.Z.Messages.NOT_AVAILABLE
      })
    }), (0, n.jsxs)("div", {
      className: c.analyticsCardArrowSubText,
      children: [u ? (0, n.jsx)(r.Z, {
        className: c.trendingArrow,
        color: i.Z.unsafe_rawColors.GREEN_360.css,
        "aria-label": o.Z.Messages.TRENDING_ARROW_UP,
        width: 14,
        height: 12
      }) : null, E ? (0, n.jsx)(r.Z, {
        className: c.trendingArrowIconDown,
        color: i.Z.unsafe_rawColors.RED_400.css,
        "aria-label": o.Z.Messages.TRENDING_ARROW_DOWN,
        width: 14,
        height: 12
      }) : null, (0, n.jsx)(l.Text, {
        variant: "text-xs/normal",
        children: t
      })]
    })]
  })
}