var e = r(299623),
    o = r(980855),
    i = r(49693),
    u = function (t) {
        return function (n, r, u) {
            var c,
                f = e(n),
                a = i(f),
                s = o(u, a);
            if (t && r != r) {
                for (; a > s; ) if ((c = f[s++]) != c) return !0;
            } else for (; a > s; s++) if ((t || s in f) && f[s] === r) return t || s || 0;
            return !t && -1;
        };
    };
t.exports = {
    includes: u(!0),
    indexOf: u(!1)
};
