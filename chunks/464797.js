t.d(n, {
  R: function() {
return u;
  },
  _: function() {
return d;
  }
});
var o = t(735250),
  r = t(470079),
  a = t(512722),
  i = t.n(a),
  c = t(442837),
  s = t(240864);
let l = r.createContext(void 0);

function d() {
  let e = r.useContext(l);
  return i()(null != e, 'GuildProductPurchaseContext not found'), e;
}

function u(e) {
  let {
children: n,
guildProductListingId: t,
...r
  } = e, a = (0, c.e7)([s.Z], () => s.Z.getGuildProduct(t));
  return i()(null != a, 'guildProductListing cannot be null'), (0, o.jsx)(l.Provider, {
value: {
  guildProductListing: a,
  ...r
},
children: n
  });
}