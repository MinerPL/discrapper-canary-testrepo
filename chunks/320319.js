n(47120);
var s = n(735250), a = n(470079), r = n(120356), i = n.n(r), l = n(392711), o = n(990547), c = n(399606), d = n(704215), _ = n(481060), u = n(607070), E = n(213609), T = n(605236), I = n(706140), R = n(626135), C = n(314684), p = n(715627), g = n(176782), A = n(238108), m = n(32173), N = n(391110), f = n(484239), S = n(658370), h = n(735825), M = n(981631), x = n(921944), O = n(689938), b = n(927231);
let P = {
        xMin: -80,
        xMax: 80,
        yMin: -150,
        yMax: -20
    }, L = a.memo(e => {
        let {
                name: t,
                canReveal: n = !0,
                dismissibleContentType: r,
                forceShadow: g,
                cardType: f,
                confettiCanvas: S
            } = e, Z = null == e ? void 0 : e.onCtaClick, D = (0, c.e7)([u.Z], () => u.Z.useReducedMotion), [B, j] = a.useState(!1), [U, G] = a.useState(!1), y = (0, C.yQ)(), H = (0, C.IB)(), [k, w] = a.useState(!1), [F, V] = a.useState(t === m.u.FREE_BOOST && H && (null == y ? void 0 : y.nitroTenureStatus) === h.EB.REDEEMABLE);
        a.useEffect(() => {
            t === m.u.FREE_BOOST && H && (null == y ? void 0 : y.nitroTenureStatus) === h.EB.REDEEMABLE && V(!0);
        }, [
            H,
            t,
            y
        ]);
        let W = a.useCallback(() => {
                w(!0);
            }, []), K = f === N.R0.CARD_CAROUSEL_FIRST_ROW || f === N.R0.CARD_CAROUSEL_SECOND_ROW || f === N.R0.CARD_CAROUSEL_THIRD_ROW, Y = (0, m.Z)(), [z, Q] = (0, I.c)(null != r && n || r === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI ? [r] : []);
        a.useEffect(() => () => {
            z === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && k && (0, T.EW)(z);
        }, [
            z,
            k
        ]), a.useEffect(() => {
            z === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI && k && (0, T.EW)(z);
        }, [
            z,
            k
        ]);
        let {
                easterEggLevel: J,
                isEasterEggTriggered: q,
                onHover: X,
                onUnhover: $
            } = (0, A.Z)(5), ee = (0, l.debounce)(() => {
                R.default.track(M.rMx.PREMIUM_MARKETING_WHAT_IS_NEW_CARD_HOVERED, {
                    card_type: (0, l.snakeCase)(t),
                    is_tenure_reward: t === m.u.FREE_BOOST,
                    reward_status: null == y ? void 0 : y.nitroTenureStatus
                });
            }, 800), et = (0, l.debounce)(() => {
                null != Z && R.default.track(M.rMx.PERK_DISCOVERABILITY_CARD_CTA_CLICKED, {
                    card_type: (0, l.snakeCase)(t),
                    function_name: (0, l.snakeCase)(Z.name)
                });
            }, 800), en = a.useRef(null);
        e = {
            onMouseEnter: ee,
            ...e,
            onCtaClick: null != Z ? () => {
                null == Z || Z(), et();
            } : void 0
        };
        let es = z !== r || null == r || U || r === d.z.TENURE_REWARD_REDEEMABLE_CONFETTI;
        return (a.useEffect(() => {
            D && B && (G(!0), R.default.track(M.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != r && Q(x.L.TAKE_ACTION));
        }, [
            D,
            B,
            r,
            t,
            Q
        ]), (0, E.Z)({
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.PREMIUM_MARKETING_TENURE_REWARD_CARD,
            properties: {
                user_tenure_reward_id: null == y ? void 0 : y.tenureRewardStatusId,
                tenure_reward_id: null == y ? void 0 : y.tenureRewardSkuId,
                reward_type: h.nW.SERVER_BOOST,
                redeemable_at: null == y ? void 0 : y.redeemableAt,
                reward_status: null == y ? void 0 : y.nitroTenureStatus
            }
        }, { disableTrack: t !== m.u.FREE_BOOST || null == y }), (0, E.Z)({
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.PERK_DISCOVERABILITY_CARD,
            properties: { name: t }
        }), n) ? t === m.u.UPCOMING_DROP_UNTIMED ? (0, s.jsx)('div', {
            className: i()(b.flipCardContainer, { [b.forceShadow]: g }),
            onMouseEnter: X,
            onFocus: X,
            onMouseLeave: $,
            onBlur: $,
            children: (0, s.jsxs)('div', {
                className: i()(b.flipCard, {
                    [b.partialFlipCard]: !q,
                    [b.ultraFlipCard]: q,
                    [b.rotateCard]: q && 3 === J,
                    [b.reducedMotion]: D
                }),
                children: [
                    (0, s.jsx)('div', {
                        className: b.flipCardFront,
                        children: (0, s.jsx)(v, {
                            ...e,
                            className: b.topCover
                        })
                    }),
                    (0, s.jsx)('div', {
                        className: b.flipCardBack,
                        children: (0, s.jsx)(v, {
                            ...e,
                            className: b.topCover
                        })
                    })
                ]
            })
        }) : es ? (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)('div', {
                className: i()({
                    [b.noFlipCardContainer]: !K,
                    [b.noFlipCardContainerCarousel]: K,
                    [b.forceShadow]: g,
                    [b.reducedMotion]: D
                }),
                children: [
                    (0, s.jsx)(v, {
                        ...e,
                        ref: t === m.u.FREE_BOOST ? en : void 0
                    }),
                    F && (0, s.jsx)(p.Z, {
                        speedValues: P,
                        numBursts: 3,
                        particlesPerBurst: 15,
                        confettiTarget: en.current,
                        offsetXPercentageMax: -30,
                        offsetXPercentageMin: -70,
                        offsetYPercentageMax: 40,
                        offsetYPercentageMin: 20,
                        customConfettiCanvas: S,
                        dragCoefficientValue: 0.00001,
                        onAnimationEnd: W
                    })
                ]
            })
        }) : (0, s.jsx)('div', {
            className: i()(b.flipCardContainer, { [b.forceShadow]: g }),
            children: (0, s.jsxs)(_.Clickable, {
                onClick: () => j(!0),
                className: i()(b.flipCard, b.clickable, {
                    [b.flipped]: B,
                    [b.partialFlipCard]: !U && !B,
                    [b.reducedMotion]: D
                }),
                onTransitionEnd: e => {
                    if (!!B && 'transform' === e.propertyName && !!e.target.classList.contains(b.flipCard))
                        G(!0), R.default.track(M.rMx.PREMIUM_MARKETING_PERK_CARD_FLIPPED, { card_type: t }), null != r && Q(x.L.TAKE_ACTION);
                },
                children: [
                    (0, s.jsx)('div', {
                        className: b.flipCardHidden,
                        'aria-hidden': !0,
                        children: (0, s.jsx)(v, { ...e })
                    }),
                    (0, s.jsx)('div', {
                        className: b.flipCardFront,
                        children: (0, s.jsx)(v, {
                            ...Y.upcomingDropUntimed,
                            pillText: ''
                        })
                    }),
                    (0, s.jsx)('div', {
                        className: b.flipCardBack,
                        children: (0, s.jsx)(v, {
                            ...e,
                            description: ''
                        })
                    }),
                    (0, s.jsx)('div', {
                        className: b.flipCardButtonContainer,
                        children: (0, s.jsx)(_.Button, {
                            onClick: () => j(!0),
                            children: O.Z.Messages.REVEAL
                        })
                    })
                ]
            })
        }) : (0, s.jsx)(L, {
            ...Y.upcomingDropUntimed,
            forceShadow: g
        });
    });
L.displayName = 'PerkDiscoverabilityCard';
let v = a.forwardRef((e, t) => {
    var n;
    let {
            title: r,
            titleClassName: l = '',
            subtitle: o = '',
            description: c = '',
            descriptionCta: d = '',
            isPremiumGetCta: u,
            onCtaClick: E,
            onMouseEnter: T,
            className: I,
            perkComponent: R,
            cardVariant: p,
            cardType: A,
            onClick: m,
            backgroundImage: h,
            pillText: M,
            perkImage: x
        } = e, O = A === N.R0.CARD_CAROUSEL_FIRST_ROW || A === N.R0.CARD_CAROUSEL_SECOND_ROW || A === N.R0.CARD_CAROUSEL_THIRD_ROW, P = 0 !== c.length || 0 !== d.length || 0 !== o.length && p === N.zW.REWARD, L = (0, C.IB)(), [v, Z] = a.useState(L);
    a.useEffect(() => {
        L && Z(!0);
    }, [L]);
    let D = (0, g._)(p);
    return (0, s.jsxs)(_.Clickable, {
        className: i()(b.card, I, !0 === v ? null === (n = D.cardContainer) || void 0 === n ? void 0 : n.className : void 0, {
            [b.clickable]: null != m,
            [b.hideOverflow]: O
        }),
        onMouseEnter: T,
        style: { backgroundImage: null != h ? 'url('.concat(h, ')') : void 0 },
        onClick: m,
        children: [
            null != M && (0, s.jsx)(_.Text, {
                variant: 'text-xs/semibold',
                className: b.pill,
                children: M
            }),
            (0, s.jsx)('div', { ref: t }),
            (0, s.jsx)(f.Z, {
                title: r,
                titleClassName: l,
                subtitle: o,
                perkImage: x,
                isCarousel: O,
                descriptionCta: d,
                onCtaClick: E,
                perkComponent: R,
                subtitleClassName: b.cardSubtitle,
                cardVariant: p
            }),
            P && (0, s.jsx)(S.Z, {
                title: r,
                titleClassName: l,
                subtitle: o,
                description: c,
                descriptionCta: d,
                isPremiumGetCta: u,
                onCtaClick: E,
                cardVariant: p,
                perkComponent: R
            }),
            (0, s.jsx)('div', {
                className: i()(b.cover, b.above),
                ref: t
            })
        ]
    });
});
v.displayName = 'PerkCardContent', t.Z = L;
