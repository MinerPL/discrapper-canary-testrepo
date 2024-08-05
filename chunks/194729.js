n(390547), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
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
  p = n(963202),
  T = n(252618),
  S = n(440190),
  f = n(665149),
  C = n(5955),
  N = n(918701),
  A = n(121711),
  v = n(709158),
  Z = n(703656),
  L = n(108427),
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
  W = n(46140),
  z = n(689938),
  K = n(468918),
  q = n(368179),
  Q = n(52518);

function X(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
class J extends a.PureComponent {
  componentDidMount() {
var e, t, n;
let {
  isFetching: i,
  guilds: {
    gamesYouPlay: a,
    featured: s
  },
  searchRoute: r,
  currentHomepageCategoryId: l,
  mostRecentQuery: o
} = this.props;
if ((0, m.N)(), (0, U.le)(), null == b.ZP.getSearchIndex() && (0, I.Ue)(), E.Z.wait(() => {
    (0, g.M)(Y.x8Z.SERVER_DISCOVERY_BADGE);
  }), !i && 0 === o.length && D.Zt({
    loadId: this.loadId,
    gamesYouPlayGuilds: a.guilds,
    allGuilds: s.guilds,
    categoryId: l
  }), null != r) {
  let {
    query: e,
    offset: t,
    limit: n,
    preferredLocale: i,
    categoryId: a
  } = c.parse(r);
  (0, I.bR)(e, {
    categoryId: parseInt(a, 10),
    preferredLocale: i,
    offset: parseInt(t, 10),
    filters: {
      approximate_member_count: D.sq
    },
    length: parseInt(n, 10)
  });
} else
  null != l && l !== F.Hk && E.Z.wait(() => (0, I.uY)(l));
let d = null !== (t = null === (e = (0, Z.s1)().location.state) || void 0 === e ? void 0 : e.scrollTop) && void 0 !== t ? t : 0;
d > 0 && (null === (n = this._scroller.current) || void 0 === n || n.scrollTo({
  to: d
})), (0, L.e)('guild_discovery');
  }
  componentDidUpdate(e) {
let {
  guilds: {
    gamesYouPlay: t,
    featured: n
  },
  isFetching: i,
  mostRecentQuery: a,
  currentHomepageCategoryId: s,
  currentCategoryId: r
} = this.props;
if (e.isFetching && !i && D.Zt({
    loadId: this.loadId,
    gamesYouPlayGuilds: t.guilds,
    allGuilds: n.guilds,
    categoryId: s
  }), e.currentCategoryId !== r) {
  var l;
  null === (l = this._scroller.current) || void 0 === l || l.scrollTo({
    to: 0
  });
}
e.currentCategoryId !== r && D.Az(this.loadId, Array.from(this._guildIdsSeen)), e.mostRecentQuery.length > 0 && a.length < 1 && s !== r && (0, I.uY)(s);
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
  userGuilds: a
} = this.props, s = Object.keys(a), r = e[Y.Lcj.GAMES_YOU_PLAY];
r.guilds = r.guilds.filter(e => !s.includes(e.id));
let {
  loadingGuildId: l
} = this.state;
return t ? (0, i.jsx)(w.Z, {
  loadId: this.loadId,
  title: z.Z.Messages.GUILD_DISCOVERY_HEADER_GAMES_YOU_PLAY,
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
    search: a
  },
  defaultLanguage: s,
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
}), u = d ? l === F.Hk ? z.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER_TAGS : z.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER_TAGS.format({
  categoryName: c
}) : l === F.Hk ? z.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : z.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
  categoryName: c
}), _ = null !== (t = null === (e = a[n]) || void 0 === e ? void 0 : e[l]) && void 0 !== t ? t : b.xk;
return (0, i.jsx)(H.Z, {
  loadId: this.loadId,
  searchResults: _,
  mostRecentQuery: n,
  isFetchingSearch: r,
  defaultLanguage: s,
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
    search: a
  },
  availableLanguages: s,
  defaultLanguage: r,
  isFetchingSearch: l,
  theme: o,
  currentCategoryId: c,
  currentCategoryName: d
} = this.props, {
  loadingGuildId: u
} = this.state, _ = c === F.Hk ? z.Z.Messages.GUILD_DISCOVERY_SEARCH_PLACEHOLDER : z.Z.Messages.GUILD_DISCOVERY_CATEGORY_SEARCH_PLACEHOLDER.format({
  categoryName: d
}), h = null !== (t = null === (e = a[n]) || void 0 === e ? void 0 : e[c]) && void 0 !== t ? t : b.xk;
return (0, i.jsx)(B.Z, {
  loadId: this.loadId,
  availableLanguages: s,
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
  title: z.Z.Messages.GUILD_DISCOVERY_FEATURED_HEADER,
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
  loadingGuildId: a
} = this.state;
return (0, i.jsx)(w.Z, {
  loadId: this.loadId,
  title: z.Z.Messages.GUILD_DISCOVERY_POPULAR_HEADER,
  guildsData: e[n],
  loadingGuildId: a,
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
  mostRecentQuery: s,
  currentCategoryId: l,
  guilds: c
} = this.props, d = s.length > 0;
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
  return (0, i.jsx)(C.Z, {
    loadId: this.loadId
  });
let I = l === F.Hk ? z.Z.Messages.GUILD_DISCOVERY_HOME_TITLE : z.Z.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
  categoryName: n
});
return (0, i.jsxs)('div', {
  className: K.pageWrapper,
  children: [
    (0, i.jsx)(T.yY, {
      subsection: d ? s : void 0,
      location: I
    }),
    (0, i.jsx)('div', {
      className: r()(K.dragRegion, K.pageHeaderDrag, {
        [K.searchPageDrag]: d
      })
    }),
    u.tq && (0, i.jsx)(f.ZP, {
      children: (0, i.jsx)(a.Fragment, {})
    }),
    (0, i.jsx)(h.AdvancedScrollerAuto, {
      className: K.scroller,
      ref: this._scroller,
      onScroll: this.handleScroll,
      children: (0, i.jsx)('div', {
        className: r()(K.viewWrapper, {
          [K.searchPage]: d
        }),
        children: d ? this.renderSearchResults() : (0, i.jsxs)(h.HeadingLevel, {
          forceLevel: 1,
          component: (0, i.jsxs)('div', {
            className: K.searchHeader,
            children: [
              (0, i.jsx)('img', {
                alt: '',
                className: K.headerImage,
                src: Q
              }),
              (0, i.jsx)('div', {
                className: K.headerContentWrapper,
                children: (0, i.jsxs)('div', {
                  className: K.headerContent,
                  children: [
                    (0, i.jsx)(h.Heading, {
                      variant: 'heading-xl/semibold',
                      className: K.searchTitle,
                      children: l === F.Hk ? z.Z.Messages.GUILD_DISCOVERY_HOME_TITLE : z.Z.Messages.GUILD_DISCOVERY_CATEGORY_TITLE.format({
                        categoryName: n
                      })
                    }),
                    (0, i.jsx)(h.Text, {
                      variant: 'text-md/normal',
                      className: K.searchSubtitle,
                      children: l === F.Hk && z.Z.Messages.GUILD_DISCOVERY_HOME_SUBTITLE
                    }),
                    this.renderSearchBar(),
                    _ && (0, i.jsx)(V.F, {
                      hideOverflow: !0,
                      section: D.P1.HEADER,
                      className: K.headerTagContainer,
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
              className: K.__invalid_featuredBody,
              children: l === F.Hk ? this.renderRecommendedGuildsSection() : this.renderPopularGuildsSection()
            }),
            (0, i.jsxs)('div', {
              className: K.footer,
              children: [
                (0, i.jsx)('img', {
                  alt: '',
                  src: q,
                  className: K.footerImage
                }),
                (0, i.jsx)(h.Heading, {
                  variant: 'heading-md/semibold',
                  children: z.Z.Messages.GUILD_DISCOVERY_CATEGORY_FOOTER_TITLE
                }),
                (0, i.jsx)(h.Button, {
                  look: h.Button.Looks.LINK,
                  color: h.Button.Colors.LINK,
                  size: h.Button.Sizes.MIN,
                  onClick: this.scrollToTop,
                  children: z.Z.Messages.GUILD_DISCOVERY_FOOTER_BODY
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
super(...e), X(this, '_scroller', a.createRef()), X(this, '_guildIdsSeen', new Set()), X(this, 'loadId', (0, j.P)()), X(this, 'state', {
  animatedValue: new d.Z.Value(0),
  loadingGuildId: null
}), X(this, 'scrollToTop', () => {
  null != this._scroller.current && this._scroller.current.scrollTo({
    to: 0
  });
}), X(this, 'handleScroll', () => {
  var e, t;
  let {
    animatedValue: n
  } = this.state, i = null !== (t = null === (e = this._scroller.current) || void 0 === e ? void 0 : e.getScrollerState().scrollTop) && void 0 !== t ? t : 0;
  n.setValue(Math.min(1, i / 200));
}), X(this, 'handleViewGuild', async (e, t, n, i) => {
  var a, s;
  let {
    currentCategoryId: r
  } = this.props, {
    loadingGuildId: l
  } = this.state;
  if (e === l)
    return;
  let o = null !== (s = null === (a = this._scroller.current) || void 0 === a ? void 0 : a.getScrollerState().scrollTop) && void 0 !== s ? s : 0,
    {
      location: c
    } = (0, Z.s1)();
  (0, Z.dL)({
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
}), X(this, 'handleGuildCardSeen', e => {
  this._guildIdsSeen.add(e);
}), X(this, 'handleTagSearch', (e, t, n) => {
  let {
    currentCategoryId: i,
    defaultLanguage: a
  } = this.props;
  if (null == i)
    return;
  let s = {
    approximate_member_count: D.sq
  };
  (0, I.G7)(e, s), (0, I.bR)(e, {
    filters: s,
    categoryId: i,
    preferredLocale: a.code,
    offset: 0,
    length: B.D,
    tag: !0
  }), D.j$(this.loadId, i, n, t), this.scrollToTop();
});
  }
}
let $ = _.ZP.connectStores([
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
a = Object.keys(M.Z.applicationStatistics),
s = x.Z.hasConsented(Y.pjP.PERSONALIZATION) && a.length > 0,
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
mightHaveGamesYouPlay: s,
availableLanguages: t,
defaultLanguage: i
  };
})(J);

function ee(e) {
  let {
searchRoute: t
  } = e, {
fetching: n,
loadId: a,
recommendedGuilds: s
  } = (0, _.cj)([S.Z], () => ({
recommendedGuilds: S.Z.getRecommendedGuilds(),
loadId: S.Z.getLoadId(),
fetching: S.Z.isFetching()
  }));
  return (0, i.jsx)($, {
searchRoute: t,
fetchingRecommendations: n,
usingGameRecommendations: !1,
recommendationsGuilds: s,
recommendationsLoadId: a
  });
}
t.Z = function(e) {
  let {
searchRoute: t
  } = e, {
guilds: n
  } = (0, p.C3)({
location: 'guild_discovery',
includeConverted: !0
  }), s = n.length > 0, {
clanDiscoveryEnabled: r
  } = (0, p.nk)('guild_discovery'), l = (0, _.e7)([b.ZP], () => b.ZP.getCurrentCategoryId()), o = (0, _.e7)([b.ZP], () => b.ZP.getIsReady()), c = (0, v.Z)(W.dr.QUEST_HOME_DESKTOP);
  return (a.useEffect(() => {
c && (0, N.OG)() && (0, I.uY)(F.Gj.Quests);
  }, [c]), (s || r) && (!o || l === F.Gj.Clans)) ? (0, i.jsx)(k.Z, {}) : c && (l === F.Gj.Quests || (0, N.OG)()) ? (0, i.jsx)(A.Z, {}) : (0, i.jsx)(ee, {
searchRoute: t
  });
};