n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), s = n(481060), l = n(270144), r = n(488915), o = n(171246), c = n(696906), d = n(981631), u = n(689938), _ = n(463329);
function E(e) {
    let {
            applicationId: t,
            guildId: n
        } = e, E = (0, l.IX)(t), {listingsLoaded: m} = (0, l.FE)(t, null == E ? void 0 : E.primarySkuId), I = (0, a.e7)([r.Z], () => r.Z.getSubscriptionGroupListingForApplication(t), [t]), T = null != I ? (0, o.Pw)(I) : null, {
            openModal: h,
            canOpenModal: N
        } = (0, c.Z)({
            guildId: n,
            groupListingId: null == I ? void 0 : I.id,
            showBenefitsFirst: !0,
            analyticsLocation: d.Sbl.INTERACTION_RESPONSE,
            skuId: null == T ? void 0 : T.id
        });
    return (0, i.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        size: s.Button.Sizes.SMALL,
        onClick: () => h(),
        disabled: !N || !m,
        children: (0, i.jsxs)('div', {
            className: _.button,
            children: [
                (0, i.jsx)(s.ShopIcon, {
                    size: 'xs',
                    color: 'white'
                }),
                u.Z.Messages.INTERACTION_PREMIUM_UPSELL_CTA
            ]
        })
    });
}
