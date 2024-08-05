n.d(t, {
  Z: function() {
return O;
  },
  m: function() {
return R;
  }
}), n(653041), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(512722),
  r = n.n(a),
  l = n(399606),
  o = n(704215),
  c = n(367907),
  u = n(605236),
  d = n(584825),
  _ = n(994592),
  E = n(160404),
  I = n(703656),
  m = n(984933),
  T = n(430824),
  h = n(626135),
  N = n(652515),
  C = n(550951),
  f = n(544978),
  p = n(333866),
  g = n(629481),
  S = n(981631);
let A = s.createContext(void 0);

function R() {
  let e = s.useContext(A);
  return r()(null != e, 'must use useGuildShopDisplayContext within a GuildShopDisplayContextProvider'), e;
}

function O(e) {
  var t;
  let {
children: n,
initialTab: a,
guildId: r
  } = e, R = (0, l.e7)([T.Z], () => T.Z.getGuild(r)), O = (0, l.e7)([E.Z], () => E.Z.isViewingServerShop(r)), x = (0, C.g)(R, 'guild_shop_page'), M = (0, N.RF)(r, 'guild_shop_page'), v = (null == R ? void 0 : R.hasFeature(S.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE)) === !0, L = (0, _.mY)(null == R ? void 0 : R.id), Z = null === (t = (0, d.YB)(r)) || void 0 === t ? void 0 : t.server_shop_tab_order, P = [], D = f.y.GUILD_SHOP_FULL_PREVIEW;
  O || v && L ? (P.push(Z === p.a3.PRODUCTS_FIRST ? f.y.GUILD_PRODUCTS : f.y.GUILD_ROLE_SUBSCRIPTIONS), P.push(Z === p.a3.PRODUCTS_FIRST ? f.y.GUILD_ROLE_SUBSCRIPTIONS : f.y.GUILD_PRODUCTS), D = P[0]) : v && !L ? (P.push(f.y.GUILD_PRODUCTS), D = f.y.GUILD_PRODUCTS) : !v && L && (P.push(f.y.GUILD_ROLE_SUBSCRIPTIONS), D = f.y.GUILD_ROLE_SUBSCRIPTIONS, x && P.push(f.y.GUILD_PRODUCTS_PREVIEW)), a = null != a ? a : D;
  let [b, j] = s.useState(a), U = x && !(L && M) || b === f.y.GUILD_PRODUCTS_PREVIEW;
  return s.useEffect(() => {
j(a);
  }, [a]), (0, i.jsx)(A.Provider, {
value: {
  selectedTab: b,
  setSelectedTab: j,
  categoryTabs: P,
  isPhantomPreview: U,
  handlePreviewDismiss: e => {
    (0, u.EW)(o.z.SERVER_SHOP_PHANTOM_PREVIEW);
    let t = {
      ...(0, c.hH)(r)
    };
    if (b === f.y.GUILD_PRODUCTS_PREVIEW)
      e.stopPropagation(), j(f.y.GUILD_ROLE_SUBSCRIPTIONS), t.action_taken = g.mz.DISMISS_TAB_PREVIEW;
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