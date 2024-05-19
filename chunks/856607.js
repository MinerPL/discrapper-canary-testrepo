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
  d = s("42205"),
  u = s("322221");

function c() {
  return (0, a.jsxs)("div", {
    className: d.emptyState,
    children: [(0, a.jsx)("img", {
      src: u,
      alt: "",
      className: d.image
    }), (0, a.jsx)(n.Heading, {
      className: d.topSpacing,
      variant: "heading-lg/extrabold",
      children: o.default.Messages.GUILD_IDENTITY_SETTINGS_EMPTY_STATE_TITLE
    }), (0, a.jsx)(n.Text, {
      className: d.topSpacing,
      variant: "text-md/normal",
      children: o.default.Messages.GUILD_IDENTITY_SETTINGS_EMPTY_STATE_DESCRIPTION
    }), (0, a.jsx)(n.Button, {
      className: d.topSpacing,
      onClick: () => {
        (0, i.transitionTo)(r.Routes.GUILD_DISCOVERY), l.popLayer()
      },
      children: o.default.Messages.GUILD_IDENTITY_SETTINGS_EMPTY_STATE_CTA
    })]
  })
}