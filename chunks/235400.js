n.r(t),
    n.d(t, {
        default: function () {
            return D;
        }
    }),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(979554),
    s = n(442837),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(335131),
    d = n(884697),
    f = n(449217),
    _ = n(223143),
    h = n(311395),
    p = n(81245),
    m = n(269982),
    g = n(197115),
    E = n(369111),
    v = n(594174),
    I = n(626135),
    S = n(74538),
    T = n(864106),
    b = n(240781),
    y = n(818611),
    A = n(981631),
    N = n(474936),
    C = n(388032),
    R = n(398787);
function O(e) {
    let { user: t, categories: n, purchases: a, analyticsLocations: s, onClose: u, initialSelectedDecoration: _, initialSelectedDecorationId: v, isTryItOutFlow: I, guild: A } = e,
        {
            pendingAvatarDecoration: O,
            setPendingAvatarDecoration: D,
            savedAvatarDecoration: L
        } = (0, E.Z)({
            analyticsLocations: s,
            isTryItOut: I,
            guildId: null == A ? void 0 : A.id
        }),
        [x, w] = i.useState(() => {
            var e, t;
            if (null != _) return _;
            let r = (0, d.iC)(a, n);
            return null != v ? (null !== (e = r.find((e) => e.id === v)) && void 0 !== e ? e : null) : void 0 !== O ? O : null == L ? null : null !== (t = r.find((e) => (0, T.sr)(e, L))) && void 0 !== t ? t : null;
        }),
        { product: M, purchase: P } = (0, f.Z)(null == x ? void 0 : x.skuId),
        k = S.ZP.canUseCollectibles(t),
        U = i.useRef(null),
        G = (0, h.Z)(s),
        B = (0, T.sr)(x, void 0 === O ? L : O),
        Z = () => {
            D(x), u();
        },
        F = i.useCallback(
            (e) => {
                u(),
                    (0, c.mK)({
                        analyticsLocations: s,
                        analyticsSource: l.Z.EDIT_AVATAR_DECORATION_MODAL,
                        initialProductSkuId: e
                    });
            },
            [s, u]
        ),
        V = (0, p.Mu)('AvatarDecorationModalBody');
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.ModalHeader, {
                separator: !1,
                className: R.modalHeader,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: 'heading-lg/semibold',
                        children: C.intl.string(C.t['Tna/TU'])
                    }),
                    (0, r.jsx)(o.ModalCloseButton, {
                        className: R.modalCloseButton,
                        onClick: u
                    })
                ]
            }),
            (0, r.jsxs)(o.ModalContent, {
                className: R.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, r.jsx)(y.Z, {
                        user: t,
                        guild: A,
                        pendingAvatarDecoration: x,
                        selectedAvatarDecorationRef: U,
                        onSelect: (e) => {
                            w(e), null != e && G(e);
                        },
                        onOpenShop: F
                    }),
                    (0, r.jsx)(b.Z, {
                        className: R.modalPreview,
                        user: t,
                        guildId: null == A ? void 0 : A.id,
                        avatarDecorationOverride: x
                    })
                ]
            }),
            (0, r.jsxs)(o.ModalFooter, {
                className: R.modalFooter,
                children: [
                    (0, r.jsx)('div', {
                        children:
                            (null != P && (!(0, d.qS)(P) || k)) || null === x
                                ? (0, r.jsx)(o.Button, {
                                      onClick: Z,
                                      disabled: B,
                                      children: C.intl.string(C.t.d6sv6u)
                                  })
                                : null == P && (k || !(0, d.G1)(M))
                                  ? (0, r.jsx)(o.Button, {
                                        className: R.modalFooterShopButton,
                                        onClick: () => F(null == M ? void 0 : M.skuId),
                                        children: C.intl.string(C.t.fYfGgI)
                                    })
                                  : (0, r.jsx)(g.Z, {
                                        subscriptionTier: N.Si.TIER_2,
                                        showGradient: V,
                                        buttonText: S.ZP.isPremium(t) ? C.intl.string(C.t.KXLX7u) : V ? C.intl.string(C.t.pj0XBA) : C.intl.string(C.t.mr4K7O)
                                    })
                    }),
                    !V &&
                        (0, r.jsx)(o.Button, {
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            onClick: u,
                            children: C.intl.string(C.t['ETE/oK'])
                        }),
                    V &&
                        (0, d.G1)(M) &&
                        (0, r.jsx)(m.Z, {
                            product: M,
                            onSecondaryClick: u
                        })
                ]
            })
        ]
    });
}
function D(e) {
    let { transitionState: t, analyticsLocations: n, onClose: d, onCloseModal: f, initialSelectedDecoration: h, initialSelectedDecorationId: p, isTryItOutFlow: m, guild: g } = e,
        E = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        { analyticsLocations: S } = (0, u.ZP)(n, l.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: T, purchases: b, isFetchingCategories: y, isFetchingPurchases: N } = (0, _.Z)(),
        C = y || (N && 0 === b.size);
    return (
        i.useEffect(() => {
            I.default.track(A.rMx.OPEN_MODAL, {
                type: 'Edit Avatar Decoration Modal',
                location_stack: S
            });
        }, [S]),
        i.useEffect(
            () => () => {
                (0, c.K$)({
                    categories: [...T.values()],
                    itemTypes: [a.Z.AVATAR_DECORATION]
                });
            },
            [T]
        ),
        null == E
            ? null
            : (0, r.jsx)(u.Gt, {
                  value: S,
                  children: (0, r.jsx)(o.ModalRoot, {
                      transitionState: t,
                      className: R.modal,
                      size: C ? o.ModalSize.DYNAMIC : o.ModalSize.MEDIUM,
                      children: C
                          ? (0, r.jsx)(o.Spinner, {
                                className: R.spinner,
                                type: o.Spinner.Type.SPINNING_CIRCLE
                            })
                          : (0, r.jsx)(O, {
                                user: E,
                                guild: g,
                                categories: T,
                                purchases: b,
                                analyticsLocations: S,
                                initialSelectedDecoration: h,
                                initialSelectedDecorationId: p,
                                onClose: () => {
                                    f(), null == d || d();
                                },
                                isTryItOutFlow: m
                            })
                  })
              })
    );
}
