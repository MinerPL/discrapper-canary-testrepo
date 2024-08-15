n.r(t), n.d(t, {
  default: function() {
return V;
  }
});
var r = n(735250),
  s = n(470079),
  i = n(120356),
  o = n.n(i),
  a = n(990547),
  l = n(442837),
  c = n(481060),
  d = n(213609),
  C = n(377171),
  u = n(674180),
  _ = n(38618),
  x = n(312217),
  f = n(623299),
  I = n(984370),
  p = n(430824),
  h = n(76535),
  m = n(423000),
  L = n(891561),
  E = n(847033),
  S = n(857428),
  g = n(154522),
  T = n(935554),
  v = n(340529),
  R = n(175390),
  j = n(957572),
  P = n(866104),
  O = n(886176),
  Z = n(333866),
  D = n(176505),
  M = n(20281),
  w = n(689938),
  N = n(763909),
  U = n(625032);

function b(e) {
  var t;
  let {
guildId: n,
productId: s
  } = e, {
loaded: i,
subscriptionsSettings: o
  } = (0, h.H)(n), a = (0, l.e7)([p.Z], () => p.Z.getGuild(n)), {
selectedTab: d,
isPhantomPreview: C,
categoryTabs: u
  } = (0, E.m)(), _ = !i || null == o;
  return null == a || !C && _ ? (0, r.jsx)(c.Spinner, {}) : (0, r.jsx)(L.Z, {
defaultSortOption: null !== (t = null == o ? void 0 : o.store_page_guild_products_default_sort) && void 0 !== t ? t : Z.zJ.NAME,
children: (0, r.jsxs)('div', {
  className: N.contentContainer,
  children: [
    (0, r.jsx)(P.C, {
      guild: a,
      subscriptionsSettings: o
    }),
    (0, r.jsx)(c.Spacer, {
      size: 32
    }),
    u.length > 0 && (0, r.jsx)(v.z, {
      guild: a
    }),
    (0, r.jsxs)('div', {
      className: N.tabContainer,
      children: [
        (0, r.jsx)(c.Spacer, {
          size: 32
        }),
        C && (0, r.jsx)(R.Z, {
          guildId: n
        }),
        d === S.y.GUILD_PRODUCTS && (0, r.jsx)(g.Q, {
          guildId: n,
          productId: s
        }),
        d === S.y.GUILD_ROLE_SUBSCRIPTIONS && (0, r.jsx)(T.Z, {
          guildId: n
        })
      ]
    })
  ]
})
  });
}

function G(e) {
  let {
guildId: t,
productId: n
  } = e, i = (0, l.e7)([_.Z], () => _.Z.isConnected()), h = (0, l.e7)([p.Z], () => p.Z.getGuild(t)), {
shouldHideGuildPurchaseEntryPoints: L,
restrictionsLoading: S
  } = (0, u.uP)(t), {
selectedTab: g,
isPhantomPreview: T,
categoryTabs: v
  } = (0, E.m)(), R = i && (null == h || 0 === v.length && !T || L && !S);
  return s.useEffect(() => {
R && (0, m.M)(t, D.oC.GUILD_SHOP);
  }, [
t,
R
  ]), (0, d.Z)({
type: M.n.PAGE,
name: a.ImpressionNames.GUILD_SHOP_PAGE,
properties: {
  product_id: n,
  tab: g
}
  }, {
disableTrack: R
  }), (0, r.jsxs)('div', {
className: o()(U.chat, N.container),
children: [
  (0, r.jsxs)(I.Z, {
    children: [
      (0, r.jsx)(I.Z.Icon, {
        icon: (0, c.makeIconCompat)(O.Z),
        'aria-hidden': !0,
        color: C.Z.INTERACTIVE_ACTIVE
      }),
      (0, r.jsx)(I.Z.Title, {
        children: w.Z.Messages.GUILD_SHOP_CHANNEL_LABEL
      }),
      (0, r.jsx)(j.Z, {})
    ]
  }),
  (0, r.jsx)(c.ScrollerNone, {
    className: N.content,
    children: i ? (0, r.jsx)(b, {
      guildId: t,
      productId: n
    }) : (0, r.jsx)(c.Spinner, {})
  }),
  (0, r.jsx)(f.Z, {
    className: N.sparkleCloudTop
  }),
  (0, r.jsx)(x.Z, {
    className: N.sparkleCloudBottom
  })
]
  });
}

function V(e) {
  let {
guildId: t,
productId: n,
initialTab: s
  } = e;
  return null == s && null != n && (s = S.y.GUILD_PRODUCTS), (0, r.jsx)(E.Z, {
initialTab: s,
guildId: t,
children: (0, r.jsx)(G, {
  initialTab: s,
  productId: n,
  guildId: t
})
  });
}