t.d(e, {
    Jf: function () {
        return m;
    },
    KK: function () {
        return u;
    },
    KW: function () {
        return c;
    },
    OL: function () {
        return p;
    },
    PB: function () {
        return d;
    },
    bZ: function () {
        return s;
    },
    z0: function () {
        return f;
    }
}),
    t(789020);
var l = t(512722),
    i = t.n(l),
    r = t(55563),
    a = t(630388),
    o = t(981631);
function s(n) {
    let e = n.items;
    return i()(1 === e.length, 'more than 1 subscription item for application subscription'), e[0].planId;
}
function u(n) {
    return (0, a.yE)(n, o.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}
function c(n) {
    return (0, a.yE)(n, o.l4R.APPLICATION_USER_SUBSCRIPTION);
}
function d(n, e, t, l, i) {
    var a;
    if (t.type === o.NYc.APPLICATION && t.status === o.O0b.ACTIVE && !!l.isValid(null, r.Z) && (null === (a = t.metadata) || void 0 === a ? void 0 : a.application_subscription_guild_id) === i)
        return t.items
            .map((e) => n.get(e.planId))
            .filter((n) => null != n)
            .find((n) => {
                let t = e.get(n.skuId);
                return null != t && (!u(t.flags) || l.guildId === i);
            });
}
function f(n, e, t) {
    var l;
    return null === (l = t.renewalMutations) || void 0 === l
        ? void 0
        : l.items
              .map((e) => n.get(e.planId))
              .filter((n) => null != n)
              .find((n) => e.includes(n.skuId));
}
function p(n) {
    return !1 === n.available;
}
function m(n, e) {
    var t;
    let l = null !== (t = null == e ? void 0 : e.deleted) && void 0 !== t && t,
        i = null != e && p(e);
    return n.status === o.O0b.CANCELED || l || i;
}
