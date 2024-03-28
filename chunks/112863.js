"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("37234"),
  i = s("703656"),
  r = s("981631"),
  o = s("689938"),
  d = s("774065"),
  u = s("286359");

function c() {
  return (0, a.jsxs)("div", {
    className: d.wrapper,
    children: [(0, a.jsx)("img", {
      className: d.icon,
      alt: "",
      src: u
    }), (0, a.jsxs)("div", {
      className: d.info,
      children: [(0, a.jsx)(n.Text, {
        variant: "text-lg/bold",
        children: o.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PUBLIC_SERVER_TITLE
      }), (0, a.jsx)(n.Text, {
        variant: "text-sm/medium",
        color: "text-muted",
        children: o.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PUBLIC_SERVER_SUBTITLE
      })]
    }), (0, a.jsx)(n.Button, {
      color: n.Button.Colors.PRIMARY,
      onClick: () => {
        (0, i.transitionTo)(r.Routes.GUILD_DISCOVERY), (0, l.popLayer)()
      },
      size: n.Button.Sizes.LARGE,
      children: o.default.Messages.GUILD_BOOSTING_USER_SETTINGS_PUBLIC_SERVER_CTA
    })]
  })
}