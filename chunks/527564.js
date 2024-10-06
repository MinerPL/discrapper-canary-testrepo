t.d(n, {
    M: function () {
        return E;
    }
}),
    t(789020);
var i = t(735250),
    a = t(470079),
    r = t(120356),
    o = t.n(r),
    l = t(442837),
    s = t(481060),
    c = t(765717),
    d = t(283836),
    u = t(507608),
    _ = t(147496),
    p = t(955335),
    m = t(519896),
    I = t(171246),
    f = t(55563),
    g = t(147890),
    h = t(272242),
    C = t(981631),
    v = t(689938),
    b = t(778452);
function E(e) {
    let { appId: n } = e,
        { subscriptions: t, otps: a } = (0, d.q)(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            t.length > 0 &&
                (0, i.jsxs)('div', {
                    className: b.productSection,
                    children: [
                        (0, i.jsx)(p.r, { subscriptions: t }),
                        (0, i.jsx)('div', {
                            className: o()(b.productList, b.subList),
                            children: t.map((e) =>
                                (0, i.jsx)(
                                    u.zz,
                                    {
                                        appId: n,
                                        listing: e,
                                        subscriptionType: (0, I.KW)(e.skuFlags) ? 'user' : 'guild',
                                        onDetails: () => {
                                            (0, g.goToApplicationStoreSku)({
                                                applicationId: n,
                                                skuId: e.skuId
                                            });
                                        }
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            a.length > 0 &&
                (0, i.jsxs)('div', {
                    className: b.productSection,
                    children: [
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-lg/semibold',
                            children: v.Z.Messages.STOREFRONT_APP_PRODUCTS
                        }),
                        (0, i.jsx)('div', {
                            className: o()(b.productList, b.itemList),
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    u.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: n,
                                        onDetails: () => {
                                            (0, g.goToApplicationStoreSku)({
                                                applicationId: n,
                                                skuId: e.skuId
                                            });
                                        }
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            (0, i.jsx)(c.Z, {
                path: C.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(':applicationId', ':skuId'),
                exact: !0,
                render: (e) => (0, i.jsx)(x, { ...e })
            })
        ]
    });
}
function x(e) {
    let {
            match: {
                params: { applicationId: n, skuId: t }
            }
        } = e,
        r = (0, l.e7)([f.Z], () => f.Z.get(t), [t]),
        o = (0, l.e7)([f.Z], () => (null != t ? f.Z.getParentSKU(t) : void 0), [t]),
        c = a.useId();
    return (
        a.useLayoutEffect(() => {
            switch (null == r ? void 0 : r.type) {
                case C.epS.CONSUMABLE:
                case C.epS.DURABLE:
                    return (function (e, n, t) {
                        (0, s.openModal)(
                            (e) => {
                                let { onClose: a, transitionState: r } = e;
                                return (0, i.jsx)(_.ItemDetailsModal, {
                                    appId: n,
                                    skuId: t,
                                    onClose: a,
                                    transitionState: r
                                });
                            },
                            {
                                modalKey: e,
                                onCloseCallback() {
                                    !P() &&
                                        (0, g.goToApplicationSection)({
                                            applicationId: n,
                                            section: h.ApplicationDirectoryProfileSections.STORE
                                        });
                                }
                            }
                        );
                    })(c, n, t);
                case C.epS.SUBSCRIPTION:
                    if ((null == o ? void 0 : o.flags) == null) return;
                    return (function (e, n, t, a) {
                        (0, s.openModal)(
                            (e) => {
                                let { onClose: r, transitionState: o } = e;
                                return (0, i.jsx)(m.SubscriptionDetailsModal, {
                                    appId: n,
                                    subscriptionType: (0, I.KW)(a) ? 'user' : 'guild',
                                    skuId: t,
                                    guildId: null,
                                    onClose: r,
                                    transitionState: o
                                });
                            },
                            {
                                modalKey: e,
                                onCloseCallback() {
                                    !P() &&
                                        (0, g.goToApplicationSection)({
                                            applicationId: n,
                                            section: h.ApplicationDirectoryProfileSections.STORE
                                        });
                                }
                            }
                        );
                    })(c, n, t, o.flags);
            }
        }, [n, c, null == o ? void 0 : o.flags, null == r ? void 0 : r.type, t]),
        a.useLayoutEffect(
            () => () => {
                (0, s.closeModal)(c);
            },
            [c]
        ),
        null
    );
}
function P() {
    return window.location.pathname.startsWith('/login');
}
