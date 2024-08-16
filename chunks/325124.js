r.d(t, {
    E8: function () {
        return S;
    },
    Wo: function () {
        return D;
    },
    og: function () {
        return L;
    }
});
var n = r(650665),
    a = r(423850),
    o = r(393523),
    i = r(553062),
    _ = r(859502),
    E = r(988097),
    s = r(263449),
    c = r(696486),
    I = r(305625),
    u = r(622916),
    l = r(370541),
    R = r(101284),
    A = r(731889),
    T = r(467510),
    d = r(454463),
    N = r(163162),
    p = r(119128),
    O = r(799033);
let f = {
        ...i.A,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !1,
        enableInp: !0,
        _experiments: {},
        ...O.k3
    },
    S = (e = {}) => {
        (0, _.a)();
        let {
                enableInp: t,
                enableLongTask: r,
                enableLongAnimationFrame: A,
                _experiments: { enableInteractions: T },
                beforeStartSpan: S,
                idleTimeout: C,
                finalTimeout: g,
                childSpanTimeout: M,
                markBackgroundSpan: P,
                traceFetch: m,
                traceXHR: U,
                shouldCreateSpanForRequest: G,
                enableHTTPTimings: y,
                instrumentPageLoad: v,
                instrumentNavigation: b
            } = {
                ...f,
                ...e
            },
            B = (0, n.PR)();
        t && (0, a.N)(), A && PerformanceObserver.supportedEntryTypes.includes('long-animation-frame') ? (0, n.Jk)() : r && (0, n.Fv)(), T && (0, n.sn)();
        let w = {
            name: void 0,
            source: void 0
        };
        function H(e, t) {
            let r = 'pageload' === t.op,
                a = S ? S(t) : t,
                o = a.attributes || {};
            t.name !== a.name && ((o[E.Zj] = 'custom'), (a.attributes = o)), (w.name = a.name), (w.source = o[E.Zj]);
            let _ = (0, i.R)(a, {
                idleTimeout: C,
                finalTimeout: g,
                childSpanTimeout: M,
                disableAutoFinish: r,
                beforeSpanEnd: (e) => {
                    B(), (0, n.f7)(e);
                }
            });
            function s() {
                ['interactive', 'complete'].includes(N.m9.document.readyState) && e.emit('idleSpanEnableAutoFinish', _);
            }
            return (
                r &&
                    N.m9.document &&
                    (N.m9.document.addEventListener('readystatechange', () => {
                        s();
                    }),
                    s()),
                _
            );
        }
        return {
            name: 'BrowserTracing',
            afterAllSetup(e) {
                let r;
                let n = N.m9.location && N.m9.location.href;
                e.on('startNavigationSpan', (t) => {
                    if ((0, s.s3)() === e)
                        r && !(0, c.XU)(r).timestamp && (d.X && u.kg.log(`[Tracing] Finishing current root span with op: ${(0, c.XU)(r).op}`), r.end()),
                            (r = H(e, {
                                op: 'navigation',
                                ...t
                            }));
                }),
                    e.on('startPageLoadSpan', (t, n = {}) => {
                        if ((0, s.s3)() !== e) return;
                        r && !(0, c.XU)(r).timestamp && (d.X && u.kg.log(`[Tracing] Finishing current root span with op: ${(0, c.XU)(r).op}`), r.end());
                        let a = n.sentryTrace || h('sentry-trace'),
                            o = n.baggage || h('baggage'),
                            i = (0, l.pT)(a, o);
                        (0, s.nZ)().setPropagationContext(i),
                            (r = H(e, {
                                op: 'pageload',
                                ...t
                            }));
                    }),
                    e.on('spanEnd', (e) => {
                        let t = (0, c.XU)(e).op;
                        if (e !== (0, c.Gx)(e) || ('navigation' !== t && 'pageload' !== t)) return;
                        let r = (0, s.nZ)(),
                            n = r.getPropagationContext();
                        r.setPropagationContext({
                            ...n,
                            sampled: void 0 !== n.sampled ? n.sampled : (0, c.Tt)(e),
                            dsc: n.dsc || (0, I.jC)(e)
                        });
                    }),
                    N.m9.location &&
                        (v &&
                            D(e, {
                                name: N.m9.location.pathname,
                                startTime: R.Z1 ? R.Z1 / 1000 : void 0,
                                attributes: {
                                    [E.Zj]: 'url',
                                    [E.S3]: 'auto.pageload.browser'
                                }
                            }),
                        b &&
                            (0, o.a)(({ to: t, from: r }) => {
                                if (void 0 === r && n && -1 !== n.indexOf(t)) {
                                    n = void 0;
                                    return;
                                }
                                r !== t &&
                                    ((n = void 0),
                                    L(e, {
                                        name: N.m9.location.pathname,
                                        attributes: {
                                            [E.Zj]: 'url',
                                            [E.S3]: 'auto.navigation.browser'
                                        }
                                    }));
                            })),
                    P && (0, p.j)(),
                    T &&
                        (function (e, t, r, n) {
                            let a;
                            N.m9.document &&
                                addEventListener(
                                    'click',
                                    () => {
                                        let o = 'ui.action.click',
                                            _ = (0, c.HN)(),
                                            s = _ && (0, c.Gx)(_);
                                        if (s && ['navigation', 'pageload'].includes((0, c.XU)(s).op)) {
                                            d.X && u.kg.warn(`[Tracing] Did not create ${o} span because a pageload or navigation span is in progress.`);
                                            return;
                                        }
                                        if ((a && (a.setAttribute(E.ju, 'interactionInterrupted'), a.end(), (a = void 0)), !n.name)) {
                                            d.X && u.kg.warn(`[Tracing] Did not create ${o} transaction because _latestRouteName is missing.`);
                                            return;
                                        }
                                        a = (0, i.R)(
                                            {
                                                name: n.name,
                                                op: o,
                                                attributes: { [E.Zj]: n.source || 'url' }
                                            },
                                            {
                                                idleTimeout: e,
                                                finalTimeout: t,
                                                childSpanTimeout: r
                                            }
                                        );
                                    },
                                    {
                                        once: !1,
                                        capture: !0
                                    }
                                );
                        })(C, g, M, w),
                    t && (0, a.D)(),
                    (0, O.L7)(e, {
                        traceFetch: m,
                        traceXHR: U,
                        tracePropagationTargets: e.getOptions().tracePropagationTargets,
                        shouldCreateSpanForRequest: G,
                        enableHTTPTimings: y
                    });
            }
        };
    };
function D(e, t, r) {
    e.emit('startPageLoadSpan', t, r), (0, s.nZ)().setTransactionName(t.name);
    let n = (0, c.HN)();
    return 'pageload' === (n && (0, c.XU)(n).op) ? n : void 0;
}
function L(e, t) {
    (0, s.aF)().setPropagationContext((0, A.Q)()), (0, s.nZ)().setPropagationContext((0, A.Q)()), e.emit('startNavigationSpan', t), (0, s.nZ)().setTransactionName(t.name);
    let r = (0, c.HN)();
    return 'navigation' === (r && (0, c.XU)(r).op) ? r : void 0;
}
function h(e) {
    let t = (0, T.qT)(`meta[name=${e}]`);
    return t ? t.getAttribute('content') : void 0;
}
