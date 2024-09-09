n.r(t),
    n.d(t, {
        default: function () {
            return j;
        }
    }),
    n(47120);
var r = n(735250),
    s = n(470079),
    i = n(979554),
    l = n(442837),
    o = n(481060),
    a = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(884697),
    f = n(449217),
    m = n(566111),
    E = n(81245),
    p = n(269982),
    _ = n(197115),
    h = n(150039),
    I = n(594174),
    g = n(626135),
    v = n(74538),
    C = n(934261),
    x = n(52268),
    P = n(981631),
    Z = n(474936),
    A = n(689938),
    T = n(118610);
function N(e) {
    let { user: t, product: n, purchase: i, onApply: l, onClose: c, disableApplyButton: f, canUseCollectibles: m, selectedProfileEffectId: h, selectedProfileEffectItem: I, analyticsLocations: g } = e,
        C = s.useCallback(() => {
            c(),
                (0, d.mK)({
                    analyticsLocations: g,
                    analyticsSource: a.Z.EDIT_PROFILE_EFFECT_MODAL,
                    initialProductSkuId: null != I ? I.skuId : void 0
                });
        }, [c, g, I]),
        x = (0, E.Mu)('ProfileEffectModalFooter');
    return (0, r.jsxs)(o.ModalFooter, {
        className: T.modalFooter,
        children: [
            (0, r.jsxs)('div', {
                className: T.buttonsRight,
                children: [
                    (0, r.jsx)(o.Button, {
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        onClick: c,
                        children: A.Z.Messages.CANCEL
                    }),
                    (null != i && (!(0, u.qS)(i) || m)) || null === h
                        ? (0, r.jsx)(o.Button, {
                              onClick: l,
                              disabled: f,
                              children: A.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                          })
                        : m || !(0, u.G1)(n)
                          ? (0, r.jsx)(o.Button, {
                                onClick: C,
                                children: A.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                            })
                          : (0, r.jsx)(_.Z, {
                                subscriptionTier: Z.Si.TIER_2,
                                showGradient: x,
                                buttonText: v.ZP.isPremium(t) ? A.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : x ? A.Z.Messages.PREMIUM_UPSELL_GET_NITRO : A.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                            })
                ]
            }),
            (0, u.G1)(n) &&
                (0, r.jsx)(p.Z, {
                    product: n,
                    onSecondaryClick: c
                })
        ]
    });
}
function S(e) {
    let { user: t, guild: n, categories: i, purchases: l, onClose: a, initialSelectedProfileEffectId: c, currentSavedEffectId: d, analyticsLocations: m } = e,
        { pendingProfileEffectId: E } = (0, h.bd)(n),
        [p, _] = s.useMemo(() => {
            let e = (0, u.bl)(i, l);
            return [e.purchased, e.shopPreviews];
        }, [i, l]),
        [I, g] = s.useState(() => (null != c ? c : void 0 !== E ? E : null == d ? null : null != d ? d : null)),
        [P, Z] = s.useMemo(() => {
            var e;
            let t = p.find((e) => (null == e ? void 0 : e.id) === I),
                n = null != t || null === I;
            return [null !== (e = null != t ? t : _.find((e) => (null == e ? void 0 : e.id) === I)) && void 0 !== e ? e : null, n];
        }, [I, p, _]),
        { product: S, purchase: j } = (0, f.Z)(null == P ? void 0 : P.skuId),
        R = s.useRef(null),
        M = v.ZP.canUseCollectibles(t),
        L = I === (void 0 === E ? (null != d ? d : null) : E),
        O = s.useCallback(
            (e) => {
                g(e);
            },
            [g]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.ModalHeader, {
                separator: !1,
                className: T.modalHeader,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: 'heading-lg/semibold',
                        children: A.Z.Messages.PROFILE_EFFECT_MODAL_HEADER
                    }),
                    (0, r.jsx)(o.ModalCloseButton, {
                        className: T.modalCloseButton,
                        onClick: a
                    })
                ]
            }),
            (0, r.jsxs)(o.ModalContent, {
                className: T.modalContent,
                children: [
                    (0, r.jsx)(x.Z, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: I,
                        selectedProfileEffectRef: R,
                        onSelect: O,
                        onClose: a
                    }),
                    (0, r.jsx)(C.Z, {
                        user: t,
                        canApplySelectedChange: Z,
                        pendingProfileEffectRecord: P,
                        product: S,
                        purchase: j,
                        guild: n
                    })
                ]
            }),
            (0, r.jsx)(N, {
                user: t,
                onApply: () => {
                    (0, h.s6)(I, d, null == n ? void 0 : n.id), a();
                },
                onClose: a,
                product: S,
                purchase: j,
                canUseCollectibles: M,
                selectedProfileEffectId: I,
                selectedProfileEffectItem: P,
                disableApplyButton: L,
                analyticsLocations: m
            })
        ]
    });
}
function j(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffectId: u, guild: f, onClose: E } = e,
        { isFetching: p, categories: _, purchases: v } = (0, m.Z)(),
        C = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
        { analyticsLocations: x } = (0, c.ZP)(n, a.Z.EDIT_PROFILE_EFFECT_MODAL),
        Z = (0, h.Kg)(C, f);
    return (
        s.useEffect(() => {
            g.default.track(P.rMx.OPEN_MODAL, {
                type: P.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                location_stack: x
            });
        }, [x]),
        s.useEffect(
            () => () => {
                (0, d.K$)({
                    categories: [..._.values()],
                    itemTypes: [i.Z.PROFILE_EFFECT]
                });
            },
            [_]
        ),
        (0, r.jsx)(c.Gt, {
            value: x,
            children: (0, r.jsx)(o.ModalRoot, {
                transitionState: t,
                className: T.modal,
                size: p ? o.ModalSize.DYNAMIC : o.ModalSize.MEDIUM,
                children: p
                    ? (0, r.jsx)(o.Spinner, {
                          className: T.spinner,
                          type: o.Spinner.Type.SPINNING_CIRCLE
                      })
                    : (0, r.jsx)(S, {
                          user: C,
                          guild: f,
                          categories: _,
                          purchases: v,
                          initialSelectedProfileEffectId: u,
                          currentSavedEffectId: Z,
                          onClose: E,
                          analyticsLocations: x
                      })
            })
        })
    );
}
