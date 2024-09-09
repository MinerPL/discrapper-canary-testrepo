o.d(t, {
    Bd: function () {
        return n;
    },
    UN: function () {
        return e;
    },
    xS: function () {
        return c;
    }
});
function e(r) {
    let t = r[3],
        o = 128 & r[2],
        e = 128 & r[4];
    return (e ? (o ? 5 : 7) : 7 & t) / (e ? 7 & t : o ? 5 : 7);
}
function n(r, t, o) {
    let e = 4 * r + 1,
        n = 6 + t * (5 + e),
        c = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, r >> 8, 255 & r, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, n >>> 24, (n >> 16) & 255, (n >> 8) & 255, 255 & n, 73, 68, 65, 84, 120, 1],
        i = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
        u = 1,
        a = 0;
    for (let r = 0, n = 0, i = e - 1; r < t; r++, i += e - 1)
        for (c.push(r + 1 < t ? 0 : 1, 255 & e, e >> 8, 255 & ~e, (e >> 8) ^ 255, 0), a = (a + u) % 65521; n < i; n++) {
            let r = 255 & o[n];
            c.push(r), (a = (a + (u = (u + r) % 65521)) % 65521);
        }
    for (let [r, t] of (c.push(a >> 8, 255 & a, u >> 8, 255 & u, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130),
    [
        [12, 29],
        [37, 41 + n]
    ])) {
        let o = -1;
        for (let e = r; e < t; e++) (o ^= c[e]), (o = ((o = (o >>> 4) ^ i[15 & o]) >>> 4) ^ i[15 & o]);
        (o = ~o), (c[t++] = o >>> 24), (c[t++] = (o >> 16) & 255), (c[t++] = (o >> 8) & 255), (c[t++] = 255 & o);
    }
    return 'data:image/png;base64,' + btoa(String.fromCharCode(...c));
}
function c(r) {
    let t = (function (r) {
        let { PI: t, min: o, max: n, cos: c, round: i } = Math,
            u = r[0] | (r[1] << 8) | (r[2] << 16),
            a = r[3] | (r[4] << 8),
            f = (63 & u) / 63,
            E = ((u >> 6) & 63) / 31.5 - 1,
            s = ((u >> 12) & 63) / 31.5 - 1,
            p = u >> 23,
            R = a >> 15,
            l = n(3, R ? (p ? 5 : 7) : 7 & a),
            _ = n(3, R ? 7 & a : p ? 5 : 7),
            d = p ? (15 & r[5]) / 15 : 1,
            O = (r[5] >> 4) / 15,
            m = p ? 6 : 5,
            I = 0,
            A = (t, o, e) => {
                let n = [];
                for (let c = 0; c < o; c++) for (let i = c ? 0 : 1; i * o < t * (o - c); i++) n.push((((r[m + (I >> 1)] >> ((1 & I++) << 2)) & 15) / 7.5 - 1) * e);
                return n;
            },
            v = A(l, _, ((u >> 18) & 31) / 31),
            T = A(3, 3, (((a >> 3) & 63) / 63) * 1.25),
            y = A(3, 3, (((a >> 9) & 63) / 63) * 1.25),
            N = p && A(5, 5, O),
            h = e(r),
            D = i(h > 1 ? 32 : 32 * h),
            S = i(h > 1 ? 32 / h : 32),
            b = new Uint8Array(D * S * 4),
            C = [],
            g = [];
        for (let r = 0, e = 0; r < S; r++)
            for (let i = 0; i < D; i++, e += 4) {
                let u = f,
                    a = E,
                    R = s,
                    O = d;
                for (let r = 0, o = n(l, p ? 5 : 3); r < o; r++) C[r] = c((t / D) * (i + 0.5) * r);
                for (let o = 0, e = n(_, p ? 5 : 3); o < e; o++) g[o] = c((t / S) * (r + 0.5) * o);
                for (let r = 0, t = 0; r < _; r++) for (let o = r ? 0 : 1, e = 2 * g[r]; o * _ < l * (_ - r); o++, t++) u += v[t] * C[o] * e;
                for (let r = 0, t = 0; r < 3; r++)
                    for (let o = r ? 0 : 1, e = 2 * g[r]; o < 3 - r; o++, t++) {
                        let r = C[o] * e;
                        (a += T[t] * r), (R += y[t] * r);
                    }
                if (p) for (let r = 0, t = 0; r < 5; r++) for (let o = r ? 0 : 1, e = 2 * g[r]; o < 5 - r; o++, t++) O += N[t] * C[o] * e;
                let m = u - (2 / 3) * a,
                    I = (3 * u - m + R) / 2,
                    A = I - R;
                (b[e] = n(0, 255 * o(1, I))), (b[e + 1] = n(0, 255 * o(1, A))), (b[e + 2] = n(0, 255 * o(1, m))), (b[e + 3] = n(0, 255 * o(1, O)));
            }
        return {
            w: D,
            h: S,
            rgba: b
        };
    })(r);
    return n(t.w, t.h, t.rgba);
}
