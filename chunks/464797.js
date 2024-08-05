t.d(n, {
  R: function() {
return u;
  },
  _: function() {
return d;
  }
});
var r = t(735250),
  a = t(470079),
  o = t(512722),
  i = t.n(o),
  s = t(442837),
  l = t(240864);
let c = a.createContext(void 0);

function d() {
  let e = a.useContext(c);
  return i()(null != e, 'GuildProductPurchaseContext not found'), e;
}

function u(e) {
  let {
children: n,
guildProductListingId: t,
...a
  } = e, o = (0, s.e7)([l.Z], () => l.Z.getGuildProduct(t));
  return i()(null != o, 'guildProductListing cannot be null'), (0, r.jsx)(c.Provider, {
value: {
  guildProductListing: o,
  ...a
},
children: n
  });
}