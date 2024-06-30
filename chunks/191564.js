n.r(t), n.d(t, {
    default: function () {
        return T;
    }
}), n(47120);
var r = n(735250), s = n(470079), i = n(979554), l = n(442837), o = n(481060), a = n(100527), c = n(906732), d = n(335131), u = n(884697), f = n(449217), m = n(566111), E = n(197115), p = n(150039), _ = n(594174), h = n(626135), I = n(74538), g = n(934261), v = n(52268), C = n(981631), x = n(474936), Z = n(689938), P = n(408156);
function A(e) {
    let {
            user: t,
            product: n,
            purchase: i,
            onApply: l,
            onClose: c,
            disableApplyButton: f,
            canUseCollectibles: m,
            selectedProfileEffectId: p,
            selectedProfileEffectItem: _,
            analyticsLocations: h
        } = e, g = s.useCallback(() => {
            c(), (0, d.mK)({
                analyticsLocations: h,
                analyticsSource: a.Z.EDIT_PROFILE_EFFECT_MODAL,
                initialProductSkuId: null != _ ? _.skuId : void 0
            });
        }, [
            c,
            h,
            _
        ]);
    return (0, r.jsx)(o.ModalFooter, {
        className: P.modalFooter,
        children: (0, r.jsxs)('div', {
            className: P.buttonsRight,
            children: [
                (0, r.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: o.Button.Colors.PRIMARY,
                    onClick: c,
                    children: Z.Z.Messages.CANCEL
                }),
                null != i && (!(0, u.qS)(i) || m) || null === p ? (0, r.jsx)(o.Button, {
                    onClick: l,
                    disabled: f,
                    children: Z.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
                }) : m || !(0, u.G1)(n) ? (0, r.jsx)(o.Button, {
                    className: P.__invalid_modalFooterShopButton,
                    onClick: g,
                    children: Z.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                }) : (0, r.jsx)(E.Z, {
                    subscriptionTier: x.Si.TIER_2,
                    buttonText: I.ZP.isPremium(t) ? Z.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : Z.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                })
            ]
        })
    });
}
function N(e) {
    let {
            user: t,
            guild: n,
            categories: i,
            purchases: l,
            onClose: a,
            initialSelectedProfileEffectId: c,
            currentSavedEffectId: d,
            analyticsLocations: m
        } = e, {pendingProfileEffectId: E} = (0, p.bd)(n), [_, h] = s.useMemo(() => {
            let e = (0, u.bl)(i, l);
            return [
                e.purchased,
                e.shopPreviews
            ];
        }, [
            i,
            l
        ]), [C, x] = s.useState(() => null != c ? c : void 0 !== E ? E : null == d ? null : null != d ? d : null), [N, T] = s.useMemo(() => {
            var e;
            let t = _.find(e => (null == e ? void 0 : e.id) === C), n = null != t || null === C;
            return [
                null !== (e = null != t ? t : h.find(e => (null == e ? void 0 : e.id) === C)) && void 0 !== e ? e : null,
                n
            ];
        }, [
            C,
            _,
            h
        ]), {
            product: S,
            purchase: j
        } = (0, f.Z)(null == N ? void 0 : N.skuId), R = s.useRef(null), M = I.ZP.canUseCollectibles(t), O = C === (void 0 === E ? null != d ? d : null : E), b = s.useCallback(e => {
            x(e);
        }, [x]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.ModalHeader, {
                separator: !1,
                className: P.modalHeader,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: 'heading-lg/semibold',
                        children: Z.Z.Messages.PROFILE_EFFECT_MODAL_HEADER
                    }),
                    (0, r.jsx)(o.ModalCloseButton, {
                        className: P.modalCloseButton,
                        onClick: a
                    })
                ]
            }),
            (0, r.jsxs)(o.ModalContent, {
                className: P.modalContent,
                children: [
                    (0, r.jsx)(v.Z, {
                        user: t,
                        guild: n,
                        pendingProfileEffect: C,
                        selectedProfileEffectRef: R,
                        onSelect: b,
                        onClose: a
                    }),
                    (0, r.jsx)(g.Z, {
                        user: t,
                        canApplySelectedChange: T,
                        pendingProfileEffectRecord: N,
                        product: S,
                        purchase: j,
                        guild: n
                    })
                ]
            }),
            (0, r.jsx)(A, {
                user: t,
                onApply: () => {
                    (0, p.s6)(C, d, n), a();
                },
                onClose: a,
                product: S,
                purchase: j,
                canUseCollectibles: M,
                selectedProfileEffectId: C,
                selectedProfileEffectItem: N,
                disableApplyButton: O,
                analyticsLocations: m
            })
        ]
    });
}
function T(e) {
    let {
            transitionState: t,
            analyticsLocations: n,
            initialSelectedEffectId: u,
            guild: f,
            onClose: E
        } = e, {
            isFetching: I,
            categories: g,
            purchases: v
        } = (0, m.Z)(), x = (0, l.e7)([_.default], () => _.default.getCurrentUser()), {analyticsLocations: Z} = (0, c.ZP)(n, a.Z.EDIT_PROFILE_EFFECT_MODAL), A = (0, p.Kg)(x, f);
    return s.useEffect(() => {
        h.default.track(C.rMx.OPEN_MODAL, {
            type: C.jXE.PROFILE_EFFECT_CUSTOMIZATION,
            location_stack: Z
        });
    }, [Z]), s.useEffect(() => () => {
        (0, d.K$)({
            categories: [...g.values()],
            itemTypes: [i.Z.PROFILE_EFFECT]
        });
    }, [g]), (0, r.jsx)(c.Gt, {
        value: Z,
        children: (0, r.jsx)(o.ModalRoot, {
            transitionState: t,
            className: P.modal,
            size: I ? o.ModalSize.DYNAMIC : o.ModalSize.MEDIUM,
            children: I ? (0, r.jsx)(o.Spinner, {
                className: P.spinner,
                type: o.Spinner.Type.SPINNING_CIRCLE
            }) : (0, r.jsx)(N, {
                user: x,
                guild: f,
                categories: g,
                purchases: v,
                initialSelectedProfileEffectId: u,
                currentSavedEffectId: A,
                onClose: E,
                analyticsLocations: Z
            })
        })
    });
}
