n.d(t, {
  Bj: function() {
return a;
  },
  ZP: function() {
return L;
  },
  s: function() {
return Z;
  }
}), n(47120);
var i, a, s, r, l = n(735250),
  o = n(470079),
  c = n(143927),
  d = n(481060),
  u = n(110924),
  _ = n(970606),
  h = n(17845),
  E = n(945124),
  I = n(231467),
  m = n(931515),
  g = n(702646),
  p = n(207796),
  T = n(526282),
  S = n(777734),
  f = n(976757),
  C = n(981631),
  N = n(689938),
  A = n(477975);
let v = 56;

function Z(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default';
  return e === p.v0.SAVED_GUILDS ? 'saved_guilds' : t;
}

function L(e) {
  let {
width: t,
isAnimating: n,
variant: i = 'default',
onScroll: a
  } = e, {
loaded: s,
clans: r,
searchResult: Z,
searchCriteria: L
  } = (0, m.Qc)(null, 'saved_guilds' === i), O = (0, p.GN)(e => e.selectedTraits, c.Z), R = (0, u.Z)(Z), x = Math.min(null != t ? t : 1024, 2000), b = o.useMemo(() => {
let e = x / 256,
  t = x / 376,
  n = x / e,
  i = x / t;
return i > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e;
  }, [x]);
  o.useEffect(() => {
if (null != Z && !!(0, f.Pw)(Z))
  (!(null != R && (0, f.Pw)(R)) || !(R.loadedAt >= Z.loadedAt)) && (0, _.Oe)(Z.items.map(e => e.id), 'top_picks', L);
  }, [
L,
Z,
R,
n
  ]);
  let P = o.useMemo(() => function(e, t, n) {
  if (null == e)
    return [];
  switch (n) {
    case 'saved_guilds':
      return [{
          section: 'top_picks',
          items: e.slice(0, t),
          sectionHeight: 16,
          itemHeight: 400,
          header: null,
          subtitle: null
        },
        {
          section: 'other_guilds',
          items: e.slice(t),
          sectionHeight: 16,
          itemHeight: 400,
          header: null
        }
      ];
    case 'global_discovery':
      return [{
          section: 'hero',
          items: [e[0]],
          sectionHeight: 270,
          itemHeight: 0
        },
        {
          section: 'top_picks',
          items: e,
          sectionHeight: v,
          itemHeight: 400,
          header: N.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
          subtitle: N.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
        },
        {
          section: 'other_guilds',
          items: e.slice(t),
          sectionHeight: v,
          itemHeight: 400,
          header: N.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE
        }
      ];
    case 'upsell':
      return [{
          section: 'upsell',
          items: [e[0]],
          sectionHeight: 268,
          itemHeight: 0
        },
        {
          section: 'top_picks',
          items: e.slice(0, t),
          sectionHeight: v,
          itemHeight: 400,
          header: N.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
          subtitle: N.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
        },
        {
          section: 'other_guilds',
          items: e.slice(t),
          sectionHeight: 0,
          itemHeight: 400
        }
      ];
    case 'default':
      return [{
          section: 'top_picks',
          items: e.slice(0, t),
          sectionHeight: v,
          itemHeight: 400,
          header: N.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
          subtitle: N.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
        },
        {
          section: 'other_guilds',
          items: e.slice(t),
          sectionHeight: v,
          itemHeight: 400,
          header: N.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE
        }
      ];
    default:
      return [];
  }
}(r, b, i), [
  r,
  b,
  i
]),
M = o.useMemo(() => new Set(L.games), [L.games]),
D = o.useCallback((e, t, n, i) => {
  var a;
  let {
    items: s,
    section: r
  } = P[e];
  if ('upsell' === r || 'hero' === r)
    return null;
  let o = s[t];
  return (0, l.jsx)(I.ZP, {
    clan: o,
    affinity: null !== (a = o.affininty) && void 0 !== a ? a : (0, E.y)(o, L),
    traitsToHighlight: O,
    className: A.card,
    style: n,
    source: C.jXE.DISCOVER_SEARCH,
    prioritizedGameIds: M,
    onlyAnimateIconOnHover: !0
  }, i);
}, [
  L,
  P,
  O,
  M
]),
y = o.useCallback((e, t) => {
  let {
    header: n,
    subtitle: a,
    section: s
  } = P[e];
  switch (s) {
    case 'upsell':
      return (0, l.jsx)(T.Z, {});
    case 'hero':
      return (0, l.jsx)(h.Z, {
        title: N.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE,
        description: N.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
        backgroundImageUrl: 'https://cdn.discordapp.com/assets/discovery/guilds-hero-background.png',
        className: A.hero
      });
    case 'top_picks':
      return (0, l.jsxs)('div', {
        className: A.topPicksSection,
        children: [
          (0, l.jsx)(S.Z, {
            style: {
              ...t,
              marginTop: 8,
              position: 'absolute'
            },
            title: n,
            subtitle: a
          }),
          'global_discovery' === i ? (0, l.jsx)('div', {
            className: A.topPicksToolbar,
            children: (0, l.jsx)(g.Z, {})
          }) : null
        ]
      });
    default:
      if (null === n)
        return null;
      return (0, l.jsx)(S.Z, {
        title: n,
        subtitle: a,
        style: {
          ...t,
          marginTop: 8,
          position: 'absolute'
        }
      });
  }
}, [
  P,
  i
]);
  return 0 === r.length && s && 'saved_guilds' === i ? (0, l.jsxs)('div', {
className: A.emptySavedGuilds,
children: [
  (0, l.jsx)(d.Heading, {
    variant: 'heading-md/medium',
    color: 'header-primary',
    children: N.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_TITLE
  }),
  (0, l.jsx)(d.Text, {
    variant: 'text-sm/medium',
    color: 'header-secondary',
    children: N.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS_EMPTY_DESCRIPTION
  })
]
  }) : 0 !== r.length && s ? (0, l.jsx)(l.Fragment, {
children: (0, l.jsx)('div', {
  className: A.masonryListContainer,
  children: (0, l.jsx)(d.MasonryList, {
    className: A.masonryList,
    sections: P.map(e => {
      let {
        items: t
      } = e;
      return t.length;
    }),
    columns: b,
    itemGutter: 16,
    paddingHorizontal: 32,
    paddingVertical: 'upsell' === i ? 64 : 0,
    removeEdgeItemGutters: !0,
    renderItem: D,
    renderSection: y,
    getSectionHeight: e => P[e].sectionHeight,
    getItemKey: (e, t) => P[e].items[t].id,
    getItemHeight: e => P[e].itemHeight,
    getSectionProps: e => {
      var t;
      return null !== (t = P[e].props) && void 0 !== t ? t : {};
    },
    chunkSize: 24,
    maxContentWidth: 2000,
    onScroll: a
  })
})
  }) : null;
}
(s = i || (i = {})).UPSELL = 'upsell', s.TOP_PICKS = 'top_picks', s.OTHER_GUILDS = 'other_guilds', s.HERO = 'hero', (r = a || (a = {})).DEFAULT = 'default', r.UPSELL = 'upsell', r.GLOBAL_DISCOVERY = 'global_discovery', r.SAVED_GUILDS = 'saved_guilds';