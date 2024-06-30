var n = r(196322), _ = r(443735), a = r(402428), i = r(830911), o = r(406705), E = r(828091);
t.exports = function (t, e, r) {
    e = n(e, t);
    for (var s = -1, c = e.length, I = !1; ++s < c;) {
        var R = E(e[s]);
        if (!(I = null != t && r(t, R)))
            break;
        t = t[R];
    }
    return I || ++s != c ? I : !!(c = null == t ? 0 : t.length) && o(c) && i(R, c) && (a(t) || _(t));
};
