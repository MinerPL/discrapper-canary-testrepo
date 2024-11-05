n(47120);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(927359),
    u = n(975298),
    g = n(78839),
    m = n(975104),
    f = n(775412),
    p = n(520540),
    _ = n(197115),
    h = n(823188),
    x = n(184176),
    E = n(938736),
    b = n(386733),
    C = n(474936),
    v = n(388032),
    T = n(993270),
    N = n(872905),
    I = n(578478);
let S = (e) => {
        let { className: t } = e,
            { headingText: n, headingTop: r, headingBottom: s } = P();
        return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)('div', {
                className: a()(T.container, t),
                'data-testid': 'subscriber-nitro-home-hero-header',
                children: [
                    (0, i.jsx)('img', {
                        src: N,
                        alt: '',
                        className: T.headerArt
                    }),
                    (0, i.jsxs)('div', {
                        className: T.content,
                        children: [
                            r,
                            (0, i.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: n
                            }),
                            s,
                            (0, i.jsx)('div', {
                                className: T.buttonContainer,
                                children: (0, i.jsx)(_.Z, {
                                    color: l.ButtonColors.BRAND,
                                    buttonText: v.intl.string(v.t['3KomGR']),
                                    className: T.button,
                                    isGift: !0
                                })
                            })
                        ]
                    })
                ]
            })
        });
    },
    R = (e) => {
        let { location: t } = e,
            { subscriberHomeVariant: n } = p.g.useExperiment({ location: t }, { autoTrackExposure: !1 }),
            r = n === p.p.VARIANT_2,
            { headingText: a, headingTop: s, headingBottom: o } = P();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: I,
                    alt: '',
                    className: T.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: T.containerV2,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: T.contentV2,
                        children: [
                            s,
                            (0, i.jsx)(l.Heading, {
                                variant: 'display-lg',
                                color: 'always-white',
                                children: a
                            }),
                            o,
                            r &&
                                (0, i.jsx)('div', {
                                    className: T.buttonContainer,
                                    children: (0, i.jsx)(_.Z, {
                                        color: l.ButtonColors.BRAND,
                                        buttonText: v.intl.string(v.t['3KomGR']),
                                        className: T.button,
                                        isGift: !0
                                    })
                                }),
                            (0, i.jsx)(b.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    A = () => {
        let { headingText: e } = P();
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('img', {
                    src: I,
                    alt: '',
                    className: T.headerArtV2
                }),
                (0, i.jsx)('div', {
                    className: T.reverseContainer,
                    'data-testid': 'subscriber-nitro-home-hero-header',
                    children: (0, i.jsxs)('div', {
                        className: T.contentV2,
                        children: [
                            (0, i.jsx)('div', {
                                className: T.reverseTrialHomeHeader,
                                children: (0, i.jsx)(l.Heading, {
                                    variant: 'display-lg',
                                    color: 'always-white',
                                    children: e
                                })
                            }),
                            (0, i.jsx)(x.Z, {})
                        ]
                    })
                })
            ]
        });
    },
    [j, P] = (0, m.Z)(),
    O = (e) => {
        let { countdownText: t } = e;
        return (0, i.jsx)('div', {
            className: T.fpCountdownPill,
            children: (0, i.jsx)(l.Text, {
                variant: 'text-xs/bold',
                className: T.fpCountdownPillText,
                children: t.toUpperCase()
            })
        });
    };
t.Z = (e) => {
    let { className: t, location: n } = e,
        { analyticsLocations: r } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA),
        l = (0, s.e7)([g.ZP], () => g.ZP.inReverseTrial()),
        m = (0, f._O)(),
        p = v.intl.string(v.t.qYKftb),
        _ = (0, E.bD)(n),
        x = (0, E.pn)(n),
        b = (0, i.jsx)(S, { className: t }),
        N = v.intl.string(v.t.ifwQZW),
        I = !1,
        { fractionalState: P, endsAt: Z } = (0, u.Z)(),
        M = (0, d.Z)(Z, d.a.ENDS_IN);
    l ? ((N = v.intl.string(v.t.ifwQZW)), (b = (0, i.jsx)(A, {}))) : (_ || x) && ((p = v.intl.string(v.t.qYKftb)), (N = v.intl.string(v.t.ifwQZW)), (b = (0, i.jsx)(R, { location: n })));
    let w = null;
    P !== C.a$.NONE && ((m = !0), (p = v.intl.string(v.t.vaqFvb)), (I = !0), (w = (0, i.jsx)(O, { countdownText: M })));
    let B = {
            className: a()(T.trialPill, { [T.hidden]: !m }),
            text: p,
            colorOptions: h.VE.PREMIUM_TIER_2_WHITE_FILL
        },
        y = I
            ? (0, i.jsx)('div', {
                  className: T.flexCentered,
                  children: (0, i.jsx)(h.mn, { ...B })
              })
            : (0, i.jsx)(h.Cy, { ...B });
    return (0, i.jsx)(c.Gt, {
        value: r,
        children: (0, i.jsx)(j.Provider, {
            value: {
                headingText: N,
                headingTop: y,
                headingBottom: w
            },
            children: b
        })
    });
};
