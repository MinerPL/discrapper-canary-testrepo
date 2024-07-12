n.d(t, {
  t: function() {
return D;
  }
}), n(47120), n(627341);
var s, a, i = n(735250),
  r = n(470079),
  l = n(278074),
  o = n(399606),
  c = n(481060),
  d = n(76535),
  u = n(395586),
  _ = n(204875),
  I = n(715796),
  E = n(411667),
  T = n(434404),
  m = n(962086),
  N = n(225675),
  S = n(703656),
  h = n(430824),
  g = n(594174),
  C = n(63063),
  x = n(267101),
  p = n(294294),
  R = n(310800),
  f = n(833695),
  L = n(981631),
  O = n(176505),
  A = n(689938),
  M = n(583578);

function D(e) {
  let {
guildId: t,
hasValidApplication: n
  } = e, {
listingsLoaded: s
  } = (0, x.eD)(t), a = (0, o.e7)([h.Z], () => h.Z.getGuild(t)), D = (0, o.e7)([g.default], () => g.default.getCurrentUser()), v = (null == a ? void 0 : a.isOwner(D)) === !0, {
loading: j
  } = (0, d.H)(t), [Z, b] = r.useState(n ? 'manage_listings' : 'payment');
  (0, I.P)(a);
  let U = r.useCallback(() => {
if (null == a)
  return;
let e = h.Z.getRole(a.id, a.getEveryoneRoleId());
if (null == e)
  return;
T.Z.close();
let t = {
  [e.id]: e
};
(0, m.iD)(a.id, {
  type: N.z.SERVER_SHOP,
  roles: t,
  initialTab: 'guild_products',
  returnToSection: L.pNK.GUILD_PRODUCTS
}), (0, S.uL)(L.Z5c.CHANNEL(a.id, O.oC.GUILD_SHOP));
  }, [a]);
  if (!s || j)
return (0, i.jsx)(c.Spinner, {});
  if (null == a)
return null;
  let G = (0, i.jsxs)(i.Fragment, {
  children: [
    (0, i.jsx)(c.FormTitle, {
      tag: c.FormTitleTags.H1,
      children: A.Z.Messages.GUILD_PRODUCTS_TITLE
    }),
    (0, i.jsx)(c.FormText, {
      type: c.FormText.Types.DESCRIPTION,
      children: A.Z.Messages.GUILD_PRODUCTS_SETTINGS_DESCRIPTION.format({
        monetizationPolicyLink: C.Z.getArticleURL(L.BhN.CREATOR_POLICY),
        serverProductsSupportLink: C.Z.getCreatorSupportArticleURL(L.BhN.SERVER_PRODUCTS)
      })
    })
  ]
}),
P = (0, i.jsxs)(c.TabBar, {
  type: 'top',
  look: 'brand',
  className: M.tabBar,
  'aria-label': A.Z.Messages.GUILD_PRODUCTS_TITLE,
  selectedItem: Z,
  onItemSelect: b,
  children: [
    (0, i.jsx)(_.Z, {
      id: 'basic_info',
      disabledTooltip: A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
      disabled: !n,
      children: A.Z.Messages.GUILD_PRODUCTS_BASIC_INFO_SECTION
    }),
    (0, i.jsx)(_.Z, {
      id: 'manage_listings',
      disabledTooltip: A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_BASIC_INFO_NEEDS_APPLICATION,
      disabled: !n,
      children: A.Z.Messages.GUILD_PRODUCTS_LISTINGS_SECTION
    }),
    v ? (0, i.jsx)(c.TabBar.Item, {
      id: 'payment',
      className: M.tabBarItem,
      children: A.Z.Messages.GUILD_PRODUCTS_PAYMENT_SECTION
    }) : null,
    n ? (0, i.jsx)('div', {
      className: M.previewButton,
      children: (0, i.jsx)(c.Button, {
        onClick: U,
        color: c.Button.Colors.PRIMARY,
        size: c.Button.Sizes.SMALL,
        look: c.Button.Looks.OUTLINED,
        children: A.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_SECTION_PREVIEW
      })
    }) : null
  ]
}),
B = (0, l.EQ)(Z).with('basic_info', () => (0, i.jsx)(p.Z, {
  guildId: t
})).with('manage_listings', () => (0, i.jsx)(R.Z, {
  guildId: t
})).with('payment', () => (0, i.jsx)(f.Z, {
  guildId: t
})).exhaustive(),
y = s ? (0, i.jsx)(c.TabBar.Panel, {
  id: Z,
  children: B
}) : (0, i.jsx)(c.Spinner, {});
  return (0, i.jsxs)(u.AL, {
guildId: t,
children: [
  G,
  (0, i.jsx)(E.Z, {
    guild: a
  }),
  (0, i.jsx)('div', {
    className: M.tabBarContainer,
    children: P
  }),
  y
]
  });
}
(a = s || (s = {})).MANAGE_LISTINGS = 'manage_listings', a.PAYMENT = 'payment', a.BASIC_INFO = 'basic_info';