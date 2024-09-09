n.d(e, {
    E: function () {
        return f;
    }
});
var r = n(180450),
    i = n(241303),
    o = n(520589),
    s = n(362133);
function h(t, e, n, r, i, o) {
    let h = t[e++] ^ n[r++],
        u = t[e++] ^ n[r++],
        f = t[e++] ^ n[r++],
        l = t[e++] ^ n[r++],
        a = t[e++] ^ n[r++],
        c = t[e++] ^ n[r++],
        d = t[e++] ^ n[r++],
        p = t[e++] ^ n[r++],
        g = t[e++] ^ n[r++],
        y = t[e++] ^ n[r++],
        b = t[e++] ^ n[r++],
        w = t[e++] ^ n[r++],
        G = t[e++] ^ n[r++],
        L = t[e++] ^ n[r++],
        X = t[e++] ^ n[r++],
        U = t[e++] ^ n[r++],
        A = h,
        E = u,
        x = f,
        H = l,
        I = a,
        k = c,
        v = d,
        m = p,
        O = g,
        R = y,
        _ = b,
        B = w,
        C = G,
        J = L,
        j = X,
        D = U;
    for (let t = 0; t < 8; t += 2) (I ^= (0, s.XG)((A + C) | 0, 7)), (O ^= (0, s.XG)((I + A) | 0, 9)), (C ^= (0, s.XG)((O + I) | 0, 13)), (A ^= (0, s.XG)((C + O) | 0, 18)), (R ^= (0, s.XG)((k + E) | 0, 7)), (J ^= (0, s.XG)((R + k) | 0, 9)), (E ^= (0, s.XG)((J + R) | 0, 13)), (k ^= (0, s.XG)((E + J) | 0, 18)), (j ^= (0, s.XG)((_ + v) | 0, 7)), (x ^= (0, s.XG)((j + _) | 0, 9)), (v ^= (0, s.XG)((x + j) | 0, 13)), (_ ^= (0, s.XG)((v + x) | 0, 18)), (H ^= (0, s.XG)((D + B) | 0, 7)), (m ^= (0, s.XG)((H + D) | 0, 9)), (B ^= (0, s.XG)((m + H) | 0, 13)), (D ^= (0, s.XG)((B + m) | 0, 18)), (E ^= (0, s.XG)((A + H) | 0, 7)), (x ^= (0, s.XG)((E + A) | 0, 9)), (H ^= (0, s.XG)((x + E) | 0, 13)), (A ^= (0, s.XG)((H + x) | 0, 18)), (v ^= (0, s.XG)((k + I) | 0, 7)), (m ^= (0, s.XG)((v + k) | 0, 9)), (I ^= (0, s.XG)((m + v) | 0, 13)), (k ^= (0, s.XG)((I + m) | 0, 18)), (B ^= (0, s.XG)((_ + R) | 0, 7)), (O ^= (0, s.XG)((B + _) | 0, 9)), (R ^= (0, s.XG)((O + B) | 0, 13)), (_ ^= (0, s.XG)((R + O) | 0, 18)), (C ^= (0, s.XG)((D + j) | 0, 7)), (J ^= (0, s.XG)((C + D) | 0, 9)), (j ^= (0, s.XG)((J + C) | 0, 13)), (D ^= (0, s.XG)((j + J) | 0, 18));
    (i[o++] = (h + A) | 0), (i[o++] = (u + E) | 0), (i[o++] = (f + x) | 0), (i[o++] = (l + H) | 0), (i[o++] = (a + I) | 0), (i[o++] = (c + k) | 0), (i[o++] = (d + v) | 0), (i[o++] = (p + m) | 0), (i[o++] = (g + O) | 0), (i[o++] = (y + R) | 0), (i[o++] = (b + _) | 0), (i[o++] = (w + B) | 0), (i[o++] = (G + C) | 0), (i[o++] = (L + J) | 0), (i[o++] = (X + j) | 0), (i[o++] = (U + D) | 0);
}
function u(t, e, n, r, i) {
    let o = r + 0,
        s = r + 16 * i;
    for (let r = 0; r < 16; r++) n[s + r] = t[e + (2 * i - 1) * 16 + r];
    for (let r = 0; r < i; r++, o += 16, e += 16) h(n, s, t, e, n, o), r > 0 && (s += 16), h(n, o, t, (e += 16), n, s);
}
async function f(t, e, n) {
    let {
        N: h,
        r: f,
        p: l,
        dkLen: a,
        blockSize32: c,
        V: d,
        B32: p,
        B: g,
        tmp: y,
        blockMixCb: b,
        asyncTick: w
    } = (function (t, e, n) {
        let {
            N: h,
            r: u,
            p: f,
            dkLen: l,
            asyncTick: a,
            maxmem: c,
            onProgress: d
        } = (0, s.U5)(
            {
                dkLen: 32,
                asyncTick: 10,
                maxmem: 1073742848
            },
            n
        );
        if (((0, r.Rx)(h), (0, r.Rx)(u), (0, r.Rx)(f), (0, r.Rx)(l), (0, r.Rx)(a), (0, r.Rx)(c), void 0 !== d && 'function' != typeof d)) throw Error('progressCb should be function');
        let p = 128 * u,
            g = p / 4;
        if (h <= 1 || (h & (h - 1)) != 0 || h > 4294967296) throw Error('Scrypt: N must be larger than 1, a power of 2, and less than 2^32');
        if (f < 0 || f > ((4294967296 - 1) * 32) / p) throw Error('Scrypt: p must be a positive integer less than or equal to ((2^32 - 1) * 32) / (128 * r)');
        if (l < 0 || l > (4294967296 - 1) * 32) throw Error('Scrypt: dkLen should be positive integer less than or equal to (2^32 - 1) * 32');
        let y = p * (h + f);
        if (y > c) throw Error(`Scrypt: parameters too large, ${y} (128 * r * (N + p)) > ${c} (maxmem)`);
        let b = (0, o.n)(i.JQ, t, e, {
                c: 1,
                dkLen: p * f
            }),
            w = (0, s.Jq)(b),
            G = (0, s.Jq)(new Uint8Array(p * h)),
            L = (0, s.Jq)(new Uint8Array(p)),
            X = () => {};
        if (d) {
            let t = 2 * h * f,
                e = Math.max(Math.floor(t / 10000), 1),
                n = 0;
            X = () => {
                n++, d && (!(n % e) || n === t) && d(n / t);
            };
        }
        return {
            N: h,
            r: u,
            p: f,
            dkLen: l,
            blockSize32: g,
            V: G,
            B32: w,
            B: b,
            tmp: L,
            blockMixCb: X,
            asyncTick: a
        };
    })(t, e, n);
    !s.iA && (0, s.l1)(p);
    for (let t = 0; t < l; t++) {
        let e = c * t;
        for (let t = 0; t < c; t++) d[t] = p[e + t];
        let n = 0;
        await (0, s.oY)(h - 1, w, () => {
            u(d, n, d, (n += c), f), b();
        }),
            u(d, (h - 1) * c, p, e, f),
            b(),
            await (0, s.oY)(h, w, () => {
                let t = p[e + c - 16] % h;
                for (let n = 0; n < c; n++) y[n] = p[e + n] ^ d[t * c + n];
                u(y, 0, p, e, f), b();
            });
    }
    return (
        !s.iA && (0, s.l1)(p),
        (function (t, e, n, r, s) {
            let h = (0, o.n)(i.JQ, t, n, {
                c: 1,
                dkLen: e
            });
            return n.fill(0), r.fill(0), s.fill(0), h;
        })(t, a, g, d, y)
    );
}
