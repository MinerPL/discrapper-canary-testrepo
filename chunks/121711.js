var i = n(735250),
    a = n(470079),
    s = n(990547),
    r = n(481060),
    l = n(213609),
    o = n(252618),
    c = n(979233),
    d = n(175307),
    u = n(374939),
    _ = n(611928),
    E = n(791734),
    h = n(63063),
    m = n(113434),
    I = n(150560),
    g = n(558652),
    p = n(736683),
    T = n(452081),
    S = n(981631),
    C = n(689938),
    f = n(296561);
t.Z = function () {
    let { tabs: e, selectedTab: t, onSelectTab: n } = (0, T.z)(),
        { onScroll: N, scrollPosition: A } = (0, c.M)(),
        v = I.Z.getState().getUtmCurrentContext();
    a.useEffect(() => {
        (0, l.h)({
            name: s.ImpressionNames.QUEST_HOME,
            type: s.ImpressionTypes.VIEW,
            properties: {
                utm_source_current: v.utmSourceCurrent,
                utm_medium_current: v.utmMediumCurrent,
                utm_campaign_current: v.utmCampaignCurrent,
                utm_content_current: v.utmContentCurrent
            }
        });
    }, []);
    let L = a.useCallback(() => {
        window.open(h.Z.getArticleURL(S.BhN.QUESTS_LEARN_MORE));
    }, []);
    (0, o.Tt)({ location: C.Z.Messages.QUESTS });
    let Z = a.useMemo(() => ({ backgroundImage: 'url('.concat('https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png', ')') }), []);
    return (0, i.jsxs)('div', {
        className: f.container,
        children: [
            (0, i.jsxs)(_.ZP, {
                children: [
                    (0, i.jsx)('div', { className: f.dragRegion }),
                    (0, i.jsx)(_.z6, { scrollPosition: A }),
                    (0, i.jsx)(_.aV, { icon: r.QuestsIcon }),
                    (0, i.jsx)(E.Z, {
                        tabs: e,
                        selectedTab: t,
                        onTabSelect: n
                    })
                ]
            }),
            (0, i.jsx)(u.Z, {
                title: C.Z.Messages.QUESTS_HOME_HERO_TITLE,
                description: C.Z.Messages.QUESTS_HOME_HERO_DESCRIPTION,
                onScroll: N,
                button: (0, i.jsx)(d.u, {
                    text: C.Z.Messages.LEARN_MORE,
                    onClick: L
                }),
                bannerClassName: f.bannerContainer,
                bannerBackground: (0, i.jsx)('div', {
                    className: f.bannerImage,
                    style: Z,
                    children: (0, i.jsx)('div', { className: f.bannerGradient })
                }),
                children: t === m.e5.CLAIMED ? (0, i.jsx)(p.Z, { onSelectTab: n }) : (0, i.jsx)(g.Z, {})
            })
        ]
    });
};
