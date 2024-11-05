n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120),
    n(411104);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(249458),
    u = n(146128),
    c = n(134432),
    d = n(959258),
    f = n(695346),
    _ = n(237997),
    h = n(768581),
    p = n(176354),
    m = n(506071),
    g = n(149203);
n(13585);
let E = __OVERLAY__ ? () => (0, o.e7)([_.Z], () => _.Z.isInstanceFocused()) : m.n;
function v(e) {
    var t, n;
    let { src: a, alt: o, className: l, emojiId: d, emojiName: _, channelId: m, messageId: v, animated: I, size: S = 'default', isInteracting: T = !1, shouldAnimate: b, onMouseEnter: y, onMouseLeave: A, canSelect: N = !0, autoplay: C, registerAnimatedElementRef: R, ...O } = e,
        [D, L] = i.useState(!1),
        [x, w] = i.useState(void 0),
        M = i.useRef(),
        { triggerAnimation: P } = i.useContext(u.Rm),
        k = f.Yk.useSetting(),
        U = E(),
        G = null == C ? k : C,
        B = g.kV[S],
        Z = i.useRef(null),
        F = i.useMemo(() => {
            if (null != a) return a;
            if (null != d) {
                let e = !0 === b && G;
                return h.ZP.getEmojiURL({
                    id: d,
                    animated: U && !0 === I && (e || D || !0 === T),
                    size: B
                });
            }
            if (null != _) return p.ZP.getURL(_);
            throw Error('Unknown Src for Emoji');
        }, [I, G, d, _, B, U, D, T, b, a]),
        V = i.useCallback(() => {
            null != F &&
                (M.current = (0, c.po)(F, (e) => {
                    !e && w(Date.now());
                }));
        }, [F]),
        j = i.useCallback(
            (e) => {
                I && L(!0), null == d && P(_), null == y || y(e);
            },
            [I, _, y, P, d]
        ),
        H = i.useCallback(
            (e) => {
                I && L(!1), null == A || A(e);
            },
            [I, A]
        ),
        Y = i.useMemo(() => {
            let e = null != d && '' !== d ? { 'data-id': d } : { 'data-name': _ };
            return {
                ...O,
                className: s()('emoji', l, {
                    jumboable: 'jumbo' === S,
                    reactionLarge: 'reactionLarge' === S
                }),
                onError: V,
                onMouseEnter: j,
                onMouseLeave: H,
                'data-type': 'emoji',
                ...e
            };
        }, [l, d, _, j, H, V, O, S]);
    i.useEffect(
        () => () => {
            var e;
            return null === (e = M.current) || void 0 === e ? void 0 : e.call(M);
        },
        []
    );
    let W = i.useCallback(
        (e) => {
            (Z.current = e), null == R || R(e);
        },
        [R]
    );
    return null == F || '' === F
        ? (0, r.jsx)('span', {
              className: s()('emoji', 'emoji-text'),
              children: _
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.aO, {
                      channelId: m,
                      messageId: v,
                      emojiName: _,
                      disable: !1 === G || !1 === k,
                      emojiRef: Z.current
                  }),
                  N
                      ? (0, r.jsx)(
                            'img',
                            {
                                ...Y,
                                ref: W,
                                src: F,
                                alt: null !== (t = null != o ? o : _) && void 0 !== t ? t : void 0,
                                draggable: !1
                            },
                            x
                        )
                      : (0, r.jsx)(
                            'div',
                            {
                                ...Y,
                                ref: W,
                                role: 'img',
                                'aria-label': null !== (n = null != o ? o : _) && void 0 !== n ? n : void 0,
                                style: {
                                    backgroundImage: 'url('.concat(F, ')'),
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }
                            },
                            x
                        )
              ]
          });
}
function I(e) {
    let { useThoughtfullyAnimated: t } = i.useContext(d.q),
        { animate: n, registerRef: a } = t(),
        { disableAnimations: s } = i.useContext(l.G);
    return (0, r.jsx)(v, {
        ...e,
        registerAnimatedElementRef: a,
        shouldAnimate: n && !s
    });
}
function S(e) {
    return null == e.emojiId && null == e.emojiName && null == e.src ? null : e.animated && void 0 === e.shouldAnimate ? (0, r.jsx)(I, { ...e }) : (0, r.jsx)(v, { ...e });
}
