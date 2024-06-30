n.d(t, {
    H: function () {
        return f;
    }
});
var i = n(735250);
n(470079);
var a = n(399606), s = n(166081), l = n(54797), r = n(674180), o = n(430824), c = n(572004), d = n(267101), u = n(863663), _ = n(676651), E = n(623488), m = n(942833), I = n(391181), T = n(964793), h = n(226060), N = n(981631);
function f(e) {
    let {
            guildProductListing: t,
            guildId: n,
            location: f,
            shouldShowFullDescriptionButton: p = !0,
            hideRoleTag: C = !1,
            lineClamp: g = 1,
            cardWidth: S,
            cardHeight: A,
            thumbnailHeight: x,
            descriptionTextVariant: O = 'text-sm/normal',
            showOpaqueBackground: R = !1
        } = e, M = (0, a.e7)([o.Z], () => o.Z.getGuild(n), [n]), v = (0, a.e7)([o.Z], () => {
            var e;
            return o.Z.getRole(n, null !== (e = null == t ? void 0 : t.role_id) && void 0 !== e ? e : N.lds);
        }), L = (0, s.U)(t, 600), Z = (0, m.C)(t), P = (0, d.SO)(M), {shouldHideGuildPurchaseEntryPoints: b} = (0, r.uP)(n), D = (0, m.k)(t);
    if (null == M || b)
        return null;
    let j = () => (0, T.e)({
            guildId: n,
            guildProductListingId: t.id,
            analyticsLocation: f
        }), U = (0, i.jsx)(I.m, {
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
            } : () => {
            },
            onUnpublishProduct: () => {
            },
            onDeleteProduct: () => {
            },
            onReportProduct: () => {
                (0, l.x)({ listing: t });
            },
            onCopyProductLink: () => {
                (0, c.JG)((0, u.ar)(n, t.id));
            },
            onTestDownload: () => {
            }
        });
    return (0, i.jsx)(E.Z, {
        imageUrl: L,
        name: t.name,
        description: t.description,
        formattedPrice: D,
        role: v,
        ctaComponent: (0, i.jsx)(h.Z, {
            guildId: n,
            guildProductListingId: t.id,
            sourceAnalyticsLocations: f
        }),
        productType: Z,
        shouldShowFullDescriptionButton: p,
        onShowFullDescription: j,
        onTapCard: j,
        actionMenu: U,
        showOpaqueBackground: R,
        hideRoleTag: C,
        lineClamp: g,
        cardWidth: S,
        cardHeight: A,
        thumbnailHeight: x,
        descriptionTextVariant: O,
        isDraft: !t.published
    }, t.id);
}
