n(390547), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(392711),
  o = n.n(l),
  c = n(664751),
  d = n(748780),
  u = n(873546),
  _ = n(442837),
  h = n(481060),
  E = n(570140),
  I = n(212093),
  m = n(827837),
  g = n(785570),
  p = n(100527),
  T = n(963202),
  S = n(252618),
  C = n(440190),
  f = n(665149),
  N = n(5955),
  A = n(121711),
  Z = n(709158),
  L = n(703656),
  v = n(108427),
  O = n(706454),
  R = n(210887),
  x = n(480294),
  b = n(683301),
  P = n(430824),
  M = n(230307),
  D = n(900849),
  y = n(879484),
  j = n(117496),
  U = n(296386),
  G = n(150192),
  k = n(769727),
  w = n(584885),
  B = n(59222),
  H = n(749436),
  V = n(26580),
  F = n(731455),
  Y = n(981631),
  W = n(689938),
  z = n(468918),
  K = n(368179),
  q = n(52518);

function Q(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class X extends s.PureComponent {
  componentDidMount() {
var e, t, n;
let {
  isFetching: i,
  guilds: {
    gamesYouPlay: s,
    featured: a
  },
  searchRoute: r,
  currentHomepageCategoryId: l,
  mostRecentQuery: o
} = this.props;
if ((0, m.N)(), (0, U.le)(), null == b.ZP.getSearchIndex() && (0, I.Ue)(), E.Z.wait(() => {
    (0, g.M)(Y.x8Z.SERVER_DISCOVERY_BADGE);
  }), !i && 0 === o.length && D.Zt({
    loadId: this.loadId,
    gamesYouPlayGuilds: s.guilds,
    allGuilds: a.guilds,
    categoryId: l
  }), null != r) {
  let {
    query: e,
    offset: t,
    limit: n,
    preferredLocale: i,
    categoryId: s
  } = c.parse(r);
  (0, I.bR)(e, {
    categoryId: parseInt(s, 10),
    preferredLocale: i,
    offset: parseInt(t, 10),
    filters: {
      approximate_member_count: D.sq
    },
    length: parseInt(n, 10)
  });
} else
  null != l && l !== F.Hk && E.Z.wait(() => (0, I.uY)(l));
let d = null !== (t = null === (e = (0, L.s1)().location.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0;
d > 0 && (null === (n = this._scroller.current) || void 0 === n || n.scrollTo({
  to: d
})), (0, v.e)('guild_discovery');
  }
  componentDidUpdate(e) {
let {
  guilds: {
    gamesYouPlay: t,
    featured: n
  },
  isFetching: i,
  mostRecentQuery: s,
  currentHomepageCategoryId: a,
  currentCategoryId: r
} = this.props;
if (e.isFetching && !i && D.Zt({
    loadId: this.loadId,
    gamesYouPlayGuilds: t.guilds,
    allGuilds: n.guilds,
    categoryId: a
  }), e.currentCategoryId !== r) {
  var l;
  null === (l = this._scroller.current) || void 0 === l || l.scrollTo({
    to: 0
  });
}
e.currentCategoryId !== r && D.Az(this.loadId, Array.from(this._guildIdsSeen)), e.mostRecentQuery.length > 0 && s.length < 1 && a !== r && (0, I.uY)(a);
  }
  componentWillUnmount() {
let {
  currentCategoryId: e,
  recommendationsLoadId: t,
  recommendationsGuilds: n
} = this.props;
e === F.Hk ? null != n && null != t && D.Az(t, this.getOrderedGuildIdsSeen(n.map(e => e.id)), 'Game Recommendations') : D.Az(this.loadId, Array.from(this._guildIdsSeen));
  }
  getOrderedGuildIdsSeen(e) {
return e.filter(e => this._guildIdsSeen.has(e));
  }
  renderGamesYouPlay() {
let {
  guilds: e,
  mightHaveGamesYouPlay: t,
  theme: n,
  userGuilds: s
} = this.props, a = Object.keys(s), r = e[Y.Lcj.GAMES_YOU_PLAY];
r.guilds = r.guilds.filter(e => !a.includes(e.id));
let {
  loadingGuildId: l
} = this.state;
return t ? (0, i.jsx)(w.Z, {
  loadId: this.loadId,
  title: W.Z.Messages.GUILD_DISCOVERY_HEADER_GAMES_YOU_PLAY,
  guildsData: r,
  loadingGuildId: l,
  analyticsContext: D.P1.RECOMMENDED,
  onViewGuild: this.handleViewGuild,
  onGuildCardSeen: this.handleGuildCardSeen,
  fetchGuilds: I.gk,
  theme: n
}) : null;
  }
  renderSearchBar() {
var e, t;
let {
  mostRecentQuery: n,
  guilds: {
    search: s
  },
  defaultLanguage: a,
  isFetchingSearch: r,
  currentCategoryId: l,
  categories: o,
  currentCategoryName: c
} = this.props;
y.w.trackExposure({
  location: '54961b_1'
});
let {
  shouldDisplayRecommendedSearchTags: d
} = y.w.getCurrentConfig({
  location: '54961b_2'
}, {
  autoTrackExposure: !1
}), u = d ? l === F.Hk ? W.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS.format({
  categoryName: c
}) : l === F.Hk ? W.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
  categoryName: c
}), _ = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[l]) && void 0 !== t ? t : b.xk;
return (0, i.jsx)(H.Z, {
  loadId: this.loadId,
  searchResults: _,
  mostRecentQuery: n,
  isFetchingSearch: r,
  defaultLanguage: a,
  placeholder: u,
  currentCategoryId: l,
  categories: o
});
  }
  renderSearchResults() {
var e, t;
let {
  mostRecentQuery: n,
  guilds: {
    search: s
  },
  availableLanguages: a,
  defaultLanguage: r,
  isFetchingSearch: l,
  theme: o,
  currentCategoryId: c,
  currentCategoryName: d
} = this.props, {
  loadingGuildId: u
} = this.state, _ = c === F.Hk ? W.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
  categoryName: d
}), h = null !== (t = null === (e = s[n]) || void 0 === e ? void 0 : e[c]) && void 0 !== t ? t : b.xk;
return (0, i.jsx)(B.Z, {
  loadId: this.loadId,
  availableLanguages: a,
  defaultLanguage: r,
  placeholder: _,
  isFetchingSearch: l,
  searchResults: h,
  mostRecentQuery: n,
  loadingGuildId: u,
  currentCategoryId: c,
  currentCategoryName: d,
  scroller: this._scroller.current,
  theme: o,
  onViewGuild: this.handleViewGuild,
  onGuildCardSeen: this.handleGuildCardSeen,
  onTagClick: (e, t) => this.handleTagSearch(e, t, D.P1.SEARCH)
});
  }
  renderRecommendedGuildsSection() {
let {
  guilds: e,
  theme: t
} = this.props, {
  loadingGuildId: n
} = this.state;
return (0, i.jsx)(w.Z, {
  loadId: this.loadId,
  title: W.Z.Messages.GUILD_DISCOVERY_FEATURED_HEADER,
  guildsData: e.featured,
  analyticsContext: D.P1.POPULAR,
  onViewGuild: this.handleViewGuild,
  onGuildCardSeen: this.handleGuildCardSeen,
  fetchGuilds: () => (0, I.$z)(0, 30),
  loadingGuildId: n,
  theme: t,
  onTagClick: (e, t) => this.handleTagSearch(e, t, D.P1.POPULAR)
});
  }
  renderPopularGuildsSection() {
let {
  guilds: e,
  theme: t,
  currentCategoryId: n
} = this.props, {
  loadingGuildId: s
} = this.state;
return (0, i.jsx)(w.Z, {
  loadId: this.loadId,
  title: W.Z.Messages.GUILD_DISCOVERY_POPULAR_HEADER,
  guildsData: e[n],
  loadingGuildId: s,
  analyticsContext: D.P1.POPULAR,
  onViewGuild: this.handleViewGuild,
  onGuildCardSeen: this.handleGuildCardSeen,
  fetchGuilds: () => (0, I.K5)(n),
  currentCategoryId: n,
  theme: t,
  onTagClick: (e, t) => this.handleTagSearch(e, t, D.P1.POPULAR)
});
  }
  render() {
var e, t;
let {
  currentCategoryName: n,
  mostRecentQuery: a,
  currentCategoryId: l,
  guilds: c
} = this.props, d = a.length > 0;
y.w.trackExposure({
  location: '54961b_3'
});
let {
  shouldDisplayRecommendedSearchTags: _
} = y.w.getCurrentConfig({
  location: '54961b_4'
}, {
  autoTrackExposure: !1
}), E = l === F.Hk ? null === (e = c[Y.Lcj.FEATURED]) || void 0 === e ? void 0 : e.guilds : null === (t = c[l]) || void 0 === t ? void 0 : t.guilds;
if (l === F.U)
  return (0, i.jsx)(N.Z, {
    loadId: this.loadId
  });
let I = l === F.Hk ? W.Z.Messages.GUILD_DISCOVERY_HOME_TITLE : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
  categoryName: n
});
return (0, i.jsxs)('div', {
  className: z.pageWrapper,
  children: [
    (0, i.jsx)(S.yY, {
      subsection: d ? a : void 0,
      location: I
    }),
    (0, i.jsx)('div', {
      className: r()(z.dragRegion, z.pageHeaderDrag, {
        [z.searchPageDrag]: d
      })
    }),
    u.tq && (0, i.jsx)(f.ZP, {
      children: (0, i.jsx)(s.Fragment, {})
    }),
    (0, i.jsx)(h.AdvancedScrollerAuto, {
      className: z.scroller,
      ref: this._scroller,
      onScroll: this.handleScroll,
      children: (0, i.jsx)('div', {
        className: r()(z.viewWrapper, {
          [z.searchPage]: d
        }),
        children: d ? this.renderSearchResults() : (0, i.jsxs)(h.HeadingLevel, {
          forceLevel: 1,
          component: (0, i.jsxs)('div', {
            className: z.searchHeader,
            children: [
              (0, i.jsx)('img', {
                alt: '',
                className: z.headerImage,
                src: q
              }),
              (0, i.jsx)('div', {
                className: z.headerContentWrapper,
                children: (0, i.jsxs)('div', {
                  className: z.headerContent,
                  children: [
                    (0, i.jsx)(h.Heading, {
                      variant: 'heading-xl/semibold',
                      className: z.searchTitle,
                      children: l === F.Hk ? W.Z.Messages.GUILD_DISCOVERY_HOME_TITLE : W.Z.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
                        categoryName: n
                      })
                    }),
                    (0, i.jsx)(h.Text, {
                      variant: 'text-md/normal',
                      className: z.searchSubtitle,
                      children: l === F.Hk && W.Z.Messages.GUILD_DISCOVERY_HOME_SUBTITLE
                    }),
                    this.renderSearchBar(),
                    _ && (0, i.jsx)(V.F, {
                      hideOverflow: !0,
                      section: D.P1.HEADER,
                      className: z.headerTagContainer,
                      discoveryTagStyle: V.B.LIGHT,
                      onTagClick: e => this.handleTagSearch(e, void 0, D.P1.HEADER),
                      tags: o().chain(E).flatMap(e => e.keywords).compact().uniq().sampleSize(10).value()
                    })
                  ]
                })
              })
            ]
          }),
          children: [
            (0, i.jsx)('div', {
              className: z.__invalid_featuredBody,
              children: l === F.Hk ? this.renderRecommendedGuildsSection() : this.renderPopularGuildsSection()
            }),
            (0, i.jsxs)('div', {
              className: z.footer,
              children: [
                (0, i.jsx)('img', {
                  alt: '',
                  src: K,
                  className: z.footerImage
                }),
                (0, i.jsx)(h.Heading, {
                  variant: 'heading-md/semibold',
                  children: W.Z.Messages.GUILD_DISCOVERY_CATEGORY_FOOTER_TITLE
                }),
                (0, i.jsx)(h.Button, {
                  look: h.Button.Looks.LINK,
                  color: h.Button.Colors.LINK,
                  size: h.Button.Sizes.MIN,
                  onClick: this.scrollToTop,
                  children: W.Z.Messages.GUILD_DISCOVERY_FOOTER_BODY
                })
              ]
            })
          ]
        })
      })
    })
  ]
});
  }
  constructor(...e) {
super(...e), Q(this, '_scroller', s.createRef()), Q(this, '_guildIdsSeen', new Set()), Q(this, 'loadId', (0, j.P)()), Q(this, 'state', {
  animatedValue: new d.Z.Value(0),
  loadingGuildId: null
}), Q(this, 'scrollToTop', () => {
  null != this._scroller.current && this._scroller.current.scrollTo({
    to: 0
  });
}), Q(this, 'handleScroll', () => {
  var e, t;
  let {
    animatedValue: n
  } = this.state, i = null !== (t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) && void 0 !== t ? t : 0;
  n.setValue(Math.min(1, i / 200));
}), Q(this, 'handleViewGuild', async (e, t, n, i) => {
  var s, a;
  let {
    currentCategoryId: r
  } = this.props, {
    loadingGuildId: l
  } = this.state;
  if (e === l)
    return;
  let o = null !== (a = null === (s = this._scroller.current) || void 0 === s ? void 0 : s.getScrollerState().scrollTop) && void 0 !== a ? a : 0,
    {
      location: c
    } = (0, L.s1)();
  (0, L.dL)({
    ...c,
    state: o
  }), this.setState({
    loadingGuildId: e
  });
  let d = r !== F.Hk ? r : null;
  try {
    await D.Lq({
      loadId: null != i ? i : this.loadId,
      guildId: e,
      index: t,
      analyticsContext: n,
      categoryId: d
    });
  } catch (e) {
    this.setState({
      loadingGuildId: null
    });
  }
}), Q(this, 'handleGuildCardSeen', e => {
  this._guildIdsSeen.add(e);
}), Q(this, 'handleTagSearch', (e, t, n) => {
  let {
    currentCategoryId: i,
    defaultLanguage: s
  } = this.props;
  if (null == i)
    return;
  let a = {
    approximate_member_count: D.sq
  };
  (0, I.G7)(e, a), (0, I.bR)(e, {
    filters: a,
    categoryId: i,
    preferredLocale: s.code,
    offset: 0,
    length: B.D,
    tag: !0
  }), D.j$(this.loadId, i, n, t), this.scrollToTop();
});
  }
}
let J = _.ZP.connectStores([
  R.Z,
  O.default,
  M.Z,
  x.Z,
  b.ZP,
  G.Z,
  P.Z
], () => {
  var e;
  let t = F.dU,
n = O.default.locale,
i = null !== (e = o().find(t, {
  code: n
})) && void 0 !== e ? e : t[0],
s = Object.keys(M.Z.applicationStatistics),
a = x.Z.hasConsented(Y.pjP.PERSONALIZATION) && s.length > 0,
r = b.ZP.getCurrentCategoryId(),
l = b.ZP.getCurrentHomepageCategoryId();
  return {
isFetching: b.ZP.isFetching(),
isFetchingSearch: b.ZP.isFetchingSearch(),
guilds: b.ZP.getDiscoverableGuilds(),
mostRecentQuery: b.ZP.getMostRecentQuery(),
currentCategoryId: r,
currentHomepageCategoryId: l,
currentCategoryName: G.Z.getCategoryName(r),
categories: G.Z.getDiscoveryCategories(),
userGuilds: P.Z.getGuilds(),
theme: R.Z.theme,
mightHaveGamesYouPlay: a,
availableLanguages: t,
defaultLanguage: i
  };
})(X);

function $(e) {
  let {
searchRoute: t
  } = e, {
fetching: n,
loadId: s,
recommendedGuilds: a
  } = (0, _.cj)([C.Z], () => ({
recommendedGuilds: C.Z.getRecommendedGuilds(),
loadId: C.Z.getLoadId(),
fetching: C.Z.isFetching()
  }));
  return (0, i.jsx)(J, {
searchRoute: t,
fetchingRecommendations: n,
usingGameRecommendations: !1,
recommendationsGuilds: a,
recommendationsLoadId: s
  });
}
t.Z = function(e) {
  let {
searchRoute: t
  } = e, {
guilds: n
  } = (0, T.C3)({
location: 'guild_discovery',
includeConverted: !0
  }), s = n.length > 0, {
clanDiscoveryEnabled: a
  } = (0, T.nk)('guild_discovery'), r = (0, _.e7)([b.ZP], () => b.ZP.getCurrentCategoryId()), l = (0, _.e7)([b.ZP], () => b.ZP.getIsReady()), o = (0, Z.Z)(p.Z.QUEST_HOME_PAGE);
  return (s || a) && (!l || r === F.Gj.Clans) ? (0, i.jsx)(k.Z, {}) : o && r === F.Gj.Quests ? (0, i.jsx)(A.Z, {}) : (0, i.jsx)($, {
searchRoute: t
  });
};