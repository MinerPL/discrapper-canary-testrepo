"use strict";
n.r(t), n.d(t, {
  GuildProductListingPublicCard: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var a = n("65597"),
  l = n("801765"),
  i = n("228035"),
  r = n("465869"),
  o = n("305961"),
  u = n("306160"),
  d = n("442379"),
  c = n("757515"),
  E = n("727411"),
  f = n("492724"),
  _ = n("928576"),
  T = n("739726"),
  I = n("358404"),
  m = n("875746"),
  N = n("49111");

function p(e) {
  let {
    guildProductListing: t,
    guildId: n,
    location: p,
    shouldShowFullDescriptionButton: S = !0,
    hideRoleTag: A = !1,
    lineClamp: C = 1,
    cardWidth: h,
    cardHeight: g,
    thumbnailHeight: M,
    descriptionTextVariant: O = "text-sm/normal",
    showOpaqueBackground: R = !1
  } = e, v = (0, a.useStateFromStores)([o.default], () => o.default.getGuild(n), [n]), L = (0, a.useStateFromStores)([o.default], () => {
    var e;
    return o.default.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : N.EMPTY_STRING_SNOWFLAKE_ID)
  }), P = (0, l.useListingThumbnailUrl)(t, 600), D = (0, _.useProductType)(t), x = (0, d.useCanManageGuildProduct)(v), {
    shouldHideGuildPurchaseEntryPoints: y
  } = (0, r.useShouldHideGuildPurchaseEntryPoints)(n), U = (0, _.usePrice)(t);
  if (null == v || y) return null;
  let j = () => (0, I.openGuildProductInfoModal)({
      guildId: n,
      guildProductListingId: t.id,
      analyticsLocation: p
    }),
    b = (0, s.jsx)(T.GuildProductListingPopout, {
      product: t,
      guildId: n,
      showEditProduct: x,
      showUnpublishProduct: !1,
      showCopyLink: !0,
      showTestDownload: !1,
      showDeleteProduct: !1,
      showReportProduct: !0,
      onEditProduct: x ? () => {
        E.openModal(v.id, t.id)
      } : () => {},
      onUnpublishProduct: () => {},
      onDeleteProduct: () => {},
      onReportProduct: () => {
        (0, i.openGuildShopReportModal)({
          listing: t
        })
      },
      onCopyProductLink: () => {
        (0, u.copy)((0, c.getGuildProductListingUrl)(n, t.id))
      },
      onTestDownload: () => {}
    });
  return (0, s.jsx)(f.default, {
    imageUrl: P,
    name: t.name,
    description: t.description,
    formattedPrice: U,
    role: L,
    ctaComponent: (0, s.jsx)(m.default, {
      guildId: n,
      guildProductListingId: t.id,
      sourceAnalyticsLocations: p
    }),
    productType: D,
    shouldShowFullDescriptionButton: S,
    onShowFullDescription: j,
    onTapCard: j,
    actionMenu: b,
    showOpaqueBackground: R,
    hideRoleTag: A,
    lineClamp: C,
    cardWidth: h,
    cardHeight: g,
    thumbnailHeight: M,
    descriptionTextVariant: O,
    isDraft: !t.published
  }, t.id)
}