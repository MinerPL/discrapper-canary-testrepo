"use strict";
s.r(t), s.d(t, {
  GuildShopCategorySelector: function() {
    return O
  }
});
var l = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  a = s("399606"),
  n = s("433517"),
  d = s("481060"),
  o = s("607070"),
  u = s("357352"),
  c = s("703656"),
  C = s("682864"),
  _ = s("696202"),
  f = s("559629"),
  h = s("26290"),
  S = s("652515"),
  L = s("847033"),
  x = s("544978"),
  I = s("307537"),
  p = s("987513"),
  E = s("895737"),
  g = s("629481"),
  T = s("981631"),
  P = s("176505"),
  R = s("689938"),
  m = s("951996");

function j(e) {
  let {
    icon: t,
    title: s,
    body: i,
    selected: a,
    disabled: n = !1,
    onClick: o,
    onPreviewDismiss: u,
    isNew: c = !1
  } = e;
  return (0, l.jsxs)(d.ClickableContainer, {
    onClick: n ? void 0 : o,
    "aria-disabled": n,
    className: r()(m.tab, {
      [m.selected]: a,
      [m.tabDisabled]: n,
      [m.preview]: !a && null != u
    }),
    "aria-label": s,
    children: [(0, l.jsx)("div", {
      className: m.iconContainer,
      children: t
    }), (0, l.jsx)(C.default, {
      size: 8,
      horizontal: !0
    }), (0, l.jsxs)("div", {
      children: [(0, l.jsx)(d.Text, {
        variant: "text-sm/semibold",
        color: a ? "always-white" : "header-primary",
        children: s
      }), (0, l.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: a ? "always-white" : n ? "text-muted" : "header-primary",
        children: i
      })]
    }), c && (0, l.jsx)(h.TextBadge, {
      color: d.tokens.unsafe_rawColors.BRAND_260.css,
      className: m.newBadge,
      text: R.default.Messages.NEW
    }), null != u && (0, l.jsx)(d.Clickable, {
      className: m.tabPreviewClose,
      onClick: u,
      "aria-label": R.default.Messages.DISMISS,
      children: (0, l.jsx)(_.default, {
        width: 16,
        height: 16
      })
    })]
  })
}

function O(e) {
  let {
    guild: t
  } = e, s = (0, S.useIsEligibleForSubscriptionsInGuildShop)(t.id, "guild_shop_category_selector"), {
    selectedTab: i,
    setSelectedTab: r,
    categoryTabs: _,
    handlePreviewDismiss: h
  } = (0, L.useGuildShopDisplayContext)(), O = "false" === n.Storage.get(g.GUILD_SHOP_PRODUCT_PREVIEW_TAB_CLICK, "false"), v = (0, a.useStateFromStores)([o.default], () => o.default.useReducedMotion), G = _.map(e => {
    switch (e) {
      case x.GuildShopTab.GUILD_PRODUCTS:
        return (0, l.jsx)(j, {
          icon: (0, l.jsx)(I.default, {
            width: 20,
            height: 20
          }),
          title: R.default.Messages.GUILD_SHOP_PRODUCT_TYPE_SELECTOR_TITLE,
          body: R.default.Messages.GUILD_SHOP_PRODUCT_TYPE_BODY,
          selected: i === x.GuildShopTab.GUILD_PRODUCTS,
          onClick: () => r(x.GuildShopTab.GUILD_PRODUCTS)
        }, e);
      case x.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS:
        return (0, l.jsx)(j, {
          icon: (0, l.jsx)(p.default, {
            width: 20,
            height: 20
          }),
          title: R.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
          body: s ? R.default.Messages.GUILD_ROLE_SUB_TYPE_BODY_AFTER_CONSOLIDATION : R.default.Messages.GUILD_ROLE_SUB_TYPE_BODY.format({
            openRoleSubPage: () => (0, c.transitionTo)(T.Routes.CHANNEL(t.id, P.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
          }),
          disabled: !s,
          selected: i === x.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS,
          onClick: () => r(x.GuildShopTab.GUILD_ROLE_SUBSCRIPTIONS)
        }, e);
      case x.GuildShopTab.GUILD_PRODUCTS_PREVIEW:
        return (0, l.jsx)(j, {
          icon: O ? (0, l.jsx)("img", {
            src: v ? (0, u.getAssetCDNUrl)("server_products/storefront/question-mark.png") : (0, u.getAssetCDNUrl)("server_products/storefront/question-mark.gif"),
            className: m.questionMark,
            alt: ""
          }) : (0, l.jsx)(f.default, {
            width: 20,
            height: 20
          }),
          title: R.default.Messages.GUILD_SHOP_PRODUCT_TYPE_SELECTOR_TITLE,
          body: R.default.Messages.GUILD_STORE_PREVIEW_TAB_SELECTOR_BODY,
          selected: i === x.GuildShopTab.GUILD_PRODUCTS_PREVIEW,
          onClick: () => {
            r(x.GuildShopTab.GUILD_PRODUCTS_PREVIEW), n.Storage.set(g.GUILD_SHOP_PRODUCT_PREVIEW_TAB_CLICK, "true")
          },
          onPreviewDismiss: h,
          isNew: O
        }, e);
      default:
        return null
    }
  });
  return (0, l.jsxs)("div", {
    className: m.container,
    children: [(0, l.jsx)(d.Heading, {
      variant: "heading-sm/bold",
      className: m.header,
      children: R.default.Messages.GUILD_SHOP_SUPPORT_SERVER_HEADER
    }), (0, l.jsx)(C.default, {
      size: 12
    }), (0, l.jsxs)("div", {
      className: m.filters,
      children: [(0, l.jsx)("div", {
        className: m.tabs,
        children: G
      }), i === x.GuildShopTab.GUILD_PRODUCTS && (0, l.jsx)(E.default, {})]
    })]
  })
}