var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    r = n(212093),
    l = n(963202),
    o = n(677277),
    c = n(285865),
    d = n(918701),
    u = n(471985),
    _ = n(702428),
    E = n(703656),
    h = n(683301),
    m = n(150192),
    I = n(889010),
    g = n(488905),
    p = n(347137),
    T = n(731455),
    S = n(981631),
    f = n(46140),
    C = n(689938),
    N = n(745322);
let A = (e) => {
        switch (e) {
            case T.Gj.Activity:
                return T.fW.Activity;
            case T.Gj.Music:
                return T.fW.Music;
            case T.Gj.Television:
                return T.fW.Television;
            case T.Gj.Science:
                return T.fW.Science;
            case T.Gj.Education:
                return T.fW.Education;
            default:
                return T.fW.Discover;
        }
    },
    v = () => {
        let { currentCategoryId: e, isViewingSearchResults: t } = (0, a.cj)([h.ZP], () => ({
                currentCategoryId: h.ZP.getCurrentCategoryId(),
                isViewingSearchResults: h.ZP.getMostRecentQuery().length > 0
            })),
            n = (0, u.Z)(f.dr.QUEST_HOME_DESKTOP),
            l = (0, a.e7)([m.Z], () => m.Z.getDiscoveryCategories(), [], m.j),
            p =
                null == l
                    ? void 0
                    : l.map((e) => ({
                          ...e,
                          icon: A(e.categoryId)
                      })),
            v = (e) => {
                (0, r.uY)(e, !0), c.Z.closeSidebar(), t && (0, r.AQ)(), (0, d.OG)() && e !== T.Gj.Quests && (0, E.uL)(S.Z5c.GUILD_DISCOVERY), !(0, d.OG)() && e === T.Gj.Quests && (0, E.uL)(S.Z5c.QUEST_HOME);
            };
        return (0, i.jsxs)(s.Scroller, {
            className: N.sidebarContainer,
            children: [
                (0, i.jsx)(g.V, { text: C.Z.Messages.DISCOVER }),
                (0, i.jsx)(I.Z, {
                    categories: p,
                    handleCategorySelect: v,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                (0, i.jsx)(o.Z, {
                    handleCategorySelect: v,
                    currentCategoryId: e,
                    shouldDisplaySelectedCategory: !t
                }),
                n &&
                    (0, i.jsx)(_.Z, {
                        onClick: () => v(T.Gj.Quests),
                        isSelected: e === T.Gj.Quests
                    })
            ]
        });
    };
t.Z = function () {
    let { guilds: e } = (0, l.C3)({
            location: 'guild_discovery_sidebar',
            includeConverted: !0
        }),
        t = e.length > 0,
        { clanDiscoveryEnabled: n } = (0, l.nk)('guild_discovery_sidebar');
    return t || n ? (0, i.jsx)(p.Z, {}) : (0, i.jsx)(v, {});
};
