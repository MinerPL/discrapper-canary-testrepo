t.d(n, {
    Z: function () {
        return M;
    }
}),
    t(477488),
    t(47120);
var a = t(200651),
    r = t(192379),
    i = t(120356),
    l = t.n(i),
    o = t(299608),
    s = t.n(o),
    u = t(100621),
    c = t(442837),
    d = t(481060),
    f = t(794295),
    h = t(376641),
    _ = t(714338),
    p = t(95398),
    m = t(247206),
    C = t(394779),
    E = t(134432),
    g = t(169525),
    L = t(375954),
    S = t(585483),
    x = t(44488),
    v = t(341176),
    A = t(981631),
    O = t(388032),
    b = t(723638);
function R(e, n) {
    return ((e % n) + n) % n;
}
function N(e) {
    let { width: n, height: t } = e;
    return null == n || 0 === n || null == t || 0 === t;
}
function D(e) {
    let { children: n, hasMediaControls: t, isObscured: i, src: o } = e,
        [s, u] = (0, r.useState)(!1);
    return i
        ? (0, a.jsx)(p.a.Provider, {
              value: s,
              children: (0, a.jsx)(
                  p.Z,
                  {
                      type: p.Z.Types.ATTACHMENT,
                      reason: g.wk.EXPLICIT_CONTENT,
                      className: b.obscureContainer,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      obscurityControlClassName: l()({ [b.controlsOffset]: t && s }),
                      onToggleObscurity: (e) => {
                          e.stopPropagation(), e.nativeEvent.stopPropagation(), u((e) => !e);
                      },
                      children: (e) =>
                          (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)('div', {
                                  className: l()(b.obscureWrapper, { [b.obscure]: e }),
                                  children: n(e)
                              })
                          })
                  },
                  o
              )
          })
        : (0, a.jsx)(a.Fragment, { children: n(!1) });
}
function M(e) {
    var n, t, i;
    let { items: l, onIndexChange: o, fit: p, startIndex: g = 0, shouldRedactExplicitContent: R = !1, shouldHideMediaOptions: M = !1, shouldAnimateCarousel: I = !1 } = e,
        [k, y] = (0, r.useState)(g),
        P = (0, r.useRef)(g),
        [T, j] = (0, r.useState)([]);
    (0, r.useEffect)(
        () => (
            _.Z.disable(),
            _.Z.enableTemp(h.P),
            () => {
                _.Z.disableTemp();
            }
        ),
        []
    ),
        (0, r.useEffect)(() => {
            var e, n;
            let t = (((k + 1) % (e = l.length)) + e) % e;
            let a = (((k - 1) % (n = l.length)) + n) % n;
            N(l[t]) && (0, E.po)(l[t].url), N(l[a]) && (0, E.po)(l[a].url);
        }, [k, l]);
    let w = (0, r.useCallback)(
        (e) => {
            var n;
            let t = e - P.current;
            y((e = ((e % (n = l.length)) + n) % n)), (P.current = e), j((e) => [...e, t]), null == o || o(e);
        },
        [o, l]
    );
    (0, r.useEffect)(() => {
        let e = s()(() => {
                w(P.current + 1);
            }, 300),
            n = s()(() => {
                w(P.current - 1);
            }, 300);
        return (
            S.S.subscribe(A.CkL.MODAL_CAROUSEL_NEXT, e),
            S.S.subscribe(A.CkL.MODAL_CAROUSEL_PREV, n),
            () => {
                S.S.unsubscribe(A.CkL.MODAL_CAROUSEL_NEXT, e), S.S.unsubscribe(A.CkL.MODAL_CAROUSEL_PREV, n);
            }
        );
    }, [w]);
    let Z = l[k],
        F = null !== (i = Z.sourceMetadata) && void 0 !== i ? i : {},
        W = null == F ? void 0 : null === (n = F.message) || void 0 === n ? void 0 : n.id,
        U = null == F ? void 0 : null === (t = F.message) || void 0 === t ? void 0 : t.channel_id,
        B = (0, c.e7)([L.Z], () => (null != U && null != W ? L.Z.getMessage(U, W) : null), [U, W]),
        G = null != B ? B : null == F ? void 0 : F.message,
        z = null != G && null != F.identifier ? (0, C.s)(G, F.identifier) : null,
        H = (0, m.KP)(
            {
                type: m.lJ.GenericMedia,
                media: Z
            },
            R
        ),
        X = M
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : void 0,
        K = (function (e) {
            if (0 === e) return ['translateX(0)'];
            let n = ['translateX(100px)', 'translateX(-100px)'];
            return e > 0 ? n : n.toReversed();
        })(T[T.length - 1]),
        V = (0, d.useTransition)(
            Z,
            {
                key: Z.url,
                from: {
                    opacity: 0,
                    transform: K[0]
                },
                enter: {
                    opacity: 1,
                    transform: 'translateX(0)'
                },
                leave: {
                    opacity: 0,
                    transform: K[K.length - 1]
                },
                config: {
                    friction: 20,
                    tension: 250
                }
            },
            I ? 'respect-motion-settings' : 'animate-never'
        );
    return (0, a.jsxs)('div', {
        className: b.wrapper,
        children: [
            l.length > 1
                ? (0, a.jsx)(x.am, {
                      className: b.navPrev,
                      onClick: () => S.S.dispatch(A.CkL.MODAL_CAROUSEL_PREV)
                  })
                : null,
            V((e, n) => {
                var t;
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(
                        u.animated.div,
                        {
                            style: e,
                            className: b.zoomedMediaFitWrapper,
                            children: (0, a.jsxs)('div', {
                                onClick: (e) => (null != p && [v.D.CONTAIN, v.D.SCALE_DOWN].includes(p) ? null : e.stopPropagation()),
                                children: [
                                    (0, a.jsx)(D, {
                                        isObscured: H,
                                        src: n.url,
                                        children: (e) =>
                                            (0, a.jsx)(v.Z, {
                                                media: n,
                                                fit: p,
                                                obscured: e,
                                                onContextMenu: X
                                            })
                                    }),
                                    ('IMAGE' !== n.type || null != n.original) &&
                                        !M &&
                                        (0, a.jsxs)('div', {
                                            className: b.optionsContainer,
                                            children: [
                                                (0, a.jsx)(f.Z, {
                                                    href: null !== (t = n.original) && void 0 !== t ? t : n.url,
                                                    className: b.downloadLink,
                                                    children: O.intl.string(O.t.q5jLJC)
                                                }),
                                                null != z && (0, a.jsx)(z, { className: b.forward })
                                            ]
                                        })
                                ]
                            })
                        },
                        n.url
                    )
                });
            }),
            l.length > 1
                ? (0, a.jsx)(x.Pz, {
                      className: b.navNext,
                      onClick: () => S.S.dispatch(A.CkL.MODAL_CAROUSEL_NEXT)
                  })
                : null
        ]
    });
}
