"use strict";
s.r(t), s.d(t, {
  default: function() {
    return H
  }
});
var l = s("735250"),
  i = s("470079"),
  r = s("120356"),
  a = s.n(r),
  n = s("990547"),
  d = s("442837"),
  o = s("481060"),
  u = s("213609"),
  c = s("377171"),
  C = s("674180"),
  _ = s("38618"),
  f = s("312217"),
  h = s("623299"),
  S = s("984370"),
  L = s("430824"),
  x = s("682864"),
  I = s("76535"),
  p = s("423000"),
  E = s("891561"),
  g = s("847033"),
  T = s("544978"),
  P = s("154522"),
  R = s("935554"),
  m = s("340529"),
  j = s("175390"),
  O = s("64685"),
  v = s("866104"),
  G = s("886176"),
  D = s("333866"),
  U = s("176505"),
  N = s("20281"),
  M = s("689938"),
  w = s("17812"),
  A = s("749185");

function V(e) {
  var t;
  let {
    guildId: s,
    productId: i
  } = e, {
    loaded: r,
    subscriptionsSettings: a
  } = (0, I.useMonetizationSettings)(s), n = (0, d.useStateFromStores)([L.default], () => L.default.getGuild(s)), {
    selectedTab: u,
    isPhantomPreview: c,
    categoryTabs: C
  } = (0, g.useGuildShopDisplayContext)(), _ = !r || null == a;
  return null == n || !c && _ ? (0, l.jsx)(o.Spinner, {}) : (0, l.jsx)(E.default, {
    defaultSortOption: null !== (t = null == a ? void 0 : a.store_page_guild_products_default_sort) && void 0 !== t ? t : D.GuildProductSortOptions.NAME,
    children: (0, l.jsxs)("div", {
      className: w.contentContainer,
      children: [(0, l.jsx)(v.default, {
        guild: n,
        subscriptionsSettings: a
      }), (0, l.jsx)(x.default, {
        size: 32
      }), C.length > 0 && (0, l.jsx)(m.GuildShopCategorySelector, {
        guild: n
      }), (0, l.jsxs)("div", {
        className: w.tabContainer,
        children: [(0, l.jsx)(x.default, {
          size: 32
        }), c && (0, l.jsx)(j.default, {
          guildId: s
        }), u === T.GuildShopTab.GUILD_PRODUCTS && (0, l.jsx)(P.GuildProductCardGrid, {
          guildId: s,
          productId: i
        }), u === T.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS && (0, l.jsx)(R.default, {
          guildId: s
        })]
      })]
    })
  })
}

function b(e) {
  let {
    guildId: t,
    productId: s
  } = e, r = (0, d.useStateFromStores)([_.default], () => _.default.isConnected()), x = (0, d.useStateFromStores)([L.default], () => L.default.getGuild(t)), {
    shouldHideGuildPurchaseEntryPoints: I,
    restrictionsLoading: E
  } = (0, C.useShouldHideGuildPurchaseEntryPoints)(t), {
    selectedTab: T,
    isPhantomPreview: P,
    categoryTabs: R
  } = (0, g.useGuildShopDisplayContext)(), m = r && (null == x || 0 === R.length && !P || I && !E);
  return i.useEffect(() => {
    m && (0, p.handleInaccessiblePage)(t, U.StaticChannelRoute.GUILD_SHOP)
  }, [t, m]), (0, u.default)({
    type: N.ImpressionTypes.PAGE,
    name: n.ImpressionNames.GUILD_SHOP_PAGE,
    properties: {
      product_id: s,
      tab: T
    }
  }, {
    disableTrack: m
  }), (0, l.jsxs)("div", {
    className: a()(A.chat, w.container),
    children: [(0, l.jsxs)(S.default, {
      children: [(0, l.jsx)(S.default.Icon, {
        icon: G.default,
        "aria-hidden": !0,
        color: c.default.INTERACTIVE_ACTIVE
      }), (0, l.jsx)(S.default.Title, {
        children: M.default.Messages.GUILD_SHOP_CHANNEL_LABEL
      }), (0, l.jsx)(O.default, {})]
    }), (0, l.jsx)(o.ScrollerNone, {
      className: w.content,
      children: r ? (0, l.jsx)(V, {
        guildId: t,
        productId: s
      }) : (0, l.jsx)(o.Spinner, {})
    }), (0, l.jsx)(h.default, {
      className: w.sparkleCloudTop
    }), (0, l.jsx)(f.default, {
      className: w.sparkleCloudBottom
    })]
  })
}

function H(e) {
  let {
    guildId: t,
    productId: s,
    initialTab: i
  } = e;
  return null == i && null != s && (i = T.GuildShopTab.GUILD_PRODUCTS), (0, l.jsx)(g.default, {
    initialTab: i,
    guildId: t,
    children: (0, l.jsx)(b, {
      initialTab: i,
      productId: s,
      guildId: t
    })
  })
}