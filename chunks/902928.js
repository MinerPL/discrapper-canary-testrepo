"use strict";
a.r(t), a.d(t, {
  ActivateDeviceSuccess: function() {
    return c
  }
});
var n = a("735250"),
  r = a("470079"),
  s = a("159277"),
  o = a("481060"),
  i = a("689938"),
  u = a("162002"),
  l = a("290661");
let c = e => {
  let {
    onComplete: t,
    data: a
  } = e, c = null, d = (0, r.useId)();
  return (a.clientId === s.ConsoleOAuthApplications.PLAYSTATION_APPLICATION_ID || a.clientId === s.ConsoleOAuthApplications.PLAYSTATION_STAGING_APPLICATION_ID) && (c = (0, n.jsx)("img", {
    src: l,
    width: "241",
    height: "118",
    alt: "",
    "aria-labelledby": d
  })), (0, n.jsxs)("div", {
    className: u.bodyContent,
    children: [c, (0, n.jsx)(o.Heading, {
      className: u.title,
      variant: "heading-xl/extrabold",
      id: d,
      children: i.default.Messages.ACTIVATE_DEVICE_SUCCESS_TITLE
    }), null != a.twoWayLinkCode ? (0, n.jsx)(o.Text, {
      tag: "p",
      variant: "text-md/normal",
      color: "header-secondary",
      children: i.default.Messages.ACTIVATE_DEVICE_SUCCESS_TWO_WAY_BODY
    }) : null, (0, n.jsx)(o.Button, {
      className: u.footerButton,
      color: o.Button.Colors.BRAND,
      onClick: t,
      children: i.default.Messages.DONE
    })]
  })
}