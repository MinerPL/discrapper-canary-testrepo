n.d(t, {
    XS: function () {
        return u;
    },
    h6: function () {
        return c;
    }
});
var r = n(502087),
    i = n(684259),
    a = n(111361),
    s = n(981631),
    o = n(474936);
let l = !1;
function u() {
    return l;
}
function c(e) {
    if (null == e) return s.mBz;
    let t = r.Z.getPremiumTypeOverride();
    return e.isStaff() && t === o.F_ ? s.PRK : null != e.premiumType && (0, a.I5)(e) ? o.a1[e.premiumType].fileSize : l ? s.WKe : s.mBz;
}
i.Z.subscribe({ location: 'PremiumFeatureUtils' }, (e) => {
    l = e.enabled;
});
