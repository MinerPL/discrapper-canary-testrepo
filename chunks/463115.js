"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("481060"),
  r = s("888592"),
  o = s("689938"),
  c = s("45963");
t.default = e => {
  let {
    school: t,
    setStep: s
  } = e;
  return (0, a.jsxs)("div", {
    className: c.container,
    children: [(0, a.jsx)("div", {
      className: c.topImage
    }), (0, a.jsx)(i.Heading, {
      className: l()(c.centerText, c.header),
      variant: "heading-xl/semibold",
      children: o.default.Messages.HUB_WAITLIST_MODAL_JOINED_HEADER
    }), (0, a.jsx)("div", {
      className: c.descriptionWidth,
      children: (0, a.jsx)(i.Text, {
        className: c.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o.default.Messages.HUB_WAITLIST_MODAL_JOINED_DESCRIPTION.format({
          school: t
        })
      })
    }), (0, a.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      size: i.Button.Sizes.SMALL,
      color: i.Button.Colors.LINK,
      onClick: () => {
        s(r.HubEmailConnectionSteps.VERIFY_EMAIL)
      },
      className: c.__invalid_resendLink,
      children: o.default.Messages.HUB_EMAIL_CONFIRMATION_DIFFERENT_EMAIL
    })]
  })
}