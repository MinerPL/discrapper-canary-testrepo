i.r(t), i(47120), i(627341);
var n = i(735250), s = i(470079), a = i(120356), l = i.n(a), r = i(278074), o = i(979554), c = i(399606), d = i(780384), u = i(481060), C = i(37234), m = i(809206), E = i(727637), _ = i(410030), I = i(100527), f = i(906732), L = i(1585), v = i(786761), x = i(3148), T = i(739566), h = i(753206), p = i(333867), P = i(197115), g = i(300284), N = i(921813), S = i(876917), A = i(642619), O = i(25990), b = i(594174), j = i(626135), Z = i(74538), w = i(335131), B = i(1870), M = i(884697), R = i(188584), D = i(724994), k = i(328456), U = i(390698), y = i(141011), F = i(426171), H = i(224068), V = i(813083), W = i(823941), G = i(680942), z = i(558060), Y = i(237031), K = i(372654), Q = i(616066), X = i(832149), q = i(215023), J = i(981631), $ = i(474936), ee = i(231338), et = i(689938), ei = i(178215);
let en = e => {
        let {
                item: t,
                user: i,
                isBundleItem: a = !1
            } = e, l = s.useRef(null), c = (0, E.Z)(l);
        return (0, r.EQ)(t.type).with(o.Z.AVATAR_DECORATION, () => (0, n.jsx)('div', {
            className: a ? ei.bundleAvatarPreviewContainer : ei.avatarPreviewContainer,
            children: (0, n.jsx)(Q.R, {
                user: i,
                item: t
            })
        })).with(o.Z.PROFILE_EFFECT, () => (0, n.jsx)('div', {
            className: a ? ei.bundlePfxPreviewContainer : ei.pfxPreviewContainer,
            ref: l,
            children: (0, n.jsx)(S.Z, {
                profileEffectId: t.id,
                isHovering: c,
                removeSetHeight: !0
            })
        })).otherwise(() => null);
    }, es = e => {
        let {
                product: t,
                user: i
            } = e, [a, l] = s.useState(0);
        s.useEffect(() => {
            let e = setInterval(() => {
                t.items.length > 0 && l(e => (e + 1) % t.items.length);
            }, 5000);
            return () => {
                clearInterval(e);
            };
        }, [
            t.skuId,
            t.items.length,
            i.id
        ]);
        let r = t.items.length;
        return (0, n.jsx)('div', {
            className: ei.bundlePreviewContainer,
            children: (0, n.jsx)(u.Slides, {
                activeSlide: String(a),
                children: t.items.map((e, s) => {
                    let a = String(s), l = null != t.bundledProducts ? t.bundledProducts[s] : void 0, o = '('.concat(s + 1, '/').concat(r, ')');
                    return (0, n.jsx)(u.Slide, {
                        id: a,
                        children: (0, n.jsxs)('div', {
                            className: ei.bundlePreviewSlide,
                            children: [
                                (0, n.jsx)(en, {
                                    item: e,
                                    user: i,
                                    isBundleItem: !0
                                }),
                                (0, n.jsxs)(u.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-muted',
                                    className: ei.bundleSlideTitle,
                                    children: [
                                        null == l ? void 0 : l.name,
                                        ' ',
                                        o
                                    ]
                                })
                            ]
                        })
                    }, a);
                })
            })
        });
    }, ea = e => {
        let {
            product: t,
            user: i
        } = e;
        return (0, M.x6)(t) ? (0, n.jsx)(es, {
            product: t,
            user: i
        }) : t.items.length > 0 ? (0, n.jsx)(en, {
            item: t.items[0],
            user: i
        }) : null;
    }, el = e => {
        var t, i;
        let {
                product: a,
                user: r,
                category: E,
                onClose: I,
                returnRef: v
            } = e, {analyticsLocations: x} = (0, f.ZP)(), T = Z.ZP.canUseCollectibles(r), {
                isPurchased: h,
                isPartiallyPurchased: N
            } = (0, D.L)(a), S = (0, c.e7)([B.Z], () => B.Z.isClaiming === a.skuId), O = (0, g.Z)({ analyticsLocations: x }), b = (0, _.ZP)(), j = (0, d.wj)(b), y = (0, M.G1)(a), F = (0, M.ql)(a, J.tuJ.DEFAULT), W = (null == F ? void 0 : F.amount) === 0, {
                firstAvatarDecoration: K,
                firstProfileEffect: Q
            } = (0, k.R)(a), q = s.useMemo(() => (0, M.BH)(a, T), [
                a,
                T
            ]), en = s.useCallback(() => {
                if (I(), (0, C.xf)(), O(), null != K) {
                    (0, L.ps)({
                        initialSelectedDecoration: K,
                        analyticsLocations: x
                    });
                    return;
                }
                null != Q && (0, A.H)({
                    initialSelectedEffectId: Q.id,
                    analyticsLocations: x
                });
            }, [
                x,
                K,
                Q,
                I,
                O
            ]);
        s.useEffect(() => {
            if (null != K)
                return (0, m.cV)(K), () => (0, m.cV)(void 0);
        }, [K]);
        let es = e => (0, n.jsx)(P.Z, {
                subscriptionTier: $.Si.TIER_2,
                fullWidth: !0,
                buttonText: e,
                onClick: Y.v,
                onSubscribeModalClose: () => {
                    (0, Y.T)({
                        product: a,
                        category: E,
                        returnRef: v,
                        analyticsLocations: x
                    });
                }
            }), {
                firstAvatarDecoration: el,
                firstProfileEffect: er
            } = (0, R.k)(a), eo = a.type === o.Z.BUNDLE ? et.Z.Messages.COLLECTIBLES_BUNDLE_DESCRIPTION.format({
                avatarDecorationName: null !== (t = null == el ? void 0 : el.name) && void 0 !== t ? t : '',
                profileEffectName: null !== (i = null == er ? void 0 : er.name) && void 0 !== i ? i : ''
            }) : a.summary;
        return (0, n.jsxs)('div', {
            className: ei.collectibleInfoContainer,
            children: [
                (0, n.jsx)('div', {
                    className: ei.titleContainer,
                    children: (0, n.jsx)(V.Z, {
                        category: E,
                        display: 'modal'
                    })
                }),
                (0, n.jsx)(ea, {
                    product: a,
                    user: r
                }),
                (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsxs)('div', {
                            className: ei.description,
                            children: [
                                (0, n.jsx)(H.Z, {
                                    product: a,
                                    isDarkText: !j
                                }),
                                (0, n.jsx)(u.Heading, {
                                    variant: 'heading-xl/extrabold',
                                    className: ei.headingWithItemTypePill,
                                    children: a.name
                                }),
                                (0, n.jsx)(u.Text, {
                                    variant: 'text-sm/normal',
                                    children: eo
                                }),
                                h || N ? (0, n.jsx)(U.U, {
                                    className: ei.priceTag,
                                    isPartiallyPurchased: N
                                }) : y ? (0, n.jsx)(u.Text, {
                                    variant: 'text-md/semibold',
                                    className: ei.priceTag,
                                    children: et.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
                                }) : (0, n.jsx)(z.Z, {
                                    product: a,
                                    discount: q,
                                    isPremiumUser: T,
                                    className: T ? ei.priceTag : ei.priceTagContainer,
                                    nitroUpsell: !T
                                })
                            ]
                        }),
                        (0, n.jsx)('div', {
                            className: ei.buttonsContainer,
                            children: (0, n.jsxs)('div', {
                                className: ei.primaryButtons,
                                children: [
                                    !y || T || W ? h ? (0, n.jsx)(u.Button, {
                                        className: ei.button,
                                        look: u.Button.Looks.FILLED,
                                        onClick: en,
                                        children: et.Z.Messages.COLLECTIBLES_USE_NOW
                                    }) : N ? null : y ? (0, n.jsx)(u.Button, {
                                        className: ei.button,
                                        look: u.Button.Looks.FILLED,
                                        submitting: S,
                                        submittingStartedLabel: et.Z.Messages.COLLECTIBLES_COLLECTING,
                                        submittingFinishedLabel: et.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                                        onClick: async () => {
                                            await (0, w.fK)(a.skuId), I(), (0, X.Z)({
                                                product: a,
                                                analyticsLocations: x
                                            });
                                        },
                                        children: et.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
                                    }) : (0, n.jsx)(u.Button, {
                                        className: ei.button,
                                        look: u.Button.Looks.FILLED,
                                        onClick: () => (0, p.Z)({
                                            skuId: a.skuId,
                                            analyticsLocations: x,
                                            onClose: e => e ? I() : (0, ee.dG)()
                                        }),
                                        children: (0, M.x6)(a) ? et.Z.Messages.COLLECTIBLES_BUNDLE_BUY_BUNDLE : a.type === o.Z.PROFILE_EFFECT ? et.Z.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : et.Z.Messages.COLLECTIBLES_BUY_DECORATION
                                    }) : es(et.Z.Messages.UNLOCK_WITH_NITRO),
                                    !y && !W && (0, n.jsx)(G.Z, {
                                        product: a,
                                        onSuccess: I,
                                        disableCustomColor: !0
                                    })
                                ]
                            })
                        }),
                        (0, n.jsx)(u.Text, {
                            className: l()(ei.disclaimer, !j && ei.disclaimerLight),
                            variant: 'text-xxs/normal',
                            children: h ? null : y ? et.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (0, M.x6)(a) ? et.Z.Messages.COLLECTIBLES_DETAILS_MODAL_BUNDLE_PURCHASE_DISCLAIMER : a.type === o.Z.PROFILE_EFFECT ? et.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : et.Z.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
                        })
                    ]
                })
            ]
        });
    }, er = e => {
        let {
                product: t,
                user: i
            } = e, s = Z.ZP.canUsePremiumProfileCustomization(i), a = (0, c.cj)([O.Z], () => O.Z.getAllPending()), l = t.type === o.Z.AVATAR_DECORATION, [r] = t.items, {
                firstAvatarDecoration: d,
                firstProfileEffect: u
            } = (0, k.R)(t), C = null != u;
        return (0, n.jsxs)('div', {
            className: (null == r ? void 0 : r.type) === o.Z.AVATAR_DECORATION ? ei.previewsContainerInner : ei.profileEffectPreviewsContainerInner,
            children: [
                (0, n.jsx)(N.Z, {
                    ...a,
                    user: i,
                    canUsePremiumCustomization: s,
                    pendingAvatarDecoration: d,
                    pendingProfileEffectId: null == u ? void 0 : u.id,
                    disabledInputs: !0,
                    hideMessageInput: !C,
                    hideExampleButton: !0,
                    hideCustomStatus: !0,
                    hideBioSection: l
                }),
                l && (0, n.jsx)(ec, { user: i })
            ]
        });
    }, eo = e => {
        let {author: t} = e;
        return (0, v.e5)({
            ...(0, x.ZP)({
                author: t,
                channelId: '1337',
                content: et.Z.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
            }),
            state: J.yb.SENT,
            id: '0'
        });
    }, ec = e => {
        let {user: t} = e, i = eo({ author: t });
        return (0, n.jsx)(u.FocusBlock, {
            children: (0, n.jsxs)(u.Card, {
                className: ei.chatPreview,
                outline: !0,
                'aria-hidden': !0,
                children: [
                    (0, n.jsx)(h.Z, {
                        className: ei.mockMessage,
                        author: (0, T.ZH)(i),
                        message: i
                    }, i.id),
                    (0, n.jsxs)('div', {
                        className: ei.mockInput,
                        children: [
                            (0, n.jsx)(u.CirclePlusIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: ei.mockInputButton
                            }),
                            (0, n.jsx)(u.ReactionIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: ei.mockInputButton
                            })
                        ]
                    })
                ]
            })
        });
    };
t.default = e => {
    var t, i;
    let {
            transitionState: a,
            onClose: l,
            product: r,
            category: d,
            returnRef: C,
            analyticsSource: m,
            analyticsLocations: E
        } = e, _ = (0, c.e7)([b.default], () => b.default.getCurrentUser()), {analyticsLocations: L} = (0, f.ZP)([
            ...E,
            I.Z.COLLECTIBLES_SHOP_DETAILS_MODAL
        ]);
    (0, F.u9)(r);
    let [v] = r.items;
    return (s.useEffect(() => {
        let e = (null == v ? void 0 : v.type) === o.Z.AVATAR_DECORATION ? 'avatar decoration' : 'profile effect';
        j.default.track(J.rMx.OPEN_MODAL, {
            type: J.jXE.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: m,
            location_stack: L,
            sku_id: r.skuId,
            product_type: e
        }), r.items.map(w.oK);
    }, [
        m,
        L,
        r.skuId,
        r.items,
        null == v ? void 0 : v.type
    ]), null == _) ? null : (0, n.jsx)(f.Gt, {
        value: L,
        children: (0, n.jsx)(u.ModalRoot, {
            hideShadow: !0,
            className: ei.modalRoot,
            returnRef: C,
            transitionState: a,
            size: u.ModalSize.DYNAMIC,
            children: (0, n.jsxs)(u.ModalContent, {
                className: ei.modalContent,
                children: [
                    (0, n.jsx)(el, {
                        user: _,
                        product: r,
                        category: d,
                        onClose: l
                    }),
                    (0, n.jsxs)('div', {
                        className: r.type === o.Z.AVATAR_DECORATION ? ei.collectiblePreviewsContainerWithChat : ei.collectiblePreviewsContainerNoChat,
                        children: [
                            (0, n.jsx)(y.Z, {
                                asset: null !== (i = d.pdpBg) && void 0 !== i ? i : r.banner,
                                addGradient: null === (t = q.Ve[d.skuId]) || void 0 === t ? void 0 : t.addGradient,
                                size: (0, K.ML)(540),
                                className: ei.categoryBanner,
                                blur: !0
                            }),
                            (0, n.jsx)(er, {
                                user: _,
                                product: r
                            }),
                            (0, n.jsxs)('div', {
                                className: ei.profilePreviewHeader,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: ei.titleImageContainer,
                                        children: (0, n.jsx)('img', {
                                            className: ei.titleImage,
                                            src: (0, M.uV)(d.logo, { size: W.n }),
                                            alt: d.name
                                        })
                                    }),
                                    (0, n.jsx)(u.ModalCloseButton, {
                                        onClick: l,
                                        className: ei.modalCloseButton,
                                        withCircleBackground: !0
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
