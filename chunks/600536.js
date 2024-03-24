"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("37983");
n("884691");
var l = n("446674"),
  a = n("77078"),
  i = n("991254"),
  r = n("248933"),
  o = n("129408"),
  u = n("777053"),
  d = n("375010"),
  c = n("49111"),
  E = n("782340");

function f(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, f = (0, i.useApplication)(t), {
    listingsLoaded: _
  } = (0, i.useFetchListingsForApplication)(t, null == f ? void 0 : f.primarySkuId), T = (0, l.useStateFromStores)([r.default], () => r.default.getSubscriptionGroupListingForApplication(t), [t]), I = null != T ? (0, o.getPayableSubscriptionListing)(T) : null, {
    openModal: m,
    canOpenModal: N
  } = (0, d.default)({
    listing: I,
    guildId: n,
    groupListingId: null == T ? void 0 : T.id,
    showBenefitsFirst: !0,
    analyticsLocation: c.AnalyticsLocations.INTERACTION_RESPONSE
  });
  return (0, s.jsx)(u.default, {
    size: a.Button.Sizes.MEDIUM,
    onClick: () => m(),
    disabled: !N || !_,
    children: E.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
  })
}