"use strict";
r.r(e), r.d(e, {
  deleteGuildProductListing: function() {
    return a
  },
  getGuildProductListing: function() {
    return d
  },
  getGuildProductListingsForGuild: function() {
    return c
  },
  requestDownloadUrl: function() {
    return s
  },
  updateGuildProductListing: function() {
    return o
  }
});
var n = r("544891"),
  u = r("881052"),
  i = r("73346"),
  l = r("981631");
let o = async (t, e, r) => {
  let {
    priceTier: i,
    imageName: o,
    createNewRole: a,
    unlinkRole: c,
    ...d
  } = r;
  try {
    return (await n.HTTP.patch({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
      body: {
        ...d,
        image_name: o,
        price_tier: i,
        create_new_role: a,
        unlink_role: c
      }
    })).body
  } catch (t) {
    throw new u.APIError(t)
  }
}, a = async (t, e) => {
  try {
    await n.HTTP.del({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
    })
  } catch (t) {
    throw new u.APIError(t)
  }
}, c = async t => {
  try {
    return (await (0, i.httpGetWithCountryCodeQuery)({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t)
    })).body.listings
  } catch (t) {
    throw new u.APIError(t)
  }
}, d = async (t, e) => {
  try {
    return (await (0, i.httpGetWithCountryCodeQuery)({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
    })).body
  } catch (t) {
    throw new u.APIError(t)
  }
}, s = async t => {
  let {
    guildId: e,
    productId: r,
    attachmentId: i
  } = t;
  try {
    return (await n.HTTP.post({
      url: l.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, r, i)
    })).body
  } catch (t) {
    throw new u.APIError(t)
  }
}