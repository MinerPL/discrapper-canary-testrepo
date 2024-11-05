n.d(t, {
    Ej: function () {
        return h;
    },
    Jf: function () {
        return f;
    },
    KK: function () {
        return u;
    },
    KW: function () {
        return c;
    },
    OL: function () {
        return d;
    },
    bZ: function () {
        return l;
    }
}),
    n(789020);
var r = n(512722),
    i = n.n(r);
n(55563);
var a = n(630388),
    s = n(74538),
    o = n(981631);
function l(e) {
    let t = e.items;
    return i()(1 === t.length, 'more than 1 subscription item for application subscription'), t[0].planId;
}
function u(e) {
    return (0, a.yE)(e, o.l4R.APPLICATION_GUILD_SUBSCRIPTION);
}
function c(e) {
    return (0, a.yE)(e, o.l4R.APPLICATION_USER_SUBSCRIPTION);
}
function d(e) {
    return !1 === e.available;
}
function f(e, t) {
    var n;
    let r = null !== (n = null == t ? void 0 : t.deleted) && void 0 !== n && n,
        i = null != t && d(t);
    return e.status === o.O0b.CANCELED || r || i;
}
function _(e, t) {
    var n, r;
    if (e.type === o.epS.SUBSCRIPTION) {
        let n = t.getForSKU(e.id);
        if (n.length > 0) {
            let e = n[0];
            return (0, s.aS)(e.id).amount;
        }
    }
    return null !== (r = null === (n = e.price) || void 0 === n ? void 0 : n.amount) && void 0 !== r ? r : 0;
}
function h(e, t, n) {
    return e.slice().sort((e, r) => {
        let i = t.get(e.skuId),
            a = null != i ? _(i, n) : 0,
            s = t.get(r.skuId);
        return a - (null != s ? _(s, n) : 0);
    });
}
