i.d(e, {
    AF: function () {
        return L;
    },
    hd: function () {
        return y;
    },
    zz: function () {
        return E;
    }
}), i(47120);
var l = i(735250), t = i(470079), s = i(905322), r = i(200207), a = i(269210), o = i(442837), d = i(481060), u = i(607070), c = i(100527), p = i(906732), m = i(87484), v = i(171246), g = i(889989), x = i(696906), h = i(55563), f = i(551428), S = i(626135), j = i(768581), _ = i(73346), I = i(624138), b = i(591759), R = i(601911), N = i(110742), T = i(147496), P = i(680005), k = i(519896), O = i(981631), M = i(689938), Z = i(969824);
function L(n) {
    let {
            app: e,
            subscriptionGroupListing: i,
            guildId: r,
            subscriptionListings: a,
            otpListings: m
        } = n, g = t.useMemo(() => (0, R.y)(e, 100), [e]), {bot: x} = e, h = t.useMemo(() => {
            var n;
            if ((null == x ? void 0 : x.banner) == null)
                return;
            let e = (0, j.aN)({
                id: x.id,
                banner: x.banner,
                size: 1024,
                canAnimate: !1
            });
            return null != e && null !== (n = b.Z.toURLSafe(e)) && void 0 !== n ? n : void 0;
        }, [x]), f = t.useMemo(() => {
            var n;
            if ((null == x ? void 0 : x.banner) == null)
                return;
            let e = (0, j.aN)({
                id: x.id,
                banner: x.banner,
                size: 1024,
                canAnimate: !0
            });
            return null != e && null !== (n = b.Z.toURLSafe(e)) && void 0 !== n ? n : void 0;
        }, [x]), _ = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), I = t.useMemo(() => [
            ...a.map(n => n.id),
            ...m.map(n => n.id)
        ], [
            a,
            m
        ]), {analyticsLocations: N} = (0, p.ZP)(c.Z.APP_STOREFRONT);
    return t.useEffect(() => {
        0 !== I.length && S.default.track(O.rMx.VIEW_PREMIUM_APP_STOREFRONT, {
            application_id: e.id,
            sku_ids: I,
            location_stack: N
        });
    }, [
        N,
        e.id,
        I
    ]), (0, l.jsxs)('div', {
        className: Z.wrapper,
        children: [
            (0, l.jsx)(s.j, {
                title: e.name,
                iconSrc: g,
                backgroundSrc: h,
                animatedBackgroundSrc: f,
                prefersReducedMotion: _
            }),
            a.length > 0 && null != i && (0, l.jsxs)('div', {
                className: Z.productSection,
                children: [
                    (0, l.jsx)(d.Heading, {
                        variant: 'heading-lg/semibold',
                        color: 'header-secondary',
                        children: M.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS
                    }),
                    (0, l.jsx)('div', {
                        className: Z.productList,
                        children: a.map(n => (0, l.jsx)(E, {
                            appId: e.id,
                            groupListingId: i.id,
                            guildId: r,
                            listing: n,
                            groupListingType: (0, v.KW)(i.sku_flags) ? 'user' : 'guild'
                        }, n.id))
                    })
                ]
            }),
            m.length > 0 && (0, l.jsxs)('div', {
                className: Z.productSection,
                children: [
                    (0, l.jsx)(d.Heading, {
                        variant: 'heading-lg/semibold',
                        color: 'header-secondary',
                        children: M.Z.Messages.STOREFRONT_APP_PRODUCTS
                    }),
                    (0, l.jsx)('div', {
                        className: Z.productList,
                        children: m.map(n => (0, l.jsx)(y, {
                            skuId: n.sku.id,
                            appId: e.id
                        }, n.id))
                    })
                ]
            }),
            (0, l.jsx)(d.Text, {
                variant: 'text-md/normal',
                className: Z.legalText,
                children: null != e.termsOfServiceUrl && null != e.privacyPolicyUrl ? M.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                    tosUrl: e.termsOfServiceUrl,
                    ppUrl: e.privacyPolicyUrl
                }) : M.Z.Messages.STOREFRONT_NO_TOS_PP
            })
        ]
    });
}
function E(n) {
    let {
            appId: e,
            groupListingId: i,
            guildId: s,
            listing: r,
            groupListingType: o,
            onDetails: u
        } = n, {openModal: c} = (0, x.Z)({
            guildId: s,
            groupListingId: i,
            showBenefitsFirst: !1,
            analyticsLocation: O.Sbl.APP_STOREFRONT,
            skuId: r.id
        }), p = t.useMemo(() => {
            var n;
            return null === (n = r.store_listing_benefits) || void 0 === n ? void 0 : n.map(n => ({
                id: n.id,
                title: n.name,
                description: n.description,
                icon: (0, g.n)(e, n.icon)
            }));
        }, [
            e,
            r.store_listing_benefits
        ]), m = t.useMemo(() => {
            var n;
            return null != r.image_asset && null !== (n = b.Z.toURLSafe((0, _._W)(e, r.image_asset, 256))) && void 0 !== n ? n : void 0;
        }, [
            e,
            r.image_asset
        ]), v = r.subscription_plans.length > 0 ? r.subscription_plans[0] : null;
    return null === v ? null : (0, l.jsx)(a.U, {
        title: r.name,
        description: r.description,
        imgSrc: m,
        subscriptionType: o,
        onPurchase: c,
        PurchaseButton: n => (0, l.jsx)(P.p, {
            ...n,
            appId: e,
            groupListingId: i,
            groupListingType: o,
            guildId: s,
            skuId: r.id,
            subPlan: v
        }),
        benefitItems: null != p ? p.map(n => (0, l.jsx)(a.G, {
            name: n.title,
            icon: n.icon
        }, n.id)) : void 0,
        onDetails: null != u ? u : null != p ? () => {
            (0, d.openModal)(n => {
                let {
                    onClose: t,
                    transitionState: s
                } = n;
                return (0, l.jsx)(k.SubscriptionDetailsModal, {
                    appId: e,
                    groupListingId: i,
                    groupListingType: o,
                    onClose: t,
                    skuId: r.id,
                    transitionState: s
                });
            });
        } : void 0
    });
}
function y(n) {
    var e, i, t, s;
    let {
            skuId: a,
            appId: u,
            onDetails: v
        } = n, {analyticsLocations: g} = (0, p.ZP)(c.Z.APP_STOREFRONT), x = (0, o.e7)([f.Z], () => f.Z.getForSKU(a), [a]), S = (0, o.e7)([h.Z], () => h.Z.get(a), [a]), j = (0, N.M)(a);
    if (null == S)
        return null;
    let R = null !== (i = S.name) && void 0 !== i ? i : '', k = null !== (t = null == x ? void 0 : null === (e = x.description) || void 0 === e ? void 0 : e.trim()) && void 0 !== t ? t : void 0, Z = (null == x ? void 0 : x.headerBackground) != null && null !== (s = b.Z.toURLSafe((0, _._W)(u, x.headerBackground, 256))) && void 0 !== s ? s : void 0, L = S.type === O.epS.DURABLE && j, E = S.type === O.epS.DURABLE ? L ? M.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : M.Z.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0, {price: y} = S;
    return null == y ? null : (0, l.jsx)(r.I, {
        title: R,
        description: k,
        headerImage: Z,
        availabilityLabel: E,
        onDetails: null != v ? v : (0, I.Ew)(k) ? void 0 : () => {
            (0, d.openModal)(n => {
                let {
                    onClose: e,
                    transitionState: i
                } = n;
                return (0, l.jsx)(T.ItemDetailsModal, {
                    appId: u,
                    skuId: a,
                    onClose: e,
                    transitionState: i
                });
            });
        },
        PurchaseButton: n => (0, l.jsx)(P.Y, {
            ...n,
            appId: u,
            sku: S
        }),
        onPurchase: () => {
            (0, m.Z)({
                applicationId: u,
                skuId: S.id,
                analyticsLocations: g
            });
        }
    });
}
