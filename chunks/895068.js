n.d(t, {
  Bj: function() {
return s;
  },
  ZP: function() {
return R;
  }
}), n(47120);
var i, s, a, r, l = n(735250),
  o = n(470079),
  c = n(338545),
  d = n(143927),
  u = n(481060),
  _ = n(110924),
  h = n(393903),
  E = n(638730),
  I = n(970606),
  m = n(624383),
  g = n(945124),
  p = n(231467),
  T = n(931515),
  S = n(702646),
  C = n(207796),
  f = n(526282),
  N = n(777734),
  A = n(976757),
  Z = n(981631),
  L = n(689938),
  v = n(477975);
let O = 40;

function R(e) {
  let {
width: t,
isAnimating: n,
variant: i = 'default',
onScroll: s
  } = e, {
loaded: a,
clans: r,
searchResult: R,
searchCriteria: x
  } = (0, T.Qc)(), b = (0, C.GN)(e => e.selectedTraits, d.Z), P = (0, _.Z)(R), [M, D] = o.useState(0), y = o.useMemo(() => ({
height: M
  }), [M]), j = (0, c.useSpring)({
opacity: M > 0 ? 1 : 0,
config: c.config.stiff
  }), U = 'default' !== i, G = Math.min(null != t ? t : 1024, 2000), k = o.useMemo(() => {
let e = G / 256,
  t = G / 376,
  n = G / e,
  i = G / t;
return i > 360 ? Math.floor(t - (t - e) / 2) : n < 240 ? Math.max(e, t) : e;
  }, [G]), w = o.useCallback(e => {
if (null == e) {
  D(0);
  return;
}
D(e.getBoundingClientRect().y + 8 + 400 + 64);
  }, []), B = (0, h.y)(w), H = o.useCallback(e => {
w(B.current), null != e && (null == s || s(e));
  }, [
w,
B,
s
  ]), V = (0, E.h)(H, 10, [H], {
leading: !0,
trailing: !0
  });
  o.useEffect(() => {
if (null != R && !!(0, A.Pw)(R))
  (!(null != P && (0, A.Pw)(P)) || !(P.loadedAt >= R.loadedAt)) && (0, I.Oe)(R.items.map(e => e.id), 'top_picks', x);
  }, [
x,
R,
P,
H,
n
  ]), o.useEffect(() => {
!n && (0, A.Pw)(R) && setTimeout(() => H());
  }, [
H,
n,
R
  ]);
  let F = o.useMemo(() => function(e, t, n) {
  if (null == e)
    return [];
  switch (n) {
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
          sectionHeight: O,
          itemHeight: 400,
          props: {
            className: v.glassBackgroundTop
          },
          header: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
          subtitle: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
        },
        {
          section: 'other_guilds',
          items: e.slice(t),
          sectionHeight: O,
          props: {
            className: v.glassBackground
          },
          itemHeight: 400,
          header: L.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE
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
          sectionHeight: O,
          itemHeight: 400,
          props: {
            className: v.glassBackgroundTop
          },
          header: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
          subtitle: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
        },
        {
          section: 'other_guilds',
          items: e.slice(t),
          sectionHeight: 0,
          itemHeight: 400,
          props: {
            className: v.glassBackground
          }
        }
      ];
    case 'default':
      return [{
          section: 'top_picks',
          items: e.slice(0, t),
          sectionHeight: O,
          itemHeight: 400,
          header: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_TITLE,
          subtitle: L.Z.Messages.CLAN_DISCOVERY_TOP_PICKS_SUBTITLE
        },
        {
          section: 'other_guilds',
          items: e.slice(t),
          sectionHeight: O,
          itemHeight: 400,
          header: L.Z.Messages.CLAN_DISCOVERY_OTHER_GUILDS_TITLE
        }
      ];
    default:
      return [];
  }
}(r, k, i), [
  r,
  k,
  i
]),
Y = o.useMemo(() => new Set(x.games), [x.games]),
W = o.useCallback((e, t, n, i) => {
  var s;
  let {
    items: a,
    section: r
  } = F[e];
  if ('upsell' === r || 'hero' === r)
    return null;
  let o = a[t];
  return (0, l.jsx)(p.ZP, {
    clan: o,
    affinity: null !== (s = o.affininty) && void 0 !== s ? s : (0, g.y)(o, x),
    traitsToHighlight: b,
    className: v.card,
    style: n,
    source: Z.jXE.DISCOVER_SEARCH,
    prioritizedGameIds: Y,
    onlyAnimateIconOnHover: !0
  }, i);
}, [
  x,
  F,
  b,
  Y
]),
z = o.useCallback((e, t) => {
  let {
    header: n,
    subtitle: s,
    section: a
  } = F[e];
  switch (a) {
    case 'upsell':
      return (0, l.jsx)(f.Z, {});
    case 'hero':
      return (0, l.jsx)(m.c, {
        title: L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE,
        description: L.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
        backgroundImageUrl: 'https://cdn.discordapp.com/assets/discovery/guilds-hero-background.png',
        className: v.hero
      });
    case 'top_picks':
      return (0, l.jsxs)('div', {
        className: v.topPicksSection,
        children: [
          (0, l.jsx)(N.Z, {
            ref: B,
            icon: (0, l.jsx)(u.TrophyIcon, {
              color: 'currentColor'
            }),
            style: {
              ...t,
              marginTop: 8,
              position: 'absolute'
            },
            title: n,
            subtitle: s
          }),
          'global_discovery' === i ? (0, l.jsx)('div', {
            className: v.topPicksToolbar,
            children: (0, l.jsx)(S.Z, {})
          }) : null
        ]
      });
    default:
      if (null === n)
        return null;
      return (0, l.jsx)(N.Z, {
        title: n,
        subtitle: s,
        style: {
          ...t,
          position: 'absolute'
        }
      });
  }
}, [
  F,
  B,
  i
]);
  return 0 !== r.length && a ? (0, l.jsx)(l.Fragment, {
children: (0, l.jsxs)('div', {
  className: v.masonryListContainer,
  children: [
    !U && (0, l.jsx)(l.Fragment, {
      children: (0, l.jsx)(c.animated.div, {
        className: v.masonryListGradient,
        style: {
          ...j,
          ...y
        }
      })
    }),
    (0, l.jsx)(u.MasonryList, {
      className: v.masonryList,
      sections: F.map(e => {
        let {
          items: t
        } = e;
        return t.length;
      }),
      columns: k,
      itemGutter: 16,
      paddingHorizontal: 16,
      paddingVertical: 'upsell' === i ? 64 : 0,
      removeEdgeItemGutters: !0,
      renderItem: W,
      renderSection: z,
      getSectionHeight: e => F[e].sectionHeight,
      getItemKey: (e, t) => F[e].items[t].id,
      getItemHeight: e => F[e].itemHeight,
      getSectionProps: e => {
        var t;
        return null !== (t = F[e].props) && void 0 !== t ? t : {};
      },
      chunkSize: 24,
      onScroll: V,
      maxContentWidth: 2000
    })
  ]
})
  }) : null;
}
(a = i || (i = {})).UPSELL = 'upsell', a.TOP_PICKS = 'top_picks', a.OTHER_GUILDS = 'other_guilds', a.HERO = 'hero', (r = s || (s = {})).DEFAULT = 'default', r.UPSELL = 'upsell', r.GLOBAL_DISCOVERY = 'global_discovery';