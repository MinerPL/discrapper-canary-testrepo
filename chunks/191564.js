n.r(t),
    n.d(t, {
        default: function () {
            return S;
        }
    }),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(979554),
    o = n(442837),
    s = n(481060),
    a = n(100527),
    c = n(906732),
    d = n(335131),
    u = n(884697),
    f = n(449217),
    m = n(566111),
    p = n(81245),
    h = n(269982),
    g = n(197115),
    v = n(150039),
    x = n(594174),
    I = n(626135),
    C = n(74538),
    P = n(934261),
    j = n(52268),
    Z = n(981631),
    E = n(474936),
    _ = n(388032),
    N = n(485002);
function y(e) {
    let { user: t, product: n, purchase: l, onApply: o, onClose: c, disableApplyButton: f, canUseCollectibles: m, selectedProfileEffectId: v, selectedProfileEffectItem: x, analyticsLocations: I } = e,
        P = r.useCallback(() => {
            c(),
                (0, d.mK)({
                    analyticsLocations: I,
                    analyticsSource: a.Z.EDIT_PROFILE_EFFECT_MODAL,
                    initialProductSkuId: null != x ? x.skuId : void 0
                });
        }, [c, I, x]),
        j = (0, p.Mu)('ProfileEffectModalFooter');
    return (0, i.jsxs)(s.ModalFooter, {
        className: N.modalFooter,
        children: [
            (0, i.jsxs)('div', {
                className: N.buttonsRight,
                children: [
                    !j &&
                        (0, i.jsx)(s.Button, {
                            look: s.Button.Looks.LINK,
                            color: s.Button.Colors.PRIMARY,
                            onClick: c,
                            children: _.intl.string(_.t['ETE/oK'])
                        }),
                    (null != l && (!(0, u.qS)(l) || m)) || null === v
                        ? (0, i.jsx)(s.Button, {
                              onClick: o,
                              disabled: f,
                              children: _.intl.string(_.t.d6sv6u)
                          })
                        : m || !(0, u.G1)(n)
                          ? (0, i.jsx)(s.Button, {
                                onClick: P,
                                children: _.intl.string(_.t.fYfGgI)
                            })
                          : (0, i.jsx)(g.Z, {
                                subscriptionTier: E.Si.TIER_2,
                                showGradient: j,
                                buttonText: C.ZP.isPremium(t) ? _.intl.string(_.t.KXLX7u) : j ? _.intl.string(_.t.pj0XBA) : _.intl.string(_.t.mr4K7O)
                            })
                ]
            }),
            j &&
                (0, u.G1)(n) &&
                (0, i.jsx)(h.Z, {
                    product: n,
                    onSecondaryClick: c
                })
        ]
    });
}
function b(e) {
    let { user: t, guild: n, categories: l, purchases: o, onClose: a, initialSelectedProfileEffectId: c, currentSavedEffectId: d, analyticsLocations: m } = e,
        { pendingProfileEffectId: p } = (0, v.bd)(n),
        [h, g] = r.useMemo(() => {
            let e = (0, u.bl)(l, o);
            return [e.purchased, e.shopPreviews];
        }, [l, o]),
        [x, I] = r.useState(() => (null != c ? c : void 0 !== p ? p : null == d ? null : null != d ? d : null)),
        [Z, E] = r.useMemo(() => {
            var e;
            let t = h.find((e) => (null == e ? void 0 : e.id) === x),
                n = null != t || null === x;
            return [null !== (e = null != t ? t : g.find((e) => (null == e ? void 0 : e.id) === x)) && void 0 !== e ? e : null, n];
        }, [x, h, g]),
        { product: b, purchase: S } = (0, f.Z)(null == Z ? void 0 : Z.skuId),
        T = r.useRef(null),
        A = C.ZP.canUseCollectibles(t),
        B = x === (void 0 === p ? (null != d ? d : null) : p),
        k = r.useCallback(
            (e) => {
                I(e);
            },
            [I]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(s.ModalHeader, {
                separator: !1,
                className: N.modalHeader,
                children: [
                    (0, i.jsx)(s.Heading, {
                        variant: 'heading-lg/semibold',
                        children: _.intl.string(_.t.t5SVGR)
                    }),
                    (0, i.jsx)(s.ModalCloseButton, {
                        className: N.modalCloseButton,
                        onClick: a
                    })
                ]
            }),
            (0, i.jsxs)(s.ModalContent, {
                className: N.modalContent,
                children: [
                    (0, i.jsx)(j.Z, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: x,
                        selectedProfileEffectRef: T,
                        onSelect: k,
                        onClose: a
                    }),
                    (0, i.jsx)(P.Z, {
                        user: t,
                        canApplySelectedChange: E,
                        pendingProfileEffectRecord: Z,
                        product: b,
                        purchase: S,
                        guild: n
                    })
                ]
            }),
            (0, i.jsx)(y, {
                user: t,
                onApply: () => {
                    (0, v.s6)(x, d, null == n ? void 0 : n.id), a();
                },
                onClose: a,
                product: b,
                purchase: S,
                canUseCollectibles: A,
                selectedProfileEffectId: x,
                selectedProfileEffectItem: Z,
                disableApplyButton: B,
                analyticsLocations: m
            })
        ]
    });
}
function S(e) {
    let { transitionState: t, analyticsLocations: n, initialSelectedEffectId: u, guild: f, onClose: p } = e,
        { isFetching: h, categories: g, purchases: C } = (0, m.Z)(),
        P = (0, o.e7)([x.default], () => x.default.getCurrentUser()),
        { analyticsLocations: j } = (0, c.ZP)(n, a.Z.EDIT_PROFILE_EFFECT_MODAL),
        E = (0, v.Kg)(P, f);
    return (
        r.useEffect(() => {
            I.default.track(Z.rMx.OPEN_MODAL, {
                type: Z.jXE.PROFILE_EFFECT_CUSTOMIZATION,
                location_stack: j
            });
        }, [j]),
        r.useEffect(
            () => () => {
                (0, d.K$)({
                    categories: [...g.values()],
                    itemTypes: [l.Z.PROFILE_EFFECT]
                });
            },
            [g]
        ),
        (0, i.jsx)(c.Gt, {
            value: j,
            children: (0, i.jsx)(s.ModalRoot, {
                transitionState: t,
                className: N.modal,
                size: h ? s.ModalSize.DYNAMIC : s.ModalSize.MEDIUM,
                children: h
                    ? (0, i.jsx)(s.Spinner, {
                          className: N.spinner,
                          type: s.Spinner.Type.SPINNING_CIRCLE
                      })
                    : (0, i.jsx)(b, {
                          user: P,
                          guild: f,
                          categories: g,
                          purchases: C,
                          initialSelectedProfileEffectId: u,
                          currentSavedEffectId: E,
                          onClose: p,
                          analyticsLocations: j
                      })
            })
        })
    );
}
