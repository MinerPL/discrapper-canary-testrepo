n.d(t, {
    F: function () {
        return Z;
    },
    P: function () {
        return L;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(442837), l = n(481060), r = n(241159), o = n(558381), c = n(812206), d = n(270144), u = n(307643), _ = n(171246), E = n(359610), m = n(592125), I = n(509545), T = n(238), h = n(55563), N = n(551428), f = n(626135), p = n(572004), C = n(601911), g = n(504211), S = n(381961), A = n(970321), x = n(680005), O = n(981631), R = n(272242), M = n(689938), v = n(947654);
let L = b(function (e) {
        let {
                appId: t,
                message: o
            } = e, d = (0, A.R)(t), [_, I, h, N, p, S, x] = (0, s.Wu)([
                c.Z,
                T.Z,
                m.Z
            ], () => {
                var e;
                let n = c.Z.getApplication(t), i = null != n ? (0, C.y)(n, 45) : void 0, a = null === (e = m.Z.getBasicChannel(o.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                return [
                    n,
                    c.Z.isFetchingApplication(t),
                    c.Z.didFetchingApplicationFail(t),
                    T.Z.getStoreLayout(t),
                    T.Z.getFetchStatus(t),
                    a,
                    i
                ];
            }, [
                t,
                o.channel_id
            ]);
        a.useEffect(() => {
            p === T.N.NONE && (0, r.k)(t), null == _ && !I && !h && (0, u.UM)(t);
        }, [
            _,
            t,
            h,
            I,
            p
        ]);
        let L = N.subscriptions.length, Z = N.otps.length, b = a.useMemo(() => L > 0 && Z > 0 ? M.Z.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
                subCount: L,
                itemCount: Z
            }) : L > 0 ? M.Z.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({ count: L }) : Z > 0 ? M.Z.Messages.STOREFRONT_ITEM_COUNT.format({ count: Z }) : M.Z.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS, [
                Z,
                L
            ]);
        if (!d || null == _)
            return null;
        let D = () => {
            (0, l.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    n.e('89131'),
                    n.e('34310')
                ]).then(n.bind(n, 7225));
                return n => (0, i.jsx)(e, {
                    transitionState: n.transitionState,
                    onClose: n.onClose,
                    appId: t,
                    guildId: S
                });
            });
        };
        return (0, i.jsx)(P, {
            appName: _.name,
            title: M.Z.Messages.STOREFRONT_TITLE.format({ appName: _.name }),
            description: b,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(O.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, R.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, g.X)(t, g.B.STORE_EMBED);
            },
            iconSrc: x,
            onIconClick: () => {
                D(), f.default.track(O.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                    application_id: t,
                    area: 'app_icon'
                });
            },
            children: (0, i.jsx)(E.Z, {
                size: l.ButtonSizes.MEDIUM,
                onClick: () => {
                    D(), f.default.track(O.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'open_store_button'
                    });
                },
                className: v.openStoreButton,
                children: M.Z.Messages.STOREFRONT_OPEN_STORE
            })
        });
    }), Z = b(function (e) {
        var t, r;
        let {
                skuId: u,
                message: T
            } = e, [p, S, L, Z, b, D, j, U] = (0, s.Wu)([
                h.Z,
                N.Z,
                I.Z,
                m.Z,
                c.Z
            ], () => {
                var e, t, n, i;
                let a = null === (e = m.Z.getBasicChannel(T.channel_id)) || void 0 === e ? void 0 : e.guild_id, s = h.Z.get(u), l = null !== (n = null == s ? void 0 : null === (t = s.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == s ? void 0 : s.applicationId, r = null !== (i = null != l ? c.Z.getApplication(l) : void 0) && void 0 !== i ? i : null == s ? void 0 : s.application, o = null != r ? (0, C.y)(r, 45) : void 0, d = I.Z.getForSKU(u);
                return [
                    s,
                    r,
                    N.Z.getForSKU(u),
                    h.Z.isFetching(u),
                    h.Z.didFetchingSkuFail(u),
                    d.length > 0 ? d[0].toServerData() : null,
                    a,
                    o
                ];
            }, [
                T.channel_id,
                u
            ]), y = (0, A.R)(null !== (r = null == S ? void 0 : S.id) && void 0 !== r ? r : '');
        a.useEffect(() => {
            null == p && !Z && !b && (0, o.km)(u);
        }, [
            b,
            Z,
            p,
            u
        ]);
        let {subscriptionGroupListing: B} = (0, d.F5)(null == S ? void 0 : S.id, j);
        if ((0, d.FE)(null == S ? void 0 : S.id, null == S ? void 0 : S.primarySkuId), !y || null == S || null == p)
            return null;
        let k = p.type === O.epS.SUBSCRIPTION, G = null != B && (0, _.KW)(B.sku_flags), F = () => {
                (0, l.openModalLazy)(async () => {
                    let {default: e} = await Promise.all([
                        n.e('89131'),
                        n.e('34310')
                    ]).then(n.bind(n, 7225));
                    return t => (0, i.jsx)(e, {
                        transitionState: t.transitionState,
                        onClose: t.onClose,
                        appId: S.id,
                        guildId: j
                    });
                });
            }, w = () => {
                (0, l.openModalLazy)(async () => {
                    let e = k ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null, t = k ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                    return n => {
                        let a = () => {
                            n.onClose(), F();
                        };
                        return null != e && null != B ? (0, i.jsx)(e, {
                            transitionState: n.transitionState,
                            appId: S.id,
                            skuId: p.id,
                            groupListingId: B.id,
                            groupListingType: G ? 'user' : 'guild',
                            onClose: n.onClose,
                            onHeaderTitleClick: a
                        }) : null != t ? (0, i.jsx)(t, {
                            transitionState: n.transitionState,
                            appId: S.id,
                            skuId: u,
                            onClose: n.onClose,
                            onHeaderTitleClick: a
                        }) : null;
                    };
                });
            }, V = k ? G ? (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(l.UserIcon, {
                        size: 'custom',
                        width: 12,
                        height: 12
                    }),
                    ' ',
                    M.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
                ]
            }) : (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(l.ServerIcon, {
                        size: 'custom',
                        width: 12,
                        height: 12
                    }),
                    ' ',
                    M.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
                ]
            }) : null == L ? void 0 : null === (t = L.description) || void 0 === t ? void 0 : t.trim();
        '' === V && (V = void 0);
        let H = () => {
            f.default.track(O.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: S.id,
                sku_id: p.id,
                area: 'purchase_button'
            });
        };
        return (0, i.jsx)(P, {
            appName: S.name,
            title: p.name,
            description: V,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(O.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(S.id, R.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, g.X)(S.id, g.B.SKU_EMBED, u);
            },
            iconSrc: U,
            onIconClick: () => {
                F(), f.default.track(O.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                    application_id: S.id,
                    sku_id: p.id,
                    area: 'app_icon'
                });
            },
            children: (0, i.jsxs)('div', {
                className: v.skuPurchaseButtons,
                children: [
                    (0, i.jsx)(l.Button, {
                        color: l.ButtonColors.CUSTOM,
                        onClick: () => {
                            w(), f.default.track(O.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                application_id: S.id,
                                sku_id: p.id,
                                area: 'view_details'
                            });
                        },
                        className: v.viewDetailsButton,
                        children: M.Z.Messages.STOREFRONT_DETAILS
                    }),
                    k ? null != D ? (0, i.jsx)(x.p, {
                        appId: S.id,
                        groupListingId: null == B ? void 0 : B.id,
                        groupListingType: G ? 'user' : 'guild',
                        skuId: p.id,
                        subPlan: D,
                        icon: (0, i.jsx)(l.ShopIcon, {
                            size: 'xs',
                            color: 'currentcolor'
                        }),
                        onHasClicked: H
                    }) : (0, i.jsx)(E.Z, {
                        size: l.ButtonSizes.MEDIUM,
                        onClick: w,
                        children: M.Z.Messages.STOREFRONT_SUBSCRIBE
                    }) : (0, i.jsx)(x.Y, {
                        appId: S.id,
                        sku: p,
                        icon: (0, i.jsx)(l.ShopIcon, {
                            size: 'xs',
                            color: 'currentcolor'
                        }),
                        onHasClicked: H
                    })
                ]
            })
        });
    });
function P(e) {
    let {
        appName: t,
        title: n,
        description: a,
        link: s,
        iconSrc: r,
        onIconClick: o,
        onLinkCopy: c,
        children: d
    } = e;
    return (0, i.jsxs)('div', {
        className: v.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: v.header,
                children: [
                    (0, i.jsxs)('div', {
                        className: v.headerTitle,
                        children: [
                            (0, i.jsx)(l.ShopIcon, { size: 'xxs' }),
                            (0, i.jsx)(l.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    p.wS && (0, i.jsx)(l.Button, {
                        look: l.ButtonLooks.BLANK,
                        size: l.ButtonSizes.ICON,
                        'aria-label': M.Z.Messages.COPY_LINK,
                        onClick: () => {
                            (0, p.JG)(s), (0, l.showToast)((0, l.createToast)(M.Z.Messages.COPIED_LINK, l.ToastType.SUCCESS)), c();
                        },
                        children: (0, i.jsx)(l.LinkIcon, { size: 'xs' })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: v.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: v.contentTextWrapper,
                        children: [
                            null != r && (0, i.jsx)(l.Button, {
                                look: l.ButtonLooks.BLANK,
                                size: l.ButtonSizes.NONE,
                                onClick: o,
                                children: (0, i.jsx)('img', {
                                    src: r.href,
                                    alt: '',
                                    className: v.appIcon
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: v.contentText,
                                style: null == a ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != a && (0, i.jsx)(l.Text, {
                                        variant: 'heading-md/medium',
                                        color: 'text-muted',
                                        tag: 'div',
                                        className: v.description,
                                        children: a
                                    })
                                ]
                            })
                        ]
                    }),
                    d
                ]
            })
        ]
    });
}
function b(e) {
    return t => {
        let {enabled: n} = S.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, i.jsx)(e, { ...t }) : null;
    };
}
