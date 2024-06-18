"use strict";
n.d(t, {
  AQ: function() {
    return d
  },
  KK: function() {
    return u
  },
  KW: function() {
    return _
  },
  Pw: function() {
    return l
  },
  bZ: function() {
    return a
  }
});
var i = n(512722),
  r = n.n(i),
  s = n(630388),
  o = n(981631);

function a(e) {
  let t = e.items;
  return r()(1 === t.length, "more than 1 subscription item for application subscription"), t[0].planId
}

function l(e) {
  var t;
  return null === (t = e.subscription_listings) || void 0 === t ? void 0 : t.find(e => e.published && (u(e.sku_flags) || _(e.sku_flags)) && e.subscription_plans[0].price > 0)
}

function u(e) {
  return (0, s.yE)(e, o.l4R.APPLICATION_GUILD_SUBSCRIPTION)
}

function _(e) {
  return (0, s.yE)(e, o.l4R.APPLICATION_USER_SUBSCRIPTION)
}

function d(e, t, n) {
  return e.subscription_plans[0].sku_id === t.skuId && (u(e.sku_flags) ? null != n && t.guildId === n && n !== o.ME : !!_(e.sku_flags) && null == t.guildId)
}