let r;
n.d(t, {
    Bq: function () {
        return eP;
    },
    IB: function () {
        return e_;
    },
    NE: function () {
        return ek;
    },
    RP: function () {
        return eL;
    },
    Sv: function () {
        return ex;
    },
    U4: function () {
        return eR;
    },
    Xj: function () {
        return eN;
    },
    aV: function () {
        return eM;
    },
    tN: function () {
        return ec;
    }
});
var i = n(97290),
    a = n(880126),
    s = n(638074),
    o = n(842189),
    l = n(872684),
    u = n(209269),
    c = n(47451),
    d = n(612072),
    f = n(363154),
    _ = n(362670),
    h = n(561017),
    p = n(713198),
    m = n(552019),
    g = n(176123),
    E = n(814010),
    v = n(48087),
    I = n(787969),
    S = n(43771),
    T = n(14046),
    b = n(287372),
    y = n(712139),
    A = n(446894),
    N = n(304665),
    C = n(839074),
    R = n(617348),
    O = n(302992),
    D = n(487085),
    L = n(745258),
    x = n(860890),
    w = n(961075),
    M = n(869477),
    P = n(979217),
    k = n(784731),
    U = n(876580),
    G = n(192379),
    B = n(239700),
    Z = n(661763),
    F = n(649859),
    V = n(662845),
    j = n(921336),
    H = n(995295),
    Y = n(198453),
    W = n(867824);
let K = {
        top: 'top',
        bottom: 'top',
        left: 'left',
        right: 'left'
    },
    z = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
    },
    q = {
        top: 'left',
        left: 'top'
    },
    Q = {
        top: 'height',
        left: 'width'
    },
    X = {
        width: 'totalWidth',
        height: 'totalHeight'
    },
    J = {},
    $ = 'undefined' != typeof document && window.visualViewport;
function ee(e) {
    let t = 0,
        n = 0,
        r = 0,
        i = 0,
        a = 0,
        s = 0,
        o = {};
    if ('BODY' === e.tagName) {
        var l, u;
        let a = document.documentElement;
        (r = a.clientWidth), (i = a.clientHeight), (t = null !== (l = null == $ ? void 0 : $.width) && void 0 !== l ? l : r), (n = null !== (u = null == $ ? void 0 : $.height) && void 0 !== u ? u : i), (o.top = a.scrollTop || e.scrollTop), (o.left = a.scrollLeft || e.scrollLeft);
    } else ({ width: t, height: n, top: a, left: s } = ea(e)), (o.top = e.scrollTop), (o.left = e.scrollLeft), (r = t), (i = n);
    return {
        width: t,
        height: n,
        totalWidth: r,
        totalHeight: i,
        scroll: o,
        top: a,
        left: s
    };
}
function et(e, t, n, r, i, a) {
    let s = i.scroll[e],
        o = r[Q[e]],
        l = t - a - s,
        u = t + a - s + n;
    return l < 0 ? -l : u > o ? Math.max(o - u, -l) : 0;
}
function en(e) {
    if (J[e]) return J[e];
    let [t, n] = e.split(' '),
        r = K[t] || 'right',
        i = q[r];
    !K[n] && (n = 'center');
    let a = Q[r],
        s = Q[i];
    return (
        (J[e] = {
            placement: t,
            crossPlacement: n,
            axis: r,
            crossAxis: i,
            size: a,
            crossSize: s
        }),
        J[e]
    );
}
function er(e, t, n, r, i, a, s, o, l, u) {
    let { placement: c, crossPlacement: d, axis: f, crossAxis: _, size: h, crossSize: p } = r,
        m = {};
    (m[_] = e[_]), 'center' === d ? (m[_] += (e[p] - n[p]) / 2) : d !== _ && (m[_] += e[p] - n[p]), (m[_] += a);
    let g = e[_] - n[p] + l + u,
        E = e[_] + e[p] - l - u;
    if (((m[_] = (0, B.uZ)(m[_], g, E)), c === f)) {
        let n = o ? s[h] : t[X[h]];
        m[z[f]] = Math.floor(n - e[f] + i);
    } else m[f] = Math.floor(e[f] + e[h] + i);
    return m;
}
function ei(e, t, n, r, i, a) {
    let { placement: s, axis: o, size: l } = a;
    return s === o ? Math.max(0, n[o] - e[o] - e.scroll[o] + t[o] - r[o] - r[z[o]] - i) : Math.max(0, e[l] + e[o] + e.scroll[o] - t[o] - n[o] - n[l] - r[o] - r[z[o]] - i);
}
function ea(e) {
    let { top: t, left: n, width: r, height: i } = e.getBoundingClientRect(),
        { scrollTop: a, scrollLeft: s, clientTop: o, clientLeft: l } = document.documentElement;
    return {
        top: t + a - o,
        left: n + s - l,
        width: r,
        height: i
    };
}
function es(e, t) {
    let n,
        r = window.getComputedStyle(e);
    if ('fixed' === r.position) {
        let { top: t, left: r, width: i, height: a } = e.getBoundingClientRect();
        n = {
            top: t,
            left: r,
            width: i,
            height: a
        };
    } else {
        n = ea(e);
        let r = ea(t),
            i = window.getComputedStyle(t);
        (r.top += (parseInt(i.borderTopWidth, 10) || 0) - t.scrollTop), (r.left += (parseInt(i.borderLeftWidth, 10) || 0) - t.scrollLeft), (n.top -= r.top), (n.left -= r.left);
    }
    return (n.top -= parseInt(r.marginTop, 10) || 0), (n.left -= parseInt(r.marginLeft, 10) || 0), n;
}
function eo(e) {
    let t = window.getComputedStyle(e);
    return 'none' !== t.transform || /transform|perspective/.test(t.willChange) || 'none' !== t.filter || 'paint' === t.contain || ('backdropFilter' in t && 'none' !== t.backdropFilter) || ('WebkitBackdropFilter' in t && 'none' !== t.WebkitBackdropFilter);
}
let el = new WeakMap(),
    eu = 'undefined' != typeof document && window.visualViewport;
function ec(e) {
    let { direction: t } = (0, F.bU)(),
        { arrowSize: n = 0, targetRef: r, overlayRef: i, scrollRef: a = i, placement: s = 'bottom', containerPadding: o = 12, shouldFlip: l = !0, boundaryElement: u = 'undefined' != typeof document ? document.body : null, offset: c = 0, crossOffset: d = 0, shouldUpdatePosition: f = !0, isOpen: _ = !0, onClose: h, maxHeight: p, arrowBoundaryOffset: m = 0 } = e,
        [g, E] = (0, G.useState)({
            position: {},
            arrowOffsetLeft: void 0,
            arrowOffsetTop: void 0,
            maxHeight: void 0,
            placement: void 0
        }),
        v = [f, s, i.current, r.current, a.current, o, l, u, c, d, _, t, p, m, n],
        I = (0, G.useCallback)(() => {
            if (!1 === f || !_ || !i.current || !r.current || !a.current || !u) return;
            let e = (function (e) {
                var t, n;
                let r,
                    { placement: i, targetNode: a, overlayNode: s, scrollNode: o, padding: l, shouldFlip: u, boundaryElement: c, offset: d, crossOffset: f, maxHeight: _, arrowSize: h = 0, arrowBoundaryOffset: p = 0 } = e,
                    m =
                        s instanceof HTMLElement
                            ? (function (e) {
                                  let t = e.offsetParent;
                                  if ((t && t === document.body && 'static' === window.getComputedStyle(t).position && !eo(t) && (t = document.documentElement), null == t)) for (t = e.parentElement; t && !eo(t); ) t = t.parentElement;
                                  return t || document.documentElement;
                              })(s)
                            : document.documentElement,
                    g = m === document.documentElement,
                    E = window.getComputedStyle(m).position,
                    v = g ? ea(a) : es(a, m);
                if (!g) {
                    let { marginTop: e, marginLeft: t } = window.getComputedStyle(a);
                    (v.top += parseInt(e, 10) || 0), (v.left += parseInt(t, 10) || 0);
                }
                let I = ea(s);
                let S =
                    ((t = s),
                    {
                        top: parseInt((r = window.getComputedStyle(t)).marginTop, 10) || 0,
                        bottom: parseInt(r.marginBottom, 10) || 0,
                        left: parseInt(r.marginLeft, 10) || 0,
                        right: parseInt(r.marginRight, 10) || 0
                    });
                return (
                    (I.width += S.left + S.right),
                    (I.height += S.top + S.bottom),
                    (function (e, t, n, r, i, a, s, o, l, u, c, d, f, _, h, p) {
                        var m, g, E, v, I, S;
                        let T = en(e),
                            { size: b, crossAxis: y, crossSize: A, placement: N, crossPlacement: C } = T,
                            R = er(t, o, n, T, c, d, u, f, h, p),
                            O = c,
                            D = ei(o, u, t, i, a + c, T);
                        if (s && r[b] > D) {
                            let e = en(`${z[N]} ${C}`),
                                r = er(t, o, n, e, c, d, u, f, h, p);
                            ei(o, u, t, i, a + c, e) > D && ((T = e), (R = r), (O = c));
                        }
                        let L = et(y, R[y], n[A], o, l, a);
                        R[y] += L;
                        let x = ((m = R), (g = o), (E = u), (v = t), (I = i), (S = a), null != m.top ? Math.max(0, g.height + g.top + g.scroll.top - (E.top + m.top) - (I.top + I.bottom + S)) : Math.max(0, v.top + E.top - (g.top + g.scroll.top) - (I.top + I.bottom + S)));
                        _ && _ < x && (x = _), (n.height = Math.min(n.height, x)), (L = et(y, (R = er(t, o, n, T, O, d, u, f, h, p))[y], n[A], o, l, a)), (R[y] += L);
                        let w = {},
                            M = t[y] + 0.5 * t[A] - n[y],
                            P = h / 2 + p,
                            k = n[A] - h / 2 - p,
                            U = t[y] - n[y] + h / 2,
                            G = t[y] + t[A] - n[y] - h / 2,
                            Z = (0, B.uZ)(M, U, G);
                        return (
                            (w[y] = (0, B.uZ)(Z, P, k)),
                            {
                                position: R,
                                maxHeight: x,
                                arrowOffsetLeft: w.left,
                                arrowOffsetTop: w.top,
                                placement: T.placement
                            }
                        );
                    })(
                        i,
                        v,
                        I,
                        {
                            top: (n = o).scrollTop,
                            left: n.scrollLeft,
                            width: n.scrollWidth,
                            height: n.scrollHeight
                        },
                        S,
                        l,
                        u,
                        ee(c),
                        ee(m),
                        'BODY' === c.tagName ? ea(m) : es(m, c),
                        d,
                        f,
                        !!E && 'static' !== E,
                        _,
                        h,
                        p
                    )
                );
            })({
                placement: (function (e, t) {
                    return 'rtl' === t ? e.replace('start', 'right').replace('end', 'left') : e.replace('start', 'left').replace('end', 'right');
                })(s, t),
                overlayNode: i.current,
                targetNode: r.current,
                scrollNode: a.current,
                padding: o,
                shouldFlip: l,
                boundaryElement: u,
                offset: c,
                crossOffset: d,
                maxHeight: p,
                arrowSize: n,
                arrowBoundaryOffset: m
            });
            Object.keys(e.position).forEach((t) => (i.current.style[t] = e.position[t] + 'px')), (i.current.style.maxHeight = null != e.maxHeight ? e.maxHeight + 'px' : void 0), E(e);
        }, v);
    (0, Z.bt)(I, v),
        (function (e) {
            (0, Z.bt)(
                () => (
                    window.addEventListener('resize', e, !1),
                    () => {
                        window.removeEventListener('resize', e, !1);
                    }
                ),
                [e]
            );
        })(I),
        (0, Z.yU)({
            ref: i,
            onResize: I
        });
    let S = (0, G.useRef)(!1);
    (0, Z.bt)(() => {
        let e;
        let t = () => {
            (S.current = !0),
                clearTimeout(e),
                (e = setTimeout(() => {
                    S.current = !1;
                }, 500)),
                I();
        };
        return (
            null == eu || eu.addEventListener('resize', t),
            null == eu || eu.addEventListener('scroll', t),
            () => {
                null == eu || eu.removeEventListener('resize', t), null == eu || eu.removeEventListener('scroll', t);
            }
        );
    }, [I]);
    let T = (0, G.useCallback)(() => {
        !S.current && h();
    }, [h, S]);
    return (
        !(function (e) {
            let { triggerRef: t, isOpen: n, onClose: r } = e;
            (0, G.useEffect)(() => {
                if (!n || null === r) return;
                let e = (e) => {
                    let n = e.target;
                    if (!t.current || (n instanceof Node && !n.contains(t.current))) return;
                    let i = r || el.get(t.current);
                    i && i();
                };
                return (
                    window.addEventListener('scroll', e, !0),
                    () => {
                        window.removeEventListener('scroll', e, !0);
                    }
                );
            }, [n, r, t]);
        })({
            triggerRef: r,
            isOpen: _,
            onClose: h && T
        }),
        {
            overlayProps: {
                style: {
                    position: 'absolute',
                    zIndex: 100000,
                    ...g.position,
                    maxHeight: g.maxHeight
                }
            },
            placement: g.placement,
            arrowProps: {
                'aria-hidden': 'true',
                role: 'presentation',
                style: {
                    left: g.arrowOffsetLeft,
                    top: g.arrowOffsetTop
                }
            },
            updatePosition: I
        }
    );
}
let ed = [];
function ef(e, t) {
    let { onClose: n, shouldCloseOnBlur: r, isOpen: i, isDismissable: a = !1, isKeyboardDismissDisabled: s = !1, shouldCloseOnInteractOutside: o } = e;
    (0, G.useEffect)(
        () => (
            i && ed.push(t),
            () => {
                let e = ed.indexOf(t);
                e >= 0 && ed.splice(e, 1);
            }
        ),
        [i, t]
    );
    let l = () => {
        ed[ed.length - 1] === t && n && n();
    };
    (0, j.Fc)({
        ref: t,
        onInteractOutside:
            a && i
                ? (e) => {
                      (!o || o(e.target)) && (ed[ed.length - 1] === t && (e.stopPropagation(), e.preventDefault()), l());
                  }
                : null,
        onInteractOutsideStart: (e) => {
            (!o || o(e.target)) && ed[ed.length - 1] === t && (e.stopPropagation(), e.preventDefault());
        }
    });
    let { focusWithinProps: u } = (0, j.L_)({
        isDisabled: !r,
        onBlurWithin: (e) => {
            !(!e.relatedTarget || (0, V.cW)(e.relatedTarget)) && (!o || o(e.relatedTarget)) && n();
        }
    });
    return {
        overlayProps: {
            onKeyDown: (e) => {
                'Escape' === e.key && !s && (e.stopPropagation(), e.preventDefault(), l());
            },
            ...u
        },
        underlayProps: {
            onPointerDown: (e) => {
                e.target === e.currentTarget && e.preventDefault();
            }
        }
    };
}
function e_(e, t, n) {
    let r,
        { type: i } = e,
        { isOpen: a } = t;
    (0, G.useEffect)(() => {
        n && n.current && el.set(n.current, t.close);
    });
    'menu' === i ? (r = !0) : 'listbox' === i && (r = 'listbox');
    let s = (0, Z.Me)();
    return {
        triggerProps: {
            'aria-haspopup': r,
            'aria-expanded': a,
            'aria-controls': a ? s : null,
            onPress: t.toggle
        },
        overlayProps: { id: s }
    };
}
let eh = 'undefined' != typeof document && window.visualViewport,
    ep = new Set(['checkbox', 'radio', 'range', 'color', 'file', 'image', 'button', 'submit', 'reset']),
    em = 0;
function eg(e = {}) {
    let { isDisabled: t } = e;
    (0, Z.bt)(() => {
        if (!t)
            return (
                1 == ++em &&
                    (r = (0, Z.gn)()
                        ? (function () {
                              let e, t;
                              let n = null,
                                  r = () => {
                                      if (n) return;
                                      let e = window.pageXOffset,
                                          t = window.pageYOffset;
                                      (n = (0, Z.tS)(
                                          ev(window, 'scroll', () => {
                                              window.scrollTo(0, 0);
                                          }),
                                          eE(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`),
                                          eE(document.documentElement, 'overflow', 'hidden'),
                                          eE(document.body, 'marginTop', `-${t}px`),
                                          () => {
                                              window.scrollTo(e, t);
                                          }
                                      )),
                                          window.scrollTo(0, 0);
                                  },
                                  i = (0, Z.tS)(
                                      ev(
                                          document,
                                          'touchstart',
                                          (n) => {
                                              ((e = (0, Z.rP)(n.target, !0)) !== document.documentElement || e !== document.body) && e instanceof HTMLElement && 'auto' === window.getComputedStyle(e).overscrollBehavior && (t = eE(e, 'overscrollBehavior', 'contain'));
                                          },
                                          {
                                              passive: !1,
                                              capture: !0
                                          }
                                      ),
                                      ev(
                                          document,
                                          'touchmove',
                                          (t) => {
                                              if (!e || e === document.documentElement || e === document.body) {
                                                  t.preventDefault();
                                                  return;
                                              }
                                              e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault();
                                          },
                                          {
                                              passive: !1,
                                              capture: !0
                                          }
                                      ),
                                      ev(
                                          document,
                                          'touchend',
                                          (e) => {
                                              let n = e.target;
                                              eS(n) &&
                                                  n !== document.activeElement &&
                                                  (e.preventDefault(),
                                                  r(),
                                                  (n.style.transform = 'translateY(-2000px)'),
                                                  n.focus(),
                                                  requestAnimationFrame(() => {
                                                      n.style.transform = '';
                                                  })),
                                                  t && t();
                                          },
                                          {
                                              passive: !1,
                                              capture: !0
                                          }
                                      ),
                                      ev(
                                          document,
                                          'focus',
                                          (e) => {
                                              let t = e.target;
                                              eS(t) &&
                                                  (r(),
                                                  (t.style.transform = 'translateY(-2000px)'),
                                                  requestAnimationFrame(() => {
                                                      (t.style.transform = ''),
                                                          eh &&
                                                              (eh.height < window.innerHeight
                                                                  ? requestAnimationFrame(() => {
                                                                        eI(t);
                                                                    })
                                                                  : eh.addEventListener('resize', () => eI(t), { once: !0 }));
                                                  }));
                                          },
                                          !0
                                      )
                                  );
                              return () => {
                                  null == t || t(), null == n || n(), i();
                              };
                          })()
                        : (function () {
                              return (0, Z.tS)(eE(document.documentElement, 'paddingRight', `${window.innerWidth - document.documentElement.clientWidth}px`), eE(document.documentElement, 'overflow', 'hidden'));
                          })()),
                () => {
                    0 == --em && r();
                }
            );
    }, [t]);
}
function eE(e, t, n) {
    let r = e.style[t];
    return (
        (e.style[t] = n),
        () => {
            e.style[t] = r;
        }
    );
}
function ev(e, t, n, r) {
    return (
        e.addEventListener(t, n, r),
        () => {
            e.removeEventListener(t, n, r);
        }
    );
}
function eI(e) {
    let t = document.scrollingElement || document.documentElement;
    for (; e && e !== t; ) {
        let t = (0, Z.rP)(e);
        if (t !== document.documentElement && t !== document.body && t !== e) {
            let n = t.getBoundingClientRect().top,
                r = e.getBoundingClientRect().top;
            r > n + e.clientHeight && (t.scrollTop += r - n);
        }
        e = t.parentElement;
    }
}
function eS(e) {
    return (e instanceof HTMLInputElement && !ep.has(e.type)) || e instanceof HTMLTextAreaElement || (e instanceof HTMLElement && e.isContentEditable);
}
let eT = G.createContext(null);
function eb(e) {
    let { children: t } = e,
        n = (0, G.useContext)(eT),
        [r, i] = (0, G.useState)(0),
        a = (0, G.useMemo)(
            () => ({
                parent: n,
                modalCount: r,
                addModal() {
                    i((e) => e + 1), n && n.addModal();
                },
                removeModal() {
                    i((e) => e - 1), n && n.removeModal();
                }
            }),
            [n, r]
        );
    return G.createElement(eT.Provider, { value: a }, t);
}
function ey(e) {
    let t;
    let { modalProviderProps: n } = { modalProviderProps: { 'aria-hidden': (!!(t = (0, G.useContext)(eT)) && t.modalCount > 0) || null } };
    return G.createElement('div', {
        'data-overlay-container': !0,
        ...e,
        ...n
    });
}
function eA(e) {
    return G.createElement(eb, null, G.createElement(ey, e));
}
function eN(e) {
    let t = (0, Y.Av)(),
        { portalContainer: n = t ? null : document.body, ...r } = e;
    if (
        (G.useEffect(() => {
            if (null == n ? void 0 : n.closest('[data-overlay-container]')) throw Error('An OverlayContainer must not be inside another container. Please change the portalContainer prop.');
        }, [n]),
        !n)
    )
        return null;
    let i = G.createElement(eA, r);
    return H.createPortal(i, n);
}
var eC = {};
function eR(e) {
    var t;
    let { onDismiss: n, ...r } = e;
    let i = (0, F.qb)((t = eC) && t.__esModule ? t.default : t, '@react-aria/overlays'),
        a = (0, Z.bE)(r, i.format('dismiss'));
    return G.createElement(
        W.T,
        null,
        G.createElement('button', {
            ...a,
            tabIndex: -1,
            onClick: () => {
                n && n();
            },
            style: {
                width: 1,
                height: 1
            }
        })
    );
}
eC = {
    'ar-AE': i.Z,
    'bg-BG': a.Z,
    'cs-CZ': s.Z,
    'da-DK': o.Z,
    'de-DE': l.Z,
    'el-GR': u.Z,
    'en-US': c.Z,
    'es-ES': d.Z,
    'et-EE': f.Z,
    'fi-FI': _.Z,
    'fr-FR': h.Z,
    'he-IL': p.Z,
    'hr-HR': m.Z,
    'hu-HU': g.Z,
    'it-IT': E.Z,
    'ja-JP': v.Z,
    'ko-KR': I.Z,
    'lt-LT': S.Z,
    'lv-LV': T.Z,
    'nb-NO': b.Z,
    'nl-NL': y.Z,
    'pl-PL': A.Z,
    'pt-BR': N.Z,
    'pt-PT': C.Z,
    'ro-RO': R.Z,
    'ru-RU': O.Z,
    'sk-SK': D.Z,
    'sl-SI': L.Z,
    'sr-SP': x.Z,
    'sv-SE': w.Z,
    'tr-TR': M.Z,
    'uk-UA': P.Z,
    'zh-CN': k.Z,
    'zh-TW': U.Z
};
let eO = new WeakMap(),
    eD = [];
function eL(e, t = document.body) {
    let n = new Set(e),
        r = new Set(),
        i = (e) => {
            for (let t of e.querySelectorAll('[data-live-announcer], [data-react-aria-top-layer]')) n.add(t);
            let t = (e) => {
                    if (n.has(e) || (r.has(e.parentElement) && 'row' !== e.parentElement.getAttribute('role'))) return NodeFilter.FILTER_REJECT;
                    for (let t of n) if (e.contains(t)) return NodeFilter.FILTER_SKIP;
                    return NodeFilter.FILTER_ACCEPT;
                },
                i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: t }),
                s = t(e);
            if ((s === NodeFilter.FILTER_ACCEPT && a(e), s !== NodeFilter.FILTER_REJECT)) {
                let e = i.nextNode();
                for (; null != e; ) a(e), (e = i.nextNode());
            }
        },
        a = (e) => {
            var t;
            let n = null !== (t = eO.get(e)) && void 0 !== t ? t : 0;
            ('true' !== e.getAttribute('aria-hidden') || 0 !== n) && (0 === n && e.setAttribute('aria-hidden', 'true'), r.add(e), eO.set(e, n + 1));
        };
    eD.length && eD[eD.length - 1].disconnect(), i(t);
    let s = new MutationObserver((e) => {
        for (let t of e)
            if ('childList' === t.type && 0 !== t.addedNodes.length && ![...n, ...r].some((e) => e.contains(t.target))) {
                for (let e of t.removedNodes) e instanceof Element && (n.delete(e), r.delete(e));
                for (let e of t.addedNodes) (e instanceof HTMLElement || e instanceof SVGElement) && ('true' === e.dataset.liveAnnouncer || 'true' === e.dataset.reactAriaTopLayer) ? n.add(e) : e instanceof Element && i(e);
            }
    });
    s.observe(t, {
        childList: !0,
        subtree: !0
    });
    let o = {
        observe() {
            s.observe(t, {
                childList: !0,
                subtree: !0
            });
        },
        disconnect() {
            s.disconnect();
        }
    };
    return (
        eD.push(o),
        () => {
            for (let e of (s.disconnect(), r)) {
                let t = eO.get(e);
                1 === t ? (e.removeAttribute('aria-hidden'), eO.delete(e)) : eO.set(e, t - 1);
            }
            o === eD[eD.length - 1] ? (eD.pop(), eD.length && eD[eD.length - 1].observe()) : eD.splice(eD.indexOf(o), 1);
        }
    );
}
function ex(e, t) {
    let { triggerRef: n, popoverRef: r, isNonModal: i, isKeyboardDismissDisabled: a, shouldCloseOnInteractOutside: s, ...o } = e,
        { overlayProps: l, underlayProps: u } = ef(
            {
                isOpen: t.isOpen,
                onClose: t.close,
                shouldCloseOnBlur: !0,
                isDismissable: !i,
                isKeyboardDismissDisabled: a,
                shouldCloseOnInteractOutside: s
            },
            r
        ),
        {
            overlayProps: c,
            arrowProps: d,
            placement: f
        } = ec({
            ...o,
            targetRef: n,
            overlayRef: r,
            isOpen: t.isOpen,
            onClose: i ? t.close : null
        });
    return (
        eg({ isDisabled: i || !t.isOpen }),
        (0, Z.bt)(() => {
            if (t.isOpen && !i && r.current) return eL([r.current]);
        }, [i, t.isOpen, r]),
        {
            popoverProps: (0, Z.dG)(l, c),
            arrowProps: d,
            underlayProps: u,
            placement: f
        }
    );
}
let ew = G.createContext(null);
function eM(e) {
    let t = (0, Y.Av)(),
        { portalContainer: n = t ? null : document.body, isExiting: r } = e,
        [i, a] = (0, G.useState)(!1),
        s = (0, G.useMemo)(
            () => ({
                contain: i,
                setContain: a
            }),
            [i, a]
        );
    if (!n) return null;
    let o = e.children;
    return (
        !e.disableFocusManagement &&
            (o = G.createElement(
                V.MT,
                {
                    restoreFocus: !0,
                    contain: i && !r
                },
                o
            )),
        (o = G.createElement(ew.Provider, { value: s }, G.createElement(j.mk, null, o))),
        H.createPortal(o, n)
    );
}
function eP() {
    let e = (0, G.useContext)(ew),
        t = null == e ? void 0 : e.setContain;
    (0, Z.bt)(() => {
        null == t || t(!0);
    }, [t]);
}
function ek(e, t, n) {
    let { overlayProps: r, underlayProps: i } = ef(
        {
            ...e,
            isOpen: t.isOpen,
            onClose: t.close
        },
        n
    );
    return (
        eg({ isDisabled: !t.isOpen }),
        eP(),
        (0, G.useEffect)(() => {
            if (t.isOpen) return eL([n.current]);
        }, [t.isOpen, n]),
        {
            modalProps: (0, Z.dG)(r),
            underlayProps: i
        }
    );
}
