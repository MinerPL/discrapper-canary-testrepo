n(47120);
var s = n(735250), a = n(470079), r = n(120356), i = n.n(r), l = n(622535), o = n(481060), c = n(100527), d = n(906732), _ = n(626135), u = n(314684), E = n(794484), T = n(347475), I = n(342414), R = n(487980), C = n(391110), p = n(71363), g = n(781800), A = n(981631), m = n(455879), N = n(865215);
t.Z = () => {
    let e = a.useRef(null), [t, n] = a.useState(!1), {analyticsLocations: r} = (0, d.ZP)(c.Z.PREMIUM_SUBSCRIBER_NITRO_HOME), [f, S] = a.useState(!1);
    (0, u.FM)();
    let h = (0, R.b)('SubscriberNitroHome');
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(o.AdvancedScrollerAuto, {
                className: m.mainPageScroller,
                ref: e,
                children: (0, s.jsx)('div', {
                    className: m.container,
                    children: (0, s.jsxs)(d.Gt, {
                        value: r,
                        children: [
                            (0, s.jsx)(I.Z, {
                                className: m.heroHeading,
                                location: C.MQ.HOME
                            }),
                            (0, s.jsx)(E.Z, {
                                variant: C.R0.WHATS_NEW,
                                className: i()(m.whatsNew, { [m.whatsNewWithOriginalHeroHeading]: !h }),
                                noBackground: !0,
                                leftAlignHeaders: !0
                            }),
                            (0, s.jsx)(E.Z, {
                                className: m.perksDiscoverability,
                                noBackground: !0,
                                leftAlignHeaders: !0,
                                showAllPerksButton: (0, s.jsx)(g.Z, {
                                    setIsAllPerksVisible: n,
                                    previousComponent: C.MQ.HOME
                                })
                            }),
                            (0, s.jsx)(T.Z, {
                                className: m.giftNitro,
                                location: c.Z.PREMIUM_MARKETING_GIFT_SECTION,
                                analyticsLocation: {
                                    page: A.ZY5.NITRO_HOME,
                                    section: A.jXE.GIFT_BANNER
                                }
                            }),
                            (0, s.jsx)('div', { className: m.footerSpacing }),
                            (0, s.jsx)(l.$, {
                                onChange: e => {
                                    e && !f && (_.default.track(A.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, { location_stack: r }), S(!0));
                                },
                                children: (0, s.jsx)('div', { className: m.bottomOfPageVisibilitySensor })
                            }),
                            (0, s.jsx)(o.Image, {
                                src: N,
                                className: m.bottomIllustration,
                                width: 112,
                                height: 85,
                                zoomable: !1
                            })
                        ]
                    })
                })
            }),
            (0, s.jsx)(p.Z, {
                isAllPerksVisible: t,
                setIsAllPerksVisible: n,
                previousComponent: C.MQ.HOME
            })
        ]
    });
};
