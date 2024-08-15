n.d(t, {
  D: function() {
return f;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(392711),
  r = n.n(s),
  l = n(664751),
  o = n(442837),
  c = n(481060),
  d = n(212093),
  u = n(703656),
  _ = n(683301),
  E = n(671533),
  h = n(900849),
  m = n(119317),
  I = n(749436),
  g = n(650394),
  p = n(731455),
  T = n(689938),
  S = n(514768);
let f = 12,
  C = () => {
let e = (0, u.s1)().location.search;
return null != e && e.length > 0 && e.startsWith('?') ? l.parse(e) : {};
  },
  N = e => {
let {
  categoryId: t,
  categoryName: n,
  onClick: a
} = e, s = t === p.Hk, r = s ? T.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_HEADER : T.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_HEADER.format({
  categoryName: n
}), l = s ? T.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_BODY : T.Z.Messages.GUILD_DISCOVERY_SEARCH_EMPTY_CATEGORY_BODY.format({
  onClick: a
});
return (0, i.jsxs)('div', {
  className: S.emptyContainer,
  children: [
    (0, i.jsx)('div', {
      className: S.emptyImage
    }),
    (0, i.jsx)(c.Heading, {
      variant: 'heading-xl/semibold',
      className: S.emptyHeader,
      children: r
    }),
    (0, i.jsx)(c.Text, {
      variant: 'text-md/normal',
      color: 'header-secondary',
      children: l
    })
  ]
});
  },
  A = () => (0, i.jsxs)('div', {
className: S.emptyContainer,
children: [
  (0, i.jsx)('div', {
    className: S.errorImage
  }),
  (0, i.jsx)(c.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: S.emptyHeader,
    children: T.Z.Messages.GUILD_DISCOVERY_SEARCH_ERROR
  })
]
  });
t.Z = e => {
  let {
loadId: t,
searchResults: n,
mostRecentQuery: s,
defaultLanguage: l,
availableLanguages: u,
isFetchingSearch: v,
scroller: Z,
loadingGuildId: L,
theme: O,
currentCategoryId: R,
currentCategoryName: x,
onViewGuild: b,
onGuildCardSeen: P,
placeholder: M,
onTagClick: D
  } = e, y = r().uniqueId('GuildDiscovery'), {
guilds: j,
loading: U,
total: G
  } = n, [k, w] = a.useState(!1), {
tag: B
  } = C(), [H, V] = a.useState(B), F = (0, o.e7)([_.ZP], () => _.ZP.hasSearchError()), Y = (e, t, n) => {
d.bR(s, {
  categoryId: n ? p.Hk : R,
  preferredLocale: l.code,
  offset: e,
  length: t,
  filters: {
    approximate_member_count: h.sq
  }
}), w(!1);
  }, W = () => {
null == Z || Z.scrollTo({
  to: 0
});
  };
  a.useEffect(() => {
let {
  offset: e,
  tag: t
} = C(), n = null != e ? Math.floor(parseInt(e, 10) / f) + 1 : 1;
V(!!t), 1 === n && w(!0);
  }, [s]);
  let z = R === p.Hk ? T.Z.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_HEADER.format({
count: null != G ? G.toLocaleString() : '0',
query: s
  }) : T.Z.Messages.GUILD_DISCOVERY_SEARCH_RESULTS_CATEGORY_HEADER.format({
count: null != G ? G.toLocaleString() : '0',
query: s,
category: x
  });
  return (0, i.jsxs)('div', {
className: S.container,
children: [
  (0, i.jsxs)('div', {
    className: S.searchHeader,
    children: [
      (0, i.jsx)(c.Clickable, {
        onClick: () => {
          d.AQ(), h.IZ(t);
        },
        className: S.arrow,
        'aria-label': T.Z.Messages.BACK,
        children: (0, i.jsx)(E.Z, {
          direction: E.Z.Directions.LEFT
        })
      }),
      (0, i.jsx)(c.Heading, {
        variant: 'heading-xl/semibold',
        className: S.header,
        children: z
      })
    ]
  }),
  (0, i.jsx)(I.Z, {
    loadId: t,
    searchResults: n,
    mostRecentQuery: s,
    isFetchingSearch: v,
    defaultLanguage: l,
    placeholder: M,
    availableLanguages: u,
    isSearchPage: !0,
    currentCategoryId: R,
    isTagSearch: H
  }),
  F ? (0, i.jsx)(A, {}) : G <= 0 ? (0, i.jsx)(N, {
    categoryId: R,
    categoryName: x,
    onClick: () => {
      d.uY(p.Hk), Y(0, f, !0);
    }
  }) : (0, i.jsx)('div', {
    className: S.results,
    children: (0, i.jsx)(m.Z, {
      pageSize: f,
      totalCount: G,
      resetCurrentPage: k,
      onPageChange: e => {
        Y((e - 1) * f, f), W();
      },
      children: e => {
        let {
          controller: t
        } = e;
        return (0, i.jsxs)('section', {
          'aria-labelledby': y,
          children: [
            (0, i.jsx)(g.Z, {
              guilds: j,
              loading: U,
              loadingPlaceholderCount: f,
              onViewGuild: b,
              loadingGuildId: L,
              theme: O,
              analyticsContext: h.P1.SEARCH,
              onGuildCardSeen: P,
              onTagClick: D
            }),
            t
          ]
        });
      }
    })
  })
]
  });
};