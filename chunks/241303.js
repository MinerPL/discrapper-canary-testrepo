n.d(e, { JQ: () => f });
var r = n(806216),
    i = n(362133);
let s = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
    o = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
    h = new Uint32Array(64);
class a extends r.VR {
    constructor() {
        super(64, 32, 8, !1), (this.A = 0 | o[0]), (this.B = 0 | o[1]), (this.C = 0 | o[2]), (this.D = 0 | o[3]), (this.E = 0 | o[4]), (this.F = 0 | o[5]), (this.G = 0 | o[6]), (this.H = 0 | o[7]);
    }
    get() {
        let { A: t, B: e, C: n, D: r, E: i, F: s, G: o, H: h } = this;
        return [t, e, n, r, i, s, o, h];
    }
    set(t, e, n, r, i, s, o, h) {
        (this.A = 0 | t), (this.B = 0 | e), (this.C = 0 | n), (this.D = 0 | r), (this.E = 0 | i), (this.F = 0 | s), (this.G = 0 | o), (this.H = 0 | h);
    }
    process(t, e) {
        for (let n = 0; n < 16; n++, e += 4) h[n] = t.getUint32(e, !1);
        for (let t = 16; t < 64; t++) {
            let e = h[t - 15],
                n = h[t - 2],
                r = (0, i.np)(e, 7) ^ (0, i.np)(e, 18) ^ (e >>> 3),
                s = (0, i.np)(n, 17) ^ (0, i.np)(n, 19) ^ (n >>> 10);
            h[t] = (s + h[t - 7] + r + h[t - 16]) | 0;
        }
        let { A: n, B: o, C: a, D: f, E: c, F: l, G: u, H: d } = this;
        for (let t = 0; t < 64; t++) {
            let e = (d + ((0, i.np)(c, 6) ^ (0, i.np)(c, 11) ^ (0, i.np)(c, 25)) + (0, r.bc)(c, l, u) + s[t] + h[t]) | 0,
                x = (((0, i.np)(n, 2) ^ (0, i.np)(n, 13) ^ (0, i.np)(n, 22)) + (0, r.l3)(n, o, a)) | 0;
            (d = u), (u = l), (l = c), (c = (f + e) | 0), (f = a), (a = o), (o = n), (n = (e + x) | 0);
        }
        (n = (n + this.A) | 0), (o = (o + this.B) | 0), (a = (a + this.C) | 0), (f = (f + this.D) | 0), (c = (c + this.E) | 0), (l = (l + this.F) | 0), (u = (u + this.G) | 0), (d = (d + this.H) | 0), this.set(n, o, a, f, c, l, u, d);
    }
    roundClean() {
        h.fill(0);
    }
    destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
    }
}
let f = (0, i.hE)(() => new a());
