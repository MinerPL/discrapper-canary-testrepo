n.d(t, {
  Z: function() {
return x;
  },
  m: function() {
return R;
  }
}), n(653041), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(512722),
  r = n.n(s),
  l = n(399606),
  o = n(704215),
  c = n(367907),
  d = n(605236),
  u = n(584825),
  _ = n(994592),
  E = n(160404),
  I = n(703656),
  m = n(984933),
  T = n(430824),
  h = n(626135),
  N = n(652515),
  f = n(550951),
  p = n(544978),
  C = n(333866),
  g = n(629481),
  S = n(981631);
let A = a.createContext(void 0);

function R() {
  let e = a.useContext(A);
  return r()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}

function x(e) {
  var t;
  let {
children: n,
initialTab: s,
guildId: r
  } = e, R = (0, l.e7)([T.Z], () => T.Z.getGuild(r)), x = (0, l.e7)([E.Z], () => E.Z.isViewingServerShop(r)), O = (0, f.g)(R, 'guild_shop_page'), M = (0, N.RF)(r, 'guild_shop_page'), v = (null == R ? void 0 : R.hasFeature(S.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, L = (0, _.mY)(null == R ? void 0 : R.id), Z = null === (t = (0, u.YB)(r)) || void 0 === t ? void 0 : t.server_shop_tab_order, P = [], b = p.y.GUILD_SHOP_FULL_PREVIEW;
  x || v && L ? (P.push(Z === C.a3.PRODUCTS_FIRST ? p.y.GUILD_PRODUCTS : p.y.GUILD_ROLE_SUBSCRIPTIONS), P.push(Z === C.a3.PRODUCTS_FIRST ? p.y.GUILD_ROLE_SUBSCRIPTIONS : p.y.GUILD_PRODUCTS), b = P[0]) : v && !L ? (P.push(p.y.GUILD_PRODUCTS), b = p.y.GUILD_PRODUCTS) : !v && L && (P.push(p.y.GUILD_ROLE_SUBSCRIPTIONS), b = p.y.GUILD_ROLE_SUBSCRIPTIONS, O && P.push(p.y.GUILD_PRODUCTS_PREVIEW)), s = null != s ? s : b;
  let [D, j] = a.useState(s), U = O && !(L && M) || D === p.y.GUILD_PRODUCTS_PREVIEW;
  return a.useEffect(() => {
j(s);
  }, [s]), (0, i.jsx)(A.Provider, {
value: {
  selectedTab: D,
  setSelectedTab: j,
  categoryTabs: P,
  isPhantomPreview: U,
  handlePreviewDismiss: e => {
    (0, d.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW);
    let t = {
      ...(0, c.hH)(r)
    };
    if (D === p.y.GUILD_PRODUCTS_PREVIEW)
      e.stopPropagation(), j(p.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = g.mz.DISMISS_TAB_PREVIEW;
    else {
      var n;
      (0, I.dL)(S.Z5c.CHANNEL(r, null === (n = m.ZP.getDefaultChannel(r)) || void 0 === n ? void 0 : n.id)), t.action_taken = g.mz.DISMISS_FULL_PREVIEW;
    }
    h.default.track(S.rMx.GUILD_SHOP_PREVIEW_CLICK, t);
  }
},
children: n
  });
}