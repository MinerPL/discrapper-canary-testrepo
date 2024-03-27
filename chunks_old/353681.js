"use strict";
n.r(t), n.d(t, {
  default: function() {
    return z
  }
}), n("881410"), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("917351"),
  o = n.n(r),
  u = n("522632"),
  d = n("458960"),
  c = n("394846"),
  f = n("446674"),
  E = n("77078"),
  h = n("913144"),
  _ = n("340626"),
  C = n("444949"),
  S = n("139245"),
  I = n("69927"),
  m = n("444497"),
  p = n("349682"),
  T = n("393414"),
  g = n("970366"),
  A = n("915639"),
  N = n("161778"),
  R = n("350522"),
  O = n("926787"),
  v = n("305961"),
  L = n("251013"),
  M = n("664336"),
  P = n("794818"),
  y = n("574921"),
  D = n("197231"),
  x = n("283167"),
  b = n("868246"),
  U = n("276580"),
  G = n("586086"),
  j = n("338638"),
  w = n("311092"),
  k = n("447621"),
  F = n("49111"),
  B = n("782340"),
  H = n("343691"),
  V = n("479999"),
  Y = n("183127");
class W extends s.PureComponent {
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
    if ((0, C.fetchActivityStatistics)(), (0, x.maybeFetchGuildDiscoveryCategories)(), null == O.default.getSearchIndex() && (0, _.createAlgoliaIndex)(), h.default.wait(() => {
        (0, S.markView)(F.ViewHistoryKeys.SERVER_DISCOVERY_BADGE)
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
    } else null != r && r !== k.DISCOVERY_ALL_CATEGORIES_ID && h.default.wait(() => (0, _.selectCategory)(r));
    let d = (0, T.getHistory)().location,
      c = null !== (t = null === (e = d.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0;
    c > 0 && (null === (n = this._scroller.current) || void 0 === n || n.scrollTo({
      to: c
    })), (0, g.trackAppUIViewed)("guild_discovery")
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
    e === k.DISCOVERY_ALL_CATEGORIES_ID ? null != n && null != t && P.trackDiscoveryExited(t, this.getOrderedGuildIdsSeen(n.map(e => e.id)), "Game Recommendations") : P.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen))
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
    } = this.props, l = Object.keys(s), i = e[F.GuildDiscoverySections.GAMES_YOU_PLAY];
    i.guilds = i.guilds.filter(e => !l.includes(e.id));
    let {
      loadingGuildId: r
    } = this.state;
    return t ? (0, a.jsx)(U.default, {
      loadId: this.loadId,
      title: B.default.Messages.GUILD_DISCOVERY_HEADER_GAMES_YOU_PLAY,
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
    y.DiscoveryTagsExperiment.trackExposure({
      location: "54961b_1"
    });
    let {
      shouldDisplayRecommendedSearchTags: d
    } = y.DiscoveryTagsExperiment.getCurrentConfig({
      location: "54961b_2"
    }, {
      autoTrackExposure: !1
    }), c = d ? r === k.DISCOVERY_ALL_CATEGORIES_ID ? B.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS : B.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS.format({
      categoryName: u
    }) : r === k.DISCOVERY_ALL_CATEGORIES_ID ? B.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : B.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
      categoryName: u
    }), f = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[r]) && void 0 !== t ? t : O.EMPTY_DISCOVERABLE_GUILDS_SECTION;
    return (0, a.jsx)(j.default, {
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
    } = this.state, f = u === k.DISCOVERY_ALL_CATEGORIES_ID ? B.default.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : B.default.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
      categoryName: d
    }), E = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[u]) && void 0 !== t ? t : O.EMPTY_DISCOVERABLE_GUILDS_SECTION;
    return (0, a.jsx)(G.default, {
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
    return (0, a.jsx)(U.default, {
      loadId: this.loadId,
      title: B.default.Messages.GUILD_DISCOVERY_FEATURED_HEADER,
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
    return (0, a.jsx)(U.default, {
      loadId: this.loadId,
      title: B.default.Messages.GUILD_DISCOVERY_POPULAR_HEADER,
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
    y.DiscoveryTagsExperiment.trackExposure({
      location: "54961b_3"
    });
    let {
      shouldDisplayRecommendedSearchTags: f
    } = y.DiscoveryTagsExperiment.getCurrentConfig({
      location: "54961b_4"
    }, {
      autoTrackExposure: !1
    }), h = r === k.DISCOVERY_ALL_CATEGORIES_ID ? null === (e = u[F.GuildDiscoverySections.FEATURED]) || void 0 === e ? void 0 : e.guilds : null === (t = u[r]) || void 0 === t ? void 0 : t.guilds;
    if (r === k.DISCORD_HUB_ID) return (0, a.jsx)(p.default, {
      loadId: this.loadId
    });
    let _ = r === k.DISCOVERY_ALL_CATEGORIES_ID ? B.default.Messages.GUILD_DISCOVERY_HOME_TITLE : B.default.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
      categoryName: n
    });
    return (0, a.jsxs)("div", {
      className: H.pageWrapper,
      children: [(0, a.jsx)(I.AppPageTitle, {
        subsection: d ? l : void 0,
        location: _
      }), (0, a.jsx)("div", {
        className: i(H.dragRegion, H.pageHeaderDrag, {
          [H.searchPageDrag]: d
        })
      }), c.isMobile && (0, a.jsx)(M.default, {
        children: (0, a.jsx)(s.Fragment, {})
      }), (0, a.jsx)(E.AdvancedScrollerAuto, {
        className: H.scroller,
        ref: this._scroller,
        onScroll: this.handleScroll,
        children: (0, a.jsx)("div", {
          className: i(H.viewWrapper, {
            [H.searchPage]: d
          }),
          children: d ? this.renderSearchResults() : (0, a.jsxs)(E.HeadingLevel, {
            forceLevel: 1,
            component: (0, a.jsxs)("div", {
              className: H.searchHeader,
              children: [(0, a.jsx)("img", {
                alt: "",
                className: H.headerImage,
                src: Y
              }), (0, a.jsx)("div", {
                className: H.headerContentWrapper,
                children: (0, a.jsxs)("div", {
                  className: H.headerContent,
                  children: [(0, a.jsx)(E.Heading, {
                    variant: "heading-xl/semibold",
                    className: H.searchTitle,
                    children: r === k.DISCOVERY_ALL_CATEGORIES_ID ? B.default.Messages.GUILD_DISCOVERY_HOME_TITLE : B.default.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
                      categoryName: n
                    })
                  }), (0, a.jsx)(E.Text, {
                    variant: "text-md/normal",
                    className: H.searchSubtitle,
                    children: r === k.DISCOVERY_ALL_CATEGORIES_ID && B.default.Messages.GUILD_DISCOVERY_HOME_SUBTITLE
                  }), this.renderSearchBar(), f && (0, a.jsx)(w.DiscoveryTags, {
                    hideOverflow: !0,
                    section: P.AnalyticsContexts.HEADER,
                    className: H.headerTagContainer,
                    discoveryTagStyle: w.DiscoveryTagStyle.LIGHT,
                    onTagClick: e => this.handleTagSearch(e, void 0, P.AnalyticsContexts.HEADER),
                    tags: o.chain(h).flatMap(e => e.keywords).compact().uniq().sampleSize(10).value()
                  })]
                })
              })]
            }),
            children: [(0, a.jsx)("div", {
              className: H.featuredBody,
              children: r === k.DISCOVERY_ALL_CATEGORIES_ID ? this.renderRecommendedGuildsSection() : this.renderPopularGuildsSection()
            }), (0, a.jsxs)("div", {
              className: H.footer,
              children: [(0, a.jsx)("img", {
                alt: "",
                src: V,
                className: H.footerImage
              }), (0, a.jsx)(E.Heading, {
                variant: "heading-md/semibold",
                children: B.default.Messages.GUILD_DISCOVERY_CATEGORY_FOOTER_TITLE
              }), (0, a.jsx)(E.Button, {
                look: E.Button.Looks.LINK,
                color: E.Button.Colors.LINK,
                size: E.Button.Sizes.MIN,
                onClick: this.scrollToTop,
                children: B.default.Messages.GUILD_DISCOVERY_FOOTER_BODY
              })]
            })]
          })
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), this._scroller = s.createRef(), this._guildIdsSeen = new Set, this.loadId = (0, D.makeAnalyticsID)(), this.state = {
      animatedValue: new d.default.Value(0),
      loadingGuildId: null
    }, this.scrollToTop = () => {
      null != this._scroller.current && this._scroller.current.scrollTo({
        to: 0
      })
    }, this.handleScroll = () => {
      var e, t;
      let {
        animatedValue: n
      } = this.state, a = null !== (t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) && void 0 !== t ? t : 0;
      n.setValue(Math.min(1, a / 200))
    }, this.handleViewGuild = async (e, t, n, a) => {
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
      let d = i !== k.DISCOVERY_ALL_CATEGORIES_ID ? i : null;
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
    }, this.handleGuildCardSeen = e => {
      this._guildIdsSeen.add(e)
    }, this.handleTagSearch = (e, t, n) => {
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
        length: G.MAX_GUILDS_PER_PAGE,
        tag: !0
      }), P.trackTagSearchStarted(this.loadId, a, n, t), this.scrollToTop()
    }
  }
}
let K = f.default.connectStores([N.default, A.default, L.default, R.default, O.default, b.default, v.default], () => {
  var e;
  let t = k.LANGUAGE_OPTIONS,
    n = A.default.locale,
    a = null !== (e = o.find(t, {
      code: n
    })) && void 0 !== e ? e : t[0],
    s = L.default.applicationStatistics,
    l = Object.keys(s),
    i = R.default.hasConsented(F.Consents.PERSONALIZATION) && l.length > 0,
    r = O.default.getCurrentCategoryId(),
    u = O.default.getCurrentHomepageCategoryId();
  return {
    isFetching: O.default.isFetching(),
    isFetchingSearch: O.default.isFetchingSearch(),
    guilds: O.default.getDiscoverableGuilds(),
    mostRecentQuery: O.default.getMostRecentQuery(),
    currentCategoryId: r,
    currentHomepageCategoryId: u,
    currentCategoryName: b.default.getCategoryName(r),
    categories: b.default.getDiscoveryCategories(),
    userGuilds: v.default.getGuilds(),
    theme: N.default.theme,
    mightHaveGamesYouPlay: i,
    availableLanguages: t,
    defaultLanguage: a
  }
})(W);

function z(e) {
  let {
    fetching: t,
    loadId: n,
    recommendedGuilds: s
  } = (0, f.useStateFromStoresObject)([m.default], () => ({
    recommendedGuilds: m.default.getRecommendedGuilds(),
    loadId: m.default.getLoadId(),
    fetching: m.default.isFetching()
  }));
  return (0, a.jsx)(K, {
    ...e,
    fetchingRecommendations: t,
    usingGameRecommendations: !1,
    recommendationsGuilds: s,
    recommendationsLoadId: n
  })
}