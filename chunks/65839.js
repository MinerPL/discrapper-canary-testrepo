n(47120);
var i = n(735250), a = n(470079), l = n(120356), s = n.n(l), r = n(399606), o = n(481060), c = n(112724), u = n(430824), d = n(496675), h = n(768581), p = n(400251), m = n(486527), _ = n(981631), f = n(689938), E = n(509616), C = n(201698), g = n(584354), I = n(725060);
let x = (0, c.Z)(e => {
    let {
            searchQuery: t,
            setSearchQuery: n,
            handleClearSearch: a,
            handleSearchKeyPress: l,
            width: r
        } = e, c = null != r && r <= 800;
    return (0, i.jsxs)('div', {
        className: C.header,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: C.headerImage,
                src: c ? I : g
            }),
            (0, i.jsx)('div', {
                className: C.headerContentWrapper,
                children: (0, i.jsxs)('div', {
                    className: s()(C.headerContent, { [C.headerContentSmall]: c }),
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-xl/semibold',
                            className: C.searchTitle,
                            children: f.Z.Messages.HUB_DIRECTORY_SEARCH_TITLE
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: C.searchSubtitle,
                            children: f.Z.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
                        }),
                        (0, i.jsx)(o.SearchBox, {
                            searchTerm: t,
                            className: C.searchBox,
                            inputClassName: C.searchBoxInput,
                            closeIconClassName: C.closeIcon,
                            searchIconClassName: C.searchIcon,
                            label: f.Z.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
                            placeholder: f.Z.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
                            onChange: n,
                            onClear: a,
                            onKeyPress: l,
                            cta: null != t && t.length > 0 ? f.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
                        })
                    ]
                })
            })
        ]
    });
});
function T(e) {
    let {
            guild: t,
            directoryEntries: n,
            handleCreateOrAddGuild: a,
            isLoading: l
        } = e, c = (0, r.e7)([d.Z], () => d.Z.can(_.Plq.ADMINISTRATOR, t)), u = [];
    null != n && n.forEach(e => {
        u = u.concat(e.entries);
    }), u.sort((e, t) => {
        var n, i;
        return (null !== (n = t.approximateMemberCount) && void 0 !== n ? n : 0) - (null !== (i = e.approximateMemberCount) && void 0 !== i ? i : 0);
    });
    let m = h.ZP.getGuildSplashURL({
        id: t.id,
        splash: t.splash
    });
    return (0, i.jsx)('div', {
        className: E.pageContainer,
        children: (0, i.jsxs)(o.AdvancedScrollerAuto, {
            className: E.scroller,
            children: [
                (0, i.jsxs)('div', {
                    className: C.header,
                    children: [
                        null != m ? (0, i.jsx)('img', {
                            alt: '',
                            className: s()(C.headerImage, C.headerImageSimple),
                            src: m
                        }) : null,
                        (0, i.jsx)('div', { className: C.headerImageBG }),
                        (0, i.jsx)('div', {
                            className: C.headerContentWrapper,
                            children: (0, i.jsx)('div', {
                                className: s()(C.headerContent, C.headerContentSmall),
                                children: (0, i.jsx)(o.Heading, {
                                    variant: 'heading-xl/semibold',
                                    color: 'always-white',
                                    children: f.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({ categoryName: 'Midjourney' })
                                })
                            })
                        })
                    ]
                }),
                l && null == n ? (0, i.jsx)(o.Spinner, { className: E.spinner }) : (0, i.jsxs)('div', {
                    className: E.cardsContainer,
                    children: [
                        u.map(e => (0, i.jsx)(p.Z, { entry: e }, e.guildId)),
                        c && null != a ? (0, i.jsx)(p.m, { onClick: a }) : null
                    ]
                })
            ]
        })
    });
}
t.Z = e => {
    let {
            channel: t,
            directoryEntries: n,
            handleCreateOrAddGuild: l,
            searchQuery: s,
            setSearchQuery: c,
            handleClearSearch: d,
            handleSearchKeyPress: h,
            currentCategoryId: g,
            handleSelectCategory: I,
            categoryCounts: N,
            allEntriesCount: v,
            isLoading: S
        } = e, Z = (0, r.e7)([u.Z], () => u.Z.getGuild(t.getGuildId()));
    return null != Z && Z.hasFeature(_.oNc.SHARD) ? (0, i.jsx)(T, {
        guild: Z,
        directoryEntries: n,
        handleCreateOrAddGuild: l,
        isLoading: S
    }) : (0, i.jsx)('div', {
        className: E.pageContainer,
        children: (0, i.jsxs)(o.AdvancedScrollerAuto, {
            className: E.scroller,
            children: [
                (0, i.jsx)(x, {
                    searchQuery: s,
                    setSearchQuery: c,
                    handleClearSearch: d,
                    handleSearchKeyPress: h
                }),
                (0, i.jsx)(o.AdvancedScrollerThin, {
                    orientation: 'horizontal',
                    children: (0, i.jsxs)(o.TabBar, {
                        className: C.tabBar,
                        type: 'top',
                        look: 'brand',
                        selectedItem: g,
                        onItemSelect: e => {
                            I(e);
                        },
                        children: [
                            (0, i.jsx)(o.TabBar.Item, {
                                className: C.tabBarItem,
                                id: m.AR.ALL,
                                children: ''.concat(f.Z.Messages.DIRECTORY_CATEGORY_ALL, ' (').concat(v, ')')
                            }, m.AR.ALL),
                            (0, m.b7)(t.id).map(e => {
                                let {
                                    value: t,
                                    label: n
                                } = e;
                                return (0, i.jsx)(o.TabBar.Item, {
                                    className: C.tabBarItem,
                                    id: t,
                                    children: ''.concat(n, ' ').concat(null != N[t] ? '('.concat(N[t], ')') : '')
                                }, t);
                            })
                        ]
                    })
                }),
                S && null == n ? (0, i.jsx)(o.Spinner, { className: E.spinner }) : null == n ? void 0 : n.map((e, t) => (0, i.jsxs)(a.Fragment, {
                    children: [
                        void 0 !== e.header ? (0, i.jsx)(o.Text, {
                            variant: 'text-md/semibold',
                            className: C.sectionHeader,
                            children: e.header
                        }) : null,
                        (0, i.jsxs)('div', {
                            className: E.cardsContainer,
                            children: [
                                e.entries.map(e => (0, i.jsx)(p.Z, { entry: e }, e.guildId)),
                                e.appendEndCard && null != l ? (0, i.jsx)(p.m, { onClick: l }) : null
                            ]
                        })
                    ]
                }, t))
            ]
        })
    });
};
