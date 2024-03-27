"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("77078"),
  a = n("850068"),
  l = n("598981"),
  o = n("991254"),
  u = n("129408"),
  c = n("95226"),
  d = n("782340"),
  f = n("187598");

function p(e) {
  let {
    listing: t
  } = e, n = (0, u.isApplicationGuildSubscription)(t.sku_flags), i = (0, u.isApplicationUserSubscription)(t.sku_flags);
  return i || n ? (0, r.jsxs)("div", {
    className: f.cta,
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-lg/bold",
      children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
    }), (0, r.jsx)(s.Heading, {
      color: "interactive-normal",
      variant: "heading-md/normal",
      children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
        applicationName: t.name
      })
    })]
  }) : null
}

function _(e) {
  var t;
  let {
    guildId: n,
    applicationId: u,
    applicationPrimarySkuId: d,
    analyticsLocation: _,
    onComplete: E,
    forcesTransitionToGuild: m
  } = e, {
    listingsLoaded: T
  } = (0, o.useFetchListingsForApplication)(u, d), {
    entitlementsLoaded: I
  } = (0, o.useFetchEntitlementsForGuild)({
    guildId: n
  }), {
    subscriptionGroupListing: h
  } = (0, o.useActiveSubscriptionListingForApplication)(u, n), g = (0, l.default)();
  i.useEffect(() => {
    g && a.fetchSubscriptions()
  }, [g]);
  let C = null == h ? void 0 : h.id,
    S = null == h ? void 0 : null === (t = h.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return T && (null == n || I) ? null == C || null == S || 0 === S.length ? null : (0, r.jsx)("div", {
    className: f.container,
    children: S.map(e => (0, r.jsxs)(i.Fragment, {
      children: [(0, r.jsx)(p, {
        listing: e
      }), (0, r.jsx)(c.default, {
        listing: e,
        guildId: n,
        groupListingId: C,
        analyticsLocation: _,
        onComplete: E,
        forcesTransitionToGuild: m
      })]
    }, e.id))
  }) : (0, r.jsx)("div", {
    className: f.loadingContainer,
    children: (0, r.jsx)(s.Spinner, {})
  })
}