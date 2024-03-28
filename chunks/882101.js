"use strict";
n.r(t), n.d(t, {
  GuildRoleSubscriptionCardBasicInfo: function() {
    return m
  },
  GuildRoleSubscriptionCardTierImage: function() {
    return h
  },
  GuildRoleSubscriptionCardTierName: function() {
    return f
  }
}), n("47120");
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("765400"),
  i = n("937615"),
  r = n("817460"),
  o = n("290348"),
  u = n("367719"),
  d = n("689938"),
  c = n("354825");
let f = e => {
  let {
    listingName: t
  } = e;
  return (0, a.jsx)(l.Heading, {
    variant: "text-md/normal",
    color: "interactive-active",
    className: c.tierName,
    children: t
  })
};

function h(e) {
  let {
    image: t
  } = e;
  return null == t ? null : (0, a.jsx)("img", {
    src: t,
    alt: "",
    className: c.tierImage
  })
}
let m = e => {
  let {
    listingId: t,
    isListingPublished: n
  } = e, m = (0, u.default)(), [p] = o.useName(t), [E] = o.useImage(t, m), [C] = o.useSubscriptionPlan(t);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(f, {
      listingName: p
    }), (0, a.jsx)(h, {
      image: E
    }), !n && (0, a.jsx)("div", {
      className: c.draftBadgeContainer,
      children: (0, a.jsx)(s.MonetizationListingDraftBadge, {})
    }), (0, a.jsx)(l.Text, {
      variant: "heading-xl/semibold",
      className: c.tierPrice,
      tag: "div",
      children: (0, i.formatPrice)(C.price, C.currency)
    }), (0, a.jsx)(l.Text, {
      variant: "text-xs/normal",
      color: "interactive-normal",
      className: c.tierPeriod,
      children: d.default.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
        period: (0, r.formatPlanInterval)({
          interval: C.interval,
          interval_count: C.interval_count
        })
      })
    })]
  })
}