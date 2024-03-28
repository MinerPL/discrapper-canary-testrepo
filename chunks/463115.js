"use strict";
t.r(s);
var a = t("735250");
t("470079");
var l = t("803997"),
  n = t.n(l),
  i = t("481060"),
  o = t("888592"),
  r = t("689938"),
  d = t("730366");
s.default = e => {
  let {
    school: s,
    setStep: t
  } = e;
  return (0, a.jsxs)("div", {
    className: d.container,
    children: [(0, a.jsx)("div", {
      className: d.topImage
    }), (0, a.jsx)(i.Heading, {
      className: n()(d.centerText, d.header),
      variant: "heading-xl/semibold",
      children: r.default.Messages.HUB_WAITLIST_MODAL_JOINED_HEADER
    }), (0, a.jsx)("div", {
      className: d.descriptionWidth,
      children: (0, a.jsx)(i.Text, {
        className: d.centerText,
        variant: "text-sm/normal",
        color: "header-secondary",
        children: r.default.Messages.HUB_WAITLIST_MODAL_JOINED_DESCRIPTION.format({
          school: s
        })
      })
    }), (0, a.jsx)(i.Button, {
      look: i.Button.Looks.LINK,
      size: i.Button.Sizes.SMALL,
      color: i.Button.Colors.LINK,
      onClick: () => {
        t(o.HubEmailConnectionSteps.VERIFY_EMAIL)
      },
      className: d.__invalid_resendLink,
      children: r.default.Messages.HUB_EMAIL_CONFIRMATION_DIFFERENT_EMAIL
    })]
  })
}