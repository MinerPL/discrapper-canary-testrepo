"use strict";
t.r(s);
var a = t("735250");
t("470079");
var l = t("481060"),
  n = t("689938"),
  i = t("68234");
s.default = () => (0, a.jsxs)("div", {
  className: i.container,
  children: [(0, a.jsx)("div", {
    className: i.iconContainer,
    children: (0, a.jsx)("div", {
      className: i.icon
    })
  }), (0, a.jsx)(l.Text, {
    color: "header-primary",
    variant: "text-lg/semibold",
    className: i.header,
    children: n.default.Messages.HUB_EMAIL_CONNECTION_SIDEBAR_HEADER
  }), (0, a.jsx)(l.Text, {
    color: "header-secondary",
    variant: "text-sm/normal",
    className: i.description,
    children: n.default.Messages.HUB_EMAIL_CONNECTION_SIDEBAR_DESCRIPTION.format()
  })]
})