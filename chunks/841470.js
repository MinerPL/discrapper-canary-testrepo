"use strict";
s.r(t);
var a = s("735250");
s("470079");
var l = s("692547"),
  n = s("481060"),
  i = s("41542"),
  r = s("355011"),
  o = s("689938"),
  d = s("458127");
t.default = e => {
  let {
    title: t,
    subtext: s = o.default.Messages.NOT_AVAILABLE,
    localizedNumber: u,
    isTrendingUp: c,
    isTrendingDown: E,
    tooltipText: _
  } = e, I = "string" == typeof _ ? _ : t, T = null != _ ? (0, a.jsx)(n.Tooltip, {
    text: _,
    position: "top",
    "aria-label": I,
    children: e => (0, a.jsx)(i.default, {
      ...e,
      className: d.infoIcon,
      height: 16,
      width: 16
    })
  }) : null;
  return (0, a.jsxs)("div", {
    className: d.analyticsCard,
    children: [(0, a.jsxs)(n.FormTitle, {
      className: d.analyticsCardTitle,
      children: [t, T]
    }), (0, a.jsx)("div", {
      className: d.analyticsCardContent,
      children: (0, a.jsx)(n.Heading, {
        className: null != u ? d.analyticsCardNumber : d.analyticsCardNumberNotAvailable,
        variant: "heading-xl/semibold",
        children: null != u ? u : o.default.Messages.NOT_AVAILABLE
      })
    }), (0, a.jsxs)("div", {
      className: d.analyticsCardArrowSubText,
      children: [c ? (0, a.jsx)(r.default, {
        className: d.trendingArrow,
        color: l.default.unsafe_rawColors.GREEN_360.css,
        "aria-label": o.default.Messages.TRENDING_ARROW_UP,
        width: 14,
        height: 12
      }) : null, E ? (0, a.jsx)(r.default, {
        className: d.trendingArrowIconDown,
        color: l.default.unsafe_rawColors.RED_400.css,
        "aria-label": o.default.Messages.TRENDING_ARROW_DOWN,
        width: 14,
        height: 12
      }) : null, (0, a.jsx)(n.Text, {
        variant: "text-xs/normal",
        children: s
      })]
    })]
  })
}