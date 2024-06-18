"use strict";

function i(e) {
  let {
    id: t,
    username: n,
    discriminator: i,
    globalName: r,
    avatar: s,
    avatarDecoration: o,
    bot: a,
    flags: l,
    premiumType: u
  } = e;
  return {
    id: t,
    username: n,
    discriminator: i,
    global_name: r,
    avatar: s,
    avatar_decoration_data: null != o ? {
      asset: o.asset,
      sku_id: o.skuId
    } : null,
    bot: a,
    flags: l,
    premium_type: null != u ? u : 0
  }
}
n.d(t, {
  Z: function() {
    return i
  }
}), n(789020)