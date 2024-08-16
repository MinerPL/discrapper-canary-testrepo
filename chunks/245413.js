var r = n(957578).Buffer,
    i = n(292735);
e.exports = function (e, t, n, a) {
    if ((!r.isBuffer(e) && (e = r.from(e, 'binary')), t && (!r.isBuffer(t) && (t = r.from(t, 'binary')), 8 !== t.length))) throw RangeError('salt should be Buffer with 8 byte length');
    for (var s = n / 8, o = r.alloc(s), l = r.alloc(a || 0), u = r.alloc(0); s > 0 || a > 0; ) {
        var c = new i();
        c.update(u), c.update(e), t && c.update(t), (u = c.digest());
        var d = 0;
        if (s > 0) {
            var _ = o.length - s;
            (d = Math.min(s, u.length)), u.copy(o, _, 0, d), (s -= d);
        }
        if (d < u.length && a > 0) {
            var E = l.length - a,
                f = Math.min(a, u.length - d);
            u.copy(l, E, d, d + f), (a -= f);
        }
    }
    return (
        u.fill(0),
        {
            key: o,
            iv: l
        }
    );
};
