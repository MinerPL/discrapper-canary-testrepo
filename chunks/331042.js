n.r(t), n.d(t, {
    CollectiblesCollectedModalInner: function () {
        return P;
    }
}), n(47120), n(627341);
var a = n(735250), r = n(470079), o = n(887024), l = n(512722), i = n.n(l), s = n(278074), c = n(979554), d = n(399606), u = n(481060), f = n(37234), p = n(607070), g = n(100527), v = n(906732), C = n(1585), E = n(125988), h = n(300284), b = n(876917), m = n(642619), T = n(594174), y = n(884697), A = n(617452), x = n(318028), L = n(635552), I = n(328456), Z = n(624377), N = n(530618), _ = n(141011), S = n(372654), O = n(216541), R = n(302800), k = n(215023), M = n(689938), B = n(432015), j = n(660097);
let P = e => {
    var t, n;
    let {
            product: o,
            onClose: l,
            confettiTarget: R,
            confettiCanvas: P,
            hideConfetti: w = !1,
            analyticsLocations: D
        } = e, {confettiColors: F} = (0, Z.Z)(o.styles), H = (0, d.e7)([T.default], () => {
            let e = T.default.getCurrentUser();
            return i()(null != e, 'User cannot be undefined'), e;
        }), z = (0, d.e7)([p.Z], () => p.Z.useReducedMotion), U = (0, A.J)('CollectiblesCollectedModal'), [V] = o.items, {avatarDecorationSrc: W} = (0, E.Z)({
            user: H,
            avatarDecorationOverride: (null == V ? void 0 : V.type) === c.Z.AVATAR_DECORATION ? V : null,
            size: (0, C.y9)(u.AvatarSizes.SIZE_120)
        }), G = r.useRef(null), {analyticsLocations: K} = (0, v.ZP)([
            ...D,
            g.Z.COLLECTIBLES_COLLECTED_MODAL
        ]), Y = (0, h.Z)({ analyticsLocations: K }), J = r.useCallback(() => {
            if (l(), (0, f.xf)(), Y(), o.type === c.Z.AVATAR_DECORATION) {
                i()(V.type === c.Z.AVATAR_DECORATION, 'product type and item type are the same'), (0, C.ps)({
                    initialSelectedDecoration: V,
                    analyticsLocations: K
                });
                return;
            }
            o.type === c.Z.PROFILE_EFFECT && (0, m.H)({
                initialSelectedEffectId: V.id,
                analyticsLocations: K
            });
        }, [
            l,
            Y,
            o.type,
            V,
            K
        ]), Q = r.useCallback(() => {
            U && (0, u.showToast)((0, u.createToast)(M.Z.Messages.COLLECTIBLES_PROFILE_UPDATE_NOTIFICATION, u.ToastType.MESSAGE, {
                duration: 6000,
                position: u.ToastPosition.TOP
            }));
        }, [U]), {handleUseNow: q} = (0, L.W)({
            product: o,
            onSuccess: () => {
                Q(), l();
            },
            onError: l
        }), {
            firstAvatarDecoration: X,
            firstProfileEffect: $
        } = (0, I.R)(o), ee = null != X && null != $, {
            category: et,
            isFetching: en
        } = (0, x.l)(o.skuId), ea = null !== (n = null == et ? void 0 : et.successModalBg) && void 0 !== n ? n : o.banner;
    return (0, a.jsxs)(v.Gt, {
        value: K,
        children: [
            (0, a.jsxs)('div', {
                className: B.modalInner,
                ref: G,
                children: [
                    (0, a.jsxs)('div', {
                        className: B.bannerContainer,
                        children: [
                            (0, a.jsx)(_.Z, {
                                asset: en ? void 0 : ea,
                                addGradient: null === (t = k.Ve[o.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
                                size: (0, S.ML)(880),
                                className: B.decorationBanner,
                                blur: !0
                            }),
                            (0, s.EQ)(o.type).with(c.Z.PROFILE_EFFECT, () => (0, a.jsx)('div', {
                                className: B.profileEffectShopPreview,
                                children: (0, a.jsx)(b.Z, {
                                    forCollectedModal: !0,
                                    profileEffectId: V.id
                                })
                            })).with(c.Z.AVATAR_DECORATION, () => (i()(V.type === c.Z.AVATAR_DECORATION, 'ts-match already checked the type'), (0, a.jsx)(u.Avatar, {
                                size: u.AvatarSizes.SIZE_120,
                                src: j,
                                avatarDecoration: W,
                                className: B.avatarDecoration,
                                'aria-label': o.name
                            }))).with(c.Z.BUNDLE, () => (0, a.jsx)('div', {
                                className: B.bundlePreview,
                                children: (0, a.jsx)(O.d, {
                                    product: o,
                                    user: H,
                                    isPurchased: !1,
                                    isHighlighted: !0,
                                    profileEffectClassName: B.bundleProfileEffectCard
                                })
                            })).otherwise(() => null)
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: B.collectedInfoContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: B.collectedTextContainer,
                                children: [
                                    (0, a.jsx)(u.Heading, {
                                        variant: 'heading-lg/bold',
                                        children: M.Z.Messages.COLLECTIBLES_YOU_COLLECTED.format({ itemName: o.name })
                                    }),
                                    (0, a.jsx)(u.Text, {
                                        variant: 'text-sm/normal',
                                        children: (0, s.EQ)(null == o ? void 0 : o.type).with(c.Z.BUNDLE, () => M.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE).with(c.Z.PROFILE_EFFECT, () => M.Z.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION).otherwise(() => M.Z.Messages.COLLECTIBLES_PERMANENT_COLLECTION)
                                    })
                                ]
                            }),
                            (0, y.x6)(o) ? (0, a.jsxs)('div', {
                                className: B.buttons,
                                children: [
                                    (0, a.jsx)(u.Button, {
                                        color: ee ? u.ButtonColors.PRIMARY : u.ButtonColors.BRAND,
                                        onClick: J,
                                        children: M.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
                                    }),
                                    ee ? (0, a.jsx)(u.Button, {
                                        onClick: q,
                                        children: M.Z.Messages.COLLECTIBLES_USE_NOW
                                    }) : null
                                ]
                            }) : (0, a.jsx)(u.Button, {
                                onClick: J,
                                children: M.Z.Messages.COLLECTIBLES_USE_NOW
                            })
                        ]
                    }),
                    (0, a.jsx)(u.ModalCloseButton, {
                        onClick: l,
                        className: B.modalCloseButton,
                        withCircleBackground: !0
                    })
                ]
            }),
            !w && !z && (0, a.jsx)(N.Z, {
                confettiTarget: null != R ? R : G.current,
                confettiCanvas: P,
                sprites: (0, S.vK)(o.categorySkuId),
                colors: null == F ? void 0 : F.map(e => e.toHexString())
            })
        ]
    });
};
t.default = e => {
    let {
            transitionState: t,
            product: n,
            onClose: l,
            analyticsLocations: i
        } = e, s = r.useRef(new o.qA()), [c, d] = r.useState(null), f = (0, R.UY)(n.skuId);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(o.O_, {
                ref: d,
                className: B.confettiCanvas,
                environment: s.current
            }),
            (0, a.jsxs)(u.ModalRoot, {
                hideShadow: !0,
                transitionState: t,
                size: u.ModalSize.DYNAMIC,
                className: B.modalRoot,
                children: [
                    null != f && (0, a.jsx)('img', {
                        src: f.confettiAssetSrc,
                        className: B.customConfetti,
                        style: f.style,
                        alt: '',
                        'aria-hidden': 'true'
                    }),
                    (0, a.jsx)(u.ModalContent, {
                        className: B.modalContent,
                        children: (0, a.jsx)(P, {
                            product: n,
                            onClose: l,
                            confettiCanvas: c,
                            hideConfetti: null != f,
                            analyticsLocations: i
                        })
                    })
                ]
            })
        ]
    });
};
