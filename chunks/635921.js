var s = n(735250);
n(470079);
var a = n(120356), r = n.n(a), i = n(442837), l = n(481060), o = n(100527), c = n(906732), d = n(535322), _ = n(357355), u = n(140465), E = n(775412), T = n(650032), I = n(105759), R = n(248042), C = n(422034), p = n(206127), g = n(710220), A = n(318747), m = n(409100), N = n(474936), f = n(689938), S = n(228913);
let h = e => {
        let {
                inOfferExperience: t,
                inTrial: n,
                subscriptionTier: a,
                buttonClassName: i
            } = e, l = null;
        !t && (l = (0, s.jsxs)('div', {
            className: S.buttonContainer,
            children: [
                (0, s.jsx)(m.Z, {
                    forceInverted: !0,
                    className: r()(S.button, i),
                    subscriptionTier: a
                }),
                (0, s.jsx)(A.Z, {
                    className: r()(S.button, i),
                    forceWhite: !0
                })
            ]
        }));
        let o = null;
        return n && (o = (0, s.jsx)('div', {
            className: S.buttonContainer,
            children: (0, s.jsx)(A.Z, {
                className: r()(S.button, i),
                forceWhite: !0
            })
        })), (0, s.jsxs)(s.Fragment, {
            children: [
                l,
                ' ',
                o
            ]
        });
    }, M = e => {
        let {isFullscreen: t} = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsx)(d.A, { className: t ? S.fullscreenSparkleStar1 : S.settingsSparkleStar1 }),
                (0, s.jsx)(d.A, { className: t ? S.fullscreenSparkleStar2 : S.settingsSparkleStar2 }),
                (0, s.jsx)(d.A, { className: t ? S.fullscreenSparkleStar3 : S.settingsSparkleStar3 }),
                (0, s.jsx)(d.A, { className: t ? S.fullscreenSparkleStar4 : S.settingsSparkleStar4 })
            ]
        });
    };
function x(e) {
    let {
            variant: t = 'text-lg/normal',
            withBottomMargin: n = !0
        } = e, a = (0, p.$)();
    return (0, s.jsx)(l.Text, {
        variant: t,
        color: 'always-white',
        className: r()(S.description, { [S.descriptionBottomMargin]: n }),
        children: f.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_DESCRIPTION.format({ cheapestMonthlyPrice: a })
    });
}
t.Z = e => {
    let {
            isFullscreen: t,
            className: n,
            buttonClassName: a,
            subscriptionTier: d,
            hideSparkles: p,
            hideSubscribeAndGiftButton: m,
            entrypoint: O
        } = e, {analyticsLocations: b} = (0, c.ZP)(o.Z.PREMIUM_MARKETING_HERO_CTA), P = (0, E._O)(), L = (0, u.Nx)(), v = (0, R.Vi)(), Z = (0, i.e7)([_.Z], () => _.Z.affinities), D = (0, I.Z)(), {enabled: B} = T._.useExperiment({ location: 'HeroHeading' }, { autoTrackExposure: !1 }), j = O === N.EZ.ApplicationStoreHome && null != D && B, U = Z.length > 0;
    return (0, s.jsx)(c.Gt, {
        value: b,
        children: (0, s.jsxs)('div', {
            className: r()(S.container, n, {
                [S.settingsContainer]: !t,
                [S.affinityHeight]: !t && U
            }),
            'data-testid': 'v2-marketing-page-hero-header',
            children: [
                (0, s.jsxs)('div', {
                    className: t ? S.fullscreenTextContainer : S.settingsTextContainer,
                    children: [
                        (0, s.jsx)(l.Heading, {
                            variant: t ? 'display-lg' : 'display-md',
                            color: 'always-white',
                            children: f.Z.Messages.PREMIUM_MARKETING_HERO_HEADER_TITLE_V2
                        }),
                        j ? (0, s.jsx)(g.Z, { referrer: D }) : U ? (0, s.jsx)('div', {
                            className: r()(S.affinityDescription),
                            children: (0, s.jsx)(C.Z, {
                                textColor: 'always-white',
                                smallerText: !t
                            })
                        }) : (0, s.jsx)(x, {}),
                        v ? (0, s.jsx)('div', {
                            className: S.buttonContainer,
                            children: (0, s.jsx)(A.Z, {
                                className: r()(S.button, a),
                                forceWhite: !0
                            })
                        }) : m ? null : (0, s.jsx)(h, {
                            subscriptionTier: d,
                            inOfferExperience: L,
                            inTrial: P,
                            buttonClassName: a
                        }),
                        U && !j && (0, s.jsx)(x, {
                            variant: 'text-md/normal',
                            withBottomMargin: !1
                        })
                    ]
                }),
                !(L || p) && (0, s.jsx)(M, { isFullscreen: t })
            ]
        })
    });
};
