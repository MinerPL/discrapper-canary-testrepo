var r = n(546299),
    i = n(261638),
    a = n(411108),
    s = n(21841),
    o = r.sum32,
    l = r.sum32_4,
    u = r.sum32_5,
    c = a.ch32,
    d = a.maj32,
    _ = a.s0_256,
    E = a.s1_256,
    f = a.g0_256,
    h = a.g1_256,
    p = i.BlockHash,
    m = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
function I() {
    if (!(this instanceof I)) return new I();
    p.call(this), (this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]), (this.k = m), (this.W = Array(64));
}
r.inherits(I, p),
    (e.exports = I),
    (I.blockSize = 512),
    (I.outSize = 256),
    (I.hmacStrength = 192),
    (I.padLength = 64),
    (I.prototype._update = function (e, t) {
        for (var n = this.W, r = 0; r < 16; r++) n[r] = e[t + r];
        for (; r < n.length; r++) n[r] = l(h(n[r - 2]), n[r - 7], f(n[r - 15]), n[r - 16]);
        var i = this.h[0],
            a = this.h[1],
            p = this.h[2],
            m = this.h[3],
            I = this.h[4],
            T = this.h[5],
            g = this.h[6],
            S = this.h[7];
        for (s(this.k.length === n.length), r = 0; r < n.length; r++) {
            var A = u(S, E(I), c(I, T, g), this.k[r], n[r]),
                N = o(_(i), d(i, a, p));
            (S = g), (g = T), (T = I), (I = o(m, A)), (m = p), (p = a), (a = i), (i = o(A, N));
        }
        (this.h[0] = o(this.h[0], i)), (this.h[1] = o(this.h[1], a)), (this.h[2] = o(this.h[2], p)), (this.h[3] = o(this.h[3], m)), (this.h[4] = o(this.h[4], I)), (this.h[5] = o(this.h[5], T)), (this.h[6] = o(this.h[6], g)), (this.h[7] = o(this.h[7], S));
    }),
    (I.prototype._digest = function (e) {
        return 'hex' === e ? r.toHex32(this.h, 'big') : r.split32(this.h, 'big');
    });
