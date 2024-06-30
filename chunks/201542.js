n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(442837), l = n(481060), u = n(607070), c = n(62170), d = n(640108), _ = n(80618), E = n(585483), f = n(70956), h = n(36703), p = n(347312), m = n(981631), I = n(689938), T = n(30157);
let g = i.lazy(() => Promise.all([
    n.e('26460'),
    n.e('89792')
]).then(n.bind(n, 711635)));
function S(e) {
    let {
            played: t,
            duration: n,
            currentTime: i
        } = e, a = null == n ? '--:--' : t ? (0, d.yv)(Math.ceil(n - i)) : (0, d.yv)(Math.ceil(n));
    return (0, r.jsx)(l.Text, {
        variant: 'text-sm/normal',
        className: T.duration,
        tabularNumbers: !0,
        children: a
    });
}
t.Z = i.memo(function (e) {
    var t, n, a, d, A, N;
    let v, {
            src: O,
            volume: R = 1,
            onVolumeChange: C,
            onMute: y,
            waveform: D,
            durationSecs: L,
            onVolumeShow: b,
            onVolumeHide: M,
            onPlay: P,
            onPause: U,
            onError: w
        } = e, x = i.useRef(null), [G, k] = i.useState(0), [B, F] = i.useState(L), [V, H] = i.useState(!1), [Z, Y] = i.useState(!1), [j, W] = i.useState(!1), [K, z] = i.useState(!1), [q, Q] = i.useState('none'), [X, $] = i.useState(() => 'function' == typeof R ? R() : R), J = i.useRef(void 0), ee = i.useCallback(() => {
            Y(e => !e);
        }, []), et = i.useCallback(() => {
            Q('metadata');
        }, []), en = i.useCallback(e => {
            let t = e.currentTarget.duration;
            if (!isNaN(t))
                F(t);
        }, []), er = i.useCallback(() => {
            if (Y(!1), null == J.current)
                J.current = setTimeout(() => {
                    z(!1), J.current = void 0;
                }, 500);
        }, []), ei = i.useCallback(() => {
            if (!j)
                er();
        }, [
            er,
            j
        ]), ea = i.useCallback(() => {
            let e = x.current;
            if (null == e)
                return;
            let t = e.error;
            null == w || w(t);
        }, [w]), eo = i.useCallback(e => {
            let t = (0, h.A)(e, 1);
            H(0 === t), $(t), null == C || C(t);
        }, [C]), es = i.useCallback(() => {
            H(!V), null == y || y(!V);
        }, [
            V,
            y
        ]), el = i.useCallback(() => {
            W(!0);
        }, []), eu = i.useCallback(() => {
            W(!1), G === B && er();
        }, [
            G,
            B,
            er
        ]), ec = i.useCallback(e => {
            let t = x.current;
            if (null == B || null == t)
                return;
            let n = e * B;
            k(n), t.currentTime = n, z(!0), clearTimeout(J.current), J.current = void 0;
        }, [B]);
    i.useEffect(() => {
        !K && Z && z(!0);
    }, [
        Z,
        K
    ]);
    let ed = i.useRef(null);
    i.useEffect(() => {
        if (K || Z) {
            if (Z) {
                var e, t;
                ed.current = performance.now(), null == P || P(!1, G, (null !== (t = null === (e = x.current) || void 0 === e ? void 0 : e.duration) && void 0 !== t ? t : 0) * f.Z.Millis.SECOND);
            } else {
                let e = performance.now(), t = ed.current;
                null == U || U(G, null != t ? (e - t) / 1000 : 0), ed.current = null;
            }
        }
    }, [Z]), t = x, n = Z, a = k, i.useEffect(() => {
        let e;
        return !function r() {
            let i = t.current;
            if (null == i)
                return;
            if (a(i.currentTime), !!n)
                e = requestAnimationFrame(r);
        }(), () => {
            null != e && cancelAnimationFrame(e);
        };
    }, [
        t,
        n,
        a
    ]), d = O, A = Z, N = Y, i.useEffect(() => {
        if (!!A)
            return E.S.dispatch(m.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, { src: d }), E.S.subscribe(m.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, e), () => {
                E.S.unsubscribe(m.CkL.VOICE_MESSAGE_PLAYBACK_STARTED, e);
            };
        function e(e) {
            let {src: t} = e;
            if (d !== t)
                N(!1);
        }
    }, [
        d,
        A,
        N
    ]);
    let e_ = Z ? l.PauseIcon : l.PlayIcon, eE = Z ? I.Z.Messages.PAUSE : I.Z.Messages.PLAY;
    'Safari' === platform.name ? v = (0, r.jsx)(i.Suspense, {
        children: (0, r.jsx)(g, {
            ref: x,
            className: T.audioElement,
            src: O,
            preload: q,
            playing: Z && !j,
            onEnded: ei,
            onLoadedMetadata: en,
            onError: ea,
            muted: V,
            volume: X
        })
    }) : v = (0, r.jsx)(c.Z, {
        ref: x,
        className: T.audioElement,
        controls: !1,
        preload: q,
        onEnded: ei,
        onLoadedMetadata: en,
        onError: ea,
        muted: V,
        volume: X,
        playing: Z && !j,
        children: (0, r.jsx)('source', { src: O })
    });
    let ef = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), {enabled: eh} = (0, l.useRedesignIconContext)();
    return (0, r.jsxs)('div', {
        className: o()(T.container, { [T.playing]: Z }),
        onMouseEnter: et,
        children: [
            (0, r.jsx)('div', {
                className: T.rippleContainer,
                children: (0, r.jsx)('div', { className: o()(T.ripple, { [T.reducedMotion]: ef }) })
            }),
            (0, r.jsx)(l.Clickable, {
                className: T.playButtonContainer,
                onClick: ee,
                'aria-label': eE,
                children: (0, r.jsx)(e_, {
                    className: o()(T.playIcon, { [T.oldPlayIconSpacing]: !eh && !Z }),
                    size: 'custom',
                    color: 'currentColor',
                    width: 18,
                    height: 18
                })
            }),
            (0, r.jsx)(p.Z, {
                className: T.waveform,
                waveform: D,
                currentTime: G,
                duration: null != B ? B : 1,
                playing: Z,
                played: K,
                onDrag: ec,
                onDragStart: el,
                onDragEnd: eu
            }),
            (0, r.jsx)(S, {
                played: K,
                currentTime: G,
                duration: B
            }),
            (0, r.jsx)(_.Z, {
                className: T.volumeButton,
                iconClassName: T.volumeButtonIcon,
                sliderWrapperClassName: T.volumeSlider,
                muted: V,
                value: (0, h.P)(X, 1),
                minValue: 0,
                maxValue: 1,
                currentWindow: window,
                onValueChange: eo,
                onToggleMute: es,
                onVolumeShow: b,
                onVolumeHide: M
            }),
            v
        ]
    });
});
