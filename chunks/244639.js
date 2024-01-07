function(t, e, i) {
    "use strict";
    let n, r, a, s, o, l, u, c, h;
    i.r(e), i.d(e, {
        initialize: function() {
            return g
        },
        default: function() {
            return f
        }
    }), i("332822"), i("477657"), i("811875"), i("90301"), i("652153"), i("28797"), i("817884"), i("597349"), i("667536"), i("690341"), i("70102");
    var f, d = i("627445"),
        m = i.n(d),
        v = i("739942");
    let p = 409600,
        g = (0, v.createQueuedAsyncInitializer)(async () => {
            let t = await i.el("227332").then(i.bind(i, "227332")),
                e = await t.default();
            a = e.cwrap("lottie_create", "number", ["string"]), s = e._lottie_destroy, o = e._lottie_draw_into_bgra, l = e._lottie_draw_into_rgba, u = e._lottie_frame_count, c = e._lottie_frame_rate, h = e._memory_create, n = e, r = h(p)
        });

    function x(t, e) {
        return new Uint8ClampedArray(n.HEAPU8.buffer, r, t * e * 4)
    }
    f = class {
        get fps() {
            return c(this.native)
        }
        get frames() {
            return u(this.native)
        }
        get_bgra(t, e, i) {
            return m(e <= 320, "width exceeds static allocation."), m(i <= 320, "height exceeds static allocation."), o(this.native, r, t, e, i), x(e, i)
        }
        get_rgba(t, e, i) {
            return m(e <= 320, "width exceeds static allocation."), m(i <= 320, "height exceeds static allocation."), l(this.native, r, t, e, i), x(e, i)
        }
        drop() {
            s(this.native)
        }
        constructor(t) {
            if (this.native = a(t), 0 === this.native) throw Error("couldn't create wasm lottie. potentially bad json.")
        }
    }
}