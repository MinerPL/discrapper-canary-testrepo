i.d(n, {
    M: function () {
        return x;
    }
});
var t = i(735250),
    a = i(470079),
    r = i(120356),
    o = i.n(r),
    l = i(442837),
    s = i(481060),
    c = i(765717),
    d = i(283836),
    u = i(507608),
    _ = i(147496),
    p = i(519896),
    m = i(270144),
    I = i(171246),
    f = i(55563),
    g = i(147890),
    h = i(272242),
    C = i(981631),
    v = i(689938),
    E = i(696672);
function x(e) {
    let { appId: n, guildId: i } = e,
        { subscriptionGroupListing: a } = (0, m.F5)(n, i),
        { subs: r, otps: l } = (0, d.q)(n, i);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            r.length > 0 &&
                null != a &&
                (0, t.jsxs)('div', {
                    className: E.productSection,
                    children: [
                        (0, t.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            children: v.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS
                        }),
                        (0, t.jsx)('div', {
                            className: o()(E.productList, E.subList),
                            children: r.map((e) =>
                                (0, t.jsx)(
                                    u.zz,
                                    {
                                        appId: n,
                                        groupListingId: a.id,
                                        listing: e,
                                        groupListingType: (0, I.KW)(a.sku_flags) ? 'user' : 'guild',
                                        onDetails: () => {
                                            (0, g.goToApplicationStoreSku)({
                                                applicationId: n,
                                                skuId: e.id
                                            });
                                        }
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            l.length > 0 &&
                (0, t.jsxs)('div', {
                    className: E.productSection,
                    children: [
                        (0, t.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            children: v.Z.Messages.STOREFRONT_APP_PRODUCTS
                        }),
                        (0, t.jsx)('div', {
                            className: o()(E.productList, E.itemList),
                            children: l.map((e) =>
                                (0, t.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.sku.id,
                                        appId: n,
                                        onDetails: () => {
                                            (0, g.goToApplicationStoreSku)({
                                                applicationId: n,
                                                skuId: e.sku.id
                                            });
                                        }
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            (0, t.jsx)(c.Z, {
                path: C.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                exact: !0,
                render: (e) =>
                    (0, t.jsx)(b, {
                        ...e,
                        subscriptionGroupListing: null != a ? a : void 0
                    })
            })
        ]
    });
}
function b(e) {
    let {
            match: {
                params: { applicationId: n, skuId: i }
            },
            subscriptionGroupListing: r
        } = e,
        o = (0, l.e7)([f.Z], () => f.Z.get(i), [i]),
        c = a.useId();
    return (
        a.useLayoutEffect(() => {
            if (null != o)
                switch (o.type) {
                    case C.epS.CONSUMABLE:
                    case C.epS.DURABLE:
                        return (function (e, n, i) {
                            (0, s.openModal)(
                                (e) => {
                                    let { onClose: a, transitionState: r } = e;
                                    return (0, t.jsx)(_.ItemDetailsModal, {
                                        appId: n,
                                        skuId: i,
                                        onClose: a,
                                        transitionState: r
                                    });
                                },
                                {
                                    modalKey: e,
                                    onCloseCallback() {
                                        !A() &&
                                            (0, g.goToApplicationSection)({
                                                applicationId: n,
                                                section: h.ApplicationDirectoryProfileSections.STORE
                                            });
                                    }
                                }
                            );
                        })(c, n, i);
                    case C.epS.SUBSCRIPTION: {
                        var e;
                        if (null == r) return;
                        let a = null === (e = r.subscription_listings) || void 0 === e ? void 0 : e.find((e) => e.id === i);
                        if (null == a) return;
                        return (function (e, n, i, a) {
                            (0, s.openModal)(
                                (e) => {
                                    let { onClose: r, transitionState: o } = e;
                                    return (0, t.jsx)(p.SubscriptionDetailsModal, {
                                        appId: n,
                                        groupListingId: i.id,
                                        groupListingType: (0, I.KW)(i.sku_flags) ? 'user' : 'guild',
                                        skuId: a.id,
                                        onClose: r,
                                        transitionState: o
                                    });
                                },
                                {
                                    modalKey: e,
                                    onCloseCallback() {
                                        !A() &&
                                            (0, g.goToApplicationSection)({
                                                applicationId: n,
                                                section: h.ApplicationDirectoryProfileSections.STORE
                                            });
                                    }
                                }
                            );
                        })(c, n, r, a);
                    }
                }
        }, [n, c, o, i, r]),
        a.useLayoutEffect(
            () => () => {
                (0, s.closeModal)(c);
            },
            [c]
        ),
        null
    );
}
function A() {
    return window.location.pathname.startsWith('/login');
}
