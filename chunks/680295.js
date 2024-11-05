n.d(t, {
    n: function () {
        return v;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(607070),
    u = n(451478),
    c = n(119837),
    d = n(802433),
    f = n(658312),
    _ = n(729436),
    h = n(142145),
    p = n(710867),
    m = n(312904),
    g = n(186917),
    E = n(831748);
let v = (e) => {
        let { bannerAdjustment: t = 0, maxLoops: n, resetOnHover: a = !1, isHovering: o = !1, useOpacityOnHover: l = !0, autoPlay: u = !0, restartMethod: p, urlQueryString: g, profileEffectConfig: v, noBorderRadius: I = !1, introDelay: S = c.lG } = e,
            T = i.useRef(null),
            [b, y] = i.useState([]);
        (0, m.Z)(v);
        let [A, N] = i.useState(0),
            [C, R] = i.useState(0),
            { accessibilityLabel: O } = v,
            [D, L] = i.useState(-S),
            {
                stop: x,
                reset: w,
                ticking: M
            } = (0, f.Z)((e) => {
                L((t) => t + e);
            });
        i.useEffect(() => {
            L(-S), y((0, _.H)(v.effects));
        }, [v]),
            i.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                b.forEach((n) => {
                    let r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start);
                }),
                    N(t),
                    R(e);
            }, [R, b]);
        let [P, k] = i.useState(!1);
        return (
            i.useEffect(() => {
                !0 !== u && !o && (x(), L(0)), !o && P && M.current && (x(), L(0)), a && o && !M.current && (w(), v.animationType === d.Q.PERSISTENT ? L(p === d.j.FromStart ? 0 : A) : L(0));
            }, [o, P, A, a, x, w, M, v.animationType, u, p]),
            (0, r.jsx)('div', {
                ref: T,
                className: s()(E.profileEffects, { [E.hovered]: o && l }),
                children: (0, r.jsx)('div', {
                    className: I ? E.innerNoRadius : E.inner,
                    children: b.map((e, i) => {
                        if (!M.current && v.animationType === d.Q.PERSISTENT && null != v.staticFrameSrc && 0 === i && !0 === u) {
                            var a, s, o, l;
                            let { staticFrameSrc: n } = v;
                            return (0, r.jsx)(
                                'img',
                                {
                                    className: E.effect,
                                    style: {
                                        top: null !== (o = null === (a = e.position) || void 0 === a ? void 0 : a.y) && void 0 !== o ? o : 0 - t,
                                        left: null !== (l = null === (s = e.position) || void 0 === s ? void 0 : s.x) && void 0 !== l ? l : 0
                                    },
                                    src: n,
                                    alt: O
                                },
                                e.src + i
                            );
                        }
                        return (0, r.jsx)(
                            h.Z,
                            {
                                layerConfig: e,
                                animationType: v.animationType,
                                ticking: M.current,
                                time: D,
                                accessibilityLabel: O,
                                hasPlayedThrough: P,
                                setHasPlayedThrough: k,
                                urlQueryString: g,
                                maxLoops: n,
                                loopEnd: C,
                                bannerAdjustment: t
                            },
                            e.src + i
                        );
                    })
                })
            })
        );
    },
    I = (e) => {
        let { config: t, useThumbnail: n, bannerAdjustment: i = 0, noBorderRadius: a, isHovering: o = !1, useOpacityOnHover: l = !0 } = e,
            { reducedMotionSrc: u, thumbnailPreviewSrc: c, accessibilityLabel: d } = t;
        return (0, r.jsx)('div', {
            className: s()(E.profileEffects, { [E.hovered]: o && l }),
            children: (0, r.jsx)('div', {
                className: a ? E.innerNoRadius : E.inner,
                children: (0, r.jsx)('img', {
                    src: n && !o ? c : u,
                    className: E.effect,
                    style: { top: 0 - i },
                    alt: d
                })
            })
        });
    };
t.Z = (e) => {
    let t = (0, o.e7)([u.Z], () => u.Z.isFocused()),
        n = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        [a, s] = i.useState(!1),
        { preset: c } = (0, g.Z)(e.profileEffectId, () => s(!1)),
        f = (0, _.C)(null == c ? void 0 : c.config);
    return null != c && null != f && (t || e.shopPreview || c.config.animationType !== d.Q.INTERMITTENT)
        ? (!t && e.shopPreview) || (!t && c.config.animationType === d.Q.PERSISTENT) || n || (!1 === e.autoPlay && !1 === e.isHovering)
            ? (0, r.jsx)(I, {
                  useThumbnail: e.useThumbnail,
                  config: f,
                  bannerAdjustment: e.bannerAdjustment,
                  noBorderRadius: e.noBorderRadius,
                  isHovering: e.isHovering,
                  useOpacityOnHover: e.useOpacityOnHover
              })
            : a
              ? (0, r.jsx)(v, {
                    profileEffectConfig: f,
                    ...e
                })
              : (0, r.jsx)(p.Z, {
                    profileEffectConfig: f,
                    onReady: () => {
                        s(!0);
                    }
                })
        : null;
};
