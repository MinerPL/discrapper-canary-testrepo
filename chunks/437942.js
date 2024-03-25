"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("476263"),
  i = n("782340"),
  r = n("874426"),
  o = n("158463"),
  u = e => {
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
          className: r.verificationStateIcon
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