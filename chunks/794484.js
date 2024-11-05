n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(703533),
    o = n(481060),
    c = n(975298),
    d = n(410154),
    u = n(915296),
    g = n(314684),
    m = n(565626),
    f = n(32173),
    p = n(976465),
    _ = n(391110),
    h = n(75077),
    x = n(320319),
    E = n(821912);
let b = (e) => {
    let { showAllPerksButton: t, leftAlignHeaders: n, title: r, headerClassname: a } = e,
        s = (0, i.jsx)(o.Heading, {
            variant: 'heading-xxl/extrabold',
            color: 'header-primary',
            className: null != a ? a : E.heading,
            children: r
        });
    return null == t
        ? s
        : n
          ? (0, i.jsxs)('div', {
                className: E.sectionHeader,
                children: [
                    s,
                    null != t &&
                        (0, i.jsx)('div', {
                            className: E.showAllPerksButton,
                            children: t
                        })
                ]
            })
          : (0, i.jsx)('div', {
                className: E.container,
                children: (0, i.jsx)('div', {
                    className: E.sectionHeaderSeeAll,
                    children: s
                })
            });
};
t.Z = (e) => {
    var t;
    let { className: n, variant: a = _.R0.PERKS_DISCOVERABILITY, noBackground: C = !1, leftAlignHeaders: v = !1, showAllPerksButton: T, headerClassname: N, isFullScreen: I = !0 } = e,
        S = r.useRef(null),
        R = (0, g.yQ)(),
        A = (0, m.Ag)(R),
        j = (0, d.ZP)('perks-discoverability');
    (0, m.I2)();
    let P = (0, u.HI)({ location: _.R0.PERKS_DISCOVERABILITY }),
        O = a === _.R0.WHATS_NEW,
        Z = (0, g.IY)(),
        M = (0, p.x$)();
    r.useEffect(() => {
        O && !A && (Z(), M());
    }, [Z, M, O, A]),
        r.useEffect(() => {
            let e = S.current;
            if (null == e || !A || !O) return;
            let t = requestAnimationFrame(() => {
                e.scrollIntoView({ behavior: 'smooth' }), O && Z();
            });
            return () => {
                cancelAnimationFrame(t), O && Z();
            };
        }, [S, A, O, Z]);
    let w = (0, h.Op)(O),
        B = (0, f.Z)(),
        y = (0, h.mN)(),
        { fractionalState: k } = (0, c.Z)(),
        L = (0, h.sP)({
            perksCards: B,
            variant: a,
            shopMarketingVariation: j,
            isFullScreen: I,
            showTenureCard: null == R ? void 0 : R.showCard,
            tileOrderVariant: P,
            isPremiumSubscriber: y,
            fractionalState: k
        }),
        U = L.some((e) => null != e.pillText),
        [D, G] = r.useState(null),
        H = r.useRef(new l.qA());
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (null == B ? void 0 : null === (t = B.freeBoost) || void 0 === t ? void 0 : t.name) === f.u.FREE_BOOST &&
                (0, i.jsx)(l.O_, {
                    ref: G,
                    className: E.confettiCanvas,
                    environment: H.current
                }),
            (0, i.jsxs)('div', {
                ref: S,
                className: s()(
                    E.section,
                    {
                        [E.centerAlignSection]: !v,
                        [E.leftAlignSection]: v
                    },
                    n
                ),
                children: [
                    (0, i.jsx)(b, {
                        showAllPerksButton: T,
                        leftAlignHeaders: v,
                        title: w.title,
                        headerClassname: N
                    }),
                    (0, i.jsx)(o.Text, {
                        variant: 'text-lg/normal',
                        color: 'header-primary',
                        className: s()(E.subtitle, {
                            [E.subtitle]: null == T || v,
                            [E.subtitleWithButton]: null != T && !v,
                            [E.fullWidth]: O || v,
                            [E.moreSubtitleMargin]: U,
                            [E.leftAlignSubtitle]: v,
                            [E.centerAlignSubtitle]: !v
                        }),
                        children: w.subtitle
                    }),
                    !v &&
                        null != T &&
                        (0, i.jsx)('div', {
                            className: s()(E.showAllPerksButtonCenter),
                            children: T
                        }),
                    (0, i.jsx)('div', {
                        className: s()({
                            [E.cardContainer]: I,
                            [E.cardContainerNarrowWidth]: !I
                        }),
                        children: L.map((e, t) =>
                            (0, i.jsx)(
                                x.Z,
                                {
                                    confettiCanvas: e.name === f.u.FREE_BOOST ? D : void 0,
                                    ...e,
                                    forceShadow: C
                                },
                                ''.concat(e.name, '_').concat(t)
                            )
                        )
                    })
                ]
            })
        ]
    });
};
