"use strict";
r.r(t), r.d(t, {
  GuildProductPurchaseContextProvider: function() {
    return o
  },
  useGuildProductPurchaseContext: function() {
    return d
  }
});
var n = r("735250"),
  s = r("470079"),
  a = r("512722"),
  l = r.n(a),
  u = r("442837"),
  i = r("240864");
let c = s.createContext(void 0);

function d() {
  let e = s.useContext(c);
  return l()(null != e, "GuildProductPurchaseContext not found"), e
}

function o(e) {
  let {
    children: t,
    guildProductListingId: r,
    ...s
  } = e, a = (0, u.useStateFromStores)([i.default], () => i.default.getGuildProduct(r));
  return l()(null != a, "guildProductListing cannot be null"), (0, n.jsx)(c.Provider, {
    value: {
      guildProductListing: a,
      ...s
    },
    children: t
  })
}