n.d(t, {
  AQ: function() {
return d;
  },
  KK: function() {
return u;
  },
  KW: function() {
return c;
  },
  Pw: function() {
return l;
  },
  bZ: function() {
return s;
  }
});
var r = n(512722),
  i = n.n(r),
  a = n(630388),
  o = n(981631);

function s(e) {
  let t = e.items;
  return i()(1 === t.length, 'more than 1 subscription item for application subscription'), t[0].planId;
}

function l(e) {
  var t;
  return null === (t = e.subscription_listings) || void 0 === t ? void 0 : t.find(e => e.published && (u(e.sku_flags) || c(e.sku_flags)) && e.subscription_plans[0].price > 0);
}

function u(e) {
  return (0, a.yE)(e, o.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}

function c(e) {
  return (0, a.yE)(e, o.l4R.APPLICATION_USER_SUBSCRIPTION);
}

function d(e, t, n) {
  return e.subscription_plans[0].sku_id === t.skuId && (u(e.sku_flags) ? null != n && t.guildId === n && n !== o.ME : !!c(e.sku_flags) && null == t.guildId);
}