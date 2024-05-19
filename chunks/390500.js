"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("970606"),
  r = n("346656"),
  o = n("689938"),
  u = n("72226"),
  d = n("586522");
t.default = function(e) {
  let {
    onWithdrawApplication: t,
    guild: n = null
  } = e, c = null == n ? void 0 : n.id;
  return s.useEffect(() => {
    null != c && (0, i.trackMemberVerificationApplicationViewed)(c)
  }, [c]), (0, a.jsxs)("div", {
    className: u.confirmation,
    children: [(0, a.jsxs)("div", {
      className: u.confirmationContent,
      children: [null !== n ? (0, a.jsx)(r.default, {
        size: r.default.Sizes.LARGER,
        guild: n,
        className: u.guildIcon
      }) : (0, a.jsx)("img", {
        alt: o.default.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_ICON,
        src: d
      }), (0, a.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        className: u.header,
        children: (null == n ? void 0 : n.name) != null ? o.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE_WITH_GUILD_NAME.format({
          guildName: n.name
        }) : o.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_TITLE
      }), (0, a.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: o.default.Messages.MEMBER_VERIFICATION_APPLICATION_CONFIRMATION_SUBTITLE
      })]
    }), (0, a.jsx)("div", {
      className: u.confirmationButtonColumn,
      children: (0, a.jsx)(l.Button, {
        onClick: t,
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.LINK,
        size: l.Button.Sizes.SMALL,
        children: o.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION
      })
    })]
  })
}