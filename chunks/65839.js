"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("399606"),
  o = n("481060"),
  u = n("112724"),
  d = n("430824"),
  c = n("496675"),
  f = n("408814"),
  h = n("768581"),
  m = n("400251"),
  p = n("486527"),
  E = n("981631"),
  C = n("689938"),
  g = n("647695"),
  S = n("326065"),
  _ = n("584354"),
  T = n("725060");
let I = (0, u.default)(e => {
  let {
    searchQuery: t,
    setSearchQuery: n,
    handleClearSearch: l,
    handleSearchKeyPress: s,
    width: r
  } = e, u = null != r && r <= 800;
  return (0, a.jsxs)("div", {
    className: S.header,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: S.headerImage,
      src: u ? T : _
    }), (0, a.jsx)("div", {
      className: S.headerContentWrapper,
      children: (0, a.jsxs)("div", {
        className: i()(S.headerContent, {
          [S.headerContentSmall]: u
        }),
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: S.searchTitle,
          children: C.default.Messages.HUB_DIRECTORY_SEARCH_TITLE
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          className: S.searchSubtitle,
          children: C.default.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
        }), (0, a.jsx)(f.default, {
          searchTerm: t,
          className: S.searchBox,
          inputClassName: S.searchBoxInput,
          closeIconClassName: S.closeIcon,
          searchIconClassName: S.searchIcon,
          label: C.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          placeholder: C.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          onChange: n,
          onClear: l,
          onKeyPress: s,
          cta: null != t && t.length > 0 ? C.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
        })]
      })
    })]
  })
});

function A(e) {
  let {
    guild: t,
    directoryEntries: n,
    handleCreateOrAddGuild: l,
    isLoading: s
  } = e, u = (0, r.useStateFromStores)([c.default], () => c.default.can(E.Permissions.ADMINISTRATOR, t)), d = [];
  null != n && n.forEach(e => {
    d = d.concat(e.entries)
  }), d.sort((e, t) => {
    var n, a;
    return (null !== (n = t.approximateMemberCount) && void 0 !== n ? n : 0) - (null !== (a = e.approximateMemberCount) && void 0 !== a ? a : 0)
  });
  let f = h.default.getGuildSplashURL({
    id: t.id,
    splash: t.splash
  });
  return (0, a.jsx)("div", {
    className: g.pageContainer,
    children: (0, a.jsxs)(o.AdvancedScrollerAuto, {
      className: g.scroller,
      children: [(0, a.jsxs)("div", {
        className: S.header,
        children: [null != f ? (0, a.jsx)("img", {
          alt: "",
          className: i()(S.headerImage, S.headerImageSimple),
          src: f
        }) : null, (0, a.jsx)("div", {
          className: S.headerImageBG
        }), (0, a.jsx)("div", {
          className: S.headerContentWrapper,
          children: (0, a.jsx)("div", {
            className: i()(S.headerContent, S.headerContentSmall),
            children: (0, a.jsx)(o.Heading, {
              variant: "heading-xl/semibold",
              color: "always-white",
              children: C.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
                categoryName: "Midjourney"
              })
            })
          })
        })]
      }), s && null == n ? (0, a.jsx)(o.Spinner, {
        className: g.spinner
      }) : (0, a.jsxs)("div", {
        className: g.cardsContainer,
        children: [d.map(e => (0, a.jsx)(m.default, {
          entry: e
        }, e.guildId)), u && null != l ? (0, a.jsx)(m.AddEntryCard, {
          onClick: l
        }) : null]
      })]
    })
  })
}
t.default = e => {
  let {
    channel: t,
    directoryEntries: n,
    handleCreateOrAddGuild: s,
    searchQuery: i,
    setSearchQuery: u,
    handleClearSearch: c,
    handleSearchKeyPress: f,
    currentCategoryId: h,
    handleSelectCategory: _,
    categoryCounts: T,
    allEntriesCount: v,
    isLoading: N
  } = e, x = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(t.getGuildId()));
  return null != x && x.hasFeature(E.GuildFeatures.SHARD) ? (0, a.jsx)(A, {
    guild: x,
    directoryEntries: n,
    handleCreateOrAddGuild: s,
    isLoading: N
  }) : (0, a.jsx)("div", {
    className: g.pageContainer,
    children: (0, a.jsxs)(o.AdvancedScrollerAuto, {
      className: g.scroller,
      children: [(0, a.jsx)(I, {
        searchQuery: i,
        setSearchQuery: u,
        handleClearSearch: c,
        handleSearchKeyPress: f
      }), (0, a.jsx)(o.AdvancedScrollerThin, {
        orientation: "horizontal",
        children: (0, a.jsxs)(o.TabBar, {
          className: S.tabBar,
          type: "top",
          look: "brand",
          selectedItem: h,
          onItemSelect: e => {
            _(e)
          },
          children: [(0, a.jsx)(o.TabBar.Item, {
            className: S.tabBarItem,
            id: p.DirectoryEntryCategories.ALL,
            children: "".concat(C.default.Messages.DIRECTORY_CATEGORY_ALL, " (").concat(v, ")")
          }, p.DirectoryEntryCategories.ALL), (0, p.getHubCategories)(t.id).map(e => {
            let {
              value: t,
              label: n
            } = e;
            return (0, a.jsx)(o.TabBar.Item, {
              className: S.tabBarItem,
              id: t,
              children: "".concat(n, " ").concat(null != T[t] ? "(".concat(T[t], ")") : "")
            }, t)
          })]
        })
      }), N && null == n ? (0, a.jsx)(o.Spinner, {
        className: g.spinner
      }) : null == n ? void 0 : n.map((e, t) => (0, a.jsxs)(l.Fragment, {
        children: [void 0 !== e.header ? (0, a.jsx)(o.Text, {
          variant: "text-md/semibold",
          className: S.sectionHeader,
          children: e.header
        }) : null, (0, a.jsxs)("div", {
          className: g.cardsContainer,
          children: [e.entries.map(e => (0, a.jsx)(m.default, {
            entry: e
          }, e.guildId)), e.appendEndCard && null != s ? (0, a.jsx)(m.AddEntryCard, {
            onClick: s
          }) : null]
        })]
      }, t))]
    })
  })
}