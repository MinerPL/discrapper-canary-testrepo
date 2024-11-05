n.d(t, {
    F: function () {
        return R;
    },
    P: function () {
        return Z;
    }
}),
    n(47120),
    n(789020);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(241159),
    s = n(558381),
    c = n(812206),
    d = n(307643),
    u = n(171246),
    m = n(696906),
    h = n(592125),
    f = n(509545),
    p = n(238),
    g = n(55563),
    _ = n(551428),
    C = n(626135),
    E = n(572004),
    I = n(601911),
    x = n(504211),
    v = n(381961),
    N = n(970321),
    T = n(680005),
    S = n(981631),
    b = n(272242),
    A = n(388032),
    j = n(738571);
let Z = y(function (e) {
        let { appId: t, message: s } = e,
            u = (0, N.R)(t),
            [m, f, g, _, E, v, T] = (0, l.Wu)(
                [c.Z, p.Z, h.Z],
                () => {
                    var e;
                    let n = c.Z.getApplication(t),
                        i = null != n ? (0, I.y)(n, 45) : void 0,
                        r = null === (e = h.Z.getBasicChannel(s.channel_id)) || void 0 === e ? void 0 : e.guild_id;
                    return [n, c.Z.isFetchingApplication(t), c.Z.didFetchingApplicationFail(t), p.Z.getStoreLayout(t), p.Z.getFetchStatus(t), r, i];
                },
                [t, s.channel_id]
            );
        r.useEffect(() => {
            E === p.N.NONE && (0, o.k)(t), null == m && !f && !g && (0, d.UM)(t);
        }, [m, t, g, f, E]);
        let Z = _.subscriptions.length,
            R = _.otps.length,
            y = r.useMemo(
                () =>
                    Z > 0 && R > 0
                        ? A.intl.formatToPlainString(A.t['jA648/'], {
                              subCount: Z,
                              itemCount: R
                          })
                        : Z > 0
                          ? A.intl.formatToPlainString(A.t.GSfibG, { count: Z })
                          : R > 0
                            ? A.intl.formatToPlainString(A.t.j7Go5O, { count: R })
                            : A.intl.string(A.t.rMA98v),
                [R, Z]
            );
        if (!u || null == m) return null;
        let L = () => {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('77803'), n.e('47988')]).then(n.bind(n, 7225));
                return (n) =>
                    (0, i.jsx)(e, {
                        transitionState: n.transitionState,
                        onClose: n.onClose,
                        appId: t,
                        guildId: v
                    });
            });
        };
        return (0, i.jsx)(P, {
            appName: m.name,
            title: A.intl.formatToPlainString(A.t.XDRjs7, { appName: m.name }),
            description: y,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(S.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(t, b.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, x.X)(t, x.B.STORE_EMBED);
            },
            iconSrc: T,
            onIconClick: () => {
                L(),
                    C.default.track(S.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                        application_id: t,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsx)(a.Button, {
                onClick: () => {
                    L(),
                        C.default.track(S.rMx.STOREFRONT_STORE_MESSAGE_EMBED_CLICKED, {
                            application_id: t,
                            area: 'open_store_button'
                        });
                },
                className: j.openStoreButton,
                children: A.intl.string(A.t.kRvlKC)
            })
        });
    }),
    R = y(function (e) {
        var t, o;
        let { skuId: d, message: p } = e,
            [E, v, Z, R, y, L, O, M] = (0, l.Wu)(
                [g.Z, _.Z, f.Z, h.Z, c.Z],
                () => {
                    var e, t, n, i;
                    let r = null === (e = h.Z.getBasicChannel(p.channel_id)) || void 0 === e ? void 0 : e.guild_id,
                        l = g.Z.get(d),
                        a = null !== (n = null == l ? void 0 : null === (t = l.application) || void 0 === t ? void 0 : t.id) && void 0 !== n ? n : null == l ? void 0 : l.applicationId,
                        o = null !== (i = null != a ? c.Z.getApplication(a) : void 0) && void 0 !== i ? i : null == l ? void 0 : l.application,
                        s = null != o ? (0, I.y)(o, 45) : void 0,
                        u = f.Z.getForSKU(d);
                    return [l, o, _.Z.getForSKU(d), g.Z.isFetching(d), g.Z.didFetchingSkuFail(d), u.length > 0 ? u[0] : null, r, s];
                },
                [p.channel_id, d]
            ),
            k = (0, N.R)(null !== (o = null == v ? void 0 : v.id) && void 0 !== o ? o : '');
        r.useEffect(() => {
            null == E && !R && !y && (0, s.km)(d);
        }, [y, R, E, d]),
            r.useEffect(() => {
                if ((null == v ? void 0 : v.id) != null) (0, s.oJ)(null == v ? void 0 : v.id);
            }, [null == v ? void 0 : v.id]);
        let D = (0, l.e7)([g.Z], () => (null != d ? g.Z.getParentSKU(d) : void 0), [d]),
            { openModal: B, cannotOpenReason: w } = (0, m.ZP)({
                skuId: d,
                subscribeForGuild: O
            });
        if (!k || null == v || null == E) return null;
        let U = E.type === S.epS.SUBSCRIPTION,
            F = !!U && (0, u.KW)(E.flags),
            G = () => {
                (0, a.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e('77803'), n.e('47988')]).then(n.bind(n, 7225));
                    return (t) =>
                        (0, i.jsx)(e, {
                            transitionState: t.transitionState,
                            onClose: t.onClose,
                            appId: v.id,
                            guildId: O
                        });
                });
            },
            V = () => {
                (0, a.openModalLazy)(async () => {
                    let e = U ? (await Promise.resolve().then(n.bind(n, 519896))).SubscriptionDetailsModal : null,
                        t = U ? null : (await Promise.resolve().then(n.bind(n, 147496))).ItemDetailsModal;
                    return (n) => {
                        let r = () => {
                            n.onClose(), G();
                        };
                        return null != e && null != D
                            ? (0, i.jsx)(e, {
                                  transitionState: n.transitionState,
                                  appId: v.id,
                                  skuId: E.id,
                                  guildId: O,
                                  subscriptionType: F ? 'user' : 'guild',
                                  onClose: n.onClose,
                                  onHeaderTitleClick: r
                              })
                            : null != t
                              ? (0, i.jsx)(t, {
                                    transitionState: n.transitionState,
                                    appId: v.id,
                                    skuId: d,
                                    onClose: n.onClose,
                                    onHeaderTitleClick: r
                                })
                              : null;
                    };
                });
            },
            H = U
                ? F
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.UserIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              A.intl.string(A.t.wnifjI)
                          ]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.ServerIcon, {
                                  size: 'custom',
                                  width: 12,
                                  height: 12
                              }),
                              ' ',
                              A.intl.string(A.t.NRC3am)
                          ]
                      })
                : null == Z
                  ? void 0
                  : null === (t = Z.description) || void 0 === t
                    ? void 0
                    : t.trim();
        '' === H && (H = void 0);
        let z = () => {
            C.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                application_id: v.id,
                sku_id: E.id,
                area: 'purchase_button'
            });
        };
        return (0, i.jsx)(P, {
            appName: v.name,
            title: E.name,
            description: H,
            link: ''.concat(location.protocol, '//').concat(location.host).concat(S.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(v.id, b.ApplicationDirectoryProfileSections.STORE)),
            onLinkCopy: () => {
                (0, x.X)(v.id, x.B.SKU_EMBED, d);
            },
            iconSrc: M,
            onIconClick: () => {
                G(),
                    C.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                        application_id: v.id,
                        sku_id: E.id,
                        area: 'app_icon'
                    });
            },
            children: (0, i.jsxs)('div', {
                className: j.skuPurchaseButtons,
                children: [
                    (0, i.jsx)(a.Button, {
                        color: a.ButtonColors.CUSTOM,
                        onClick: () => {
                            V(),
                                C.default.track(S.rMx.STOREFRONT_SKU_MESSAGE_EMBED_CLICKED, {
                                    application_id: v.id,
                                    sku_id: E.id,
                                    area: 'view_details'
                                });
                        },
                        className: j.viewDetailsButton,
                        children: A.intl.string(A.t.DXYfjI)
                    }),
                    U
                        ? null != L
                            ? (0, i.jsx)(T.p, {
                                  onClick: B,
                                  appId: v.id,
                                  subscriptionType: F ? 'user' : 'guild',
                                  skuId: E.id,
                                  icon: (0, i.jsx)(a.ShopIcon, {
                                      size: 'xs',
                                      color: 'currentcolor'
                                  }),
                                  onHasClicked: z,
                                  subscriptionPlan: L,
                                  cannotOpenReason: w
                              })
                            : (0, i.jsx)(a.Button, {
                                  onClick: V,
                                  children: A.intl.string(A.t.uuzaAA)
                              })
                        : (0, i.jsx)(T.Y, {
                              appId: v.id,
                              sku: E,
                              icon: (0, i.jsx)(a.ShopIcon, {
                                  size: 'xs',
                                  color: 'currentcolor'
                              }),
                              onHasClicked: z
                          })
                ]
            })
        });
    });
function P(e) {
    let { appName: t, title: n, description: r, link: l, iconSrc: o, onIconClick: s, onLinkCopy: c, children: d } = e;
    return (0, i.jsxs)('div', {
        className: j.wrapper,
        children: [
            (0, i.jsxs)('div', {
                className: j.header,
                children: [
                    (0, i.jsxs)('div', {
                        className: j.headerTitle,
                        children: [
                            (0, i.jsx)(a.ShopIcon, { size: 'xxs' }),
                            (0, i.jsx)(a.Text, {
                                variant: 'eyebrow',
                                color: 'text-muted',
                                children: t
                            })
                        ]
                    }),
                    E.wS &&
                        (0, i.jsx)(a.Button, {
                            look: a.ButtonLooks.BLANK,
                            size: a.ButtonSizes.ICON,
                            'aria-label': A.intl.string(A.t.WqhZsr),
                            onClick: () => {
                                (0, E.JG)(l), (0, a.showToast)((0, a.createToast)(A.intl.string(A.t['L/PwZW']), a.ToastType.SUCCESS)), c();
                            },
                            children: (0, i.jsx)(a.LinkIcon, { size: 'xs' })
                        })
                ]
            }),
            (0, i.jsxs)('div', {
                className: j.content,
                children: [
                    (0, i.jsxs)('div', {
                        className: j.contentTextWrapper,
                        children: [
                            null != o &&
                                (0, i.jsx)(a.Button, {
                                    look: a.ButtonLooks.BLANK,
                                    size: a.ButtonSizes.NONE,
                                    onClick: s,
                                    children: (0, i.jsx)('img', {
                                        src: o.href,
                                        alt: '',
                                        className: j.appIcon
                                    })
                                }),
                            (0, i.jsxs)('div', {
                                className: j.contentText,
                                style: null == r ? { justifyContent: 'space-evenly' } : void 0,
                                children: [
                                    (0, i.jsx)(a.Text, {
                                        variant: 'heading-md/semibold',
                                        tag: 'div',
                                        children: n
                                    }),
                                    null != r &&
                                        (0, i.jsx)(a.Text, {
                                            variant: 'heading-md/medium',
                                            color: 'text-muted',
                                            tag: 'div',
                                            className: j.description,
                                            children: r
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
function y(e) {
    return (t) => {
        let { enabled: n } = v.u.useExperiment({ location: 'AppStorefrontMessageEmbed' });
        return n ? (0, i.jsx)(e, { ...t }) : null;
    };
}
