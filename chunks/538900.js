"use strict";
a.r(t);
var l = a("735250"),
  n = a("470079"),
  s = a("481060"),
  i = a("263704"),
  d = a("689938"),
  r = a("864818");
t.default = n.memo(function() {
  return (0, l.jsxs)("div", {
    className: r.container,
    children: [(0, l.jsxs)("div", {
      className: r.divider,
      children: [(0, l.jsx)("div", {
        className: r.line
      }), (0, l.jsx)("div", {
        className: r.icon,
        children: (0, l.jsx)(i.default, {
          height: 24,
          width: 24
        })
      }), (0, l.jsx)("div", {
        className: r.line
      })]
    }), (0, l.jsx)(s.Text, {
      className: r.title,
      color: "header-primary",
      variant: "text-md/semibold",
      children: d.default.Messages.GUILD_FEED_UNREAD_DIVIDER_TITLE
    }), (0, l.jsx)(s.Text, {
      className: r.subtitle,
      color: "header-secondary",
      variant: "text-sm/normal",
      children: d.default.Messages.GUILD_FEED_UNREAD_DIVIDER_SUBTITLE
    })]
  })
})