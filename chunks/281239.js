"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("37983");
s("884691");
var l = s("77078"),
  n = s("690343"),
  i = s("843455"),
  r = s("782340"),
  o = s("854743");

function d(e) {
  let {
    title: t,
    details: s
  } = e;
  return (0, a.jsxs)("div", {
    className: o.simpleItemWrapper,
    children: [(0, a.jsxs)("div", {
      className: o.itemContent,
      children: [(0, a.jsx)(l.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: t
      }), "string" == typeof s ? (0, a.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: s
      }) : s]
    }), (0, a.jsx)(l.Tooltip, {
      tooltipContentClassName: o.tooltip,
      text: r.default.Messages.GUILD_SETTINGS_SAFETY_ON_BY_DEFAULT,
      children: e => (0, a.jsx)(n.default, {
        checked: !0,
        disabled: !0,
        onChange: i.NOOP,
        className: o.bringToFront,
        tooltipProps: e
      })
    })]
  })
}