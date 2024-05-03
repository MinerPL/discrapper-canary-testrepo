"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("346656"),
  i = n("689938"),
  r = n("891054"),
  o = n("586522");
t.default = e => {
  let {
    onWithdrawApplication: t,
    guild: n = null
  } = e;
  return (0, a.jsxs)("div", {
    className: r.confirmation,
    children: [(0, a.jsxs)("div", {
      className: r.confirmationContent,
      children: [null !== n ? (0, a.jsx)(l.default, {
        size: l.default.Sizes.LARGER,
        guild: n,
        className: r.guildIcon
      }) : (0, a.jsx)("img", {
        alt: i.default.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_ICON,
        src: o,
        className: r.__invalid_verificationStateIcon
      }), (0, a.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        className: r.header,
        children: (null == n ? void 0 : n.name) != null ? i.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE_WITH_GUILD_NAME.format({
          guildName: n.name
        }) : i.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: i.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE
      })]
    }), (0, a.jsx)("div", {
      className: r.confirmationButtonColumn,
      children: (0, a.jsx)(s.Button, {
        onClick: t,
        look: s.Button.Looks.LINK,
        color: s.Button.Colors.LINK,
        size: s.Button.Sizes.SMALL,
        children: i.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION
      })
    })]
  })
}