n(47120);
var r = n(735250),
    i = n(470079),
    a = n(366040),
    s = n(119837),
    o = n(802433),
    l = n(360850);
t.Z = (e) => {
    var t, n, u, c;
    let { layerConfig: d, animationType: _, ticking: E, time: f, accessibilityLabel: h, hasPlayedThrough: p, setHasPlayedThrough: I, urlQueryString: m, maxLoops: T, loopEnd: S, bannerAdjustment: g, debugForTool: A = !1 } = e,
        N = (0, a.nY)('Profile Effect - Web'),
        O = i.useRef(null),
        [R, v] = i.useState(!1),
        C = !0;
    if (
        (i.useEffect(() => {
            null != O.current && (O.current.playsInline = !0);
        }, [O]),
        !E && (C = !1),
        f < d.start && (C = !1),
        !d.loop && f > d.duration + d.start && (C = !1),
        _ === o.Q.PERSISTENT && !p && null != T && f >= S && I(!0),
        d.loop && void 0 !== d.loopDelay && d.loopDelay > 0)
    ) {
        let e = d.duration + d.loopDelay,
            t = Math.floor((f - d.start) / e);
        f - d.start - t * e > d.duration && (_ === o.Q.INTERMITTENT && !p && null != T && t >= T && I(!0), (C = !1));
    }
    return N && !A
        ? (null != O.current && R !== C && (!C && O.current.pause(), C && ((O.current.currentTime = 0), O.current.play()), v(C)),
          (0, r.jsx)('video', {
              muted: !0,
              autoPlay: !0,
              loop: _ === o.Q.PERSISTENT && !d.src.includes('intro'),
              className: l.effect,
              ref: O,
              src: d.src,
              style: { opacity: C ? 1 : 0 }
          }))
        : C
          ? (0, r.jsx)('img', {
                src: null != m ? ''.concat(d.src, '?query=').concat(m) : d.src,
                className: l.effect,
                style: {
                    top: (null !== (u = null === (t = d.position) || void 0 === t ? void 0 : t.y) && void 0 !== u ? u : 0) - g,
                    left: null !== (c = null === (n = d.position) || void 0 === n ? void 0 : n.x) && void 0 !== c ? c : 0
                },
                alt: h
            })
          : (0, r.jsx)('img', {
                src: s.td,
                alt: h
            });
};
