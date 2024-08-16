n.d(t, {
    XS: function () {
        return c;
    },
    Xv: function () {
        return d;
    },
    h6: function () {
        return _;
    }
});
var r = n(502087),
    i = n(684259),
    a = n(111361),
    s = n(981631),
    o = n(474936);
let l = !1,
    u = !1;
function c() {
    return l;
}
function d() {
    return u;
}
function _(e) {
    if (null == e) return s.mBz;
    let t = r.Z.getPremiumTypeOverride();
    return e.isStaff() && t === o.F_ ? (u ? o.wb : s.PRK) : null != e.premiumType && (0, a.I5)(e) ? (u ? o.m0[e.premiumType].fileSize : o.a1[e.premiumType].fileSize) : l ? s.WKe : s.mBz;
}
i.Z.subscribe({ location: 'PremiumFeatureUtils' }, (e) => {
    (l = e.enabled), (u = e.variant2);
});
