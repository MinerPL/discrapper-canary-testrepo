"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionsOverviewErrorType: function() {
    return s
  },
  GuildRoleSubscriptionsOverviewErrorPage: function() {
    return f
  }
});
var a, s, l = n("37983");
n("884691");
var i = n("759843"),
  r = n("77078"),
  o = n("428958"),
  u = n("782340"),
  d = n("956064"),
  c = n("12469");
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