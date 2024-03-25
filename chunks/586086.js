"use strict";
n.r(t), n.d(t, {
  MAX_GUILDS_PER_PAGE: function() {
    return T
  },
  default: function() {
    return R
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("917351"),
  i = n.n(l),
  r = n("522632"),
  o = n("446674"),
  u = n("77078"),
  d = n("340626"),
  c = n("393414"),
  f = n("926787"),
  E = n("246053"),
  h = n("794818"),
  _ = n("961098"),
  C = n("338638"),
  S = n("719369"),
  I = n("447621"),
  m = n("782340"),
  p = n("319688");
let T = 12,
  g = () => {
    let e = (0, c.getHistory)(),
      t = e.location.search,
      n = null != t && t.length > 0 && t.startsWith("?");
    return n ? r.parse(t) : {}
  },
  A = e => {
    let {
      categoryId: t,
      categoryName: n,
      onClick: s
    } = e, l = t === I.DISCOVERY_ALL_CATEGORIES_ID, i = l ? m.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : m.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({
      categoryName: n
    }), r = l ? m.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : m.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({
      onClick: s
    });
    return (0, a.jsxs)("div", {
      className: p.emptyContainer,
      children: [(0, a.jsx)("div", {
        className: p.emptyImage
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: p.emptyHeader,
        children: i
      }), (0, a.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: r
      })]
    })
  },
  N = () => (0, a.jsxs)("div", {
    className: p.emptyContainer,
    children: [(0, a.jsx)("div", {
      className: p.errorImage
    }), (0, a.jsx)(u.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: p.emptyHeader,
      children: m.default.Messages.GUILD_DISCOVERY_SEARCH_ERROR
    })]
  });
var R = e => {
  let {
    loadId: t,
    searchResults: n,
    mostRecentQuery: l,
    defaultLanguage: r,
    availableLanguages: c,
    isFetchingSearch: R,
    scroller: O,
    loadingGuildId: v,
    theme: L,
    currentCategoryId: M,
    currentCategoryName: P,
    onViewGuild: y,
    onGuildCardSeen: D,
    placeholder: x,
    onTagClick: b
  } = e, U = i.uniqueId("GuildDiscovery"), {
    guilds: G,
    loading: j,
    total: w
  } = n, [k, F] = s.useState(!1), {
    tag: B
  } = g(), [H, V] = s.useState(B), Y = (0, o.useStateFromStores)([f.default], () => f.default.hasSearchError()), W = (e, t, n) => {
    d.doAlgoliaSearch(l, {
      categoryId: n ? I.DISCOVERY_ALL_CATEGORIES_ID : M,
      preferredLocale: r.code,
      offset: e,
      length: t,
      filters: {
        approximate_member_count: h.MINIMUM_MEMBER_COUNT
      }
    }), F(!1)
  }, K = () => {
    null == O || O.scrollTo({
      to: 0
    })
  };
  s.useEffect(() => {
    let {
      offset: e,
      tag: t
    } = g(), n = null != e ? Math.floor(parseInt(e, 10) / T) + 1 : 1;
    V(!!t), 1 === n && F(!0)
  }, [l]);
  let z = M === I.DISCOVERY_ALL_CATEGORIES_ID ? m.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: l
  }) : m.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: l,
    category: P
  });
  return (0, a.jsxs)("div", {
    className: p.container,
    children: [(0, a.jsxs)("div", {
      className: p.searchHeader,
      children: [(0, a.jsx)(u.Clickable, {
        onClick: () => {
          d.clearSearch(), h.trackSearchClosed(t)
        },
        className: p.arrow,
        "aria-label": m.default.Messages.BACK,
        children: (0, a.jsx)(E.default, {
          direction: E.default.Directions.LEFT
        })
      }), (0, a.jsx)(u.Heading, {
        variant: "heading-xl/semibold",
        className: p.header,
        children: z
      })]
    }), (0, a.jsx)(C.default, {
      loadId: t,
      searchResults: n,
      mostRecentQuery: l,
      isFetchingSearch: R,
      defaultLanguage: r,
      placeholder: x,
      availableLanguages: c,
      isSearchPage: !0,
      currentCategoryId: M,
      isTagSearch: H
    }), Y ? (0, a.jsx)(N, {}) : w <= 0 ? (0, a.jsx)(A, {
      categoryId: M,
      categoryName: P,
      onClick: () => {
        d.selectCategory(I.DISCOVERY_ALL_CATEGORIES_ID), W(0, T, !0)
      }
    }) : (0, a.jsx)("div", {
      className: p.results,
      children: (0, a.jsx)(_.default, {
        pageSize: T,
        totalCount: w,
        resetCurrentPage: k,
        onPageChange: e => {
          let t = (e - 1) * T;
          W(t, T), K()
        },
        children: e => {
          let {
            controller: t
          } = e;
          return (0, a.jsxs)("section", {
            "aria-labelledby": U,
            children: [(0, a.jsx)(S.default, {
              guilds: G,
              loading: j,
              loadingPlaceholderCount: T,
              onViewGuild: y,
              loadingGuildId: v,
              theme: L,
              analyticsContext: h.AnalyticsContexts.SEARCH,
              onGuildCardSeen: D,
              onTagClick: b
            }), t]
          })
        }
      })
    })]
  })
}