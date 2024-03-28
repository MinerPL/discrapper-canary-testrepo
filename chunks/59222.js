"use strict";
n.r(t), n.d(t, {
  MAX_GUILDS_PER_PAGE: function() {
    return T
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("664751"),
  o = n("442837"),
  u = n("481060"),
  d = n("212093"),
  c = n("703656"),
  f = n("683301"),
  E = n("671533"),
  h = n("900849"),
  _ = n("119317"),
  C = n("749436"),
  m = n("650394"),
  S = n("731455"),
  I = n("689938"),
  p = n("274845");
let T = 12,
  g = () => {
    let e = (0, c.getHistory)().location.search;
    return null != e && e.length > 0 && e.startsWith("?") ? r.parse(e) : {}
  },
  A = e => {
    let {
      categoryId: t,
      categoryName: n,
      onClick: s
    } = e, l = t === S.DISCOVERY_ALL_CATEGORIES_ID, i = l ? I.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : I.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({
      categoryName: n
    }), r = l ? I.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : I.default.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({
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
      children: I.default.Messages.GUILD_DISCOVERY_SEARCH_ERROR
    })]
  });
t.default = e => {
  let {
    loadId: t,
    searchResults: n,
    mostRecentQuery: l,
    defaultLanguage: r,
    availableLanguages: c,
    isFetchingSearch: v,
    scroller: O,
    loadingGuildId: R,
    theme: L,
    currentCategoryId: P,
    currentCategoryName: M,
    onViewGuild: y,
    onGuildCardSeen: D,
    placeholder: b,
    onTagClick: x
  } = e, U = i().uniqueId("GuildDiscovery"), {
    guilds: j,
    loading: G,
    total: w
  } = n, [k, F] = s.useState(!1), {
    tag: B
  } = g(), [H, V] = s.useState(B), Y = (0, o.useStateFromStores)([f.default], () => f.default.hasSearchError()), W = (e, t, n) => {
    d.doAlgoliaSearch(l, {
      categoryId: n ? S.DISCOVERY_ALL_CATEGORIES_ID : P,
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
  let z = P === S.DISCOVERY_ALL_CATEGORIES_ID ? I.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: l
  }) : I.default.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
    count: null != w ? w.toLocaleString() : "0",
    query: l,
    category: M
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
        "aria-label": I.default.Messages.BACK,
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
      isFetchingSearch: v,
      defaultLanguage: r,
      placeholder: b,
      availableLanguages: c,
      isSearchPage: !0,
      currentCategoryId: P,
      isTagSearch: H
    }), Y ? (0, a.jsx)(N, {}) : w <= 0 ? (0, a.jsx)(A, {
      categoryId: P,
      categoryName: M,
      onClick: () => {
        d.selectCategory(S.DISCOVERY_ALL_CATEGORIES_ID), W(0, T, !0)
      }
    }) : (0, a.jsx)("div", {
      className: p.results,
      children: (0, a.jsx)(_.default, {
        pageSize: T,
        totalCount: w,
        resetCurrentPage: k,
        onPageChange: e => {
          W((e - 1) * T, T), K()
        },
        children: e => {
          let {
            controller: t
          } = e;
          return (0, a.jsxs)("section", {
            "aria-labelledby": U,
            children: [(0, a.jsx)(m.default, {
              guilds: j,
              loading: G,
              loadingPlaceholderCount: T,
              onViewGuild: y,
              loadingGuildId: R,
              theme: L,
              analyticsContext: h.AnalyticsContexts.SEARCH,
              onGuildCardSeen: D,
              onTagClick: x
            }), t]
          })
        }
      })
    })]
  })
}