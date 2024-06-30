var i = n(735250);
n(470079);
var s = n(442837), a = n(481060), r = n(212093), l = n(100527), o = n(963202), c = n(677277), d = n(285865), u = n(702428), _ = n(709158), E = n(683301), h = n(150192), I = n(889010), m = n(488905), p = n(347137), g = n(731455), T = n(689938);
let S = e => {
        switch (e) {
        case g.Gj.Activity:
            return g.fW.Activity;
        case g.Gj.Music:
            return g.fW.Music;
        case g.Gj.Television:
            return g.fW.Television;
        case g.Gj.Science:
            return g.fW.Science;
        case g.Gj.Education:
            return g.fW.Education;
        default:
            return g.fW.Discover;
        }
    }, C = () => {
        let {
                currentCategoryId: e,
                isViewingSearchResults: t
            } = (0, s.cj)([E.ZP], () => ({
                currentCategoryId: E.ZP.getCurrentCategoryId(),
                isViewingSearchResults: E.ZP.getMostRecentQuery().length > 0
            })), n = (0, _.Z)(l.Z.QUEST_HOME_PAGE), o = (0, s.e7)([h.Z], () => h.Z.getDiscoveryCategories(), [], h.j), p = null == o ? void 0 : o.map(e => ({
                ...e,
                icon: S(e.categoryId)
            })), C = e => {
                (0, r.uY)(e, !0), d.Z.closeSidebar(), t && (0, r.AQ)();
            };
        return (0, i.jsxs)(a.Scroller, {
            children: [
                (0, i.jsx)(m.V, { text: T.Z.Messages.DISCOVER }),
                (0, i.jsx)(I.Z, {
                    categories: p,
                    handleCategorySelect: C,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                (0, i.jsx)(c.Z, {
                    handleCategorySelect: C,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                n && (0, i.jsx)(u.Z, {
                    onClick: () => C(g.Gj.Quests),
                    isSelected: e === g.Gj.Quests
                })
            ]
        });
    };
t.Z = function () {
    let {guilds: e} = (0, o.C3)({
            location: 'guild_discovery_sidebar',
            includeConverted: !0
        }), t = e.length > 0, {clanDiscoveryEnabled: n} = (0, o.nk)('guild_discovery_sidebar');
    return t || n ? (0, i.jsx)(p.Z, {}) : (0, i.jsx)(C, {});
};
