n.d(t, {
    n: function () {
        return T;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(607070),
    u = n(451478),
    c = n(119837),
    d = n(802433),
    _ = n(658312),
    E = n(729436),
    f = n(142145),
    h = n(710867),
    p = n(312904),
    m = n(186917),
    I = n(360850);
let T = (e) => {
        let { bannerAdjustment: t = 0, maxLoops: n, resetOnHover: a = !1, isHovering: o = !1, useOpacityOnHover: l = !0, autoPlay: u = !0, restartMethod: h, urlQueryString: m, profileEffectConfig: T, noBorderRadius: g = !1, introDelay: S = c.lG } = e,
            A = i.useRef(null),
            [N, v] = i.useState([]);
        (0, p.Z)(T);
        let [O, R] = i.useState(0),
            [C, y] = i.useState(0),
            { accessibilityLabel: D } = T,
            [L, b] = i.useState(-S),
            {
                stop: M,
                reset: P,
                ticking: U
            } = (0, _.Z)((e) => {
                b((t) => t + e);
            });
        i.useEffect(() => {
            b(-S), v((0, E.Hd)(T.effects));
        }, [T]),
            i.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                N.forEach((n) => {
                    let r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start);
                }),
                    R(t),
                    y(e);
            }, [y, N]);
        let [w, x] = i.useState(!1);
        return (
            i.useEffect(() => {
                !0 !== u && !o && (M(), b(0)), !o && w && U.current && (M(), b(0)), a && o && !U.current && (P(), T.animationType === d.Q.PERSISTENT ? b(h === d.j.FromStart ? 0 : O) : b(0));
            }, [o, w, O, a, M, P, U, T.animationType, u, h]),
            (0, r.jsx)('div', {
                ref: A,
                className: s()(I.profileEffects, { [I.hovered]: o && l }),
                children: (0, r.jsx)('div', {
                    className: g ? I.innerNoRadius : I.inner,
                    children: N.map((e, i) => {
                        if (!U.current && T.animationType === d.Q.PERSISTENT && null != T.staticFrameSrc && 0 === i && !0 === u) {
                            var a, s, o, l;
                            let { staticFrameSrc: n } = T;
                            return (0, r.jsx)(
                                'img',
                                {
                                    className: I.effect,
                                    style: {
                                        top: null !== (o = null === (a = e.position) || void 0 === a ? void 0 : a.y) && void 0 !== o ? o : 0 - t,
                                        left: null !== (l = null === (s = e.position) || void 0 === s ? void 0 : s.x) && void 0 !== l ? l : 0
                                    },
                                    src: n,
                                    alt: D
                                },
                                e.src + i
                            );
                        }
                        return (0, r.jsx)(
                            f.Z,
                            {
                                layerConfig: e,
                                animationType: T.animationType,
                                ticking: U.current,
                                time: L,
                                accessibilityLabel: D,
                                hasPlayedThrough: w,
                                setHasPlayedThrough: x,
                                urlQueryString: m,
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
    g = (e) => {
        let { config: t, useThumbnail: n, bannerAdjustment: i = 0, noBorderRadius: a, isHovering: o = !1, useOpacityOnHover: l = !0 } = e,
            { reducedMotionSrc: u, thumbnailPreviewSrc: c, accessibilityLabel: d } = t;
        return (0, r.jsx)('div', {
            className: s()(I.profileEffects, { [I.hovered]: o && l }),
            children: (0, r.jsx)('div', {
                className: a ? I.innerNoRadius : I.inner,
                children: (0, r.jsx)('img', {
                    src: n && !o ? c : u,
                    className: I.effect,
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
        { preset: c } = (0, m.Z)(e.profileEffectId, () => s(!1)),
        _ = (0, E.Cc)(null == c ? void 0 : c.config);
    return ((0, E.qB)(_), null != c && null != _ && (t || e.shopPreview || c.config.animationType !== d.Q.INTERMITTENT))
        ? (!t && e.shopPreview) || (!t && c.config.animationType === d.Q.PERSISTENT) || n || (!1 === e.autoPlay && !1 === e.isHovering)
            ? (0, r.jsx)(g, {
                  useThumbnail: e.useThumbnail,
                  config: _,
                  bannerAdjustment: e.bannerAdjustment,
                  noBorderRadius: e.noBorderRadius,
                  isHovering: e.isHovering,
                  useOpacityOnHover: e.useOpacityOnHover
              })
            : a
              ? (0, r.jsx)(T, {
                    profileEffectConfig: _,
                    ...e
                })
              : (0, r.jsx)(h.Z, {
                    profileEffectConfig: _,
                    onReady: () => {
                        s(!0);
                    }
                })
        : null;
};
