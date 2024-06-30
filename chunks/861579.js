r.d(e, {
    W: function () {
        return N;
    }
});
var n = r(177668), _ = r(529866), a = r(862315), i = r(46834), o = r(880803), E = r(50074), s = r(303155), c = r(507506), I = r(419767), R = r(595208), u = r(741900), T = r(154405), l = r(392405);
let A = 'Not capturing exception because it\'s already been captured.';
class N {
    __init() {
        this._integrations = {};
    }
    __init2() {
        this._integrationsInitialized = !1;
    }
    __init3() {
        this._numProcessing = 0;
    }
    __init4() {
        this._outcomes = {};
    }
    __init5() {
        this._hooks = {};
    }
    constructor(t) {
        if (N.prototype.__init.call(this), N.prototype.__init2.call(this), N.prototype.__init3.call(this), N.prototype.__init4.call(this), N.prototype.__init5.call(this), this._options = t, t.dsn ? this._dsn = (0, n.vK)(t.dsn) : ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.warn('No DSN provided, client will not do anything.'), this._dsn) {
            let e = (0, c.U)(this._dsn, t);
            this._transport = t.transport({
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...t.transportOptions,
                url: e
            });
        }
    }
    captureException(t, e, r) {
        if ((0, a.YO)(t)) {
            ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log(A);
            return;
        }
        let n = e && e.event_id;
        return this._process(this.eventFromException(t, e).then(t => this._captureEvent(t, e, r)).then(t => {
            n = t;
        })), n;
    }
    captureMessage(t, e, r, n) {
        let _ = r && r.event_id, a = (0, i.pt)(t) ? this.eventFromMessage(String(t), e, r) : this.eventFromException(t, r);
        return this._process(a.then(t => this._captureEvent(t, r, n)).then(t => {
            _ = t;
        })), _;
    }
    captureEvent(t, e, r) {
        if (e && e.originalException && (0, a.YO)(e.originalException)) {
            ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log(A);
            return;
        }
        let n = e && e.event_id;
        return this._process(this._captureEvent(t, e, r).then(t => {
            n = t;
        })), n;
    }
    captureSession(t) {
        if (!this._isEnabled()) {
            ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.warn('SDK not enabled, will not capture session.');
            return;
        }
        'string' != typeof t.release ? ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.warn('Discarded session because of missing or non-string release') : (this.sendSession(t), (0, u.CT)(t, { init: !1 }));
    }
    getDsn() {
        return this._dsn;
    }
    getOptions() {
        return this._options;
    }
    getSdkMetadata() {
        return this._options._metadata;
    }
    getTransport() {
        return this._transport;
    }
    flush(t) {
        let e = this._transport;
        return e ? this._isClientDoneProcessing(t).then(r => e.flush(t).then(t => r && t)) : (0, o.WD)(!0);
    }
    close(t) {
        return this.flush(t).then(t => (this.getOptions().enabled = !1, t));
    }
    setupIntegrations() {
        this._isEnabled() && !this._integrationsInitialized && (this._integrations = (0, R.q4)(this._options.integrations), this._integrationsInitialized = !0);
    }
    getIntegrationById(t) {
        return this._integrations[t];
    }
    getIntegration(t) {
        try {
            return this._integrations[t.id] || null;
        } catch (e) {
            return ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.warn(`Cannot retrieve integration ${ t.id } from the current Client`), null;
        }
    }
    addIntegration(t) {
        (0, R.m7)(t, this._integrations);
    }
    sendEvent(t, e = {}) {
        if (this._dsn) {
            let r = (0, I.M)(t, this._dsn, this._options._metadata, this._options.tunnel);
            for (let t of e.attachments || [])
                r = (0, E.BO)(r, (0, E.zQ)(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
            let n = this._sendEnvelope(r);
            n && n.then(e => this.emit('afterSendEvent', t, e), null);
        }
    }
    sendSession(t) {
        if (this._dsn) {
            let e = (0, I.Q)(t, this._dsn, this._options._metadata, this._options.tunnel);
            this._sendEnvelope(e);
        }
    }
    recordDroppedEvent(t, e, r) {
        if (this._options.sendClientReports) {
            let r = `${ t }:${ e }`;
            ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.log(`Adding outcome: "${ r }"`), this._outcomes[r] = this._outcomes[r] + 1 || 1;
        }
    }
    on(t, e) {
        !this._hooks[t] && (this._hooks[t] = []), this._hooks[t].push(e);
    }
    emit(t, ...e) {
        this._hooks[t] && this._hooks[t].forEach(t => t(...e));
    }
    _updateSessionFromEvent(t, e) {
        let r = !1, n = !1, _ = e.exception && e.exception.values;
        if (_)
            for (let t of (n = !0, _)) {
                let e = t.mechanism;
                if (e && !1 === e.handled) {
                    r = !0;
                    break;
                }
            }
        let a = 'ok' === t.status;
        (a && 0 === t.errors || a && r) && ((0, u.CT)(t, {
            ...r && { status: 'crashed' },
            errors: t.errors || Number(n || r)
        }), this.captureSession(t));
    }
    _isClientDoneProcessing(t) {
        return new o.cW(e => {
            let r = 0, n = setInterval(() => {
                    0 == this._numProcessing ? (clearInterval(n), e(!0)) : (r += 1, t && r >= t && (clearInterval(n), e(!1)));
                }, 1);
        });
    }
    _isEnabled() {
        return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
    }
    _prepareEvent(t, e, r) {
        let n = this.getOptions(), _ = Object.keys(this._integrations);
        return !e.integrations && _.length > 0 && (e.integrations = _), (0, l.R)(n, t, e, r).then(t => {
            if (null === t)
                return t;
            let {propagationContext: e} = t.sdkProcessingMetadata || {};
            if (!(t.contexts && t.contexts.trace) && e) {
                let {
                    traceId: n,
                    spanId: _,
                    parentSpanId: a,
                    dsc: i
                } = e;
                t.contexts = {
                    trace: {
                        trace_id: n,
                        span_id: _,
                        parent_span_id: a
                    },
                    ...t.contexts
                };
                let o = i || (0, T._)(n, this, r);
                t.sdkProcessingMetadata = {
                    dynamicSamplingContext: o,
                    ...t.sdkProcessingMetadata
                };
            }
            return t;
        });
    }
    _captureEvent(t, e = {}, r) {
        return this._processEvent(t, e, r).then(t => t.event_id, t => {
            ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && ('log' === t.logLevel ? _.kg.log(t.message) : _.kg.warn(t));
        });
    }
    _processEvent(t, e, r) {
        let n = this.getOptions(), {sampleRate: _} = n;
        if (!this._isEnabled())
            return (0, o.$2)(new s.b('SDK not enabled, will not capture event.', 'log'));
        let a = O(t), E = d(t), c = t.type || 'error', I = `before send for type \`${ c }\``;
        if (E && 'number' == typeof _ && Math.random() > _)
            return this.recordDroppedEvent('sample_rate', 'error', t), (0, o.$2)(new s.b(`Discarding event because it's not included in the random sample (sampling rate = ${ _ })`, 'log'));
        let R = 'replay_event' === c ? 'replay' : c;
        return this._prepareEvent(t, e, r).then(r => {
            if (null === r)
                throw this.recordDroppedEvent('event_processor', R, t), new s.b('An event processor returned `null`, will not send event.', 'log');
            return e.data && !0 === e.data.__sentry__ ? r : function (t, e) {
                let r = `${ e } must return \`null\` or a valid event.`;
                if ((0, i.J8)(t))
                    return t.then(t => {
                        if (!(0, i.PO)(t) && null !== t)
                            throw new s.b(r);
                        return t;
                    }, t => {
                        throw new s.b(`${ e } rejected with ${ t }`);
                    });
                if (!(0, i.PO)(t) && null !== t)
                    throw new s.b(r);
                return t;
            }(function (t, e, r) {
                let {
                    beforeSend: n,
                    beforeSendTransaction: _
                } = t;
                return d(e) && n ? n(e, r) : O(e) && _ ? _(e, r) : e;
            }(n, r, e), I);
        }).then(n => {
            if (null === n)
                throw this.recordDroppedEvent('before_send', R, t), new s.b(`${ I } returned \`null\`, will not send event.`, 'log');
            let _ = r && r.getSession();
            !a && _ && this._updateSessionFromEvent(_, n);
            let i = n.transaction_info;
            return a && i && n.transaction !== t.transaction && (n.transaction_info = {
                ...i,
                source: 'custom'
            }), this.sendEvent(n, e), n;
        }).then(null, t => {
            if (t instanceof s.b)
                throw t;
            throw this.captureException(t, {
                data: { __sentry__: !0 },
                originalException: t
            }), new s.b(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${ t }`);
        });
    }
    _process(t) {
        this._numProcessing++, t.then(t => (this._numProcessing--, t), t => (this._numProcessing--, t));
    }
    _sendEnvelope(t) {
        if (this._transport && this._dsn)
            return this.emit('beforeEnvelope', t), this._transport.send(t).then(null, t => {
                ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.error('Error while sending event:', t);
            });
        ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && _.kg.error('Transport disabled');
    }
    _clearOutcomes() {
        let t = this._outcomes;
        return this._outcomes = {}, Object.keys(t).map(e => {
            let [r, n] = e.split(':');
            return {
                reason: r,
                category: n,
                quantity: t[e]
            };
        });
    }
}
function d(t) {
    return void 0 === t.type;
}
function O(t) {
    return 'transaction' === t.type;
}
