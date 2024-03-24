"use strict";
s.r(t), s.d(t, {
  GuildProductsSettingsOverview: function() {
    return D
  }
}), s("222007"), s("794252");
var a, l, n = s("37983"),
  i = s("884691"),
  r = s("506838"),
  o = s("65597"),
  d = s("77078"),
  u = s("741515"),
  c = s("218567"),
  E = s("97031"),
  _ = s("283962"),
  I = s("258984"),
  T = s("592407"),
  S = s("479756"),
  f = s("507950"),
  m = s("393414"),
  N = s("305961"),
  g = s("697218"),
  h = s("701909"),
  C = s("442379"),
  R = s("533161"),
  x = s("166364"),
  L = s("691659"),
  O = s("49111"),
  A = s("724210"),
  p = s("782340"),
  M = s("384600");

function D(e) {
  let {
    guildId: t,
    hasValidApplication: s
  } = e, {
    listingsLoaded: a
  } = (0, C.useFetchGuildProductListingsForGuild)(t), l = (0, o.useStateFromStores)([N.default], () => N.default.getGuild(t)), D = (0, o.useStateFromStores)([g.default], () => g.default.getCurrentUser()), v = (null == l ? void 0 : l.isOwner(D)) === !0, {
    loading: G
  } = (0, u.useMonetizationSettings)(t), [j, U] = i.useState(s ? "manage_listings" : "payment");
  (0, _.useNewOwnerOnboardingRequired)(l);
  let P = i.useCallback(() => {
    if (null == l) return;
    let e = N.default.getRole(l.id, l.getEveryoneRoleId());
    if (null == e) return;
    T.default.close();
    let t = {
      [e.id]: e
    };
    (0, S.startImpersonating)(l.id, {
      type: f.ImpersonateType.SERVER_SHOP,
      roles: t,
      initialTab: "guild_products",
      returnToSection: O.GuildSettingsSections.GUILD_PRODUCTS
    }), (0, m.transitionTo)(O.Routes.CHANNEL(l.id, A.StaticChannelRoute.GUILD_SHOP))
  }, [l]);
  if (!a || G) return (0, n.jsx)(d.Spinner, {});
  if (null == l) return null;
  let b = (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(d.FormTitle, {
        tag: d.FormTitleTags.H1,
        children: p.default.Messages.GUILD_PRODUCTS_TITLE
      }), (0, n.jsx)(d.FormText, {
        type: d.FormText.Types.DESCRIPTION,
        children: p.default.Messages.GUILD_PRODUCTS_SETTINGS_DESCRIPTION.format({
          monetizationPolicyLink: h.default.getArticleURL(O.HelpdeskArticles.CREATOR_POLICY),
          serverProductsSupportLink: h.default.getCreatorSupportArticleURL(O.HelpdeskArticles.SERVER_PRODUCTS)
        })
      })]
    }),
    B = (0, n.jsxs)(d.TabBar, {
      type: "top",
      look: "brand",
      className: M.tabBar,
      "aria-label": p.default.Messages.GUILD_PRODUCTS_TITLE,
      selectedItem: j,
      onItemSelect: U,
      children: [(0, n.jsx)(E.default, {
        id: "basic_info",
        disabledTooltip: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
        disabled: !s,
        children: p.default.Messages.GUILD_PRODUCTS_BASIC_INFO_SECTION
      }), (0, n.jsx)(E.default, {
        id: "manage_listings",
        disabledTooltip: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
        disabled: !s,
        children: p.default.Messages.GUILD_PRODUCTS_LISTINGS_SECTION
      }), v ? (0, n.jsx)(d.TabBar.Item, {
        id: "payment",
        className: M.tabBarItem,
        children: p.default.Messages.GUILD_PRODUCTS_PAYMENT_SECTION
      }) : null, s ? (0, n.jsx)("div", {
        className: M.previewButton,
        children: (0, n.jsx)(d.Button, {
          onClick: P,
          color: d.Button.Colors.PRIMARY,
          size: d.Button.Sizes.SMALL,
          look: d.Button.Looks.OUTLINED,
          children: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW
        })
      }) : null]
    }),
    y = (0, r.match)(j).with("basic_info", () => (0, n.jsx)(R.default, {
      guildId: t
    })).with("manage_listings", () => (0, n.jsx)(x.default, {
      guildId: t
    })).with("payment", () => (0, n.jsx)(L.default, {
      guildId: t
    })).exhaustive(),
    F = a ? (0, n.jsx)(d.TabBar.Panel, {
      id: j,
      children: y
    }) : (0, n.jsx)(d.Spinner, {});
  return (0, n.jsxs)(c.CreatorMonetizationSettingsDisabledContextProvider, {
    guildId: t,
    children: [b, (0, n.jsx)(I.default, {
      guild: l
    }), (0, n.jsx)("div", {
      className: M.tabBarContainer,
      children: B
    }), F]
  })
}(l = a || (a = {})).MANAGE_LISTINGS = "manage_listings", l.PAYMENT = "payment", l.BASIC_INFO = "basic_info"