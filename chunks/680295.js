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
    I = n(186917),
    m = n(360850);
let T = (e) => {
        let { bannerAdjustment: t = 0, maxLoops: n, resetOnHover: a = !1, isHovering: o = !1, useOpacityOnHover: l = !0, autoPlay: u = !0, restartMethod: h, urlQueryString: I, profileEffectConfig: T, noBorderRadius: S = !1, introDelay: g = c.lG, debugForTool: A = !1 } = e,
            N = i.useRef(null),
            [O, R] = i.useState([]);
        (0, p.Z)(T);
        let [v, C] = i.useState(0),
            [y, L] = i.useState(0),
            { accessibilityLabel: D } = T,
            [b, M] = i.useState(-g),
            {
                stop: P,
                reset: U,
                ticking: w
            } = (0, _.Z)((e) => {
                M((t) => t + e);
            });
        i.useEffect(() => {
            M(-g), R((0, E.Hd)(T.effects));
        }, [T]),
            i.useEffect(() => {
                let e = 0,
                    t = 1 / 0;
                O.forEach((n) => {
                    let r = n.start + n.duration;
                    r > e && (e = r), n.loop && n.start < t && (t = n.start);
                }),
                    C(t),
                    L(e);
            }, [L, O]);
        let [x, G] = i.useState(!1);
        return (
            i.useEffect(() => {
                !0 !== u && !o && (P(), M(0)), !o && x && w.current && (P(), M(0)), a && o && !w.current && (U(), T.animationType === d.Q.PERSISTENT ? M(h === d.j.FromStart ? 0 : v) : M(0));
            }, [o, x, v, a, P, U, w, T.animationType, u, h]),
            (0, r.jsx)('div', {
                ref: N,
                className: s()(m.profileEffects, { [m.hovered]: o && l }),
                children: (0, r.jsx)('div', {
                    className: S ? m.innerNoRadius : m.inner,
                    children: O.map((e, i) => {
                        if (!w.current && T.animationType === d.Q.PERSISTENT && null != T.staticFrameSrc && 0 === i && !0 === u) {
                            var a, s, o, l;
                            let { staticFrameSrc: n } = T;
                            return (0, r.jsx)(
                                'img',
                                {
                                    className: m.effect,
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
                                ticking: w.current,
                                time: b,
                                accessibilityLabel: D,
                                hasPlayedThrough: x,
                                setHasPlayedThrough: G,
                                urlQueryString: I,
                                maxLoops: n,
                                loopEnd: y,
                                bannerAdjustment: t,
                                debugForTool: A
                            },
                            e.src + i
                        );
                    })
                })
            })
        );
    },
    S = (e) => {
        let { config: t, useThumbnail: n, bannerAdjustment: i = 0, noBorderRadius: a, isHovering: o = !1, useOpacityOnHover: l = !0 } = e,
            { reducedMotionSrc: u, thumbnailPreviewSrc: c, accessibilityLabel: d } = t;
        return (0, r.jsx)('div', {
            className: s()(m.profileEffects, { [m.hovered]: o && l }),
            children: (0, r.jsx)('div', {
                className: a ? m.innerNoRadius : m.inner,
                children: (0, r.jsx)('img', {
                    src: n && !o ? c : u,
                    className: m.effect,
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
        { preset: c } = (0, I.Z)(e.profileEffectId, () => s(!1)),
        _ = (0, E.Cc)(null == c ? void 0 : c.config);
    return ((0, E.qB)(_), null != c && null != _ && (t || e.shopPreview || c.config.animationType !== d.Q.INTERMITTENT))
        ? (!t && e.shopPreview) || (!t && c.config.animationType === d.Q.PERSISTENT) || n || (!1 === e.autoPlay && !1 === e.isHovering)
            ? (0, r.jsx)(S, {
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
