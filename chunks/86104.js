let n, r, a, s, h, o, l, c, u;
i.d(e, {
    Z: function () {
        return g;
    },
    j: function () {
        return p;
    }
}),
    i(66153),
    i(970173),
    i(520712),
    i(268111),
    i(941497),
    i(32026),
    i(480839),
    i(744285),
    i(492257),
    i(873817),
    i(411104);
var m = i(512722),
    d = i.n(m),
    f = i(170830);
let v = 409600,
    p = (0, f.G)(async () => {
        let t = await Promise.all([i.e('91789'), i.e('43903')]).then(i.bind(i, 241441)),
            e = await t.default();
        (a = e.cwrap('lottie_create', 'number', ['string'])), (s = e._lottie_destroy), (h = e._lottie_draw_into_bgra), (o = e._lottie_draw_into_rgba), (l = e._lottie_frame_count), (c = e._lottie_frame_rate), (u = e._memory_create), (n = e), (r = u(v));
    });
function w(t, e) {
    return new Uint8ClampedArray(n.HEAPU8.buffer, r, t * e * 4);
}
class g {
    get fps() {
        return c(this.native);
    }
    get frames() {
        return l(this.native);
    }
    get_bgra(t, e, i) {
        return d()(e <= 320, 'width exceeds static allocation.'), d()(i <= 320, 'height exceeds static allocation.'), h(this.native, r, t, e, i), w(e, i);
    }
    get_rgba(t, e, i) {
        return d()(e <= 320, 'width exceeds static allocation.'), d()(i <= 320, 'height exceeds static allocation.'), o(this.native, r, t, e, i), w(e, i);
    }
    drop() {
        s(this.native);
    }
    constructor(t) {
        var e, i, n;
        if (
            ((e = this),
            (n = void 0),
            (i = 'native') in e
                ? Object.defineProperty(e, i, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (e[i] = n),
            (this.native = a(t)),
            0 === this.native)
        )
            throw Error("couldn't create wasm lottie. potentially bad json.");
    }
}
