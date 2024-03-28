"use strict";
s.r(t), s.d(t, {
  default: function() {
    return d
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("449226"),
  i = s("231338"),
  r = s("689938"),
  o = s("893079");

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