"use strict";
t.d(s, {
  t: function() {
    return v
  }
}), t(47120), t(627341);
var n, i, l = t(735250),
  a = t(470079),
  r = t(278074),
  o = t(399606),
  c = t(481060),
  d = t(76535),
  u = t(395586),
  E = t(204875),
  _ = t(715796),
  I = t(411667),
  T = t(434404),
  N = t(962086),
  m = t(225675),
  S = t(703656),
  h = t(430824),
  g = t(594174),
  x = t(63063),
  C = t(267101),
  R = t(294294),
  L = t(310800),
  O = t(833695),
  A = t(981631),
  p = t(176505),
  M = t(689938),
  f = t(594567);

function v(e) {
  let {
    guildId: s,
    hasValidApplication: t
  } = e, {
    listingsLoaded: n
  } = (0, C.eD)(s), i = (0, o.e7)([h.Z], () => h.Z.getGuild(s)), v = (0, o.e7)([g.default], () => g.default.getCurrentUser()), D = (null == i ? void 0 : i.isOwner(v)) === !0, {
    loading: Z
  } = (0, d.H)(s), [j, U] = a.useState(t ? "manage_listings" : "payment");
  (0, _.P)(i);
  let G = a.useCallback(() => {
    if (null == i) return;
    let e = h.Z.getRole(i.id, i.getEveryoneRoleId());
    if (null == e) return;
    T.Z.close();
    let s = {
      [e.id]: e
    };
    (0, N.iD)(i.id, {
      type: m.z.SERVER_SHOP,
      roles: s,
      initialTab: "guild_products",
      returnToSection: A.pNK.GUILD_PRODUCTS
    }), (0, S.uL)(A.Z5c.CHANNEL(i.id, p.oC.GUILD_SHOP))
  }, [i]);
  if (!n || Z) return (0, l.jsx)(c.Spinner, {});
  if (null == i) return null;
  let P = (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(c.FormTitle, {
        tag: c.FormTitleTags.H1,
        children: M.Z.Messages.GUILD_PRODUCTS_TITLE
      }), (0, l.jsx)(c.FormText, {
        type: c.FormText.Types.DESCRIPTION,
        children: M.Z.Messages.GUILD_PRODUCTS_SETTINGS_DESCRIPTION.format({
          monetizationPolicyLink: x.Z.getArticleURL(A.BhN.CREATOR_POLICY),
          serverProductsSupportLink: x.Z.getCreatorSupportArticleURL(A.BhN.SERVER_PRODUCTS)
        })
      })]
    }),
    b = (0, l.jsxs)(c.TabBar, {
      type: "top",
      look: "brand",
      className: f.tabBar,
      "aria-label": M.Z.Messages.GUILD_PRODUCTS_TITLE,
      selectedItem: j,
      onItemSelect: U,
      children: [(0, l.jsx)(E.Z, {
        id: "basic_info",
        disabledTooltip: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
        disabled: !t,
        children: M.Z.Messages.GUILD_PRODUCTS_BASIC_INFO_SECTION
      }), (0, l.jsx)(E.Z, {
        id: "manage_listings",
        disabledTooltip: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
        disabled: !t,
        children: M.Z.Messages.GUILD_PRODUCTS_LISTINGS_SECTION
      }), D ? (0, l.jsx)(c.TabBar.Item, {
        id: "payment",
        className: f.tabBarItem,
        children: M.Z.Messages.GUILD_PRODUCTS_PAYMENT_SECTION
      }) : null, t ? (0, l.jsx)("div", {
        className: f.previewButton,
        children: (0, l.jsx)(c.Button, {
          onClick: G,
          color: c.Button.Colors.PRIMARY,
          size: c.Button.Sizes.SMALL,
          look: c.Button.Looks.OUTLINED,
          children: M.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW
        })
      }) : null]
    }),
    B = (0, r.EQ)(j).with("basic_info", () => (0, l.jsx)(R.Z, {
      guildId: s
    })).with("manage_listings", () => (0, l.jsx)(L.Z, {
      guildId: s
    })).with("payment", () => (0, l.jsx)(O.Z, {
      guildId: s
    })).exhaustive(),
    y = n ? (0, l.jsx)(c.TabBar.Panel, {
      id: j,
      children: B
    }) : (0, l.jsx)(c.Spinner, {});
  return (0, l.jsxs)(u.AL, {
    guildId: s,
    children: [P, (0, l.jsx)(I.Z, {
      guild: i
    }), (0, l.jsx)("div", {
      className: f.tabBarContainer,
      children: b
    }), y]
  })
}(i = n || (n = {})).MANAGE_LISTINGS = "manage_listings", i.PAYMENT = "payment", i.BASIC_INFO = "basic_info"