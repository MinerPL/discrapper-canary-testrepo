"use strict";
r.r(e), r.d(e, {
  updateGuildProductListing: function() {
    return o
  },
  deleteGuildProductListing: function() {
    return c
  },
  getGuildProductListingsForGuild: function() {
    return a
  },
  getGuildProductListing: function() {
    return d
  },
  requestDownloadUrl: function() {
    return s
  }
});
var u = r("872717"),
  n = r("448993"),
  i = r("271560"),
  l = r("49111");
let o = async (t, e, r) => {
  let {
    priceTier: i,
    imageName: o,
    createNewRole: c,
    unlinkRole: a,
    ...d
  } = r;
  try {
    let r = await u.HTTP.patch({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e),
      body: {
        ...d,
        image_name: o,
        price_tier: i,
        create_new_role: c,
        unlink_role: a
      }
    });
    return r.body
  } catch (t) {
    throw new n.APIError(t)
  }
}, c = async (t, e) => {
  try {
    await u.HTTP.del({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
    })
  } catch (t) {
    throw new n.APIError(t)
  }
}, a = async t => {
  try {
    let e = await (0, i.httpGetWithCountryCodeQuery)({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t)
    });
    return e.body.listings
  } catch (t) {
    throw new n.APIError(t)
  }
}, d = async (t, e) => {
  try {
    let r = await (0, i.httpGetWithCountryCodeQuery)({
      url: l.Endpoints.GUILD_PRODUCT_LISTINGS(t, e)
    });
    return r.body
  } catch (t) {
    throw new n.APIError(t)
  }
}, s = async t => {
  let {
    guildId: e,
    productId: r,
    attachmentId: i
  } = t;
  try {
    let t = await u.HTTP.post({
      url: l.Endpoints.GUILD_PRODUCT_ATTACHMENT_DOWNLOAD(e, r, i)
    });
    return t.body
  } catch (t) {
    throw new n.APIError(t)
  }
}