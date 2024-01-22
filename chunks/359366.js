"use strict";
u.r(e), u.d(e, {
  fetchGuildProductsForGuild: function() {
    return l
  },
  fetchGuildProduct: function() {
    return o
  },
  updateGuildProductListing: function() {
    return c
  },
  deleteGuildProductListing: function() {
    return a
  }
});
var n = u("913144"),
  r = u("448993"),
  i = u("242278");
let l = async t => {
  n.default.dispatch({
    type: "GUILD_PRODUCTS_FETCH",
    guildId: t
  });
  try {
    let e = await i.getGuildProductListingsForGuild(t);
    n.default.dispatch({
      type: "GUILD_PRODUCTS_FETCH_SUCCESS",
      guildId: t,
      products: e
    })
  } catch (e) {
    n.default.dispatch({
      type: "GUILD_PRODUCTS_FETCH_FAILURE",
      guildId: t
    })
  }
}, o = async (t, e) => {
  n.default.dispatch({
    type: "GUILD_PRODUCT_FETCH",
    productId: e
  });
  try {
    let u = await i.getGuildProductListing(t, e);
    return n.default.dispatch({
      type: "GUILD_PRODUCT_FETCH_SUCCESS",
      product: u
    }), u
  } catch (t) {
    throw n.default.dispatch({
      type: "GUILD_PRODUCT_FETCH_FAILURE",
      productId: e,
      error: new r.APIError(t)
    }), t
  }
};
async function c(t, e, u) {
  let r = await i.updateGuildProductListing(t, e, u);
  return n.default.dispatch({
    type: "GUILD_PRODUCT_UPDATE",
    product: r
  }), r
}
async function a(t, e) {
  return await i.deleteGuildProductListing(t, e), n.default.dispatch({
    type: "GUILD_PRODUCT_DELETE",
    productId: e
  }), !0
}