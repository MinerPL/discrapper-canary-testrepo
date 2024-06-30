t.d(n, {
    xS: function () {
        return l;
    }
});
function l(e) {
    let n = function (e) {
        let {
                PI: n,
                min: t,
                max: l,
                cos: s,
                round: a
            } = Math, i = e[0] | e[1] << 8 | e[2] << 16, r = e[3] | e[4] << 8, o = (63 & i) / 63, u = (i >> 6 & 63) / 31.5 - 1, c = (i >> 12 & 63) / 31.5 - 1, d = i >> 23, m = r >> 15, E = l(3, m ? d ? 5 : 7 : 7 & r), _ = l(3, m ? 7 & r : d ? 5 : 7), S = d ? (15 & e[5]) / 15 : 1, g = (e[5] >> 4) / 15, h = d ? 6 : 5, C = 0, N = (n, t, l) => {
                let s = [];
                for (let a = 0; a < t; a++)
                    for (let i = a ? 0 : 1; i * t < n * (t - a); i++)
                        s.push(((e[h + (C >> 1)] >> ((1 & C++) << 2) & 15) / 7.5 - 1) * l);
                return s;
            }, Z = N(E, _, (i >> 18 & 31) / 31), I = N(3, 3, (r >> 3 & 63) / 63 * 1.25), x = N(3, 3, (r >> 9 & 63) / 63 * 1.25), f = d && N(5, 5, g), A = function (e) {
                let n = e[3], t = 128 & e[2], l = 128 & e[4];
                return (l ? t ? 5 : 7 : 7 & n) / (l ? 7 & n : t ? 5 : 7);
            }(e), R = a(A > 1 ? 32 : 32 * A), T = a(A > 1 ? 32 / A : 32), v = new Uint8Array(R * T * 4), L = [], M = [];
        for (let e = 0, a = 0; e < T; e++)
            for (let i = 0; i < R; i++, a += 4) {
                let r = o, m = u, g = c, h = S;
                for (let e = 0, t = l(E, d ? 5 : 3); e < t; e++)
                    L[e] = s(n / R * (i + 0.5) * e);
                for (let t = 0, a = l(_, d ? 5 : 3); t < a; t++)
                    M[t] = s(n / T * (e + 0.5) * t);
                for (let e = 0, n = 0; e < _; e++)
                    for (let t = e ? 0 : 1, l = 2 * M[e]; t * _ < E * (_ - e); t++, n++)
                        r += Z[n] * L[t] * l;
                for (let e = 0, n = 0; e < 3; e++)
                    for (let t = e ? 0 : 1, l = 2 * M[e]; t < 3 - e; t++, n++) {
                        let e = L[t] * l;
                        m += I[n] * e, g += x[n] * e;
                    }
                if (d)
                    for (let e = 0, n = 0; e < 5; e++)
                        for (let t = e ? 0 : 1, l = 2 * M[e]; t < 5 - e; t++, n++)
                            h += f[n] * L[t] * l;
                let C = r - 2 / 3 * m, N = (3 * r - C + g) / 2, A = N - g;
                v[a] = l(0, 255 * t(1, N)), v[a + 1] = l(0, 255 * t(1, A)), v[a + 2] = l(0, 255 * t(1, C)), v[a + 3] = l(0, 255 * t(1, h));
            }
        return {
            w: R,
            h: T,
            rgba: v
        };
    }(e);
    return function (e, n, t) {
        let l = 4 * e + 1, s = 6 + n * (5 + l), a = [
                137,
                80,
                78,
                71,
                13,
                10,
                26,
                10,
                0,
                0,
                0,
                13,
                73,
                72,
                68,
                82,
                0,
                0,
                e >> 8,
                255 & e,
                0,
                0,
                n >> 8,
                255 & n,
                8,
                6,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                s >>> 24,
                s >> 16 & 255,
                s >> 8 & 255,
                255 & s,
                73,
                68,
                65,
                84,
                120,
                1
            ], i = [
                0,
                498536548,
                997073096,
                651767980,
                1994146192,
                1802195444,
                1303535960,
                1342533948,
                -306674912,
                -267414716,
                -690576408,
                -882789492,
                -1687895376,
                -2032938284,
                -1609899400,
                -1111625188
            ], r = 1, o = 0;
        for (let e = 0, s = 0, i = l - 1; e < n; e++, i += l - 1)
            for (a.push(e + 1 < n ? 0 : 1, 255 & l, l >> 8, 255 & ~l, l >> 8 ^ 255, 0), o = (o + r) % 65521; s < i; s++) {
                let e = 255 & t[s];
                a.push(e), o = (o + (r = (r + e) % 65521)) % 65521;
            }
        for (let [e, n] of (a.push(o >> 8, 255 & o, r >> 8, 255 & r, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                [
                    12,
                    29
                ],
                [
                    37,
                    41 + s
                ]
            ])) {
            let t = -1;
            for (let l = e; l < n; l++)
                t ^= a[l], t = (t = t >>> 4 ^ i[15 & t]) >>> 4 ^ i[15 & t];
            t = ~t, a[n++] = t >>> 24, a[n++] = t >> 16 & 255, a[n++] = t >> 8 & 255, a[n++] = 255 & t;
        }
        return 'data:image/png;base64,' + btoa(String.fromCharCode(...a));
    }(n.w, n.h, n.rgba);
}
