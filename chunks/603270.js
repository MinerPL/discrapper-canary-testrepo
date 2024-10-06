n.d(t, {
    F: function () {
        return L;
    },
    P: function () {
        return v;
    }
}),
    n(47120),
    n(789020);
var i = n(735250),
    a = n(470079),
    s = n(442837),
    l = n(481060),
    r = n(241159),
    o = n(558381),
    c = n(812206),
    d = n(307643),
    u = n(171246),
    _ = n(696906),
    E = n(592125),
    I = n(509545),
    m = n(238),
    T = n(55563),
    N = n(551428),
    h = n(626135),
    C = n(572004),
    p = n(601911),
    f = n(504211),
    g = n(381961),
    A = n(970321),
    S = n(680005),
    M = n(981631),
    x = n(272242),
    O = n(689938),
    R = n(738571);
let v = P(function (e) {
        let { appId: t, message: o } = e,
            u = (0, A.R)(t),
            [_, I, T, N, C, g, S] = (0, s.Wu)(
                [c.Z, m.Z, E.Z],
                () => {
                    var e;
                    let n = c.Z.getApplication(t),
                        i = null != n ? (0, p.y)(n, 45) : void 0,
                        a = null === (e = E.Z.getBasicChannel(o.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                    return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), m.Z.getStoreLayout(t), m.Z.getFetchStatus(t), a, i];
                },
                [t, o.channel_id]
            );
        a.useEffect(() => {
            C === m.N.NONE && (0, r.k)(t), null == _ && !I && !T && (0, d.UM)(t);
        }, [_, t, T, I, C]);
        let v = N.subscriptions.length,
            L = N.otps.length,
            P = a.useMemo(
                () =>
                    v > 0 && L > 0
                        ? O.Z.Messages.STOREFRONT_SUBSCRIPTION_AND_ITEMS_COUNT.format({
                              subCount: v,
                              itemCount: L
                          })
                        : v > 0
                          ? O.Z.Messages.STOREFRONT_SUBSCRIPTION_COUNT.format({ count: v })
                          : L > 0
                            ? O.Z.Messages.STOREFRONT_ITEM_COUNT.format({ count: L })
                            : O.Z.Messages.STOREFRONT_UNKNOWN_SUBSCRIPTIONS_OR_ITEMS,
                [L, v]
            );
        if (!u || null == _) return null;
        let D = () => {
            (0, l.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('47988')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, i.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: g
                    });
            });
        };
        return (0, i.jsx)(Z, {
            appName: _.name,
            title: O.Z.Messages.STOREFRONT_TITLE.format({ appName: _.name }),
            description: P,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(M.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, x.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, f.X)(t, f.B.STORE_EMBED);
            },
            iconSrc: S,
            onIconClick: () => {
                D(),
                    h.default.track(M.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsx)(l.Button, {
                onClick: () => {
                    D(),
                        h.default.track(M.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: 'open_store_button'
                        });
                },
                className: R.openStoreButton,
                children: O.Z.Messages.STOREFRONT_OPEN_STORE
            })
        });
    }),
    L = P(function (e) {
        var t, r;
        let { skuId: d, message: m } = e,
            [C, g, v, L, P, D, b, j] = (0, s.Wu)(
                [T.Z, N.Z, I.Z, E.Z, c.Z],
                () => {
                    var e, t, n, i;
                    let a = null === (e = E.Z.getBasicChannel(m.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                        s = T.Z.get(d),
                        l = null !== (n = null == s ? void 0 : null === (t = s.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == s ? void 0 : s.applicationId,
                        r = null !== (i = null != l ? c.Z.getApplication(l) : void 0) && void 0 !== i ? i : null == s ? void 0 : s.application,
                        o = null != r ? (0, p.y)(r, 45) : void 0,
                        u = I.Z.getForSKU(d);
                    return [s, r, N.Z.getForSKU(d), T.Z.isFetching(d), T.Z.didFetchingSkuFail(d), u.length > 0 ? u[0] : null, a, o];
                },
                [m.channel_id, d]
            ),
            U = (0, A.R)(null !== (r = null == g ? void 0 : g.id) && void 0 !== r ? r : '');
        a.useEffect(() => {
            null == C && !L && !P && (0, o.km)(d);
        }, [P, L, C, d]),
            a.useEffect(() => {
                if ((null == g ? void 0 : g.id) != null) (0, o.oJ)(null == g ? void 0 : g.id);
            }, [null == g ? void 0 : g.id]);
        let y = (0, s.e7)([T.Z], () => (null != d ? T.Z.getParentSKU(d) : void 0), [d]),
            {
                openModal: B,
                canOpenModal: k,
                cannotOpenReason: G
            } = (0, _.Z)({
                skuId: d,
                guildId: b,
                showBenefitsFirst: !1
            });
        if (!U || null == g || null == C) return null;
        let F = C.type === M.epS.SUBSCRIPTION,
            w = !!F && (0, u.KW)(C.flags),
            V = () => {
                (0, l.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('77803'), n.e('47988')]).then(n.bind(n, 7225));
                    return (t) =>
                        (0, i.jsx)(e, {
                            transitionState: t.transitionState,
                            onClose: t.onClose,
                            appId: g.id,
                            guildId: b
                        });
                });
            },
            H = () => {
                (0, l.openModalLazy)(async () => {
                    let e = F ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                        t = F ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                    return (n) => {
                        let a = () => {
                            n.onClose(), V();
                        };
                        return null != e && null != y
                            ? (0, i.jsx)(e, {
                                  transitionState: n.transitionState,
                                  appId: g.id,
                                  skuId: C.id,
                                  guildId: b,
                                  subscriptionType: w ? 'user' : 'guild',
                                  onClose: n.onClose,
                                  onHeaderTitleClick: a
                              })
                            : null != t
                              ? (0, i.jsx)(t, {
                                    transitionState: n.transitionState,
                                    appId: g.id,
                                    skuId: d,
                                    onClose: n.onClose,
                                    onHeaderTitleClick: a
                                })
                              : null;
                    };
                });
            },
            Y = F
                ? w
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(l.UserIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              O.Z.Messages.STOREFRONT_USER_SUBSCRIPTION
                          ]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(l.ServerIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              O.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION
                          ]
                      })
                : null == v
                  ? void 0
                  : null === (t = v.description) || void 0 === t
                    ? void 0
                    : t.trim();
        '' === Y && (Y = void 0);
        let W = () => {
            h.default.track(M.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: g.id,
                sku_id: C.id,
                area: 'purchase_button'
            });
        };
        return (0, i.jsx)(Z, {
            appName: g.name,
            title: C.name,
            description: Y,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(M.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(g.id, x.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, f.X)(g.id, f.B.SKU_EMBED, d);
            },
            iconSrc: j,
            onIconClick: () => {
                V(),
                    h.default.track(M.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: g.id,
                        sku_id: C.id,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsxs)('div', {
                className: R.skuPurchaseButtons,
                children: [
                    (0, i.jsx)(l.Button, {
                        color: l.ButtonColors.CUSTOM,
                        onClick: () => {
                            H(),
                                h.default.track(M.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: g.id,
                                    sku_id: C.id,
                                    area: 'view_details'
                                });
                        },
                        className: R.viewDetailsButton,
                        children: O.Z.Messages.STOREFRONT_DETAILS
                    }),
                    F
                        ? null != D
                            ? (0, i.jsx)(S.p, {
                                  onClick: B,
                                  appId: g.id,
                                  subscriptionType: w ? 'user' : 'guild',
                                  skuId: C.id,
                                  icon: (0, i.jsx)(l.ShopIcon, {
                                      size: 'xs',
                                      color: 'currentcolor'
                                  }),
                                  onHasClicked: W,
                                  subscriptionPlan: D,
                                  canPurchase: k,
                                  cannotPurchaseReason: G
                              })
                            : (0, i.jsx)(l.Button, {
                                  onClick: H,
                                  children: O.Z.Messages.STOREFRONT_SUBSCRIBE
                              })
                        : (0, i.jsx)(S.Y, {
                              appId: g.id,
                              sku: C,
                              icon: (0, i.jsx)(l.ShopIcon, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: W
                          })
                ]
            })
        });
    });
function Z(e) {
    let { appName: t, title: n, description: a, link: s, iconSrc: r, onIconClick: o, onLinkCopy: c, children: d } = e;
    return (0, i.jsxs)('div', {
        className: R.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: R.header,
                children: [
                    (0, i.jsxs)('div', {
                        className: R.headerTitle,
                        children: [
                            (0, i.jsx)(l.ShopIcon, { size: 'xxs' }),
                            (0, i.jsx)(l.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    C.wS &&
                        (0, i.jsx)(l.Button, {
                            look: l.ButtonLooks.BLANK,
                            size: l.ButtonSizes.ICON,
                            'aria-label': O.Z.Messages.COPY_LINK,
                            onClick: () => {
                                (0, C.JG)(s), (0, l.showToast)((0, l.createToast)(O.Z.Messages.COPIED_LINK, l.ToastType.SUCCESS)), c();
                            },
                            children: (0, i.jsx)(l.LinkIcon, { size: 'xs' })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: R.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: R.contentTextWrapper,
                        children: [
                            null != r &&
                                (0, i.jsx)(l.Button, {
                                    look: l.ButtonLooks.BLANK,
                                    size: l.ButtonSizes.NONE,
                                    onClick: o,
                                    children: (0, i.jsx)('img', {
                                        src: r.href,
                                        alt: '',
                                        className: R.appIcon
                                    })
                                }),
                            (0, i.jsxs)('div', {
                                className: R.contentText,
                                style: null == a ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, i.jsx)(l.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != a &&
                                        (0, i.jsx)(l.Text, {
                                            variant: 'heading-md/medium',
                                            color: 'text-muted',
                                            tag: 'div',
                                            className: R.description,
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
function P(e) {
    return (t) => {
        let { enabled: n } = g.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, i.jsx)(e, { ...t }) : null;
    };
}
