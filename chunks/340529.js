n.d(t, {
  z: function() {
return T;
  }
});
var r = n(735250);
n(470079);
var s = n(120356),
  i = n.n(s),
  o = n(399606),
  a = n(433517),
  l = n(481060),
  c = n(607070),
  d = n(357352),
  C = n(703656),
  u = n(652515),
  _ = n(847033),
  x = n(544978),
  f = n(307537),
  I = n(987513),
  p = n(895737),
  h = n(629481),
  m = n(981631),
  L = n(176505),
  E = n(689938),
  S = n(414890);

function g(e) {
  let {
icon: t,
title: n,
body: s,
selected: o,
disabled: a = !1,
onClick: c,
onPreviewDismiss: d,
isNew: C = !1
  } = e;
  return (0, r.jsxs)(l.ClickableContainer, {
onClick: a ? void 0 : c,
'aria-disabled': a,
className: i()(S.tab, {
  [S.selected]: o,
  [S.tabDisabled]: a,
  [S.preview]: !o && null != d
}),
'aria-label': n,
children: [
  (0, r.jsx)('div', {
    className: S.iconContainer,
    children: t
  }),
  (0, r.jsx)(l.Spacer, {
    size: 8,
    horizontal: !0
  }),
  (0, r.jsxs)('div', {
    children: [
      (0, r.jsx)(l.Text, {
        variant: 'text-sm/semibold',
        color: o ? 'always-white' : 'header-primary',
        children: n
      }),
      (0, r.jsx)(l.Text, {
        variant: 'text-xs/normal',
        color: o ? 'always-white' : a ? 'text-muted' : 'header-primary',
        children: s
      })
    ]
  }),
  C && (0, r.jsx)(l.TextBadge, {
    color: l.tokens.unsafe_rawColors.BRAND_260.css,
    className: S.newBadge,
    text: E.Z.Messages.NEW
  }),
  null != d && (0, r.jsx)(l.Clickable, {
    className: S.tabPreviewClose,
    onClick: d,
    'aria-label': E.Z.Messages.DISMISS,
    children: (0, r.jsx)(l.CircleXIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  })
]
  });
}

function T(e) {
  let {
guild: t
  } = e, n = (0, u.RF)(t.id, 'guild_shop_category_selector'), {
selectedTab: s,
setSelectedTab: i,
categoryTabs: T,
handlePreviewDismiss: v
  } = (0, _.m)(), R = 'false' === a.K.get(h.Hr, 'false'), j = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), P = T.map(e => {
switch (e) {
  case x.y.GUILD_PRODUCTS:
    return (0, r.jsx)(g, {
      icon: (0, r.jsx)(f.Z, {
        width: 20,
        height: 20
      }),
      title: E.Z.Messages.GUILD_SHOP_PRODUCT_TYPE_SELECTOR_TITLE,
      body: E.Z.Messages.GUILD_SHOP_PRODUCT_TYPE_BODY,
      selected: s === x.y.GUILD_PRODUCTS,
      onClick: () => i(x.y.GUILD_PRODUCTS)
    }, e);
  case x.y.GUILD_ROLE_SUBSCRIPTIONS:
    return (0, r.jsx)(g, {
      icon: (0, r.jsx)(I.Z, {
        width: 20,
        height: 20
      }),
      title: E.Z.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE,
      body: n ? E.Z.Messages.GUILD_ROLE_SUB_TYPE_BODY_AFTER_CONSOLIDATION : E.Z.Messages.GUILD_ROLE_SUB_TYPE_BODY.format({
        openRoleSubPage: () => (0, C.uL)(m.Z5c.CHANNEL(t.id, L.oC.ROLE_SUBSCRIPTIONS))
      }),
      disabled: !n,
      selected: s === x.y.GUILD_ROLE_SUBSCRIPTIONS,
      onClick: () => i(x.y.GUILD_ROLE_SUBSCRIPTIONS)
    }, e);
  case x.y.GUILD_PRODUCTS_PREVIEW:
    return (0, r.jsx)(g, {
      icon: R ? (0, r.jsx)('img', {
        src: j ? (0, d.b)('server_products/storefront/question-mark.png') : (0, d.b)('server_products/storefront/question-mark.gif'),
        className: S.questionMark,
        alt: ''
      }) : (0, r.jsx)(l.GiftIcon, {
        size: 'custom',
        color: 'currentColor',
        width: 20,
        height: 20
      }),
      title: E.Z.Messages.GUILD_SHOP_PRODUCT_TYPE_SELECTOR_TITLE,
      body: E.Z.Messages.GUILD_STORE_PREVIEW_TAB_SELECTOR_BODY,
      selected: s === x.y.GUILD_PRODUCTS_PREVIEW,
      onClick: () => {
        i(x.y.GUILD_PRODUCTS_PREVIEW), a.K.set(h.Hr, 'true');
      },
      onPreviewDismiss: v,
      isNew: R
    }, e);
  default:
    return null;
}
  });
  return (0, r.jsxs)('div', {
className: S.container,
children: [
  (0, r.jsx)(l.Heading, {
    variant: 'heading-sm/bold',
    className: S.header,
    children: E.Z.Messages.GUILD_SHOP_SUPPORT_SERVER_HEADER
  }),
  (0, r.jsx)(l.Spacer, {
    size: 12
  }),
  (0, r.jsxs)('div', {
    className: S.filters,
    children: [
      (0, r.jsx)('div', {
        className: S.tabs,
        children: P
      }),
      s === x.y.GUILD_PRODUCTS && (0, r.jsx)(p.Z, {})
    ]
  })
]
  });
}