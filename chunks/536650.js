t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    l = t(392711),
    o = t(780384),
    r = t(481060),
    s = t(410030),
    c = t(220082),
    d = t(564334),
    u = t(302221),
    m = t(424602),
    p = t(783097),
    _ = t(772606),
    C = t(488977),
    f = t(624781);
function h(e, n, t) {
    return e + (n - e) * t;
}
function A(e) {
    let [n, t] = a.useState(void 0);
    return (
        a.useEffect(() => {
            null != e.current && t(getComputedStyle(e.current));
        }, [e]),
        n
    );
}
function E(e) {
    let { application: n, name: t, iconURL: h, scrollerRef: E } = e,
        N = m.zQ.useExperiment({ location: 'AppLauncherAppHeader' }, { autoTrackExposure: !1 }).enabled,
        x = (0, o.ap)((0, s.ZP)()),
        v = a.useRef(null),
        I = a.useRef(null),
        g = a.useRef(null),
        P = a.useRef(null),
        S = (0, r.useToken)(r.tokens.colors.BG_BASE_PRIMARY).hex(),
        L = (0, c.ZP)('number' == typeof h ? '' : h, null != S ? S : ''),
        b = a.useMemo(() => {
            var e, n;
            let t = (0, l.compact)([d.Z.parseHexString(L), d.Z.parseHexString(x ? '#000000' : '#ffffff')]);
            return null !==
                (n =
                    null ===
                        (e = (0, u.k8)({
                            colors: t,
                            ratio: 5,
                            saturationFactor: 0.6
                        })) || void 0 === e
                        ? void 0
                        : e.toHexString()) && void 0 !== n
                ? n
                : L;
        }, [L, x]),
        R = A(v),
        T = A(I),
        M = a.useCallback(() => {
            var e, n, t, i, a, o, r, s, c, d;
            let u = E.current,
                m = v.current,
                p = g.current,
                _ = null == P ? void 0 : P.current,
                C = parseInt(null !== (e = null == R ? void 0 : R.height) && void 0 !== e ? e : ''),
                f = parseInt(null !== (n = null == T ? void 0 : T.height) && void 0 !== n ? n : '');
            if (null != u && null != m && null != p && !isNaN(C) && !isNaN(f)) {
                let e = null !== (t = u.scrollTop) && void 0 !== t ? t : 0,
                    n = 0 !== u.scrollHeight ? u.scrollHeight : f + 20,
                    h = 0 !== u.clientHeight ? u.clientHeight : f + 20,
                    A = f - C,
                    E = (0, l.clamp)(n - h, A + 1, f + 20);
                let N = ((i = e), (a = A) === (o = E) ? 1 : (0, l.clamp)((i - a) / (o - a), 0, 1));
                if (
                    ((m.style.filter = 'brightness('.concat(1 + ((x ? 1.4 : 0.6) - (r = 1)) * N, ')')),
                    (m.style.backgroundColor = 'color-mix(in oklab,'
                        .concat(L, ' ')
                        .concat((1 - N) * 100, '%, ')
                        .concat(b, ')')),
                    (p.style.opacity = ''.concat(0 + (1 - (s = 0)) * N)),
                    (p.style.transform = 'translateY('.concat((c = C / 4) + (0 - c) * N, 'px)')),
                    null != _)
                ) {
                    _.style.opacity = ''.concat(1 + (0 - (d = 1)) * N);
                }
            }
        }, [b, L, null == T ? void 0 : T.height, x, E, null == R ? void 0 : R.height]);
    return (
        a.useEffect(() => {
            M();
        }, [M, x]),
        a.useEffect(() => {
            let e = E.current,
                n = () => {
                    M();
                };
            return (
                null == e || e.addEventListener('scroll', n),
                () => {
                    null == e || e.removeEventListener('scroll', n);
                }
            );
        }, [E, M]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: f.stickyContainer,
                    children: [
                        (0, i.jsx)('div', {
                            className: f.stickyBannerContainer,
                            children: (0, i.jsx)('div', {
                                className: f.stickyBanner,
                                ref: v
                            })
                        }),
                        (0, i.jsx)('div', {
                            className: f.backButtonContainer,
                            children: (0, i.jsx)(_.Z, { className: f.headerButton })
                        }),
                        (0, i.jsx)('div', {
                            className: f.nameContainer,
                            children: (0, i.jsx)(r.Heading, {
                                ref: g,
                                className: f.textApplicationName,
                                variant: 'heading-md/extrabold',
                                children: t
                            })
                        })
                    ]
                }),
                (0, p.BQ)(n) && N
                    ? (0, i.jsx)('div', {
                          ref: P,
                          className: f.moreMenuButtonContainer,
                          children: (0, i.jsx)(C.Z, {
                              application: n,
                              className: f.headerButton
                          })
                      })
                    : null,
                (0, i.jsx)('div', {
                    ref: I,
                    className: f.bannerBackground,
                    style: { backgroundColor: L }
                })
            ]
        })
    );
}
