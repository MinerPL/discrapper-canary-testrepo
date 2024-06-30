n.d(t, {
    Z: function () {
        return f;
    }
}), n(47120), n(724458);
var s = n(735250), o = n(470079), r = n(120356), a = n.n(r), i = n(392711), l = n.n(i), c = n(442837), d = n(481060), u = n(451478), p = n(302221), x = n(261345);
let m = [
        0,
        0.5,
        1
    ], g = {
        'layers[1].shapes[1].g.k.k': [
            0,
            0.522,
            0.278,
            0.776,
            0.5,
            0.522,
            0.278,
            0.776,
            1,
            0.522,
            0.278,
            0.776
        ],
        'layers[2].shapes[1].g.k.k': [
            0,
            0.714,
            0.271,
            0.757,
            0.5,
            0.714,
            0.271,
            0.757,
            1,
            0.714,
            0.271,
            0.757
        ]
    };
async function C(e, t) {
    let s = (await n.e('30166').then(n.t.bind(n, 235630, 19))).default;
    return function (e, t, n) {
        for (let s in t) {
            let t = l().get(e, s);
            if (null == t)
                continue;
            let o = t.map((e, t) => {
                var s;
                return null !== (s = n[t]) && void 0 !== s ? s : e;
            });
            l().set(e, s, o);
        }
    }(s, g, t), s;
}
function f(e) {
    var t;
    let {
            animationClassName: n,
            className: r,
            quest: i,
            useReducedMotion: l
        } = e, g = (0, c.e7)([u.Z], () => u.Z.isFocused()), f = o.useRef(null), [h, _] = o.useState(!1), E = o.useMemo(() => {
            if (null == i)
                return null;
            let e = (0, p.oo)(i.config.colors.primary), t = {
                    r: e.r / 255,
                    g: e.g / 255,
                    b: e.b / 255
                }, n = m.reduce((e, n) => [
                    ...e,
                    n,
                    t.r,
                    t.g,
                    t.b
                ], []);
            return C(i.id, n);
        }, [i]), S = (null === (t = i.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, T = !l && g;
    o.useEffect(() => {
        var e, t, n, s;
        g ? T && (null === (s = f.current) || void 0 === s || null === (n = s.animation) || void 0 === n || n.play()) : null === (t = f.current) || void 0 === t || null === (e = t.animation) || void 0 === e || e.goToAndStop(0, !0);
    }, [
        T,
        g
    ]);
    let N = o.useCallback(() => {
        _(!0);
    }, []);
    return null == E || S ? (0, s.jsx)('div', {
        className: x.backgroundFallback,
        style: { backgroundImage: 'linear-gradient(90deg, '.concat(i.config.colors.primary, ', ').concat(i.config.colors.secondary, ')') }
    }) : (0, s.jsx)('div', {
        className: a()(x.lottieAnimationBackgroundWrapper, r),
        children: (0, s.jsx)(d.LottieAnimation, {
            ref: f,
            onComplete: N,
            importData: () => E,
            shouldAnimate: !h && T,
            className: a()(x.lottieAnimation, x.lottieAnimationBackground, n),
            loop: 0,
            rendererSettings: { preserveAspectRatio: 'none' }
        }, i.config.colors.primary)
    });
}
