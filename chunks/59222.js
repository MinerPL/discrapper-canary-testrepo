n.d(t, {
    D: function () {
        return C;
    }
}), n(47120);
var i = n(735250), s = n(470079), a = n(392711), r = n.n(a), l = n(664751), o = n(442837), c = n(481060), d = n(212093), u = n(703656), _ = n(683301), E = n(671533), h = n(900849), I = n(119317), m = n(749436), p = n(650394), g = n(731455), T = n(689938), S = n(946496);
let C = 12, N = () => {
        let e = (0, u.s1)().location.search;
        return null != e && e.length > 0 && e.startsWith('?') ? l.parse(e) : {};
    }, f = e => {
        let {
                categoryId: t,
                categoryName: n,
                onClick: s
            } = e, a = t === g.Hk, r = a ? T.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : T.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({ categoryName: n }), l = a ? T.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : T.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({ onClick: s });
        return (0, i.jsxs)('div', {
            className: S.emptyContainer,
            children: [
                (0, i.jsx)('div', { className: S.emptyImage }),
                (0, i.jsx)(c.Heading, {
                    variant: 'heading-xl/semibold',
                    className: S.emptyHeader,
                    children: r
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: l
                })
            ]
        });
    }, A = () => (0, i.jsxs)('div', {
        className: S.emptyContainer,
        children: [
            (0, i.jsx)('div', { className: S.errorImage }),
            (0, i.jsx)(c.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                className: S.emptyHeader,
                children: T.Z.Messages.GUILD_DISCOVERY_SEARCH_ERROR
            })
        ]
    });
t.Z = e => {
    let {
            loadId: t,
            searchResults: n,
            mostRecentQuery: a,
            defaultLanguage: l,
            availableLanguages: u,
            isFetchingSearch: Z,
            scroller: L,
            loadingGuildId: v,
            theme: O,
            currentCategoryId: R,
            currentCategoryName: x,
            onViewGuild: P,
            onGuildCardSeen: b,
            placeholder: M,
            onTagClick: D
        } = e, y = r().uniqueId('GuildDiscovery'), {
            guilds: j,
            loading: U,
            total: G
        } = n, [w, k] = s.useState(!1), {tag: B} = N(), [H, V] = s.useState(B), F = (0, o.e7)([_.ZP], () => _.ZP.hasSearchError()), Y = (e, t, n) => {
            d.bR(a, {
                categoryId: n ? g.Hk : R,
                preferredLocale: l.code,
                offset: e,
                length: t,
                filters: { approximate_member_count: h.sq }
            }), k(!1);
        }, W = () => {
            null == L || L.scrollTo({ to: 0 });
        };
    s.useEffect(() => {
        let {
                offset: e,
                tag: t
            } = N(), n = null != e ? Math.floor(parseInt(e, 10) / C) + 1 : 1;
        V(!!t), 1 === n && k(!0);
    }, [a]);
    let z = R === g.Hk ? T.Z.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
        count: null != G ? G.toLocaleString() : '0',
        query: a
    }) : T.Z.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
        count: null != G ? G.toLocaleString() : '0',
        query: a,
        category: x
    });
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsxs)('div', {
                className: S.searchHeader,
                children: [
                    (0, i.jsx)(c.Clickable, {
                        onClick: () => {
                            d.AQ(), h.IZ(t);
                        },
                        className: S.arrow,
                        'aria-label': T.Z.Messages.BACK,
                        children: (0, i.jsx)(E.Z, { direction: E.Z.Directions.LEFT })
                    }),
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-xl/semibold',
                        className: S.header,
                        children: z
                    })
                ]
            }),
            (0, i.jsx)(m.Z, {
                loadId: t,
                searchResults: n,
                mostRecentQuery: a,
                isFetchingSearch: Z,
                defaultLanguage: l,
                placeholder: M,
                availableLanguages: u,
                isSearchPage: !0,
                currentCategoryId: R,
                isTagSearch: H
            }),
            F ? (0, i.jsx)(A, {}) : G <= 0 ? (0, i.jsx)(f, {
                categoryId: R,
                categoryName: x,
                onClick: () => {
                    d.uY(g.Hk), Y(0, C, !0);
                }
            }) : (0, i.jsx)('div', {
                className: S.results,
                children: (0, i.jsx)(I.Z, {
                    pageSize: C,
                    totalCount: G,
                    resetCurrentPage: w,
                    onPageChange: e => {
                        Y((e - 1) * C, C), W();
                    },
                    children: e => {
                        let {controller: t} = e;
                        return (0, i.jsxs)('section', {
                            'aria-labelledby': y,
                            children: [
                                (0, i.jsx)(p.Z, {
                                    guilds: j,
                                    loading: U,
                                    loadingPlaceholderCount: C,
                                    onViewGuild: P,
                                    loadingGuildId: v,
                                    theme: O,
                                    analyticsContext: h.P1.SEARCH,
                                    onGuildCardSeen: b,
                                    onTagClick: D
                                }),
                                t
                            ]
                        });
                    }
                })
            })
        ]
    });
};
