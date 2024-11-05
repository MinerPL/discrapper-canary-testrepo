n(724458), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(607070),
    u = n(100527),
    g = n(906732),
    m = n(975298),
    f = n(410154),
    p = n(626135),
    _ = n(915296),
    h = n(103433),
    x = n(166021),
    E = n(32173),
    b = n(391110),
    C = n(75077),
    v = n(981631),
    T = n(388032),
    N = n(170367),
    I = n(865215);
t.Z = (e) => {
    let t,
        n,
        { isAllPerksVisible: a, setIsAllPerksVisible: S, previousComponent: R, isFullScreen: A } = e,
        j = r.useRef(null),
        P = Object.entries((0, E.Z)()).reduce((e, t) => {
            let [n, i] = t;
            return !1 !== i.canReveal && 'upcomingDropUntimed' !== i.name && (e[n] = i), e;
        }, {}),
        O = (0, _.HI)({ location: b.MQ.SEE_ALL }),
        { analyticsLocations: Z } = (0, g.ZP)(u.Z.PREMIUM_SUBSCRIBER_NITRO_HOME),
        [M, w] = r.useState(!1),
        B = (0, f.ZP)('perks-discoverability'),
        y = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        k = (0, C.mN)(),
        { fractionalState: L } = (0, m.Z)();
    return (
        O === _.mJ.DEFAULT ? ((t = T.intl.string(T.t['+vt7w8'])), (n = T.intl.string(T.t.LgHbnJ))) : ((t = T.intl.string(T.t.LgHbnJ)), (n = T.intl.string(T.t['+vt7w8']))),
        (0, i.jsx)(c.AdvancedScrollerAuto, {
            className: s()(N.allPerksScroller, {
                [N.open]: a,
                [N.openCloseReduceMotion]: y
            }),
            ref: j,
            children: (0, i.jsx)('div', {
                className: N.container,
                children: (0, i.jsxs)(g.Gt, {
                    value: Z,
                    children: [
                        (0, i.jsx)(h.Z, {
                            className: N.heroHeading,
                            onBackClick: () => {
                                S(!1),
                                    p.default.track(v.rMx.NITRO_HOME_NAVIGATION, {
                                        current_component: b.MQ.SEE_ALL,
                                        next_component: R,
                                        interaction_component: 'Back Button'
                                    });
                            }
                        }),
                        (0, i.jsxs)('div', {
                            className: N.column,
                            children: [
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: N.heading,
                                    children: t
                                }),
                                (0, i.jsx)(x.Z, {
                                    className: N.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: P,
                                        variant: b.R0.CARD_CAROUSEL_FIRST_ROW,
                                        shopMarketingVariation: B,
                                        tileOrderVariant: O,
                                        isPremiumSubscriber: k,
                                        isFullScreen: A,
                                        fractionalState: L
                                    }),
                                    cardType: b.R0.CARD_CAROUSEL_FIRST_ROW
                                }),
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: N.heading,
                                    children: n
                                }),
                                (0, i.jsx)(x.Z, {
                                    className: N.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: P,
                                        variant: b.R0.CARD_CAROUSEL_SECOND_ROW,
                                        shopMarketingVariation: B,
                                        tileOrderVariant: O,
                                        isPremiumSubscriber: k,
                                        isFullScreen: A,
                                        fractionalState: L
                                    }),
                                    cardType: b.R0.CARD_CAROUSEL_SECOND_ROW
                                }),
                                (0, i.jsx)(c.Heading, {
                                    variant: 'heading-xxl/extrabold',
                                    color: 'header-primary',
                                    className: N.heading,
                                    children: T.intl.string(T.t.LTaxu7)
                                }),
                                (0, i.jsx)(x.Z, {
                                    className: N.cardCarousel,
                                    cards: (0, C.sP)({
                                        perksCards: P,
                                        variant: b.R0.CARD_CAROUSEL_THIRD_ROW,
                                        shopMarketingVariation: B,
                                        tileOrderVariant: O,
                                        isPremiumSubscriber: k,
                                        isFullScreen: A,
                                        fractionalState: L
                                    }),
                                    cardType: b.R0.CARD_CAROUSEL_THIRD_ROW
                                })
                            ]
                        }),
                        (0, i.jsx)('div', { className: N.footerSpacing }),
                        (0, i.jsx)(o.$, {
                            onChange: (e) => {
                                e && !M && (p.default.track(v.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: Z }), w(!0));
                            },
                            children: (0, i.jsx)('div', { className: N.bottomOfPageVisibilitySensor })
                        }),
                        (0, i.jsx)('img', {
                            src: I,
                            className: N.bottomIllustration,
                            width: 112,
                            height: 85,
                            alt: T.intl.string(T.t.X4IxWF)
                        })
                    ]
                })
            })
        })
    );
};
