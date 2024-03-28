"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  },
  useGuildShopDisplayContext: function() {
    return M
  }
}), n("653041"), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("512722"),
  i = n.n(l),
  r = n("399606"),
  o = n("524437"),
  u = n("367907"),
  d = n("605236"),
  c = n("584825"),
  f = n("994592"),
  E = n("160404"),
  _ = n("703656"),
  T = n("984933"),
  m = n("430824"),
  I = n("626135"),
  p = n("652515"),
  h = n("550951"),
  N = n("544978"),
  S = n("333866"),
  C = n("629481"),
  A = n("981631");
let g = a.createContext(void 0);

function M() {
  let e = a.useContext(g);
  return i()(null != e, "must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider"), e
}

function R(e) {
  var t;
  let {
    children: n,
    initialTab: l,
    guildId: i
  } = e, M = (0, r.useStateFromStores)([m.default], () => m.default.getGuild(i)), R = (0, r.useStateFromStores)([E.default], () => E.default.isViewingServerShop(i)), O = (0, h.useGuildShopPreviewVisible)(M, "guild_shop_page"), v = (0, p.useIsEligibleForSubscriptionsInGuildShop)(i, "guild_shop_page"), L = (null == M ? void 0 : M.hasFeature(A.GuildFeatures.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, x = (0, f.useRoleSubscriptionsVisibleInGuild)(null == M ? void 0 : M.id), D = null === (t = (0, c.useSubscriptionsSettings)(i)) || void 0 === t ? void 0 : t.server_shop_tab_order, P = [], y = N.GuildShopTab.GUILD_SHOP_FULL_PREVIEW;
  R || L && x ? (P.push(D === S.ServerShopTabOrder.PRODUCTS_FIRST ? N.GuildShopTab.GUILD_PRODUCTS : N.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), P.push(D === S.ServerShopTabOrder.PRODUCTS_FIRST ? N.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS : N.GuildShopTab.GUILD_PRODUCTS), y = P[0]) : L && !x ? (P.push(N.GuildShopTab.GUILD_PRODUCTS), y = N.GuildShopTab.GUILD_PRODUCTS) : !L && x && (P.push(N.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), y = N.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS, O && P.push(N.GuildShopTab.GUILD_PRODUCTS_PREVIEW)), l = null != l ? l : y;
  let [U, b] = a.useState(l), j = O && !(x && v) || U === N.GuildShopTab.GUILD_PRODUCTS_PREVIEW;
  return a.useEffect(() => {
    b(l)
  }, [l]), (0, s.jsx)(g.Provider, {
    value: {
      selectedTab: U,
      setSelectedTab: b,
      categoryTabs: P,
      isPhantomPreview: j,
      handlePreviewDismiss: e => {
        (0, d.markDismissibleContentAsDismissed)(o.DismissibleContent.SERVER_SHOP_PHANTOM_PREVIEW);
        let t = {
          ...(0, u.collectGuildAnalyticsMetadata)(i)
        };
        if (U === N.GuildShopTab.GUILD_PRODUCTS_PREVIEW) e.stopPropagation(), b(N.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = C.GuildShopPreviewClickActions.DISMISS_TAB_PREVIEW;
        else {
          var n;
          (0, _.replaceWith)(A.Routes.CHANNEL(i, null === (n = T.default.getDefaultChannel(i)) || void 0 === n ? void 0 : n.id)), t.action_taken = C.GuildShopPreviewClickActions.DISMISS_FULL_PREVIEW
        }
        I.default.track(A.AnalyticEvents.GUILD_SHOP_PREVIEW_CLICK, t)
      }
    },
    children: n
  })
}