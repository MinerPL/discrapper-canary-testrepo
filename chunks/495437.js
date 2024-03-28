"use strict";
r.r(e), r.d(e, {
  deleteGuildProductListing: function() {
    return c
  },
  fetchGuildProduct: function() {
    return o
  },
  fetchGuildProductsForGuild: function() {
    return l
  },
  updateGuildProductListing: function() {
    return a
  }
});
var n = r("570140"),
  u = r("881052"),
  i = r("824389");
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
    let r = await i.getGuildProductListing(t, e);
    return n.default.dispatch({
      type: "GUILD_PRODUCT_FETCH_SUCCESS",
      product: r
    }), r
  } catch (t) {
    throw n.default.dispatch({
      type: "GUILD_PRODUCT_FETCH_FAILURE",
      productId: e,
      error: new u.APIError(t)
    }), t
  }
};
async function a(t, e, r) {
  let u = await i.updateGuildProductListing(t, e, r);
  return n.default.dispatch({
    type: "GUILD_PRODUCT_UPDATE",
    product: u
  }), u
}
async function c(t, e) {
  return await i.deleteGuildProductListing(t, e), n.default.dispatch({
    type: "GUILD_PRODUCT_DELETE",
    productId: e
  }), !0
}