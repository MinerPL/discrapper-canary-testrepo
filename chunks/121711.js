var i = n(735250),
    a = n(470079),
    s = n(990547),
    r = n(481060),
    l = n(213609),
    o = n(252618),
    c = n(979233),
    d = n(175307),
    u = n(17845),
    _ = n(374939),
    E = n(233374),
    h = n(611928),
    m = n(283293),
    I = n(63063),
    p = n(113434),
    g = n(833435),
    T = n(150560),
    f = n(558652),
    S = n(736683),
    C = n(452081),
    N = n(46140),
    A = n(981631),
    v = n(689938),
    Z = n(431418);
t.Z = function () {
    let { tabs: e, selectedTab: t, onSelectTab: n } = (0, C.z)(),
        { onScroll: L, scrollPosition: R } = (0, c.M)(),
        O = T.Z.getState().getUtmCurrentContext(),
        x = (0, g._)({ location: N.dr.QUEST_HOME_DESKTOP }) ? S.Z : S.j;
    a.useEffect(() => {
        (0, l.h)({
            name: s.ImpressionNames.QUEST_HOME,
            type: s.ImpressionTypes.VIEW,
            properties: {
                utm_source_current: O.utmSourceCurrent,
                utm_medium_current: O.utmMediumCurrent,
                utm_campaign_current: O.utmCampaignCurrent,
                utm_content_current: O.utmContentCurrent,
                tab: t
            }
        });
    }, [t]);
    let b = a.useCallback(() => {
        window.open(I.Z.getArticleURL(A.BhN.QUESTS_LEARN_MORE));
    }, []);
    (0, o.Tt)({ location: v.Z.Messages.QUESTS });
    let M = a.useMemo(() => [v.Z.Messages.QUESTS_HOME_PART_ONE, v.Z.Messages.QUESTS_HOME_PART_TWO], []);
    return (0, i.jsxs)('div', {
        className: Z.container,
        children: [
            (0, i.jsxs)(h.ZP, {
                children: [(0, i.jsx)('div', { className: Z.dragRegion }), (0, i.jsx)(h.z6, { scrollPosition: R }), (0, i.jsx)(h.aV, { icon: r.QuestsIcon })]
            }),
            (0, i.jsxs)(m.Z, {
                onScroll: L,
                children: [
                    (0, i.jsx)(u.Z, {
                        title: M,
                        description: v.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
                        button: (0, i.jsx)(d.u, {
                            text: v.Z.Messages.LEARN_MORE,
                            onClick: b
                        }),
                        className: Z.bannerContainer,
                        children: (0, i.jsx)('div', {
                            className: Z.bannerImage,
                            children: (0, i.jsx)('div', { className: Z.bannerGradient })
                        })
                    }),
                    (0, i.jsxs)(_.Z, {
                        children: [
                            (0, i.jsx)(E.Z, {
                                tabs: e,
                                selectedTab: t,
                                onTabSelect: n,
                                className: Z.tabs
                            }),
                            t === p.e5.CLAIMED ? (0, i.jsx)(x, { onSelectTab: n }) : (0, i.jsx)(f.Z, {})
                        ]
                    })
                ]
            })
        ]
    });
};
