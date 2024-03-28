"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionsOverviewErrorPage: function() {
    return f
  },
  GuildRoleSubscriptionsOverviewErrorType: function() {
    return s
  }
});
var a, s, l = n("735250");
n("470079");
var i = n("990547"),
  r = n("481060"),
  o = n("213609"),
  u = n("689938"),
  d = n("267826"),
  c = n("837753");
(a = s || (s = {})).GUILD_NOT_ELIGIBLE = "guild_not_eligible", a.NOT_GUILD_MEMBER = "not_guild_member";
let f = e => {
  let {
    errorType: t
  } = e;
  return (0, o.default)({
    type: i.ImpressionTypes.PAGE,
    name: i.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
    properties: {
      error_page_type: t
    }
  }), (0, l.jsx)("div", {
    className: d.errorPageContainer,
    children: (0, l.jsxs)("div", {
      className: d.errorPageContent,
      children: [(0, l.jsx)("img", {
        src: c,
        alt: "",
        className: d.errorPageIllo
      }), (0, l.jsx)(r.Heading, {
        variant: "heading-xl/extrabold",
        className: d.errorPageTitle,
        children: "guild_not_eligible" === t ? u.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_GUILD_NOT_ELIGIBLE_TITLE : u.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_NOT_GUILD_MEMBER_TITLE
      }), (0, l.jsx)(r.Text, {
        variant: "text-md/normal",
        className: d.errorPagSubtitle,
        children: "guild_not_eligible" === t ? u.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_GUILD_NOT_ELIGIBLE_SUBTITLE : u.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_NOT_GUILD_MEMBER_SUBTITLE
      })]
    })
  })
}