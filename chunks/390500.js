"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("346656"),
  i = n("689938"),
  r = n("815431"),
  o = n("586522");
t.default = e => {
  let {
    onCancel: t,
    onLeave: n,
    guild: u = null
  } = e;
  return (0, a.jsxs)("div", {
    className: r.confirmation,
    children: [(0, a.jsxs)("div", {
      className: r.confirmationContent,
      children: [null !== u ? (0, a.jsx)(l.default, {
        size: l.default.Sizes.LARGER,
        guild: u,
        className: r.guildIcon
      }) : (0, a.jsx)("img", {
        alt: i.default.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_ICON,
        src: o,
        className: r.__invalid_verificationStateIcon
      }), (0, a.jsx)(s.Heading, {
        variant: "heading-xl/semibold",
        className: r.header,
        children: (null == u ? void 0 : u.name) != null ? i.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE_WITH_GUILD_NAME.format({
          guildName: u.name
        }) : i.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE
      }), (0, a.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: i.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE
      })]
    }), (0, a.jsxs)("div", {
      className: r.confirmationButtonColumn,
      children: [(0, a.jsx)(s.Button, {
        onClick: t,
        look: s.Button.Looks.LINK,
        color: s.Button.Colors.LINK,
        size: s.Button.Sizes.SMALL,
        children: i.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION
      }), (0, a.jsx)(s.Button, {
        onClick: n,
        look: s.Button.Looks.LINK,
        color: s.Button.Colors.LINK,
        size: s.Button.Sizes.SMALL,
        children: i.default.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_MODAL_WITHDRAW_AND_LEAVE
      })]
    })]
  })
}