n(47120), n(627341);
var s = n(735250), r = n(470079), a = n(120356), o = n.n(a), i = n(512722), l = n.n(i), c = n(278074), d = n(979554), u = n(399606), p = n(692547), g = n(663002), f = n(481060), C = n(37234), m = n(727637), h = n(607070), _ = n(100527), b = n(906732), x = n(1585), E = n(333867), I = n(197115), L = n(300284), S = n(876917), v = n(642619), T = n(210887), N = n(74538), O = n(335131), j = n(1870), R = n(884697), A = n(724994), Z = n(624377), k = n(390698), B = n(813083), P = n(680942), M = n(558060), y = n(237031), w = n(616066), F = n(216541), D = n(832149), H = n(474936), U = n(689938), W = n(246318);
let G = e => {
        let {
            children: t,
            onClick: n,
            ...r
        } = e;
        return (0, s.jsx)(f.Button, {
            fullWidth: !0,
            look: f.Button.Looks.FILLED,
            onClick: e => {
                e.stopPropagation(), n();
            },
            ...r,
            children: t
        });
    }, V = e => {
        let {
            className: t,
            ...n
        } = e;
        return (0, s.jsx)(f.Button, {
            color: f.ButtonColors.BRAND,
            look: f.Button.Looks.FILLED,
            size: f.ButtonSizes.ICON,
            className: o()(W.previewButton, t),
            innerClassName: W.previewButtonInner,
            'aria-label': U.Z.Messages.PREVIEW,
            ...n,
            children: (0, s.jsx)(f.EyeIcon, {
                size: 'md',
                color: 'currentColor'
            })
        });
    };
t.Z = function (e) {
    let {
            product: t,
            user: n,
            category: a,
            onMount: i,
            isGiftEasterEggEnabled: z
        } = e, {analyticsLocations: Y} = (0, b.ZP)(_.Z.COLLECTIBLES_SHOP_CARD), K = r.useRef(null), X = (0, m.Z)(K), [q, $] = r.useState(!1), J = X || q, [Q] = t.items, ee = (0, u.e7)([h.Z], () => h.Z.useReducedMotion), {backgroundColors: et} = (0, Z.Z)(t.styles), en = N.ZP.canUseCollectibles(n), es = (0, R.XM)(t, en, !1), er = r.useMemo(() => (0, R.BH)(t, en), [
            t,
            en
        ]), ea = (0, R.G1)(t), eo = (0, R.rN)(t), {
            isPurchased: ei,
            isPartiallyPurchased: el
        } = (0, A.L)(t), [ec, ed] = (0, u.Wu)([j.Z], () => [
            j.Z.isClaiming === t.skuId,
            null != j.Z.isClaiming && j.Z.isClaiming !== t.skuId
        ]), eu = (0, u.e7)([T.Z], () => (0, g.w)(T.Z.theme)), ep = (0, R.Yq)(t.skuId);
    r.useEffect(() => {
        let {current: e} = K;
        if (null == e)
            return;
        let t = () => $(!0);
        return e.addEventListener('focusin', t), e.blur(), () => {
            e.removeEventListener('focusin', t);
        };
    }, []), r.useEffect(() => {
        null == i || i(K);
    }, [i]);
    let eg = (0, L.Z)({ analyticsLocations: Y }), ef = r.useRef(null), eC = () => {
            if ((0, C.xf)(), eg(), t.type === d.Z.AVATAR_DECORATION && null != Q) {
                l()(Q.type === t.type, 'product type is equivlant to first item\'s check for avatar deco'), (0, x.ps)({
                    initialSelectedDecoration: Q,
                    analyticsLocations: Y
                });
                return;
            }
            t.type === d.Z.PROFILE_EFFECT && (0, v.H)({
                initialSelectedEffectId: Q.id,
                analyticsLocations: Y
            });
        }, em = e => n => {
            ef.current = n.currentTarget, (0, y.T)({
                product: t,
                category: a,
                analyticsLocations: Y,
                analyticsSource: e,
                returnRef: ef
            });
        }, eh = em(_.Z.COLLECTIBLES_SHOP_CARD), e_ = em(_.Z.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON), eb = () => (0, s.jsx)('div', {
            className: W.hoverUpsellContainer,
            children: (0, s.jsx)(I.Z, {
                fullWidth: !0,
                className: W.__invalid_premiumSubscribeButton,
                disabled: ed,
                onClick: e => e.stopPropagation(),
                buttonText: U.Z.Messages.UNLOCK_WITH_NITRO,
                subscriptionTier: H.Si.TIER_2
            })
        }), ex = () => ei || el ? (0, s.jsx)(k.U, {
            className: W.priceTag,
            isPartiallyPurchased: el
        }) : ea ? (0, s.jsx)(f.Text, {
            variant: 'text-md/semibold',
            className: W.priceTag,
            children: U.Z.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
        }) : (0, s.jsx)(M.Z, {
            product: t,
            discount: er,
            isPremiumUser: en,
            className: W.priceTag
        }), eE = () => ea ? null : eo ? (0, s.jsx)(V, { onClick: e_ }) : (0, s.jsx)(P.Z, {
            product: t,
            returnRef: K,
            isGiftEasterEggEnabled: z,
            disableCustomColor: !0,
            tooltipDelay: 250
        }), eI = () => {
            if (ea && !en && !eo)
                return eb();
            let e = ea ? {
                submitting: ec,
                submittingStartedLabel: U.Z.Messages.COLLECTIBLES_COLLECTING,
                submittingFinishedLabel: U.Z.Messages.COLLECTIBLES_COLLECTING_FINISHED,
                onClick: async () => {
                    await (0, O.fK)(t.skuId), (0, D.Z)({
                        product: t,
                        analyticsLocations: Y
                    });
                }
            } : {
                onClick: () => (0, E.Z)({
                    skuId: t.skuId,
                    analyticsLocations: Y,
                    returnRef: K
                })
            };
            return (0, s.jsxs)('div', {
                className: W.buttonsContainer,
                children: [
                    el ? null : ei ? (0, s.jsx)(G, {
                        disabled: ed,
                        onClick: eC,
                        children: U.Z.Messages.COLLECTIBLES_USE_NOW
                    }) : (0, s.jsx)(G, {
                        disabled: ed,
                        className: W.purchaseButton,
                        ...e,
                        children: ea ? U.Z.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : U.Z.Messages.COLLECTIBLES_PURCHASE.format({ price: es })
                    }),
                    eE()
                ]
            });
        }, eL = eu ? '0 0 15px 1px '.concat(p.Z.unsafe_rawColors.PRIMARY_700.css) : 'var(--elevation-high)';
    return (0, R.x6)(t) && null != er && er.discountPercentage < 0 ? null : (0, s.jsx)(f.FocusRing, {
        children: (0, s.jsxs)(f.Clickable, {
            innerRef: K,
            className: o()(W.shopCard, {
                [W.partiallyOwned]: el,
                [W.shopCardAnimation]: !ee
            }),
            onBlur: () => $(!1),
            onClick: eh,
            style: null != et ? {
                backgroundColor: eu ? 'var(--background-floating)' : 'var(--background-secondary)',
                borderColor: 'var(--chat-border)',
                boxShadow: J ? eL : 'none'
            } : void 0,
            id: 'shop-item-'.concat(t.skuId),
            children: [
                ea && (0, s.jsx)(f.Tooltip, {
                    tooltipContentClassName: W.premiumWheelTooltipContent,
                    color: f.Tooltip.Colors.PRIMARY,
                    text: U.Z.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
                    children: e => (0, s.jsx)(f.TextBadge, {
                        ...e,
                        className: W.premiumWheelBadge,
                        text: (0, s.jsx)(f.NitroWheelIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: W.premiumWheel
                        })
                    })
                }),
                (0, s.jsx)('div', {
                    className: W.preview,
                    children: (0, c.EQ)(t.type).with(d.Z.PROFILE_EFFECT, () => (0, s.jsx)('div', {
                        className: W.profileEffectShopPreview,
                        children: (0, s.jsx)(S.Z, {
                            isHovering: J,
                            profileEffectId: Q.id,
                            isPurchased: ei,
                            removeSetHeight: !0
                        })
                    })).with(d.Z.AVATAR_DECORATION, () => (l()(Q.type === d.Z.AVATAR_DECORATION, 'ts-match already checked the type'), (0, s.jsx)('div', {
                        className: W.avatarContainer,
                        children: (0, s.jsx)(w.R, {
                            item: Q,
                            user: n,
                            isPurchased: ei,
                            isHighlighted: J
                        })
                    }))).with(d.Z.BUNDLE, () => (0, s.jsx)(F.d, {
                        product: t,
                        user: n,
                        isPurchased: ei,
                        isHighlighted: J
                    })).otherwise(() => null)
                }),
                ei ? (0, s.jsx)('div', {
                    className: W.checkmarkWrapper,
                    children: (0, s.jsx)(f.CheckmarkBoldIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 38,
                        height: 38,
                        className: W.checkmark
                    })
                }) : null,
                (0, s.jsxs)('div', {
                    className: o()(W.cardText, { [W.cardTextBlur]: (null == Q ? void 0 : Q.type) === d.Z.PROFILE_EFFECT }),
                    children: [
                        (0, s.jsx)('div', { className: o()(W.cardBackground, eu ? W.darkCardBackground : W.lightCardBackground, (null == Q ? void 0 : Q.type) === d.Z.PROFILE_EFFECT ? W.cardLowOpacity : null) }),
                        (0, s.jsx)(f.Text, {
                            variant: 'text-lg/bold',
                            className: W.productName,
                            children: t.name
                        }),
                        (0, s.jsxs)('div', {
                            className: W.detailsWrapper,
                            children: [
                                (0, s.jsx)('div', {
                                    className: el ? void 0 : W.innerBlur,
                                    children: ex()
                                }),
                                (0, s.jsx)('div', {
                                    className: W.innerHover,
                                    children: eI()
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsx)(B.Z, {
                    category: a,
                    className: W.limitedTimeBadge,
                    display: 'card'
                }),
                ep && !el && !ei && (0, s.jsx)(f.TextBadge, {
                    text: U.Z.Messages.NEW,
                    disableColor: !0,
                    className: W.newBadge
                })
            ]
        })
    });
};
