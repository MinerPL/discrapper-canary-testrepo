"use strict";
n.r(t), n.d(t, {
  useGuildProductPurchaseContext: function() {
    return d
  },
  GuildProductPurchaseContextProvider: function() {
    return c
  }
});
var r = n("37983"),
  u = n("884691"),
  a = n("627445"),
  i = n.n(a),
  l = n("446674"),
  s = n("565559");
let o = u.createContext(void 0);

function d() {
  let e = u.useContext(o);
  return i(null != e, "GuildProductPurchaseContext not found"), e
}

function c(e) {
  let {
    children: t,
    guildProductListingId: n,
    ...u
  } = e, a = (0, l.useStateFromStores)([s.default], () => s.default.getGuildProduct(n));
  return i(null != a, "guildProductListing cannot be null"), (0, r.jsx)(o.Provider, {
    value: {
      guildProductListing: a,
      ...u
    },
    children: t
  })
}