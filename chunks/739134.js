var r = n(223428), i = n(706178), a = n(108381), o = n(855467), s = n(972566), l = n(814033), u = n(895598), c = n(530917), d = n(957578).Buffer;
e.exports = function (e, t, n) {
    _ = e.padding ? e.padding : n ? 1 : 4;
    var _, E, f = r(e);
    if (4 === _)
        E = function (e, t) {
            var n = e.modulus.byteLength(), r = t.length, u = a('sha1').update(d.alloc(0)).digest(), c = u.length, _ = 2 * c;
            if (r > n - _ - 2)
                throw Error('message too long');
            var E = d.alloc(n - r - _ - 2), f = n - c - 1, h = i(c), p = s(d.concat([
                    u,
                    E,
                    d.alloc(1, 1),
                    t
                ], f), o(h, f)), m = s(h, o(p, c));
            return new l(d.concat([
                d.alloc(1),
                m,
                p
            ], n));
        }(f, t);
    else if (1 === _)
        E = function (e, t, n) {
            var r, a = t.length, o = e.modulus.byteLength();
            if (a > o - 11)
                throw Error('message too long');
            return r = n ? d.alloc(o - a - 3, 255) : function (e) {
                for (var t, n = d.allocUnsafe(e), r = 0, a = i(2 * e), o = 0; r < e;)
                    o === a.length && (a = i(2 * e), o = 0), (t = a[o++]) && (n[r++] = t);
                return n;
            }(o - a - 3), new l(d.concat([
                d.from([
                    0,
                    n ? 1 : 2
                ]),
                r,
                d.alloc(1),
                t
            ], o));
        }(f, t, n);
    else if (3 === _) {
        if ((E = new l(t)).cmp(f.modulus) >= 0)
            throw Error('data too long for modulus');
    } else
        throw Error('unknown padding');
    return n ? c(E, f) : u(E, f);
};
