n.r(t),
    n.d(t, {
        default: function () {
            return D;
        }
    }),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(979554),
    s = n(442837),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(335131),
    d = n(884697),
    _ = n(449217),
    E = n(223143),
    f = n(311395),
    h = n(81245),
    p = n(269982),
    I = n(197115),
    m = n(369111),
    T = n(594174),
    S = n(626135),
    g = n(74538),
    A = n(864106),
    N = n(240781),
    O = n(818611),
    R = n(981631),
    v = n(474936),
    C = n(689938),
    y = n(801802);
function L(e) {
    let { user: t, categories: n, purchases: a, analyticsLocations: s, onClose: u, initialSelectedDecoration: E, initialSelectedDecorationId: T, isTryItOutFlow: S, guild: R } = e,
        {
            pendingAvatarDecoration: L,
            setPendingAvatarDecoration: D,
            savedAvatarDecoration: b
        } = (0, m.Z)({
            analyticsLocations: s,
            isTryItOut: S,
            guildId: null == R ? void 0 : R.id
        }),
        [M, P] = i.useState(() => {
            var e, t;
            if (null != E) return E;
            let r = (0, d.iC)(a, n);
            return null != T ? (null !== (e = r.find((e) => e.id === T)) && void 0 !== e ? e : null) : void 0 !== L ? L : null == b ? null : null !== (t = r.find((e) => (0, A.sr)(e, b))) && void 0 !== t ? t : null;
        }),
        { product: U, purchase: w } = (0, _.Z)(null == M ? void 0 : M.skuId),
        x = g.ZP.canUseCollectibles(t),
        G = i.useRef(null),
        k = (0, f.Z)(s),
        B = (0, A.sr)(M, void 0 === L ? b : L),
        F = () => {
            D(M), u();
        },
        V = i.useCallback(
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
        H = (0, h.Mu)('AvatarDecorationModalBody');
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.ModalHeader, {
                separator: !1,
                className: y.modalHeader,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: 'heading-lg/semibold',
                        children: C.Z.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
                    }),
                    (0, r.jsx)(o.ModalCloseButton, {
                        className: y.modalCloseButton,
                        onClick: u
                    })
                ]
            }),
            (0, r.jsxs)(o.ModalContent, {
                className: y.modalContent,
                scrollbarType: 'none',
                children: [
                    (0, r.jsx)(O.Z, {
                        user: t,
                        guild: R,
                        pendingAvatarDecoration: M,
                        selectedAvatarDecorationRef: G,
                        onSelect: (e) => {
                            P(e), null != e && k(e);
                        },
                        onOpenShop: V
                    }),
                    (0, r.jsx)(N.Z, {
                        className: y.modalPreview,
                        user: t,
                        guildId: null == R ? void 0 : R.id,
                        avatarDecorationOverride: M
                    })
                ]
            }),
            (0, r.jsxs)(o.ModalFooter, {
                className: y.modalFooter,
                children: [
                    (0, r.jsx)('div', {
                        children:
                            (null != w && (!(0, d.qS)(w) || x)) || null === M
                                ? (0, r.jsx)(o.Button, {
                                      onClick: F,
                                      disabled: B,
                                      children: C.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                                  })
                                : null == w && (x || !(0, d.G1)(U))
                                  ? (0, r.jsx)(o.Button, {
                                        className: y.modalFooterShopButton,
                                        onClick: () => V(null == U ? void 0 : U.skuId),
                                        children: C.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                                    })
                                  : (0, r.jsx)(I.Z, {
                                        subscriptionTier: v.Si.TIER_2,
                                        showGradient: H,
                                        buttonText: g.ZP.isPremium(t) ? C.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : H ? C.Z.Messages.PREMIUM_UPSELL_GET_NITRO : C.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                                    })
                    }),
                    (0, r.jsx)(o.Button, {
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        onClick: u,
                        children: C.Z.Messages.CANCEL
                    }),
                    (0, d.G1)(U) &&
                        (0, r.jsx)(p.Z, {
                            product: U,
                            onSecondaryClick: u
                        })
                ]
            })
        ]
    });
}
function D(e) {
    let { transitionState: t, analyticsLocations: n, onClose: d, onCloseModal: _, initialSelectedDecoration: f, initialSelectedDecorationId: h, isTryItOutFlow: p, guild: I } = e,
        m = (0, s.e7)([T.default], () => T.default.getCurrentUser()),
        { analyticsLocations: g } = (0, u.ZP)(n, l.Z.EDIT_AVATAR_DECORATION_MODAL),
        { categories: A, purchases: N, isFetchingCategories: O, isFetchingPurchases: v } = (0, E.Z)(),
        C = O || (v && 0 === N.size);
    return (
        i.useEffect(() => {
            S.default.track(R.rMx.OPEN_MODAL, {
                type: 'Edit Avatar Decoration Modal',
                location_stack: g
            });
        }, [g]),
        i.useEffect(
            () => () => {
                (0, c.K$)({
                    categories: [...A.values()],
                    itemTypes: [a.Z.AVATAR_DECORATION]
                });
            },
            [A]
        ),
        null == m
            ? null
            : (0, r.jsx)(u.Gt, {
                  value: g,
                  children: (0, r.jsx)(o.ModalRoot, {
                      transitionState: t,
                      className: y.modal,
                      size: C ? o.ModalSize.DYNAMIC : o.ModalSize.MEDIUM,
                      children: C
                          ? (0, r.jsx)(o.Spinner, {
                                className: y.spinner,
                                type: o.Spinner.Type.SPINNING_CIRCLE
                            })
                          : (0, r.jsx)(L, {
                                user: m,
                                guild: I,
                                categories: A,
                                purchases: N,
                                analyticsLocations: g,
                                initialSelectedDecoration: f,
                                initialSelectedDecorationId: h,
                                onClose: () => {
                                    _(), null == d || d();
                                },
                                isTryItOutFlow: p
                            })
                  })
              })
    );
}
