var n = r(466293),
    a = r(139069),
    o = r(703284),
    i = r(501979),
    _ = r(98368),
    E = r(433005),
    s = n ? n.prototype : void 0,
    c = s ? s.valueOf : void 0;
e.exports = function (e, t, r, n, s, I, u) {
    switch (r) {
        case '[object DataView]':
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case '[object ArrayBuffer]':
            if (e.byteLength != t.byteLength || !I(new a(e), new a(t))) break;
            return !0;
        case '[object Boolean]':
        case '[object Date]':
        case '[object Number]':
            return o(+e, +t);
        case '[object Error]':
            return e.name == t.name && e.message == t.message;
        case '[object RegExp]':
        case '[object String]':
            return e == t + '';
        case '[object Map]':
            var l = _;
        case '[object Set]':
            var R = 1 & n;
            if ((l || (l = E), e.size != t.size && !R)) break;
            var A = u.get(e);
            if (A) return A == t;
            (n |= 2), u.set(e, t);
            var T = i(l(e), l(t), n, s, I, u);
            return u.delete(e), T;
        case '[object Symbol]':
            if (c) return c.call(e) == c.call(t);
    }
    return !1;
};
