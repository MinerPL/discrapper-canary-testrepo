r.d(e, {
    gE: function () {
        return l;
    }
});
var n = r(376097), _ = r(90668), a = r(147816), i = r(529866), o = r(874230), E = r(829919), s = r(321611), c = r(799821), I = r(722994), R = r(263951), u = r(607190);
let T = {
    ...n.AT,
    markBackgroundTransactions: !0,
    routingInstrumentation: R.R,
    startTransactionOnLocationChange: !0,
    startTransactionOnPageLoad: !0,
    enableLongTask: !0,
    _experiments: {},
    ...I.k3
};
class l {
    __init() {
        this.name = 'BrowserTracing';
    }
    __init2() {
        this._hasSetTracePropagationTargets = !1;
    }
    constructor(t) {
        l.prototype.__init.call(this), l.prototype.__init2.call(this), (0, _.T)(), ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this._hasSetTracePropagationTargets = !!(t && (t.tracePropagationTargets || t.tracingOrigins))), this.options = {
            ...T,
            ...t
        }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins), this._collectWebVitals = (0, c.PR)(), this.options.enableLongTask && (0, c.Fv)(), this.options._experiments.enableInteractions && (0, c.sn)();
    }
    setupOnce(t, e) {
        this._getCurrentHub = e;
        let r = e().getClient(), n = r && r.getOptions(), {
                routingInstrumentation: _,
                startTransactionOnLocationChange: a,
                startTransactionOnPageLoad: o,
                markBackgroundTransactions: E,
                traceFetch: c,
                traceXHR: R,
                shouldCreateSpanForRequest: u,
                enableHTTPTimings: T,
                _experiments: l
            } = this.options, A = n && n.tracePropagationTargets, N = A || this.options.tracePropagationTargets;
        ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && A && i.kg.warn('[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.'), _(t => {
            let r = this._createRouteTransaction(t);
            return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(r, t, e), r;
        }, o, a), E && (0, s.j)(), l.enableInteractions && this._registerInteractionListener(), (0, I.L7)({
            traceFetch: c,
            traceXHR: R,
            tracePropagationTargets: N,
            shouldCreateSpanForRequest: u,
            enableHTTPTimings: T
        });
    }
    _createRouteTransaction(t) {
        if (!this._getCurrentHub) {
            ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`[Tracing] Did not create ${ t.op } transaction because _getCurrentHub is invalid.`);
            return;
        }
        let e = this._getCurrentHub(), {
                beforeNavigate: r,
                idleTimeout: n,
                finalTimeout: a,
                heartbeatInterval: E
            } = this.options, s = 'pageload' === t.op, I = s ? A('sentry-trace') : '', R = s ? A('baggage') : '', {
                traceparentData: T,
                dynamicSamplingContext: l,
                propagationContext: N
            } = (0, o.KA)(I, R), d = {
                ...t,
                ...T,
                metadata: {
                    ...t.metadata,
                    dynamicSamplingContext: T && !l ? {} : l
                },
                trimEnd: !0
            }, O = 'function' == typeof r ? r(d) : d, p = void 0 === O ? {
                ...d,
                sampled: !1
            } : O;
        p.metadata = p.name !== d.name ? {
            ...p.metadata,
            source: 'custom'
        } : p.metadata, this._latestRouteName = p.name, this._latestRouteSource = p.metadata && p.metadata.source, !1 === p.sampled && ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] Will not send ${ p.op } transaction because of beforeNavigate.`), ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`[Tracing] Starting ${ p.op } transaction on scope`);
        let {location: S} = u.m, D = (0, _.l)(e, p, n, a, !0, { location: S }, E), f = e.getScope();
        return s && T ? f.setPropagationContext(N) : f.setPropagationContext({
            traceId: D.traceId,
            spanId: D.spanId,
            parentSpanId: D.parentSpanId,
            sampled: !!D.sampled
        }), D.registerBeforeFinishCallback(t => {
            this._collectWebVitals(), (0, c.f7)(t);
        }), D;
    }
    _registerInteractionListener() {
        let t;
        let e = () => {
            let {
                    idleTimeout: e,
                    finalTimeout: r,
                    heartbeatInterval: n
                } = this.options, o = 'ui.action.click', E = (0, a.x1)();
            if (E && E.op && [
                    'navigation',
                    'pageload'
                ].includes(E.op)) {
                ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`[Tracing] Did not create ${ o } transaction because a pageload or navigation transaction is in progress.`);
                return;
            }
            if (t && (t.setFinishReason('interactionInterrupted'), t.finish(), t = void 0), !this._getCurrentHub) {
                ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`[Tracing] Did not create ${ o } transaction because _getCurrentHub is invalid.`);
                return;
            }
            if (!this._latestRouteName) {
                ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`[Tracing] Did not create ${ o } transaction because _latestRouteName is missing.`);
                return;
            }
            let s = this._getCurrentHub(), {location: c} = u.m, I = {
                    name: this._latestRouteName,
                    op: o,
                    trimEnd: !0,
                    metadata: { source: this._latestRouteSource || 'url' }
                };
            t = (0, _.l)(s, I, e, r, !0, { location: c }, n);
        };
        ['click'].forEach(t => {
            addEventListener(t, e, {
                once: !1,
                capture: !0
            });
        });
    }
}
function A(t) {
    let e = (0, E.qT)(`meta[name=${ t }]`);
    return e ? e.getAttribute('content') : void 0;
}
