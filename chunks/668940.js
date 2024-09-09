var i = n(735250);
n(470079);
var a = n(636977),
    s = n(442837),
    r = n(481060),
    l = n(212093),
    o = n(963202),
    c = n(677277),
    d = n(285865),
    u = n(918701),
    _ = n(702428),
    E = n(341907),
    h = n(703656),
    m = n(683301),
    I = n(150192),
    g = n(889010),
    p = n(488905),
    T = n(347137),
    S = n(731455),
    C = n(981631),
    f = n(46140),
    N = n(689938),
    A = n(745322);
let v = (e) => {
        switch (e) {
            case S.Gj.Activity:
                return S.fW.Activity;
            case S.Gj.Music:
                return S.fW.Music;
            case S.Gj.Television:
                return S.fW.Television;
            case S.Gj.Science:
                return S.fW.Science;
            case S.Gj.Education:
                return S.fW.Education;
            default:
                return S.fW.Discover;
        }
    },
    L = () => {
        let { currentCategoryId: e, isViewingSearchResults: t } = (0, s.cj)([m.ZP], () => ({
                currentCategoryId: m.ZP.getCurrentCategoryId(),
                isViewingSearchResults: m.ZP.getMostRecentQuery().length > 0
            })),
            n = (0, s.e7)([I.Z], () => I.Z.getDiscoveryCategories(), [], I.j),
            o =
                null == n
                    ? void 0
                    : n.map((e) => ({
                          ...e,
                          icon: v(e.categoryId)
                      })),
            T = (e) => {
                (0, l.uY)(e, !0), d.Z.closeSidebar(), t && (0, l.AQ)(), (0, u.OG)() && e !== S.Gj.Quests && (0, h.uL)(C.Z5c.GUILD_DISCOVERY), !(0, u.OG)() && e === S.Gj.Quests && (0, E.navigateToQuestHome)(f.dr.DISCOVERY_SIDEBAR, a.j.DISCOVERY_SIDEBAR);
            };
        return (0, i.jsxs)(r.Scroller, {
            className: A.sidebarContainer,
            children: [
                (0, i.jsx)(p.V, { text: N.Z.Messages.DISCOVER }),
                (0, i.jsx)(g.Z, {
                    categories: o,
                    handleCategorySelect: T,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                (0, i.jsx)(c.Z, {
                    handleCategorySelect: T,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                (0, i.jsx)(_.Z, {
                    onClick: () => T(S.Gj.Quests),
                    isSelected: e === S.Gj.Quests
                })
            ]
        });
    };
t.Z = function () {
    let { guilds: e } = (0, o.C3)({
            location: 'guild_discovery_sidebar',
            includeConverted: !0
        }),
        t = e.length > 0,
        { clanDiscoveryEnabled: n } = (0, o.nk)('guild_discovery_sidebar');
    return t || n ? (0, i.jsx)(T.Z, {}) : (0, i.jsx)(L, {});
};
