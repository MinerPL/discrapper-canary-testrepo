"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionCollapsibleCardBasicInfo: function() {
    return p
  }
}), n("47120");
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("765400"),
  i = n("86813"),
  r = n("826026"),
  o = n("937615"),
  u = n("817460"),
  d = n("290348"),
  c = n("367719"),
  f = n("882101"),
  h = n("689938"),
  m = n("668346");
let p = e => {
  let {
    listingId: t,
    isListingPublished: n,
    expanded: p,
    onToggleExpanded: E
  } = e, C = (0, c.default)(), [g] = d.useName(t), [S] = d.useImage(t, C), [_] = d.useSubscriptionPlan(t);
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsx)(f.GuildRoleSubscriptionCardTierImage, {
      image: S
    }), (0, a.jsxs)("div", {
      className: m.tierTextInfoContainer,
      children: [(0, a.jsx)(f.GuildRoleSubscriptionCardTierName, {
        listingName: g
      }), (0, a.jsxs)("div", {
        className: m.tierPriceContainer,
        children: [!n && (0, a.jsx)(s.MonetizationListingDraftBadge, {}), (0, a.jsxs)(l.Text, {
          variant: "text-xs/normal",
          className: m.tierPrice,
          children: [(0, o.formatPrice)(_.price, _.currency), " ", h.default.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
            period: (0, u.formatPlanInterval)({
              interval: _.interval,
              interval_count: _.interval_count
            })
          })]
        })]
      })]
    }), (0, a.jsx)(l.Clickable, {
      onClick: E,
      children: p ? (0, a.jsx)(r.default, {
        className: m.toggleButton
      }) : (0, a.jsx)(i.default, {
        className: m.toggleButton
      })
    })]
  })
}