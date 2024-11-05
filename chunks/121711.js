var i = n(200651),
    r = n(192379),
    a = n(990547),
    l = n(481060),
    s = n(213609),
    o = n(252618),
    c = n(979233),
    d = n(175307),
    u = n(17845),
    h = n(374939),
    m = n(233374),
    p = n(611928),
    g = n(283293),
    f = n(63063),
    _ = n(113434),
    E = n(833435),
    I = n(150560),
    C = n(558652),
    v = n(736683),
    S = n(452081),
    N = n(46140),
    T = n(981631),
    x = n(388032),
    b = n(431418);
t.Z = function () {
    let { tabs: e, selectedTab: t, onSelectTab: n } = (0, S.z)(),
        { onScroll: A, scrollPosition: Z } = (0, c.M)(),
        y = I.Z.getState().getUtmCurrentContext(),
        L = (0, E._)({ location: N.dr.QUEST_HOME_DESKTOP }) ? v.Z : v.j;
    r.useEffect(() => {
        (0, s.h)({
            name: a.ImpressionNames.QUEST_HOME,
            type: a.ImpressionTypes.VIEW,
            properties: {
                utm_source_current: y.utmSourceCurrent,
                utm_medium_current: y.utmMediumCurrent,
                utm_campaign_current: y.utmCampaignCurrent,
                utm_content_current: y.utmContentCurrent,
                tab: t
            }
        });
    }, [t]);
    let R = r.useCallback(() => {
        window.open(f.Z.getArticleURL(T.BhN.QUESTS_LEARN_MORE));
    }, []);
    return (
        (0, o.Tt)({ location: x.intl.string(x.t.JALI2N) }),
        (0, i.jsxs)('div', {
            className: b.container,
            children: [
                (0, i.jsxs)(p.ZP, {
                    children: [(0, i.jsx)('div', { className: b.dragRegion }), (0, i.jsx)(p.z6, { scrollPosition: Z }), (0, i.jsx)(p.aV, { icon: l.QuestsIcon })]
                }),
                (0, i.jsxs)(g.Z, {
                    onScroll: A,
                    children: [
                        (0, i.jsx)(u.Z, {
                            title: x.intl.formatToPlainString(x.t.lmMBf3, {}),
                            description: x.intl.string(x.t.oWCrBg),
                            button: (0, i.jsx)(d.u, {
                                text: x.intl.string(x.t.hvVgAQ),
                                onClick: R
                            }),
                            className: b.bannerContainer,
                            children: (0, i.jsx)('div', {
                                className: b.bannerImage,
                                children: (0, i.jsx)('div', { className: b.bannerGradient })
                            })
                        }),
                        (0, i.jsxs)(h.Z, {
                            children: [
                                (0, i.jsx)(m.Z, {
                                    tabs: e,
                                    selectedTab: t,
                                    onTabSelect: n,
                                    className: b.tabs
                                }),
                                t === _.e5.CLAIMED ? (0, i.jsx)(L, { onSelectTab: n }) : (0, i.jsx)(C.Z, {})
                            ]
                        })
                    ]
                })
            ]
        })
    );
};
