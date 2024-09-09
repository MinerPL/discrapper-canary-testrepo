t.d(n, {
    AQ: function () {
        return d;
    },
    Jf: function () {
        return p;
    },
    KK: function () {
        return u;
    },
    KW: function () {
        return c;
    },
    OL: function () {
        return f;
    },
    Pw: function () {
        return a;
    },
    bZ: function () {
        return o;
    }
});
var i = t(512722),
    l = t.n(i),
    r = t(630388),
    s = t(981631);
function o(e) {
    let n = e.items;
    return l()(1 === n.length, 'more than 1 subscription item for application subscription'), n[0].planId;
}
function a(e) {
    var n;
    return null === (n = e.subscription_listings) || void 0 === n ? void 0 : n.find((e) => e.published && (u(e.sku_flags) || c(e.sku_flags)) && e.subscription_plans[0].price > 0);
}
function u(e) {
    return (0, r.yE)(e, s.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}
function c(e) {
    return (0, r.yE)(e, s.l4R.APPLICATION_USER_SUBSCRIPTION);
}
function d(e, n, t) {
    return e.subscription_plans[0].sku_id === n.skuId && (u(e.sku_flags) ? null != t && n.guildId === t && t !== s.ME : !!c(e.sku_flags) && null == n.guildId);
}
function f(e) {
    return !1 === e.available;
}
function p(e, n) {
    var t;
    let i = null !== (t = null == n ? void 0 : n.deleted) && void 0 !== t && t,
        l = null != n && f(n);
    return e.status === s.O0b.CANCELED || i || l;
}
