n.d(e, {
    n: function () {
        return s;
    }
});
var r = n(180450),
    i = n(942351),
    o = n(362133);
function s(t, e, n, s) {
    var h, u, f, l, a;
    let c;
    let {
            c: d,
            dkLen: p,
            DK: g,
            PRF: y,
            PRFSalt: b
        } = (function (t, e, n, s) {
            (0, r.vp)(t);
            let {
                c: h,
                dkLen: u,
                asyncTick: f
            } = (0, o.U5)(
                {
                    dkLen: 32,
                    asyncTick: 10
                },
                s
            );
            if (((0, r.Rx)(h), (0, r.Rx)(u), (0, r.Rx)(f), h < 1)) throw Error('PBKDF2: iterations (c) should be >= 1');
            let l = (0, o.O0)(e),
                a = (0, o.O0)(n),
                c = new Uint8Array(u),
                d = i.b.create(t, l),
                p = d._cloneInto().update(a);
            return {
                c: h,
                dkLen: u,
                asyncTick: f,
                DK: c,
                PRF: d,
                PRFSalt: p
            };
        })(t, e, n, s),
        w = new Uint8Array(4),
        G = (0, o.GL)(w),
        L = new Uint8Array(y.outputLen);
    for (let t = 1, e = 0; e < p; t++, e += y.outputLen) {
        let n = g.subarray(e, e + y.outputLen);
        G.setInt32(0, t, !1), (c = b._cloneInto(c)).update(w).digestInto(L), n.set(L.subarray(0, n.length));
        for (let t = 1; t < d; t++) {
            y._cloneInto(c).update(L).digestInto(L);
            for (let t = 0; t < n.length; t++) n[t] ^= L[t];
        }
    }
    return (h = y), (u = b), (f = g), (l = c), (a = L), h.destroy(), u.destroy(), l && l.destroy(), a.fill(0), f;
}
