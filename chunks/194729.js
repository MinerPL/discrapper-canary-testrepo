"use strict";
n.r(t), n("390547"), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("392711"),
  o = n.n(r),
  u = n("664751"),
  d = n("748780"),
  c = n("873546"),
  f = n("442837"),
  E = n("481060"),
  h = n("570140"),
  _ = n("212093"),
  C = n("827837"),
  m = n("785570"),
  S = n("963202"),
  p = n("252618"),
  g = n("440190"),
  I = n("5955"),
  T = n("703656"),
  A = n("108427"),
  N = n("706454"),
  v = n("210887"),
  R = n("480294"),
  O = n("683301"),
  L = n("430824"),
  M = n("230307"),
  y = n("502568"),
  P = n("900849"),
  x = n("879484"),
  D = n("117496"),
  b = n("296386"),
  U = n("150192"),
  j = n("769727"),
  G = n("584885"),
  k = n("59222"),
  w = n("749436"),
  B = n("26580"),
  F = n("878241"),
  H = n("731455"),
  V = n("981631"),
  Y = n("689938"),
  W = n("59415"),
  K = n("368179"),
  z = n("52518");

function q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class Q extends s.PureComponent {
  componentDidMount() {
    var e, t, n;
    let {
      isFetching: a,
      guilds: {
        gamesYouPlay: s,
        featured: l
      },
      searchRoute: i,
      currentHomepageCategoryId: r,
      mostRecentQuery: o
    } = this.props;
    if ((0, C.fetchActivityStatistics)(), (0, b.maybeFetchGuildDiscoveryCategories)(), null == O.default.getSearchIndex() && (0, _.createAlgoliaIndex)(), h.default.wait(() => {
        (0, m.markView)(V.ViewHistoryKeys.SERVER_DISCOVERY_BADGE)
      }), !a && 0 === o.length && P.trackDiscoveryViewed({
        loadId: this.loadId,
        gamesYouPlayGuilds: s.guilds,
        allGuilds: l.guilds,
        categoryId: r
      }), null != i) {
      let {
        query: e,
        offset: t,
        limit: n,
        preferredLocale: a,
        categoryId: s
      } = u.parse(i);
      (0, _.doAlgoliaSearch)(e, {
        categoryId: parseInt(s, 10),
        preferredLocale: a,
        offset: parseInt(t, 10),
        filters: {
          approximate_member_count: P.MINIMUM_MEMBER_COUNT
        },
        length: parseInt(n, 10)
      })
    } else null != r && r !== H.DISCOVERY_ALL_CATEGORIES_ID && h.default.wait(() => (0, _.selectCategory)(r));
    let d = null !== (t = null === (e = (0, T.getHistory)().location.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0;
    d > 0 && (null === (n = this._scroller.current) || void 0 === n || n.scrollTo({
      to: d
    })), (0, A.trackAppUIViewed)("guild_discovery")
  }
  componentDidUpdate(e) {
    let {
      guilds: {
        gamesYouPlay: t,
        featured: n
      },
      isFetching: a,
      mostRecentQuery: s,
      currentHomepageCategoryId: l,
      currentCategoryId: i
    } = this.props;
    if (e.isFetching && !a && P.trackDiscoveryViewed({
        loadId: this.loadId,
        gamesYouPlayGuilds: t.guilds,
        allGuilds: n.guilds,
        categoryId: l
      }), e.currentCategoryId !== i) {
      var r;
      null === (r = this._scroller.current) || void 0 === r || r.scrollTo({
        to: 0
      })
    }
    e.currentCategoryId !== i && P.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen)), e.mostRecentQuery.length > 0 && s.length < 1 && l !== i && (0, _.selectCategory)(l)
  }
  componentWillUnmount() {
    let {
      currentCategoryId: e,
      recommendationsLoadId: t,
      recommendationsGuilds: n
    } = this.props;
    e === H.DISCOVERY_ALL_CATEGORIES_ID ? null != n && null != t && P.trackDiscoveryExited(t, this.getOrderedGuildIdsSeen(n.map(e => e.id)), "Game Recommendations") : P.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen))
  }
  getOrderedGuildIdsSeen(e) {
    return e.filter(e => this._guildIdsSeen.has(e))
  }
  renderGamesYouPlay() {
    let {
      guilds: e,
      mightHaveGamesYouPlay: t,
      theme: n,
      userGuilds: s
    } = this.props, l = Object.keys(s), i = e[V.GuildDiscoverySections.GAMES_YOU_PLAY];
    i.guilds = i.guilds.filter(e => !l.includes(e.id));
    let {
      loadingGuildId: r
    } = this.state;
    return t ? (0, a.jsx)(G.default, {
      loadId: this.loadId,
      title: Y.default.Messages.GUILD_DISCOVERY_HEADER_GAMES_YOU_PLAY,
      guildsData: i,
      loadingGuildId: r,
      analyticsContext: P.AnalyticsContexts.RECOMMENDED,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: _.fetchGamesYouPlayGuilds,
      theme: n
    }) : null
  }
  renderSearchBar() {
    var e, t;
    let {
      mostRecentQuery: n,
      guilds: {
        search: s
      },
      defaultLanguage: l,
      isFetchingSearch: i,
      currentCategoryId: r,
      categories: o,
      currentCategoryName: u
    } = this.props;
    x.DiscoveryTagsExperiment.trackExposure({
      location: "54961b_1"
    });
    let {
      shouldDisplayRecommendedSearchTags: d
    } = x.DiscoveryTagsExperiment.getCurrentConfig({
      location: "54961b_2"
    }, {
      autoTrackExposure: !1
    }), c = d ? r === H.DISCOVERY_ALL_CATEGORIES_ID ? Y.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS : Y.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS.format({
      categoryName: u
    }) : r === H.DISCOVERY_ALL_CATEGORIES_ID ? Y.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : Y.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
      categoryName: u
    }), f = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[r]) && void 0 !== t ? t : O.EMPTY_DISCOVERABLE_GUILDS_SECTION;
    return (0, a.jsx)(w.default, {
      loadId: this.loadId,
      searchResults: f,
      mostRecentQuery: n,
      isFetchingSearch: i,
      defaultLanguage: l,
      placeholder: c,
      currentCategoryId: r,
      categories: o
    })
  }
  renderSearchResults() {
    var e, t;
    let {
      mostRecentQuery: n,
      guilds: {
        search: s
      },
      availableLanguages: l,
      defaultLanguage: i,
      isFetchingSearch: r,
      theme: o,
      currentCategoryId: u,
      currentCategoryName: d
    } = this.props, {
      loadingGuildId: c
    } = this.state, f = u === H.DISCOVERY_ALL_CATEGORIES_ID ? Y.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : Y.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
      categoryName: d
    }), E = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[u]) && void 0 !== t ? t : O.EMPTY_DISCOVERABLE_GUILDS_SECTION;
    return (0, a.jsx)(k.default, {
      loadId: this.loadId,
      availableLanguages: l,
      defaultLanguage: i,
      placeholder: f,
      isFetchingSearch: r,
      searchResults: E,
      mostRecentQuery: n,
      loadingGuildId: c,
      currentCategoryId: u,
      currentCategoryName: d,
      scroller: this._scroller.current,
      theme: o,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      onTagClick: (e, t) => this.handleTagSearch(e, t, P.AnalyticsContexts.SEARCH)
    })
  }
  renderRecommendedGuildsSection() {
    let {
      guilds: e,
      theme: t
    } = this.props, {
      loadingGuildId: n
    } = this.state;
    return (0, a.jsx)(G.default, {
      loadId: this.loadId,
      title: Y.default.Messages.GUILD_DISCOVERY_FEATURED_HEADER,
      guildsData: e.featured,
      analyticsContext: P.AnalyticsContexts.POPULAR,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: () => (0, _.fetchFeaturedOrPopularGuilds)(0, 30),
      loadingGuildId: n,
      theme: t,
      onTagClick: (e, t) => this.handleTagSearch(e, t, P.AnalyticsContexts.POPULAR)
    })
  }
  renderPopularGuildsSection() {
    let {
      guilds: e,
      theme: t,
      currentCategoryId: n
    } = this.props, {
      loadingGuildId: s
    } = this.state;
    return (0, a.jsx)(G.default, {
      loadId: this.loadId,
      title: Y.default.Messages.GUILD_DISCOVERY_POPULAR_HEADER,
      guildsData: e[n],
      loadingGuildId: s,
      analyticsContext: P.AnalyticsContexts.POPULAR,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: () => (0, _.fetchPopularGuildsForCategory)(n),
      currentCategoryId: n,
      theme: t,
      onTagClick: (e, t) => this.handleTagSearch(e, t, P.AnalyticsContexts.POPULAR)
    })
  }
  render() {
    var e, t;
    let {
      currentCategoryName: n,
      mostRecentQuery: l,
      currentCategoryId: r,
      guilds: u
    } = this.props, d = l.length > 0;
    x.DiscoveryTagsExperiment.trackExposure({
      location: "54961b_3"
    });
    let {
      shouldDisplayRecommendedSearchTags: f
    } = x.DiscoveryTagsExperiment.getCurrentConfig({
      location: "54961b_4"
    }, {
      autoTrackExposure: !1
    }), h = r === H.DISCOVERY_ALL_CATEGORIES_ID ? null === (e = u[V.GuildDiscoverySections.FEATURED]) || void 0 === e ? void 0 : e.guilds : null === (t = u[r]) || void 0 === t ? void 0 : t.guilds;
    if (r === H.DISCORD_HUB_ID) return (0, a.jsx)(I.default, {
      loadId: this.loadId
    });
    let _ = r === H.DISCOVERY_ALL_CATEGORIES_ID ? Y.default.Messages.GUILD_DISCOVERY_HOME_TITLE : Y.default.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
      categoryName: n
    });
    return (0, a.jsxs)("div", {
      className: W.pageWrapper,
      children: [(0, a.jsx)(p.AppPageTitle, {
        subsection: d ? l : void 0,
        location: _
      }), (0, a.jsx)("div", {
        className: i()(W.dragRegion, W.pageHeaderDrag, {
          [W.searchPageDrag]: d
        })
      }), c.isMobile && (0, a.jsx)(y.default, {
        children: (0, a.jsx)(s.Fragment, {})
      }), (0, a.jsx)(E.AdvancedScrollerAuto, {
        className: W.scroller,
        ref: this._scroller,
        onScroll: this.handleScroll,
        children: (0, a.jsx)("div", {
          className: i()(W.viewWrapper, {
            [W.searchPage]: d
          }),
          children: d ? this.renderSearchResults() : (0, a.jsxs)(E.HeadingLevel, {
            forceLevel: 1,
            component: (0, a.jsxs)("div", {
              className: W.searchHeader,
              children: [(0, a.jsx)("img", {
                alt: "",
                className: W.headerImage,
                src: z
              }), (0, a.jsx)("div", {
                className: W.headerContentWrapper,
                children: (0, a.jsxs)("div", {
                  className: W.headerContent,
                  children: [(0, a.jsx)(E.Heading, {
                    variant: "heading-xl/semibold",
                    className: W.searchTitle,
                    children: r === H.DISCOVERY_ALL_CATEGORIES_ID ? Y.default.Messages.GUILD_DISCOVERY_HOME_TITLE : Y.default.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
                      categoryName: n
                    })
                  }), (0, a.jsx)(E.Text, {
                    variant: "text-md/normal",
                    className: W.searchSubtitle,
                    children: r === H.DISCOVERY_ALL_CATEGORIES_ID && Y.default.Messages.GUILD_DISCOVERY_HOME_SUBTITLE
                  }), this.renderSearchBar(), f && (0, a.jsx)(B.DiscoveryTags, {
                    hideOverflow: !0,
                    section: P.AnalyticsContexts.HEADER,
                    className: W.headerTagContainer,
                    discoveryTagStyle: B.DiscoveryTagStyle.LIGHT,
                    onTagClick: e => this.handleTagSearch(e, void 0, P.AnalyticsContexts.HEADER),
                    tags: o().chain(h).flatMap(e => e.keywords).compact().uniq().sampleSize(10).value()
                  })]
                })
              })]
            }),
            children: [(0, a.jsx)("div", {
              className: W.__invalid_featuredBody,
              children: r === H.DISCOVERY_ALL_CATEGORIES_ID ? this.renderRecommendedGuildsSection() : this.renderPopularGuildsSection()
            }), (0, a.jsxs)("div", {
              className: W.footer,
              children: [(0, a.jsx)("img", {
                alt: "",
                src: K,
                className: W.footerImage
              }), (0, a.jsx)(E.Heading, {
                variant: "heading-md/semibold",
                children: Y.default.Messages.GUILD_DISCOVERY_CATEGORY_FOOTER_TITLE
              }), (0, a.jsx)(E.Button, {
                look: E.Button.Looks.LINK,
                color: E.Button.Colors.LINK,
                size: E.Button.Sizes.MIN,
                onClick: this.scrollToTop,
                children: Y.default.Messages.GUILD_DISCOVERY_FOOTER_BODY
              })]
            })]
          })
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), q(this, "_scroller", s.createRef()), q(this, "_guildIdsSeen", new Set), q(this, "loadId", (0, D.makeAnalyticsID)()), q(this, "state", {
      animatedValue: new d.default.Value(0),
      loadingGuildId: null
    }), q(this, "scrollToTop", () => {
      null != this._scroller.current && this._scroller.current.scrollTo({
        to: 0
      })
    }), q(this, "handleScroll", () => {
      var e, t;
      let {
        animatedValue: n
      } = this.state, a = null !== (t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) && void 0 !== t ? t : 0;
      n.setValue(Math.min(1, a / 200))
    }), q(this, "handleViewGuild", async (e, t, n, a) => {
      var s, l;
      let {
        currentCategoryId: i
      } = this.props, {
        loadingGuildId: r
      } = this.state;
      if (e === r) return;
      let o = null !== (l = null === (s = this._scroller.current) || void 0 === s ? void 0 : s.getScrollerState().scrollTop) && void 0 !== l ? l : 0,
        {
          location: u
        } = (0, T.getHistory)();
      (0, T.replaceWith)({
        ...u,
        state: o
      }), this.setState({
        loadingGuildId: e
      });
      let d = i !== H.DISCOVERY_ALL_CATEGORIES_ID ? i : null;
      try {
        await P.viewGuild({
          loadId: null != a ? a : this.loadId,
          guildId: e,
          index: t,
          analyticsContext: n,
          categoryId: d
        })
      } catch (e) {
        this.setState({
          loadingGuildId: null
        })
      }
    }), q(this, "handleGuildCardSeen", e => {
      this._guildIdsSeen.add(e)
    }), q(this, "handleTagSearch", (e, t, n) => {
      let {
        currentCategoryId: a,
        defaultLanguage: s
      } = this.props;
      if (null == a) return;
      let l = {
        approximate_member_count: P.MINIMUM_MEMBER_COUNT
      };
      (0, _.getSearchResultsCount)(e, l), (0, _.doAlgoliaSearch)(e, {
        filters: l,
        categoryId: a,
        preferredLocale: s.code,
        offset: 0,
        length: k.MAX_GUILDS_PER_PAGE,
        tag: !0
      }), P.trackTagSearchStarted(this.loadId, a, n, t), this.scrollToTop()
    })
  }
}
let Z = f.default.connectStores([v.default, N.default, M.default, R.default, O.default, U.default, L.default], () => {
  var e;
  let t = H.LANGUAGE_OPTIONS,
    n = N.default.locale,
    a = null !== (e = o().find(t, {
      code: n
    })) && void 0 !== e ? e : t[0],
    s = Object.keys(M.default.applicationStatistics),
    l = R.default.hasConsented(V.Consents.PERSONALIZATION) && s.length > 0,
    i = O.default.getCurrentCategoryId(),
    r = O.default.getCurrentHomepageCategoryId();
  return {
    isFetching: O.default.isFetching(),
    isFetchingSearch: O.default.isFetchingSearch(),
    guilds: O.default.getDiscoverableGuilds(),
    mostRecentQuery: O.default.getMostRecentQuery(),
    currentCategoryId: i,
    currentHomepageCategoryId: r,
    currentCategoryName: U.default.getCategoryName(i),
    categories: U.default.getDiscoveryCategories(),
    userGuilds: L.default.getGuilds(),
    theme: v.default.theme,
    mightHaveGamesYouPlay: l,
    availableLanguages: t,
    defaultLanguage: a
  }
})(Q);

function X(e) {
  let {
    searchRoute: t
  } = e, {
    fetching: n,
    loadId: s,
    recommendedGuilds: l
  } = (0, f.useStateFromStoresObject)([g.default], () => ({
    recommendedGuilds: g.default.getRecommendedGuilds(),
    loadId: g.default.getLoadId(),
    fetching: g.default.isFetching()
  }));
  return (0, a.jsx)(Z, {
    searchRoute: t,
    fetchingRecommendations: n,
    usingGameRecommendations: !1,
    recommendationsGuilds: l,
    recommendationsLoadId: s
  })
}
t.default = function(e) {
  let {
    searchRoute: t
  } = e, n = (0, F.useGuildsEligibleForClan)({
    location: "guild_discovery"
  }).length > 0, {
    clanDiscoveryEnabled: s
  } = (0, S.useClanPilotExperiment)("guild_discovery"), l = (0, f.useStateFromStores)([O.default], () => O.default.getCurrentCategoryId()), i = (0, f.useStateFromStores)([O.default], () => O.default.getIsReady());
  return (n || s) && (!i || l === H.CategoryId.Clans) ? (0, a.jsx)(j.default, {}) : (0, a.jsx)(X, {
    searchRoute: t
  })
}