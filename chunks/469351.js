"use strict";
s.r(t), s.d(t, {
  GuildProductsSettingsOverview: function() {
    return D
  }
}), s("47120"), s("627341");
var a, l, n = s("735250"),
  i = s("470079"),
  r = s("278074"),
  o = s("399606"),
  d = s("481060"),
  u = s("76535"),
  c = s("395586"),
  E = s("204875"),
  _ = s("715796"),
  I = s("411667"),
  T = s("434404"),
  S = s("962086"),
  f = s("225675"),
  m = s("703656"),
  N = s("430824"),
  g = s("594174"),
  h = s("63063"),
  C = s("267101"),
  R = s("294294"),
  x = s("310800"),
  L = s("833695"),
  O = s("981631"),
  A = s("176505"),
  p = s("689938"),
  M = s("3562");

function D(e) {
  let {
    guildId: t,
    hasValidApplication: s
  } = e, {
    listingsLoaded: a
  } = (0, C.useFetchGuildProductListingsForGuild)(t), l = (0, o.useStateFromStores)([N.default], () => N.default.getGuild(t)), D = (0, o.useStateFromStores)([g.default], () => g.default.getCurrentUser()), v = (null == l ? void 0 : l.isOwner(D)) === !0, {
    loading: j
  } = (0, u.useMonetizationSettings)(t), [G, U] = i.useState(s ? "manage_listings" : "payment");
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
  if (!a || j) return (0, n.jsx)(d.Spinner, {});
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
      selectedItem: G,
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
    y = (0, r.match)(G).with("basic_info", () => (0, n.jsx)(R.default, {
      guildId: t
    })).with("manage_listings", () => (0, n.jsx)(x.default, {
      guildId: t
    })).with("payment", () => (0, n.jsx)(L.default, {
      guildId: t
    })).exhaustive(),
    F = a ? (0, n.jsx)(d.TabBar.Panel, {
      id: G,
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