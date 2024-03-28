"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("206017"),
  i = n("689938"),
  r = n("686066");
t.default = e => {
  let {
    hasHub: t
  } = e;
  return (0, a.jsxs)("div", {
    className: r.container,
    children: [(0, a.jsx)("div", {
      className: r.iconContainer,
      children: (0, a.jsx)(l.default, {
        color: s.tokens.colors.WHITE.css
      })
    }), (0, a.jsx)(s.Text, {
      color: "header-primary",
      variant: "text-lg/semibold",
      className: r.header,
      children: t ? i.default.Messages.HUB_EMAIL_CONNECTION_ADD_HEADER : i.default.Messages.HUB_EMAIL_CONNECTION_JOIN_HEADER
    }), (0, a.jsx)(s.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      className: r.__invalid_description,
      children: t ? i.default.Messages.HUB_EMAIL_CONNECTION_ADD_DESCRIPTION : i.default.Messages.HUB_EMAIL_CONNECTION_JOIN_CARD_DESCRIPTION
    }), (0, a.jsx)("div", {
      className: r.gap
    }), (0, a.jsx)(s.Button, {
      size: s.Button.Sizes.LARGE,
      color: t ? s.Button.Colors.PRIMARY : s.Button.Colors.GREEN,
      onClick: () => (0, s.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "650233"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      }),
      children: (0, a.jsx)(s.Text, {
        variant: "text-sm/semibold",
        className: r.addButton,
        color: "none",
        children: t ? i.default.Messages.HUB_EMAIL_CONNECTION_JOIN_ANOTHER : i.default.Messages.HUB_EMAIL_CONNECTION_JOIN_MY_SCHOOOL
      })
    })]
  })
}