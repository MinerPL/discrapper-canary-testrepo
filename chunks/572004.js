n.d(t, {
    JG: function () {
        return o;
    },
    wS: function () {
        return s;
    }
}),
    n(411104);
var r = n(852229),
    i = n(358085),
    a = n(998502);
let s = (() => {
    if (i.isPlatformEmbedded) return null != a.ZP.copy;
    try {
        return document.queryCommandEnabled('copy') || document.queryCommandSupported('copy');
    } catch (e) {
        return !1;
    }
})();
function o(e) {
    return !!s && (i.isPlatformEmbedded ? (a.ZP.copy(e), !0) : r.J(e));
}
