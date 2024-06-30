n.d(t, {
    Z: function () {
        return l;
    }
}), n(47120);
var i = n(553813), s = n.n(i), a = n(358085);
let r = { [a.PlatformTypes.WINDOWS]: { nvidia: '<=537.58.0 || >=546.31' } };
function l(e) {
    let t = r[(0, a.getPlatform)()];
    if (null == t)
        return !1;
    for (let n of Object.keys(e)) {
        let i = e[n], a = t[n];
        if (null == i || null == a || null != i.error)
            continue;
        let r = function (e) {
            var t, n;
            return ''.concat(null !== (t = e.major) && void 0 !== t ? t : 0, '.').concat(null !== (n = e.minor) && void 0 !== n ? n : 0, '.0');
        }(i);
        if (!s().satisfies(r, a))
            return !0;
    }
    return !1;
}
