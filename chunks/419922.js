n.d(t, {
    Co: function () {
        return R;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(512722),
    l = n.n(o),
    u = n(338545),
    c = n(442837),
    d = n(622535),
    _ = n(481060),
    E = n(607070),
    f = n(134432),
    h = n(314910),
    p = n(506071),
    m = n(453070),
    I = n(373228),
    T = n(378233),
    g = n(689938),
    S = n(310512);
let A = (e) => e.preventDefault(),
    N = {
        tension: 1100,
        friction: 40
    },
    v = {
        tension: 1600,
        friction: 60
    };
function O(e, t) {
    return i.cloneElement(e, {
        'data-type': 'sticker',
        'data-id': t
    });
}
function R(e) {
    let t = 'description' in e && null != e.description ? ''.concat(e.name, ', ').concat(e.description) : e.name;
    return g.Z.Messages.STICKER_A11Y_LABEL.format({ stickerName: t });
}
let C = (e) => {
        let { children: t, hasError: n, isLoading: i, maskAsset: a, size: o, withLoadingIndicator: l = !0 } = e,
            u = o >= 33;
        return (0, r.jsxs)('div', {
            className: s()(S.assetWrapper, { [S.assetWrapperMasked]: n || a }),
            style: {
                height: o,
                width: o
            },
            children: [
                n
                    ? (0, r.jsxs)('div', {
                          className: S.error,
                          children: [
                              (0, r.jsx)(_.StickerSadIcon, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: S.errorIcon
                              }),
                              u &&
                                  (0, r.jsx)(_.Text, {
                                      className: S.errorText,
                                      color: 'header-secondary',
                                      variant: 'text-sm/normal',
                                      children: g.Z.Messages.STICKER_ASSET_LOAD_ERROR
                                  })
                          ]
                      })
                    : t,
                l && i && (0, r.jsx)('div', { className: S.loadingIndicator })
            ]
        });
    },
    y = (e) => {
        let { shouldAnimate: t, size: a, sticker: s, fileUri: o, assetData: u, isFocused: c, className: d, maskAsset: _, positionRef: E, withLoadingIndicator: h, onError: p } = e,
            m = i.useRef(null),
            I = i.useRef(null),
            [A, N] = i.useState(!0),
            [v, y] = i.useState(!1),
            D = i.useRef(!1);
        D.current = t && c;
        let L = null == o ? (0, T.Q6)(s) : o;
        return (l()(null != L, 'Unable to determine sticker asset URL. Sticker ID: '.concat(s.id)),
        i.useEffect(() => {
            if (null == m.current || null == L) return;
            let e = Math.min(2, (0, f.x_)());
            (m.current.width = a * e), (m.current.height = a * e);
            let t = !1;
            return (
                (async () => {
                    let { default: e } = await n.e('21617').then(n.bind(n, 186952));
                    null != m.current &&
                        ((I.current = new e({
                            canvas: m.current,
                            animationId: s.id,
                            assetUrl: L,
                            assetData: u,
                            onInitialDraw: () => {
                                !t && N(!1);
                            },
                            onError: () => {
                                !t && (N(!1), y(!0), null == p || p());
                            }
                        })),
                        D.current && I.current.setState(!0));
                })(),
                () => {
                    var e;
                    null === (e = I.current) || void 0 === e || e.drop(), (I.current = null), (t = !0);
                }
            );
        }, [L, a, s.id, u, p]),
        i.useEffect(() => {
            var e;
            let n;
            !t && (n = 0), null === (e = I.current) || void 0 === e || e.setState(t && c, n);
        }, [s, t, c]),
        null == L)
            ? null
            : (0, r.jsx)('div', {
                  role: 'img',
                  className: d,
                  'aria-label': v ? g.Z.Messages.ERROR_LOADING_STICKER : R(s),
                  ref: E,
                  children: (0, r.jsx)(C, {
                      hasError: v,
                      isLoading: A,
                      maskAsset: _,
                      size: a,
                      withLoadingIndicator: h,
                      children: O(
                          (0, r.jsx)('canvas', {
                              className: S.lottieCanvas,
                              ref: m
                          }),
                          s.id
                      )
                  })
              });
    },
    D = (e) => {
        let { shouldAnimate: t, sticker: n, isFocused: a, size: o, className: l, maskAsset: u, positionRef: c, withLoadingIndicator: _, fileUri: E } = e,
            [f, h] = i.useState(!1),
            [p, m] = i.useState(!0),
            [I, g] = i.useState(!1),
            N = i.useRef(null),
            v = i.useRef(null),
            y =
                null != E
                    ? E
                    : (0, T.Q6)(n, {
                          isPreview: !t || !f || !a,
                          size: o
                      }),
            D = i.useCallback(() => {
                m(!1);
            }, []),
            L = i.useCallback(() => {
                g(!0);
            }, []);
        return (i.useEffect(() => {
            if (null != N.current) {
                let { isVisible: e } = N.current;
                h(e);
            }
        }, []),
        i.useLayoutEffect(() => {
            var e;
            (null === (e = v.current) || void 0 === e ? void 0 : e.complete) === !0 && m(!1);
        }, []),
        null == y)
            ? null
            : (0, r.jsx)(d.$, {
                  ref: N,
                  onChange: h,
                  threshold: 0.7,
                  children: (0, r.jsx)('div', {
                      className: s()(l, S.__invalid_pngImageWrapper),
                      ref: c,
                      children: (0, r.jsx)(C, {
                          hasError: I,
                          isLoading: p,
                          maskAsset: u,
                          size: o,
                          withLoadingIndicator: _,
                          children: O(
                              (0, r.jsx)('img', {
                                  className: S.pngImage,
                                  alt: R(n),
                                  src: y,
                                  draggable: !1,
                                  onError: L,
                                  onLoad: D,
                                  onContextMenu: A,
                                  ref: v
                              }),
                              n.id
                          )
                      })
                  })
              });
    },
    L = (e) => {
        let { disableAnimation: t, enlargeScaleFactor: n, enlargeWithName: a, isInteracting: s, positionRef: o, size: l, sticker: d } = e,
            f = (0, c.e7)([E.Z], () => E.Z.useReducedMotion),
            p = i.useRef(null),
            m = {
                transform: 'scale('.concat(f ? 1 : 1 / n, ')'),
                opacity: 0
            },
            I = (0, _.useTransition)(s, {
                ref: p,
                from: m,
                enter: {
                    transform: 'scale(1)',
                    opacity: 1
                },
                leave: m,
                config: N
            }),
            T = i.useRef(null),
            g = (0, _.useSpring)(
                {
                    ref: T,
                    transform: s || f ? 'translateY(0)' : 'translateY(-25px)',
                    opacity: s ? 1 : 0,
                    config: v
                },
                'animate-always'
            );
        return (
            (0, u.useChain)(s ? [p, T] : [T, p], s ? [0, 0.0625] : [0, 0]),
            I(
                (e, i) =>
                    i &&
                    (0, r.jsx)(h.W5, {
                        className: S.positionedLayer,
                        fixed: !0,
                        align: 'center',
                        position: 'center',
                        targetRef: o,
                        children: () =>
                            (0, r.jsxs)('div', {
                                className: S.overlayWrapper,
                                children: [
                                    (0, r.jsx)(u.animated.div, {
                                        className: S.overlayStickerWrapper,
                                        style: e,
                                        children: (0, r.jsx)(b, {
                                            className: S.__invalid_overlaySticker,
                                            disableAnimation: t,
                                            enlargeOnInteraction: !1,
                                            isInteracting: s,
                                            maskAsset: !1,
                                            sticker: d,
                                            size: Math.round(l * n),
                                            withLoadingIndicator: !1
                                        })
                                    }),
                                    a &&
                                        (0, r.jsx)(u.animated.div, {
                                            className: S.overlayLabelWrapper,
                                            style: g,
                                            children: (0, r.jsx)(_.Text, {
                                                variant: 'text-sm/medium',
                                                className: S.overlayLabel,
                                                children: d.name
                                            })
                                        })
                                ]
                            })
                    })
            )
        );
    },
    b = (e) => {
        let { isInteracting: t = !1, disableAnimation: n = !1, enlargeOnInteraction: a = !1, enlargeWithName: s = !0, enlargeScaleFactor: o = 1.55, maskAsset: l = !1, size: u, sticker: c, className: d, withLoadingIndicator: _, assetData: E, fileUri: f, onError: h } = e,
            T = (0, p.n)(),
            g = (0, m.t$)(t) && !n,
            S = i.useRef(null);
        if (null == c) return null;
        let A = c.format_type === I.u3.LOTTIE ? y : D;
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, r.jsx)(A, {
                        shouldAnimate: g,
                        isFocused: T,
                        size: u,
                        sticker: c,
                        className: d,
                        maskAsset: l,
                        positionRef: S,
                        withLoadingIndicator: _,
                        assetData: E,
                        fileUri: f,
                        onError: h
                    }),
                    a &&
                        (0, r.jsx)(L, {
                            disableAnimation: n,
                            enlargeScaleFactor: o,
                            enlargeWithName: s,
                            isInteracting: t,
                            positionRef: S,
                            size: u,
                            sticker: c
                        })
                ]
            },
            ''.concat(c.id, ',').concat(u)
        );
    };
t.ZP = b;
