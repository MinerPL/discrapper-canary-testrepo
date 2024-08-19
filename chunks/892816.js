r.d(t, {
    Z: function () {
        return n;
    }
});
let i = {
    'SHA-1': {
        outputLength: 20,
        blockSize: 64
    },
    'SHA-256': {
        outputLength: 32,
        blockSize: 64
    },
    'SHA-384': {
        outputLength: 48,
        blockSize: 128
    },
    'SHA-512': {
        outputLength: 64,
        blockSize: 128
    }
};
function n(e, t, r, n, a = 'SHA-256') {
    return new Promise((s, l) => {
        a in i || l(RangeError(`Valid hash algorithm values are any of ${Object.keys(i).toString()}`)),
            'string' == typeof e ? (e = new TextEncoder().encode(e)) : e instanceof ArrayBuffer ? (e = new Uint8Array(e)) : ArrayBuffer.isView(e) || l(RangeError('P should be string, ArrayBuffer, TypedArray, DataView')),
            'string' == typeof t ? (t = new TextEncoder().encode(t)) : t instanceof ArrayBuffer ? (t = new Uint8Array(t)) : ArrayBuffer.isView(t) ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)) : l(RangeError('S should be string, ArrayBuffer, TypedArray, DataView')),
            crypto.subtle.importKey('raw', e, 'PBKDF2', !1, ['deriveBits']).then(
                (u) => {
                    let c = {
                        name: 'PBKDF2',
                        hash: a,
                        salt: t,
                        iterations: r
                    };
                    crypto.subtle.deriveBits(c, u, 8 * n).then(
                        (e) => s(e),
                        (u) => {
                            (async function (e, t, r, n, a) {
                                if (!(a in i)) throw RangeError(`Valid hash algorithm values are any of ${Object.keys(i).toString()}`);
                                if (!Number.isInteger(r) || r <= 0) throw RangeError('c must be a positive integer');
                                let s = i[a].outputLength;
                                if (!Number.isInteger(n) || n <= 0 || n >= (4294967296 - 1) * s) throw RangeError('dkLen must be a positive integer < (2 ** 32 - 1) * hLen');
                                let l = Math.ceil(n / s),
                                    u = n - (l - 1) * s,
                                    c = Array(l);
                                0 === e.byteLength && (e = new Uint8Array(i[a].blockSize));
                                let f = await crypto.subtle.importKey(
                                        'raw',
                                        e,
                                        {
                                            name: 'HMAC',
                                            hash: { name: a }
                                        },
                                        !0,
                                        ['sign']
                                    ),
                                    h = async function (e, t) {
                                        return new Uint8Array(await crypto.subtle.sign('HMAC', e, t));
                                    };
                                for (let e = 0; e < l; e++) c[e] = await d(f, t, r, e + 1);
                                async function d(e, t, r, i) {
                                    let n = await h(
                                            e,
                                            o(
                                                t,
                                                (function (e) {
                                                    let t = new ArrayBuffer(4);
                                                    return new DataView(t).setUint32(0, e, !1), new Uint8Array(t);
                                                })(i)
                                            )
                                        ),
                                        a = n;
                                    for (let t = 1; t < r; t++)
                                        (function (e, t) {
                                            for (let r = 0; r < e.length; r++) e[r] ^= t[r];
                                        })(n, (a = await h(e, a)));
                                    return n;
                                }
                                return (c[l - 1] = c[l - 1].slice(0, u)), o(...c).buffer;
                            })(e, t, r, n, a).then(
                                (e) => s(e),
                                (e) => l(e)
                            );
                        }
                    );
                },
                (e) => l(e)
            );
    });
}
function o(...e) {
    let t = e.reduce((e, t) => e + t.length, 0);
    if (0 === e.length) throw RangeError('Cannot concat no arrays');
    let r = new Uint8Array(t),
        i = 0;
    for (let t of e) r.set(t, i), (i += t.length);
    return r;
}
