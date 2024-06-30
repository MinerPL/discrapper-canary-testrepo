n.d(t, {
    Q4: function () {
        return T;
    },
    Vv: function () {
        return p;
    },
    oO: function () {
        return I;
    },
    po: function () {
        return m;
    },
    x_: function () {
        return c.Z;
    }
}), n(47120);
var r = n(392711), i = n.n(r), a = n(31775), o = n.n(a), s = n(664751), l = n(261470), u = n(931619), c = n(921948), d = n(981631);
let _ = [
        16,
        20,
        22,
        24,
        28,
        32,
        40,
        44,
        48,
        56,
        60,
        64,
        80,
        96,
        100,
        128,
        160,
        240,
        256,
        300,
        320,
        480,
        512,
        600,
        640,
        1024,
        1280,
        1536,
        2048,
        3072,
        4096
    ], E = new (o())({ max: 1000 });
function f(e) {
    let t = new Image();
    t.onerror = function (e, t) {
        null == e.backoff && (e.backoff = new l.Z());
        let {backoff: n} = e;
        return async () => {
            await u.Z.isOnline(), n.fails < 5 ? n.fail(() => {
                f(e);
            }) : h(!0, e, t);
        };
    }(e, t), t.onload = () => {
        let {backoff: n} = e;
        null != n && n.succeed(), h(!1, e, t);
    }, t.src = e.url;
}
function h(e, t, n) {
    let {
        callbacks: r,
        url: i
    } = t;
    if (e)
        E.del(i);
    else {
        let {
            width: e,
            height: r
        } = n;
        t = {
            url: i,
            loaded: !0,
            width: e,
            height: r
        }, E.set(i, t);
    }
    null != r && r.forEach(n => n(e, t));
}
function p(e) {
    let t = E.get(e);
    return null != t && t.loaded;
}
function m(e, t) {
    let n = E.get(e);
    if (null != n && n.loaded)
        return null != t && u.Z.awaitOnline().then(() => {
            null != n && null != n.callbacks && n.callbacks.forEach(t => {
                null != n ? t(!1, n) : t(!0, {
                    url: e,
                    loaded: !0
                });
            });
        }), d.dG4;
    {
        let r;
        return null == n && (n = {
            url: e,
            loaded: !1
        }, E.set(e, n), f(n)), null != t && (r = t.bind(null), null == n.callbacks && (n.callbacks = new Set()), n.callbacks.add(r)), () => {
            null != r && null != n && (null != n.callbacks && n.callbacks.delete(r), null != n.backoff && n.backoff.cancel());
        };
    }
}
function I(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (n) {
        let t = _.filter(t => t <= e).pop();
        if (null != t && e / t <= 1.25)
            return t;
    }
    return null !== (t = _.find(t => e <= t)) && void 0 !== t ? t : _[_.length - 1];
}
function T(e) {
    let {
            src: t,
            width: n,
            height: r,
            maxWidth: a,
            maxHeight: o,
            ratio: l = 1,
            format: u = null,
            quality: d = null
        } = e, _ = n, E = r;
    l < 1 && (_ = Math.round(n * l), E = Math.round(r * l)), null != a && (_ = Math.min(_, a)), null != o && (E = Math.min(E, o));
    let f = (0, c.Z)();
    return _ *= f, function (e) {
        let {
                src: t,
                sourceWidth: n,
                sourceHeight: r,
                targetWidth: a,
                targetHeight: o,
                format: l = null,
                quality: u = null
            } = e, [c, d] = function (e) {
                let [t, n] = e.split('?');
                return [
                    t,
                    s.parse(n)
                ];
            }(t);
        return null != l && (d.format = l), null != u && (d.quality = u), (a !== n || o !== r) && (d.width = 0 | a, d.height = 0 | o), !i().isEmpty(d) && (c += '?' + s.stringify(d)), c;
    }({
        src: t,
        sourceWidth: n,
        sourceHeight: r,
        targetWidth: _,
        targetHeight: E *= f,
        format: u,
        quality: d
    });
}
