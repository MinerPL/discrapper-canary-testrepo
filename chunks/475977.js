var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(115434),
    l = t(264181),
    c = t(399606),
    d = t(481060),
    _ = t(100527),
    u = t(906732),
    E = t(626135),
    T = t(335131),
    S = t(874703),
    I = t(410154),
    N = t(302800),
    A = t(981631),
    C = t(474936),
    m = t(689938),
    g = t(200895),
    h = t(786792),
    O = t(161594);
let p = (e) => {
    var s, t, a, i, o;
    let { displayOptions: l, marketingVariant: c } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)('div', {
                className: g.artContainer,
                'aria-hidden': !0,
                role: 'presentation',
                children: (0, n.jsx)('img', {
                    src: null !== (a = null == l ? void 0 : l.artSrc) && void 0 !== a ? a : O,
                    className: r()(g.art, { [g.tideArt]: null != c && c === I.C5.TIDE }),
                    alt: ''
                })
            }),
            (0, n.jsxs)('div', {
                className: g.mainColumn,
                children: [
                    (0, n.jsx)(d.Heading, {
                        variant: 'heading-lg/extrabold',
                        color: 'currentColor',
                        className: g.title,
                        children: null !== (i = null == l ? void 0 : null === (s = l.title) || void 0 === s ? void 0 : s.call(l)) && void 0 !== i ? i : m.Z.Messages.COLLECTIBLES_BANNER_TITLE_2024
                    }),
                    (0, n.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: 'currentColor',
                        children: null !== (o = null == l ? void 0 : null === (t = l.description) || void 0 === t ? void 0 : t.call(l)) && void 0 !== o ? o : m.Z.Messages.COLLECTIBLES_BANNER_DESCRIPTION_2024
                    })
                ]
            })
        ]
    });
};
s.Z = () => {
    var e;
    let s;
    let { analyticsLocations: t } = (0, u.ZP)(_.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        i = a.useRef(null),
        O = (0, I.ZP)('CollectiblesUpsellBanner'),
        R = (0, c.e7)([S.Z], () => S.Z.getMarketingBySurface(o.K.EDIT_PROFILE_SETTINGS));
    return (
        (s =
            (null == R ? void 0 : R.type) === l.Z.BANNER
                ? {
                      artSrc: R.popoutAsset,
                      backgroundSrc: R.asset,
                      title: () => R.title,
                      description: () => R.body
                  }
                : N.GX[O]),
        a.useEffect(() => {
            E.default.track(A.rMx.PREMIUM_UPSELL_VIEWED, {
                type: C.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: t
            });
        }, [t]),
        (0, n.jsxs)('div', {
            ref: i,
            className: r()(g.container, { [g.robertContainer]: O === I.C5.ROBERT }),
            style: { backgroundImage: 'url('.concat(null !== (e = null == s ? void 0 : s.backgroundSrc) && void 0 !== e ? e : h, ')') },
            children: [
                (0, n.jsx)(p, {
                    displayOptions: s,
                    marketingVariant: O
                }),
                (0, n.jsx)(d.Button, {
                    onClick: () => {
                        (0, T.mK)({
                            analyticsLocations: t,
                            analyticsSource: _.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                        });
                    },
                    className: g.ctaButton,
                    color: d.Button.Colors.BRAND_INVERTED,
                    children: m.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
                })
            ]
        })
    );
};
