"use strict";
n.r(t), n.d(t, {
  default: function() {
    return q
  }
}), n("390547"), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("803997"),
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
  S = n("252618"),
  I = n("440190"),
  p = n("5955"),
  T = n("703656"),
  g = n("108427"),
  A = n("706454"),
  N = n("210887"),
  v = n("480294"),
  O = n("683301"),
  R = n("430824"),
  L = n("230307"),
  P = n("502568"),
  M = n("900849"),
  y = n("879484"),
  D = n("117496"),
  b = n("296386"),
  x = n("150192"),
  U = n("584885"),
  j = n("59222"),
  G = n("749436"),
  w = n("26580"),
  k = n("731455"),
  F = n("981631"),
  B = n("689938"),
  H = n("613776"),
  V = n("368179"),
  Y = n("52518");

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class K extends s.PureComponent {
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
        (0, m.markView)(F.ViewHistoryKeys.SERVER_DISCOVERY_BADGE)
      }), !a && 0 === o.length && M.trackDiscoveryViewed({
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
          approximate_member_count: M.MINIMUM_MEMBER_COUNT
        },
        length: parseInt(n, 10)
      })
    } else null != r && r !== k.DISCOVERY_ALL_CATEGORIES_ID && h.default.wait(() => (0, _.selectCategory)(r));
    let d = null !== (t = null === (e = (0, T.getHistory)().location.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0;
    d > 0 && (null === (n = this._scroller.current) || void 0 === n || n.scrollTo({
      to: d
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
    if (e.isFetching && !a && M.trackDiscoveryViewed({
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
    e.currentCategoryId !== i && M.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen)), e.mostRecentQuery.length > 0 && s.length < 1 && l !== i && (0, _.selectCategory)(l)
  }
  componentWillUnmount() {
    let {
      currentCategoryId: e,
      recommendationsLoadId: t,
      recommendationsGuilds: n
    } = this.props;
    e === k.DISCOVERY_ALL_CATEGORIES_ID ? null != n && null != t && M.trackDiscoveryExited(t, this.getOrderedGuildIdsSeen(n.map(e => e.id)), "Game Recommendations") : M.trackDiscoveryExited(this.loadId, Array.from(this._guildIdsSeen))
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
      analyticsContext: M.AnalyticsContexts.RECOMMENDED,
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
    return (0, a.jsx)(G.default, {
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
    return (0, a.jsx)(j.default, {
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
      onTagClick: (e, t) => this.handleTagSearch(e, t, M.AnalyticsContexts.SEARCH)
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
      analyticsContext: M.AnalyticsContexts.POPULAR,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: () => (0, _.fetchFeaturedOrPopularGuilds)(0, 30),
      loadingGuildId: n,
      theme: t,
      onTagClick: (e, t) => this.handleTagSearch(e, t, M.AnalyticsContexts.POPULAR)
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
      analyticsContext: M.AnalyticsContexts.POPULAR,
      onViewGuild: this.handleViewGuild,
      onGuildCardSeen: this.handleGuildCardSeen,
      fetchGuilds: () => (0, _.fetchPopularGuildsForCategory)(n),
      currentCategoryId: n,
      theme: t,
      onTagClick: (e, t) => this.handleTagSearch(e, t, M.AnalyticsContexts.POPULAR)
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
      children: [(0, a.jsx)(S.AppPageTitle, {
        subsection: d ? l : void 0,
        location: _
      }), (0, a.jsx)("div", {
        className: i()(H.dragRegion, H.pageHeaderDrag, {
          [H.searchPageDrag]: d
        })
      }), c.isMobile && (0, a.jsx)(P.default, {
        children: (0, a.jsx)(s.Fragment, {})
      }), (0, a.jsx)(E.AdvancedScrollerAuto, {
        className: H.scroller,
        ref: this._scroller,
        onScroll: this.handleScroll,
        children: (0, a.jsx)("div", {
          className: i()(H.viewWrapper, {
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
                    section: M.AnalyticsContexts.HEADER,
                    className: H.headerTagContainer,
                    discoveryTagStyle: w.DiscoveryTagStyle.LIGHT,
                    onTagClick: e => this.handleTagSearch(e, void 0, M.AnalyticsContexts.HEADER),
                    tags: o().chain(h).flatMap(e => e.keywords).compact().uniq().sampleSize(10).value()
                  })]
                })
              })]
            }),
            children: [(0, a.jsx)("div", {
              className: H.__invalid_featuredBody,
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
    super(...e), W(this, "_scroller", s.createRef()), W(this, "_guildIdsSeen", new Set), W(this, "loadId", (0, D.makeAnalyticsID)()), W(this, "state", {
      animatedValue: new d.default.Value(0),
      loadingGuildId: null
    }), W(this, "scrollToTop", () => {
      null != this._scroller.current && this._scroller.current.scrollTo({
        to: 0
      })
    }), W(this, "handleScroll", () => {
      var e, t;
      let {
        animatedValue: n
      } = this.state, a = null !== (t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) && void 0 !== t ? t : 0;
      n.setValue(Math.min(1, a / 200))
    }), W(this, "handleViewGuild", async (e, t, n, a) => {
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
        await M.viewGuild({
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
    }), W(this, "handleGuildCardSeen", e => {
      this._guildIdsSeen.add(e)
    }), W(this, "handleTagSearch", (e, t, n) => {
      let {
        currentCategoryId: a,
        defaultLanguage: s
      } = this.props;
      if (null == a) return;
      let l = {
        approximate_member_count: M.MINIMUM_MEMBER_COUNT
      };
      (0, _.getSearchResultsCount)(e, l), (0, _.doAlgoliaSearch)(e, {
        filters: l,
        categoryId: a,
        preferredLocale: s.code,
        offset: 0,
        length: j.MAX_GUILDS_PER_PAGE,
        tag: !0
      }), M.trackTagSearchStarted(this.loadId, a, n, t), this.scrollToTop()
    })
  }
}
let z = f.default.connectStores([N.default, A.default, L.default, v.default, O.default, x.default, R.default], () => {
  var e;
  let t = k.LANGUAGE_OPTIONS,
    n = A.default.locale,
    a = null !== (e = o().find(t, {
      code: n
    })) && void 0 !== e ? e : t[0],
    s = Object.keys(L.default.applicationStatistics),
    l = v.default.hasConsented(F.Consents.PERSONALIZATION) && s.length > 0,
    i = O.default.getCurrentCategoryId(),
    r = O.default.getCurrentHomepageCategoryId();
  return {
    isFetching: O.default.isFetching(),
    isFetchingSearch: O.default.isFetchingSearch(),
    guilds: O.default.getDiscoverableGuilds(),
    mostRecentQuery: O.default.getMostRecentQuery(),
    currentCategoryId: i,
    currentHomepageCategoryId: r,
    currentCategoryName: x.default.getCategoryName(i),
    categories: x.default.getDiscoveryCategories(),
    userGuilds: R.default.getGuilds(),
    theme: N.default.theme,
    mightHaveGamesYouPlay: l,
    availableLanguages: t,
    defaultLanguage: a
  }
})(K);

function q(e) {
  let {
    fetching: t,
    loadId: n,
    recommendedGuilds: s
  } = (0, f.useStateFromStoresObject)([I.default], () => ({
    recommendedGuilds: I.default.getRecommendedGuilds(),
    loadId: I.default.getLoadId(),
    fetching: I.default.isFetching()
  }));
  return (0, a.jsx)(z, {
    ...e,
    fetchingRecommendations: t,
    usingGameRecommendations: !1,
    recommendationsGuilds: s,
    recommendationsLoadId: n
  })
}