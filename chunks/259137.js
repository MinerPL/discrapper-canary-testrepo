r.d(t, {
    f3: function () {
        return l;
    }
});
var i = r(892816);
let n = function (e) {
        function t(e, t) {
            return (e << t) | (e >>> (32 - t));
        }
        let r = e.slice(0);
        for (let e = 8; e > 0; e -= 2) (r[4] ^= t(r[0] + r[12], 7)), (r[8] ^= t(r[4] + r[0], 9)), (r[12] ^= t(r[8] + r[4], 13)), (r[0] ^= t(r[12] + r[8], 18)), (r[9] ^= t(r[5] + r[1], 7)), (r[13] ^= t(r[9] + r[5], 9)), (r[1] ^= t(r[13] + r[9], 13)), (r[5] ^= t(r[1] + r[13], 18)), (r[14] ^= t(r[10] + r[6], 7)), (r[2] ^= t(r[14] + r[10], 9)), (r[6] ^= t(r[2] + r[14], 13)), (r[10] ^= t(r[6] + r[2], 18)), (r[3] ^= t(r[15] + r[11], 7)), (r[7] ^= t(r[3] + r[15], 9)), (r[11] ^= t(r[7] + r[3], 13)), (r[15] ^= t(r[11] + r[7], 18)), (r[1] ^= t(r[0] + r[3], 7)), (r[2] ^= t(r[1] + r[0], 9)), (r[3] ^= t(r[2] + r[1], 13)), (r[0] ^= t(r[3] + r[2], 18)), (r[6] ^= t(r[5] + r[4], 7)), (r[7] ^= t(r[6] + r[5], 9)), (r[4] ^= t(r[7] + r[6], 13)), (r[5] ^= t(r[4] + r[7], 18)), (r[11] ^= t(r[10] + r[9], 7)), (r[8] ^= t(r[11] + r[10], 9)), (r[9] ^= t(r[8] + r[11], 13)), (r[10] ^= t(r[9] + r[8], 18)), (r[12] ^= t(r[15] + r[14], 7)), (r[13] ^= t(r[12] + r[15], 9)), (r[14] ^= t(r[13] + r[12], 13)), (r[15] ^= t(r[14] + r[13], 18));
        for (let t = 0; t < 16; t++) e[t] = r[t] + e[t];
    },
    o = function (e, t) {
        for (let r = 0; r < e.length; r++) e[r] ^= t[r];
    },
    a = function (e) {
        let t = e.byteLength / 128,
            r = 16 * (2 * t - 1),
            i = e.slice(r, r + 16),
            a = new Uint32Array(e.length / 2),
            s = !0;
        for (let r = 0; r < 2 * t; r++) {
            let t = 16 * r;
            o(i, e.subarray(t, t + 16)), n(i);
            let l = 16 * (r >> 1);
            if (s) for (let t = 0; t < 16; t++) e[l + t] = i[t];
            else for (let e = 0; e < 16; e++) a[l + e] = i[e];
            s = !s;
        }
        let l = 16 * t;
        for (let t = 0; t < l; t++) e[l + t] = a[t];
    },
    s = function (e, t) {
        let r = e.byteLength / 128,
            i = Array(t);
        for (let r = 0; r < t; r++) (i[r] = e.slice(0)), a(e);
        for (let n = 0; n < t; n++) {
            let n = new DataView(e.buffer, 64 * (2 * r - 1), 64).getUint32(0, !0) % t;
            o(e, i[n]), a(e);
        }
    },
    l = async function (e, t, r, n) {
        if ('string' == typeof e) e = new TextEncoder().encode(e);
        else if (e instanceof ArrayBuffer) e = new Uint8Array(e);
        else if (!ArrayBuffer.isView(e)) throw RangeError('P should be string, ArrayBuffer, TypedArray, DataView');
        if ('string' == typeof t) t = new TextEncoder().encode(t);
        else if (t instanceof ArrayBuffer) t = new Uint8Array(t);
        else if (!ArrayBuffer.isView(t)) throw RangeError('S should be string, ArrayBuffer, TypedArray, DataView');
        if (!Number.isInteger(r) || r <= 0 || r > 137438953440) throw RangeError('dkLen is the intended output length in octets of the derived key; a positive integer less than or equal to (2^32 - 1) * hLen where hLen is 32');
        let o = void 0 !== n && void 0 !== n.N ? n.N : 131072,
            a = void 0 !== n && void 0 !== n.r ? n.r : 8,
            l = void 0 !== n && void 0 !== n.p ? n.p : 1;
        if (!Number.isInteger(o) || o <= 0 || 0 != (o & (o - 1))) throw RangeError('N must be a power of 2');
        if (!Number.isInteger(a) || a <= 0 || !Number.isInteger(l) || l <= 0 || l * a > 1073741823.75) throw RangeError('Parallelization parameter p and blocksize parameter r must be positive integers satisfying p \u2264 (2^32\u2212 1) * hLen / MFLen where hLen is 32 and MFlen is 128 * r.');
        let u = new Uint32Array(await (0, i.Z)(e, t, 1, 128 * l * a));
        for (let e = 0; e < l; e++) {
            let t = 32 * a,
                r = e * t,
                i = u.slice(r, r + t);
            s(i, o);
            for (let e = 0; e < 32 * a; e++) u[r + e] = i[e];
        }
        return await (0, i.Z)(e, u, 1, r);
    };
