"use strict";
t.d(s, {
  Z: function() {
    return c
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(449226),
  a = t(231338),
  r = t(689938),
  o = t(212723);

function c(e) {
  let {
    title: s,
    details: t
  } = e;
  return (0, n.jsxs)("div", {
    className: o.simpleItemWrapper,
    children: [(0, n.jsxs)("div", {
      className: o.itemContent,
      children: [(0, n.jsx)(i.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: s
      }), "string" == typeof t ? (0, n.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: t
      }) : t]
    }), (0, n.jsx)(i.Tooltip, {
      tooltipContentClassName: o.tooltip,
      text: r.Z.Messages.GUILD_SETTINGS_SAFETY_ON_BY_DEFAULT,
      children: e => (0, n.jsx)(l.Z, {
        checked: !0,
        disabled: !0,
        onChange: a.dG,
        className: o.bringToFront,
        tooltipProps: e
      })
    })]
  })
}