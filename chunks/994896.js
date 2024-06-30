n.d(t, {
    O: function () {
        return r;
    }
});
let s = (0, n(818083).B)({
        kind: 'user',
        id: '2024-05_shop_condensed_category_banners',
        label: 'Collectibles Shop Dynamic Header & Condensed Category Banners',
        defaultConfig: {
            condensedBannersEnabled: !1,
            condensedBannersAndDynamicHeadersEnabled: !1,
            newShopLogoEnabled: !1
        },
        treatments: [
            {
                id: 0,
                label: 'Control',
                config: {
                    condensedBannersEnabled: !1,
                    condensedBannersAndDynamicHeadersEnabled: !1,
                    newShopLogoEnabled: !1
                }
            },
            {
                id: 1,
                label: 'Enables condensed banners in the Shop',
                config: {
                    condensedBannersEnabled: !0,
                    condensedBannersAndDynamicHeadersEnabled: !1,
                    newShopLogoEnabled: !0
                }
            },
            {
                id: 2,
                label: 'Enables dynamic headers and condensed banners in the Shop',
                config: {
                    condensedBannersEnabled: !0,
                    condensedBannersAndDynamicHeadersEnabled: !0,
                    newShopLogoEnabled: !0
                }
            }
        ]
    }), r = e => {
        let {location: t} = e;
        return s.useExperiment({ location: t });
    };
