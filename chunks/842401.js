"use strict";
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(99690),
  o = n(689938),
  a = n(412356);
t.Z = e => {
  let {
    user: t
  } = e;
  return (0, i.jsxs)("div", {
    className: a.container,
    children: [(0, i.jsx)(r.Heading, {
      className: a.header,
      variant: "heading-sm/semibold",
      children: o.Z.Messages.REPORTS_USER_PREVIEW_TITLE
    }), (0, i.jsx)("div", {
      className: a.userContainer,
      children: (0, i.jsxs)("div", {
        className: a.userInfo,
        children: [(0, i.jsx)(s.Z, {
          className: a.userIcon,
          user: t,
          size: r.AvatarSizes.SIZE_40
        }), (0, i.jsxs)("div", {
          children: [null != t.globalName && (0, i.jsx)(r.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: t.globalName
          }), (0, i.jsx)(r.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: t.username
          })]
        })]
      })
    })]
  })
}