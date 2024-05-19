"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("346656"),
  i = n("689938"),
  r = n("72226"),
  o = n("364632");
t.default = e => {
  let {
    headerId: t,
    reapplyText: n,
    onReapply: u,
    confirmText: d,
    onWithdrawApplication: c,
    rejectionReason: f = null,
    guild: E = null
  } = e;
  return (0, a.jsxs)("div", {
    className: r.confirmation,
    children: [(0, a.jsxs)("div", {
      className: r.confirmationContent,
      children: [null !== E ? (0, a.jsx)(l.default, {
        size: l.default.Sizes.LARGER,
        guild: E,
        className: r.guildIcon
      }) : (0, a.jsx)("img", {
        alt: i.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_ICON,
        src: o,
        className: r.__invalid_verificationStateIcon
      }), (0, a.jsx)(s.Heading, {
        id: t,
        variant: "heading-xl/semibold",
        className: r.header,
        children: (null == E ? void 0 : E.name) != null ? i.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE_WITH_GUILD_NAME.format({
          guildName: E.name
        }) : i.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_TITLE
      }), null != f && "" !== f ? (0, a.jsx)(a.Fragment, {
        children: (0, a.jsxs)(s.Text, {
          variant: "text-sm/normal",
          children: [(0, a.jsx)("span", {
            className: r.rejectionReasonLabel,
            children: i.default.Messages.MEMBER_VERIFICATION_APPLICATION_REJECTED_REASON
          }), (0, a.jsx)("span", {
            className: r.rejectionReason,
            children: f
          })]
        })
      }) : null]
    }), (0, a.jsxs)("div", {
      className: r.confirmationButtonRow,
      children: [(0, a.jsx)(s.Button, {
        onClick: u,
        color: s.Button.Colors.PRIMARY,
        className: r.confirmationButton,
        children: n
      }), (0, a.jsx)(s.Button, {
        onClick: c,
        color: s.Button.Colors.RED,
        className: r.confirmationButton,
        children: d
      })]
    })]
  })
}