n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    l = n.n(s),
    r = n(399606),
    o = n(481060),
    c = n(112724),
    u = n(430824),
    d = n(496675),
    h = n(768581),
    m = n(400251),
    p = n(486527),
    _ = n(981631),
    f = n(689938),
    E = n(125803),
    g = n(703959),
    C = n(584354),
    I = n(725060);
let x = (0, c.Z)((e) => {
    let { searchQuery: t, setSearchQuery: n, handleClearSearch: a, handleSearchKeyPress: s, width: r } = e,
        c = null != r && r <= 800;
    return (0, i.jsxs)('div', {
        className: g.header,
        children: [
            (0, i.jsx)('img', {
                alt: '',
                className: g.headerImage,
                src: c ? I : C
            }),
            (0, i.jsx)('div', {
                className: g.headerContentWrapper,
                children: (0, i.jsxs)('div', {
                    className: l()(g.headerContent, { [g.headerContentSmall]: c }),
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-xl/semibold',
                            className: g.searchTitle,
                            children: f.Z.Messages.HUB_DIRECTORY_SEARCH_TITLE
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: g.searchSubtitle,
                            children: f.Z.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
                        }),
                        (0, i.jsx)(o.SearchBox, {
                            searchTerm: t,
                            className: g.searchBox,
                            inputClassName: g.searchBoxInput,
                            closeIconClassName: g.closeIcon,
                            searchIconClassName: g.searchIcon,
                            label: f.Z.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
                            placeholder: f.Z.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
                            onChange: n,
                            onClear: a,
                            onKeyPress: s,
                            cta: null != t && t.length > 0 ? f.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
                        })
                    ]
                })
            })
        ]
    });
});
function T(e) {
    let { guild: t, directoryEntries: n, handleCreateOrAddGuild: a, isLoading: s } = e,
        c = (0, r.e7)([d.Z], () => d.Z.can(_.Plq.ADMINISTRATOR, t)),
        u = [];
    null != n &&
        n.forEach((e) => {
            u = u.concat(e.entries);
        }),
        u.sort((e, t) => {
            var n, i;
            return (null !== (n = t.approximateMemberCount) && void 0 !== n ? n : 0) - (null !== (i = e.approximateMemberCount) && void 0 !== i ? i : 0);
        });
    let p = h.ZP.getGuildSplashURL({
        id: t.id,
        splash: t.splash
    });
    return (0, i.jsx)('div', {
        className: E.pageContainer,
        children: (0, i.jsxs)(o.AdvancedScrollerAuto, {
            className: E.scroller,
            children: [
                (0, i.jsxs)('div', {
                    className: g.header,
                    children: [
                        null != p
                            ? (0, i.jsx)('img', {
                                  alt: '',
                                  className: l()(g.headerImage, g.headerImageSimple),
                                  src: p
                              })
                            : null,
                        (0, i.jsx)('div', { className: g.headerImageBG }),
                        (0, i.jsx)('div', {
                            className: g.headerContentWrapper,
                            children: (0, i.jsx)('div', {
                                className: l()(g.headerContent, g.headerContentSmall),
                                children: (0, i.jsx)(o.Heading, {
                                    variant: 'heading-xl/semibold',
                                    color: 'always-white',
                                    children: f.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({ categoryName: 'Midjourney' })
                                })
                            })
                        })
                    ]
                }),
                s && null == n
                    ? (0, i.jsx)(o.Spinner, { className: E.spinner })
                    : (0, i.jsxs)('div', {
                          className: E.cardsContainer,
                          children: [u.map((e) => (0, i.jsx)(m.Z, { entry: e }, e.guildId)), c && null != a ? (0, i.jsx)(m.m, { onClick: a }) : null]
                      })
            ]
        })
    });
}
t.Z = (e) => {
    let { channel: t, directoryEntries: n, handleCreateOrAddGuild: s, searchQuery: l, setSearchQuery: c, handleClearSearch: d, handleSearchKeyPress: h, currentCategoryId: C, handleSelectCategory: I, categoryCounts: N, allEntriesCount: v, isLoading: S } = e,
        Z = (0, r.e7)([u.Z], () => u.Z.getGuild(t.getGuildId()));
    return null != Z && Z.hasFeature(_.oNc.SHARD)
        ? (0, i.jsx)(T, {
              guild: Z,
              directoryEntries: n,
              handleCreateOrAddGuild: s,
              isLoading: S
          })
        : (0, i.jsx)('div', {
              className: E.pageContainer,
              children: (0, i.jsxs)(o.AdvancedScrollerAuto, {
                  className: E.scroller,
                  children: [
                      (0, i.jsx)(x, {
                          searchQuery: l,
                          setSearchQuery: c,
                          handleClearSearch: d,
                          handleSearchKeyPress: h
                      }),
                      (0, i.jsx)(o.AdvancedScrollerThin, {
                          orientation: 'horizontal',
                          children: (0, i.jsxs)(o.TabBar, {
                              className: g.tabBar,
                              type: 'top',
                              look: 'brand',
                              selectedItem: C,
                              onItemSelect: (e) => {
                                  I(e);
                              },
                              children: [
                                  (0, i.jsx)(
                                      o.TabBar.Item,
                                      {
                                          className: g.tabBarItem,
                                          id: p.AR.ALL,
                                          children: ''.concat(f.Z.Messages.DIRECTORY_CATEGORY_ALL, ' (').concat(v, ')')
                                      },
                                      p.AR.ALL
                                  ),
                                  (0, p.b7)(t.id).map((e) => {
                                      let { value: t, label: n } = e;
                                      return (0, i.jsx)(
                                          o.TabBar.Item,
                                          {
                                              className: g.tabBarItem,
                                              id: t,
                                              children: ''.concat(n, ' ').concat(null != N[t] ? '('.concat(N[t], ')') : '')
                                          },
                                          t
                                      );
                                  })
                              ]
                          })
                      }),
                      S && null == n
                          ? (0, i.jsx)(o.Spinner, { className: E.spinner })
                          : null == n
                            ? void 0
                            : n.map((e, t) =>
                                  (0, i.jsxs)(
                                      a.Fragment,
                                      {
                                          children: [
                                              void 0 !== e.header
                                                  ? (0, i.jsx)(o.Text, {
                                                        variant: 'text-md/semibold',
                                                        className: g.sectionHeader,
                                                        children: e.header
                                                    })
                                                  : null,
                                              (0, i.jsxs)('div', {
                                                  className: E.cardsContainer,
                                                  children: [e.entries.map((e) => (0, i.jsx)(m.Z, { entry: e }, e.guildId)), e.appendEndCard && null != s ? (0, i.jsx)(m.m, { onClick: s }) : null]
                                              })
                                          ]
                                      },
                                      t
                                  )
                              )
                  ]
              })
          });
};
