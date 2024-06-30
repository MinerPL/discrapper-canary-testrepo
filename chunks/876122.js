r.d(e, {
    Gd: function () {
        return u;
    },
    Xb: function () {
        return c;
    },
    cu: function () {
        return I;
    },
    pj: function () {
        return R;
    },
    vi: function () {
        return T;
    }
});
var n = r(862315), _ = r(868145), a = r(529866), i = r(24716), o = r(28434), E = r(703498), s = r(741900);
class c {
    constructor(t, e = new E.s(), r = 4) {
        this._version = r, this._stack = [{ scope: e }], t && this.bindClient(t);
    }
    isOlderThan(t) {
        return this._version < t;
    }
    bindClient(t) {
        this.getStackTop().client = t, t && t.setupIntegrations && t.setupIntegrations();
    }
    pushScope() {
        let t = E.s.clone(this.getScope());
        return this.getStack().push({
            client: this.getClient(),
            scope: t
        }), t;
    }
    popScope() {
        return !(this.getStack().length <= 1) && !!this.getStack().pop();
    }
    withScope(t) {
        let e = this.pushScope();
        try {
            t(e);
        } finally {
            this.popScope();
        }
    }
    getClient() {
        return this.getStackTop().client;
    }
    getScope() {
        return this.getStackTop().scope;
    }
    getStack() {
        return this._stack;
    }
    getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    captureException(t, e) {
        let r = this._lastEventId = e && e.event_id ? e.event_id : (0, n.DM)(), _ = Error('Sentry syntheticException');
        return this._withClient((n, a) => {
            n.captureException(t, {
                originalException: t,
                syntheticException: _,
                ...e,
                event_id: r
            }, a);
        }), r;
    }
    captureMessage(t, e, r) {
        let _ = this._lastEventId = r && r.event_id ? r.event_id : (0, n.DM)(), a = Error(t);
        return this._withClient((n, i) => {
            n.captureMessage(t, e, {
                originalException: t,
                syntheticException: a,
                ...r,
                event_id: _
            }, i);
        }), _;
    }
    captureEvent(t, e) {
        let r = e && e.event_id ? e.event_id : (0, n.DM)();
        return !t.type && (this._lastEventId = r), this._withClient((n, _) => {
            n.captureEvent(t, {
                ...e,
                event_id: r
            }, _);
        }), r;
    }
    lastEventId() {
        return this._lastEventId;
    }
    addBreadcrumb(t, e) {
        let {
            scope: r,
            client: n
        } = this.getStackTop();
        if (!n)
            return;
        let {
            beforeBreadcrumb: i = null,
            maxBreadcrumbs: o = 100
        } = n.getOptions && n.getOptions() || {};
        if (o <= 0)
            return;
        let E = {
                timestamp: (0, _.yW)(),
                ...t
            }, s = i ? (0, a.Cf)(() => i(E, e)) : E;
        null !== s && (n.emit && n.emit('beforeAddBreadcrumb', s, e), r.addBreadcrumb(s, o));
    }
    setUser(t) {
        this.getScope().setUser(t);
    }
    setTags(t) {
        this.getScope().setTags(t);
    }
    setExtras(t) {
        this.getScope().setExtras(t);
    }
    setTag(t, e) {
        this.getScope().setTag(t, e);
    }
    setExtra(t, e) {
        this.getScope().setExtra(t, e);
    }
    setContext(t, e) {
        this.getScope().setContext(t, e);
    }
    configureScope(t) {
        let {
            scope: e,
            client: r
        } = this.getStackTop();
        r && t(e);
    }
    run(t) {
        let e = R(this);
        try {
            t(this);
        } finally {
            R(e);
        }
    }
    getIntegration(t) {
        let e = this.getClient();
        if (!e)
            return null;
        try {
            return e.getIntegration(t);
        } catch (e) {
            return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn(`Cannot retrieve integration ${ t.id } from the current Hub`), null;
        }
    }
    startTransaction(t, e) {
        let r = this._callExtensionMethod('startTransaction', t, e);
        return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && !r && console.warn(`Tracing extension 'startTransaction' has not been added. Call 'addTracingExtensions' before calling 'init':
Sentry.addTracingExtensions();
Sentry.init({...});
`), r;
    }
    traceHeaders() {
        return this._callExtensionMethod('traceHeaders');
    }
    captureSession(t = !1) {
        if (t)
            return this.endSession();
        this._sendSessionUpdate();
    }
    endSession() {
        let t = this.getStackTop().scope, e = t.getSession();
        e && (0, s.RJ)(e), this._sendSessionUpdate(), t.setSession();
    }
    startSession(t) {
        let {
                scope: e,
                client: r
            } = this.getStackTop(), {
                release: n,
                environment: _ = o.J
            } = r && r.getOptions() || {}, {userAgent: a} = i.n2.navigator || {}, E = (0, s.Hv)({
                release: n,
                environment: _,
                user: e.getUser(),
                ...a && { userAgent: a },
                ...t
            }), c = e.getSession && e.getSession();
        return c && 'ok' === c.status && (0, s.CT)(c, { status: 'exited' }), this.endSession(), e.setSession(E), E;
    }
    shouldSendDefaultPii() {
        let t = this.getClient(), e = t && t.getOptions();
        return !!(e && e.sendDefaultPii);
    }
    _sendSessionUpdate() {
        let {
                scope: t,
                client: e
            } = this.getStackTop(), r = t.getSession();
        r && e && e.captureSession && e.captureSession(r);
    }
    _withClient(t) {
        let {
            scope: e,
            client: r
        } = this.getStackTop();
        r && t(r, e);
    }
    _callExtensionMethod(t, ...e) {
        let r = I().__SENTRY__;
        if (r && r.extensions && 'function' == typeof r.extensions[t])
            return r.extensions[t].apply(this, e);
        ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.kg.warn(`Extension method ${ t } couldn't be found, doing nothing.`);
    }
}
function I() {
    return i.n2.__SENTRY__ = i.n2.__SENTRY__ || {
        extensions: {},
        hub: void 0
    }, i.n2;
}
function R(t) {
    let e = I(), r = T(e);
    return l(e, t), r;
}
function u() {
    let t = I();
    if (t.__SENTRY__ && t.__SENTRY__.acs) {
        let e = t.__SENTRY__.acs.getCurrentHub();
        if (e)
            return e;
    }
    return function (t = I()) {
        return (!function (t) {
            return !!(t && t.__SENTRY__ && t.__SENTRY__.hub);
        }(t) || T(t).isOlderThan(4)) && l(t, new c()), T(t);
    }(t);
}
function T(t) {
    return (0, i.YO)('hub', () => new c(), t);
}
function l(t, e) {
    return !!t && ((t.__SENTRY__ = t.__SENTRY__ || {}).hub = e, !0);
}
