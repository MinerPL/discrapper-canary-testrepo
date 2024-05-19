"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
  i = n("270144"),
  r = n("488915"),
  o = n("171246"),
  u = n("359610"),
  d = n("696906"),
  c = n("981631"),
  f = n("689938");

function E(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, E = (0, i.useApplication)(t), {
    listingsLoaded: _
  } = (0, i.useFetchListingsForApplication)(t, null == E ? void 0 : E.primarySkuId), m = (0, a.useStateFromStores)([r.default], () => r.default.getSubscriptionGroupListingForApplication(t), [t]), T = null != m ? (0, o.getPayableSubscriptionListing)(m) : null, {
    openModal: I,
    canOpenModal: p
  } = (0, d.default)({
    guildId: n,
    groupListingId: null == m ? void 0 : m.id,
    showBenefitsFirst: !0,
    analyticsLocation: c.AnalyticsLocations.INTERACTION_RESPONSE,
    skuId: null == T ? void 0 : T.id
  });
  return (0, s.jsx)(u.default, {
    size: l.Button.Sizes.MEDIUM,
    onClick: () => I(),
    disabled: !p || !_,
    children: f.default.Messages.INTERACTION_PREMIUM_UPSELL_CTA
  })
}