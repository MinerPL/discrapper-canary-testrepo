var i = n(735250);
n(470079);
var s = n(481060),
  a = n(584825),
  r = n(290348),
  l = n(934826),
  o = n(660196),
  c = n(330181),
  d = n(939225),
  u = n(36246),
  _ = n(305342),
  h = n(726324),
  E = n(981631),
  I = n(689938),
  m = n(952366);
t.Z = e => {
  var t, n;
  let {
guild: g
  } = e, p = (0, a.GG)(g.id)[0];
  (0, o.Z)({
guildId: g.id,
groupListingId: null == p ? void 0 : p.id,
location: E.Sbl.ROLE_SUBSCRIPTIONS_TAB,
relevantSubscriptionListingIds: null == p ? void 0 : p.subscription_listings_ids
  });
  let {
activeSubscription: T
  } = (0, l.Z)(null == p ? void 0 : p.id), S = (0, a.YB)(g.id), C = null == S ? void 0 : S.description, {
editStateIds: f
  } = r.B7(null !== (t = null == p ? void 0 : p.id) && void 0 !== t ? t : null, g.id);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsxs)(h.Z, {
    title: I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_PAGE_GROUP_CTA.format({
      serverName: g.toString()
    }),
    description: null != C ? C : null,
    coverImageAsset: null !== (n = null == S ? void 0 : S.cover_image_asset) && void 0 !== n ? n : null,
    guild: g,
    children: [
      null != p ? (0, i.jsx)(c.Z, {
        className: m.pendingPlanChangeNotice,
        groupListingId: p.id,
        subscription: T
      }) : null,
      (0, i.jsx)(d.Z, {
        subscription: T
      })
    ]
  }),
  (0, i.jsx)(s.HeadingLevel, {
    children: (0, i.jsx)(u.Z, {
      guildId: g.id,
      children: f.map(e => {
        var t;
        return (0, i.jsx)(_.Z, {
          guildId: g.id,
          groupListingId: null !== (t = null == p ? void 0 : p.id) && void 0 !== t ? t : '',
          listingId: e,
          analyticsLocation: E.Sbl.ROLE_SUBSCRIPTIONS_TAB
        }, e);
      })
    })
  })
]
  });
};