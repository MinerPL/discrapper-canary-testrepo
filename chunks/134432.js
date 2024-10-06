n.d(t, {
    Q4: function () {
        return S;
    },
    Vv: function () {
        return I;
    },
    oO: function () {
        return T;
    },
    po: function () {
        return m;
    },
    x_: function () {
        return c.Z;
    }
}),
    n(47120);
var r = n(392711),
    i = n.n(r),
    a = n(31775),
    s = n.n(a),
    o = n(664751),
    l = n(261470),
    u = n(931619),
    c = n(921948),
    d = n(981631);
let _ = /\.webp($|\?|#)/i,
    E = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096],
    f = new (s())({ max: 1000 });
function h(e) {
    let t = new Image();
    (t.onerror = (function (e, t) {
        null == e.backoff && (e.backoff = new l.Z());
        let { backoff: n } = e;
        return async () => {
            await u.Z.isOnline(),
                n.fails < 5
                    ? n.fail(() => {
                          h(e);
                      })
                    : p(!0, e, t);
        };
    })(e, t)),
        (t.onload = () => {
            let { backoff: n } = e;
            null != n && n.succeed(), p(!1, e, t);
        }),
        (t.src = e.url);
}
function p(e, t, n) {
    let { callbacks: r, url: i } = t;
    if (e) f.del(i);
    else {
        let { width: e, height: r } = n;
        (t = {
            url: i,
            loaded: !0,
            width: e,
            height: r
        }),
            f.set(i, t);
    }
    null != r && r.forEach((n) => n(e, t));
}
function I(e) {
    let t = f.get(e);
    return null != t && t.loaded;
}
function m(e, t) {
    let n = f.get(e);
    if (null != n && n.loaded)
        return (
            null != t &&
                u.Z.awaitOnline().then(() => {
                    null != n &&
                        null != n.callbacks &&
                        n.callbacks.forEach((t) => {
                            null != n
                                ? t(!1, n)
                                : t(!0, {
                                      url: e,
                                      loaded: !0
                                  });
                        });
                }),
            d.dG4
        );
    {
        let r;
        return (
            null == n &&
                ((n = {
                    url: e,
                    loaded: !1
                }),
                f.set(e, n),
                h(n)),
            null != t && ((r = t.bind(null)), null == n.callbacks && (n.callbacks = new Set()), n.callbacks.add(r)),
            () => {
                null != r && null != n && (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel());
            }
        );
    }
}
function T(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) {
        let t = E.filter((t) => t <= e).pop();
        if (null != t && e / t <= 1.25) return t;
    }
    return null !== (t = E.find((t) => e <= t)) && void 0 !== t ? t : E[E.length - 1];
}
function S(e) {
    let { src: t, width: n, height: r, maxWidth: a, maxHeight: s, ratio: l = 1, format: u = null, quality: d = null, animated: E = !1, srcIsAnimated: f = !1 } = e,
        h = n,
        p = r;
    l < 1 && ((h = Math.round(n * l)), (p = Math.round(r * l))), null != a && (h = Math.min(h, a)), null != s && (p = Math.min(p, s));
    let I = (0, c.Z)();
    return (
        (h *= I),
        (function (e) {
            let { src: t, sourceWidth: n, sourceHeight: r, targetWidth: a, targetHeight: s, format: l = null, quality: u = null, animated: c = !1, srcIsAnimated: d = !1 } = e,
                [E, f] = (function (e) {
                    let [t, n] = e.split('?');
                    return [t, o.parse(n)];
                })(t);
            return null != l && (f.format = l), null != u && (f.quality = u), c && d && _.test(t) && (f.animated = !0), (a !== n || s !== r) && ((f.width = 0 | a), (f.height = 0 | s)), !i().isEmpty(f) && (E += '?' + o.stringify(f)), E;
        })({
            src: t,
            sourceWidth: n,
            sourceHeight: r,
            targetWidth: h,
            targetHeight: (p *= I),
            format: u,
            quality: d,
            animated: E,
            srcIsAnimated: f
        })
    );
}
