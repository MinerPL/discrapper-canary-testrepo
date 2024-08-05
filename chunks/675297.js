n.d(t, {
  H: function() {
return C;
  }
});
var i = n(735250);
n(470079);
var s = n(399606),
  a = n(166081),
  r = n(54797),
  l = n(674180),
  o = n(430824),
  c = n(572004),
  u = n(267101),
  d = n(863663),
  _ = n(676651),
  E = n(623488),
  I = n(942833),
  m = n(391181),
  T = n(964793),
  h = n(226060),
  N = n(981631);

function C(e) {
  let {
guildProductListing: t,
guildId: n,
location: C,
shouldShowFullDescriptionButton: f = !0,
hideRoleTag: p = !1,
lineClamp: g = 1,
cardWidth: S,
cardHeight: A,
thumbnailHeight: R,
descriptionTextVariant: O = 'text-sm/normal',
showOpaqueBackground: x = !1
  } = e, M = (0, s.e7)([o.Z], () => o.Z.getGuild(n), [n]), v = (0, s.e7)([o.Z], () => {
var e;
return o.Z.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : N.lds);
  }), L = (0, a.U)(t, 600), Z = (0, I.C)(t), P = (0, u.SO)(M), {
shouldHideGuildPurchaseEntryPoints: D
  } = (0, l.uP)(n), b = (0, I.k)(t);
  if (null == M || D)
return null;
  let j = () => (0, T.e)({
  guildId: n,
  guildProductListingId: t.id,
  analyticsLocation: C
}),
U = (0, i.jsx)(m.m, {
  product: t,
  guildId: n,
  showEditProduct: P,
  showUnpublishProduct: !1,
  showCopyLink: !0,
  showTestDownload: !1,
  showDeleteProduct: !1,
  showReportProduct: !0,
  onEditProduct: P ? () => {
    _.h(M.id, t.id);
  } : () => {},
  onUnpublishProduct: () => {},
  onDeleteProduct: () => {},
  onReportProduct: () => {
    (0, r.x)({
      listing: t
    });
  },
  onCopyProductLink: () => {
    (0, c.JG)((0, d.ar)(n, t.id));
  },
  onTestDownload: () => {}
});
  return (0, i.jsx)(E.Z, {
imageUrl: L,
name: t.name,
description: t.description,
formattedPrice: b,
role: v,
ctaComponent: (0, i.jsx)(h.Z, {
  guildId: n,
  guildProductListingId: t.id,
  sourceAnalyticsLocations: C
}),
productType: Z,
shouldShowFullDescriptionButton: f,
onShowFullDescription: j,
onTapCard: j,
actionMenu: U,
showOpaqueBackground: x,
hideRoleTag: p,
lineClamp: g,
cardWidth: S,
cardHeight: A,
thumbnailHeight: R,
descriptionTextVariant: O,
isDraft: !t.published
  }, t.id);
}