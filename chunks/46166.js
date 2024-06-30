var n = r(620014), _ = r(733892);
t.exports = function (t, e, r, a) {
    var i = r.length, o = i, E = !a;
    if (null == t)
        return !o;
    for (t = Object(t); i--;) {
        var s = r[i];
        if (E && s[2] ? s[1] !== t[s[0]] : !(s[0] in t))
            return !1;
    }
    for (; ++i < o;) {
        var c = (s = r[i])[0], I = t[c], R = s[1];
        if (E && s[2]) {
            if (void 0 === I && !(c in t))
                return !1;
        } else {
            var u = new n();
            if (a)
                var T = a(I, R, c, t, e, u);
            if (!(void 0 === T ? _(R, I, 3, a, u) : T))
                return !1;
        }
    }
    return !0;
};
