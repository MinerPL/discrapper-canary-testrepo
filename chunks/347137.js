var i = n(735250), s = n(470079), a = n(481060), r = n(442837), l = n(212093), o = n(100527), c = n(570938), d = n(677277), u = n(285865), _ = n(702428), E = n(709158), h = n(683301), I = n(360048), m = n(296386), p = n(150192), g = n(889010), T = n(488905), S = n(731455), C = n(689938), N = n(953310);
let f = e => {
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
        return S.fW.Server;
    }
};
t.Z = function () {
    let {
            currentCategoryId: e,
            isViewingSearchResults: t
        } = (0, r.cj)([h.ZP], () => ({
            currentCategoryId: h.ZP.getCurrentCategoryId(),
            isViewingSearchResults: h.ZP.getMostRecentQuery().length > 0
        })), n = (0, E.Z)(o.Z.QUEST_HOME_PAGE), A = (0, r.e7)([p.Z], () => p.Z.getClanDiscoveryCategories(), [], p.j), Z = null == A ? void 0 : A.map(e => ({
            ...e,
            icon: f(e.categoryId)
        })), L = e => {
            (0, l.uY)(e, !0), u.Z.closeSidebar(), t && (0, l.AQ)();
        };
    return s.useEffect(() => {
        (0, m.le)(!1, !0);
    }, [e]), (0, i.jsxs)(a.Scroller, {
        children: [
            (0, i.jsx)(T.V, { text: C.Z.Messages.DISCOVER }),
            (0, i.jsx)(I.Z, {
                avatar: (0, i.jsx)(c.Z, {}),
                name: C.Z.Messages.CLANS,
                focusProps: {
                    offset: {
                        right: 4,
                        top: 1,
                        bottom: 1
                    }
                },
                onClick: () => L(S.Gj.Clans),
                wrapContent: !0,
                selected: e === S.Gj.Clans,
                className: N.categoryItem,
                selectedClassName: N.selectedCategoryItem,
                innerClassName: N.itemInner
            }, 'clan-discovery-home'),
            (0, i.jsx)(g.Z, {
                categories: Z,
                handleCategorySelect: L,
                currentCategoryId: e,
                shouldDisplaySelectedCategory: !t
            }),
            (0, i.jsx)(d.Z, {
                handleCategorySelect: L,
                currentCategoryId: e,
                shouldDisplaySelectedCategory: !t
            }),
            n && (0, i.jsx)(_.Z, {
                onClick: () => L(S.Gj.Quests),
                isSelected: e === S.Gj.Quests
            })
        ]
    });
};
