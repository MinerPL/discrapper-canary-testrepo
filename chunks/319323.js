n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(481060),
    r = n(728345),
    l = n(270144),
    o = n(488915),
    c = n(171246),
    u = n(696906),
    d = n(981631),
    _ = n(689938),
    E = n(259028);
function I(e) {
    let { applicationId: t, guildId: n } = e,
        { data: I } = (0, r.I)(t),
        { listingsLoaded: m } = (0, l.FE)(t, null == I ? void 0 : I.primarySkuId),
        T = (0, s.e7)([o.Z], () => o.Z.getSubscriptionGroupListingForApplication(t), [t]),
        h = null != T ? (0, c.Pw)(T) : null,
        { openModal: N, canOpenModal: C } = (0, u.Z)({
            guildId: n,
            groupListingId: null == T ? void 0 : T.id,
            showBenefitsFirst: !0,
            analyticsLocation: d.Sbl.INTERACTION_RESPONSE,
            skuId: null == h ? void 0 : h.id
        });
    return (0, i.jsx)(a.Button, {
        color: a.Button.Colors.BRAND,
        size: a.Button.Sizes.SMALL,
        onClick: () => N(),
        disabled: !C || !m,
        children: (0, i.jsxs)('div', {
            className: E.button,
            children: [
                (0, i.jsx)(a.ShopIcon, {
                    size: 'xs',
                    color: 'white'
                }),
                _.Z.Messages.INTERACTION_PREMIUM_UPSELL_CTA
            ]
        })
    });
}
