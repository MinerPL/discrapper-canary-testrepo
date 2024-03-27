"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("837008"),
  i = n("167109"),
  r = n("176687"),
  o = n("847426"),
  u = n("430780"),
  d = n("904698"),
  c = n("900076"),
  f = n("108314"),
  E = n("337239"),
  h = n("49111"),
  _ = n("782340"),
  C = n("767588"),
  S = e => {
    var t, n;
    let {
      guild: S
    } = e, I = (0, l.useGroupListingsForGuild)(S.id)[0];
    (0, o.default)({
      guildId: S.id,
      groupListingId: null == I ? void 0 : I.id,
      location: h.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB,
      relevantSubscriptionListingIds: null == I ? void 0 : I.subscription_listings_ids
    });
    let {
      activeSubscription: m
    } = (0, r.default)(null == I ? void 0 : I.id), p = (0, l.useSubscriptionsSettings)(S.id), T = null == p ? void 0 : p.description, {
      editStateIds: g
    } = i.useEditStateIds(null !== (t = null == I ? void 0 : I.id) && void 0 !== t ? t : null, S.id);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(E.default, {
        title: _.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_GROUP_CTA.format({
          serverName: S.toString()
        }),
        description: null != T ? T : null,
        coverImageAsset: null !== (n = null == p ? void 0 : p.cover_image_asset) && void 0 !== n ? n : null,
        guild: S,
        children: [null != I ? (0, a.jsx)(u.default, {
          className: C.pendingPlanChangeNotice,
          groupListingId: I.id,
          subscription: m
        }) : null, (0, a.jsx)(d.default, {
          subscription: m
        })]
      }), (0, a.jsx)(s.HeadingLevel, {
        children: (0, a.jsx)(c.default, {
          guildId: S.id,
          children: g.map(e => {
            var t;
            return (0, a.jsx)(f.default, {
              guildId: S.id,
              groupListingId: null !== (t = null == I ? void 0 : I.id) && void 0 !== t ? t : "",
              listingId: e,
              analyticsLocation: h.AnalyticsLocations.ROLE_SUBSCRIPTIONS_TAB
            }, e)
          })
        })
      })]
    })
  }