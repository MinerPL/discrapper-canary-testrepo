"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("65597"),
  u = n("77078"),
  o = n("737960"),
  d = n("305961"),
  c = n("957255"),
  f = n("466857"),
  h = n("315102"),
  m = n("791679"),
  p = n("730647"),
  E = n("49111"),
  g = n("782340"),
  S = n("794260"),
  C = n("531591"),
  _ = n("981726"),
  I = n("529547");
let T = (0, o.default)(e => {
  let {
    searchQuery: t,
    setSearchQuery: n,
    handleClearSearch: l,
    handleSearchKeyPress: s,
    width: r
  } = e, o = null != r && r <= 800;
  return (0, a.jsxs)("div", {
    className: C.header,
    children: [(0, a.jsx)("img", {
      alt: "",
      className: C.headerImage,
      src: o ? I : _
    }), (0, a.jsx)("div", {
      className: C.headerContentWrapper,
      children: (0, a.jsxs)("div", {
        className: i(C.headerContent, {
          [C.headerContentSmall]: o
        }),
        children: [(0, a.jsx)(u.Heading, {
          variant: "heading-xl/semibold",
          className: C.searchTitle,
          children: g.default.Messages.HUB_DIRECTORY_SEARCH_TITLE
        }), (0, a.jsx)(u.Text, {
          variant: "text-md/normal",
          className: C.searchSubtitle,
          children: g.default.Messages.HUB_DIRECTORY_SEARCH_SUBTITLE
        }), (0, a.jsx)(f.default, {
          searchTerm: t,
          className: C.searchBox,
          inputClassName: C.searchBoxInput,
          closeIconClassName: C.closeIcon,
          searchIconClassName: C.searchIcon,
          label: g.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          placeholder: g.default.Messages.DIRECTORY_SEARCH_PLACEHOLDER,
          onChange: n,
          onClear: l,
          onKeyPress: s,
          cta: null != t && t.length > 0 ? g.default.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA : null
        })]
      })
    })]
  })
});

function v(e) {
  let {
    guild: t,
    directoryEntries: n,
    handleCreateOrAddGuild: l,
    isLoading: s
  } = e, o = (0, r.useStateFromStores)([c.default], () => c.default.can(E.Permissions.ADMINISTRATOR, t)), d = [];
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
    className: S.pageContainer,
    children: (0, a.jsxs)(u.AdvancedScrollerAuto, {
      className: S.scroller,
      children: [(0, a.jsxs)("div", {
        className: C.header,
        children: [null != f ? (0, a.jsx)("img", {
          alt: "",
          className: i(C.headerImage, C.headerImageSimple),
          src: f
        }) : null, (0, a.jsx)("div", {
          className: C.headerImageBG
        }), (0, a.jsx)("div", {
          className: C.headerContentWrapper,
          children: (0, a.jsx)("div", {
            className: i(C.headerContent, C.headerContentSmall),
            children: (0, a.jsx)(u.Heading, {
              variant: "heading-xl/semibold",
              color: "always-white",
              children: g.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
                categoryName: "Midjourney"
              })
            })
          })
        })]
      }), s && null == n ? (0, a.jsx)(u.Spinner, {
        className: S.spinner
      }) : (0, a.jsxs)("div", {
        className: S.cardsContainer,
        children: [d.map(e => (0, a.jsx)(m.default, {
          entry: e
        }, e.guildId)), o && null != l ? (0, a.jsx)(m.AddEntryCard, {
          onClick: l
        }) : null]
      })]
    })
  })
}
var x = e => {
  let {
    channel: t,
    directoryEntries: n,
    handleCreateOrAddGuild: s,
    searchQuery: i,
    setSearchQuery: o,
    handleClearSearch: c,
    handleSearchKeyPress: f,
    currentCategoryId: h,
    handleSelectCategory: _,
    categoryCounts: I,
    allEntriesCount: x,
    isLoading: N
  } = e, A = (0, r.useStateFromStores)([d.default], () => d.default.getGuild(t.getGuildId()));
  return null != A && A.hasFeature(E.GuildFeatures.SHARD) ? (0, a.jsx)(v, {
    guild: A,
    directoryEntries: n,
    handleCreateOrAddGuild: s,
    isLoading: N
  }) : (0, a.jsx)("div", {
    className: S.pageContainer,
    children: (0, a.jsxs)(u.AdvancedScrollerAuto, {
      className: S.scroller,
      children: [(0, a.jsx)(T, {
        searchQuery: i,
        setSearchQuery: o,
        handleClearSearch: c,
        handleSearchKeyPress: f
      }), (0, a.jsx)(u.AdvancedScrollerThin, {
        orientation: "horizontal",
        children: (0, a.jsxs)(u.TabBar, {
          className: C.tabBar,
          type: "top",
          look: "brand",
          selectedItem: h,
          onItemSelect: e => {
            _(e)
          },
          children: [(0, a.jsx)(u.TabBar.Item, {
            className: C.tabBarItem,
            id: p.DirectoryEntryCategories.ALL,
            children: "".concat(g.default.Messages.DIRECTORY_CATEGORY_ALL, " (").concat(x, ")")
          }, p.DirectoryEntryCategories.ALL), (0, p.getHubCategories)(t.id).map(e => {
            let {
              value: t,
              label: n
            } = e;
            return (0, a.jsx)(u.TabBar.Item, {
              className: C.tabBarItem,
              id: t,
              children: "".concat(n, " ").concat(null != I[t] ? "(".concat(I[t], ")") : "")
            }, t)
          })]
        })
      }), N && null == n ? (0, a.jsx)(u.Spinner, {
        className: S.spinner
      }) : null == n ? void 0 : n.map((e, t) => (0, a.jsxs)(l.Fragment, {
        children: [void 0 !== e.header ? (0, a.jsx)(u.Text, {
          variant: "text-md/semibold",
          className: C.sectionHeader,
          children: e.header
        }) : null, (0, a.jsxs)("div", {
          className: S.cardsContainer,
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