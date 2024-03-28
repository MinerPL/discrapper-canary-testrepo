"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("481060"),
  a = n("355467"),
  l = n("887706"),
  o = n("270144"),
  u = n("171246"),
  c = n("174931"),
  d = n("689938"),
  f = n("276552");

function p(e) {
  let {
    listing: t
  } = e, n = (0, u.isApplicationGuildSubscription)(t.sku_flags);
  return (0, u.isApplicationUserSubscription)(t.sku_flags) || n ? (0, i.jsxs)("div", {
    className: f.cta,
    children: [(0, i.jsx)(s.Heading, {
      variant: "heading-lg/bold",
      children: n ? d.default.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER : d.default.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER
    }), (0, i.jsx)(s.Heading, {
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
    forcesTransitionToGuild: I
  } = e, {
    listingsLoaded: T
  } = (0, o.useFetchListingsForApplication)(u, d), {
    entitlementsLoaded: m
  } = (0, o.useFetchEntitlementsForGuild)({
    guildId: n
  }), {
    subscriptionGroupListing: S
  } = (0, o.useActiveSubscriptionListingForApplication)(u, n), g = (0, l.default)();
  r.useEffect(() => {
    g && a.fetchSubscriptions()
  }, [g]);
  let A = null == S ? void 0 : S.id,
    C = null == S ? void 0 : null === (t = S.subscription_listings) || void 0 === t ? void 0 : t.filter(e => e.published);
  return T && (null == n || m) ? null == A || null == C || 0 === C.length ? null : (0, i.jsx)("div", {
    className: f.container,
    children: C.map(e => (0, i.jsxs)(r.Fragment, {
      children: [(0, i.jsx)(p, {
        listing: e
      }), (0, i.jsx)(c.default, {
        listing: e,
        guildId: n,
        groupListingId: A,
        analyticsLocation: _,
        onComplete: E,
        forcesTransitionToGuild: I
      })]
    }, e.id))
  }) : (0, i.jsx)("div", {
    className: f.loadingContainer,
    children: (0, i.jsx)(s.Spinner, {})
  })
}