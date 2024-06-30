r.d(e, {
    Y: function () {
        return E;
    }
});
var n = r(529866), _ = r(442853), a = r(876122), i = r(154405), o = r(48950);
class E extends o.Dr {
    __init() {
        this._measurements = {};
    }
    __init2() {
        this._contexts = {};
    }
    __init3() {
        this._frozenDynamicSamplingContext = void 0;
    }
    constructor(t, e) {
        super(t), E.prototype.__init.call(this), E.prototype.__init2.call(this), E.prototype.__init3.call(this), this._hub = e || (0, a.Gd)(), this._name = t.name || '', this.metadata = {
            source: 'custom',
            ...t.metadata,
            spanMetadata: {}
        }, this._trimEnd = t.trimEnd, this.transaction = this;
        let r = this.metadata.dynamicSamplingContext;
        r && (this._frozenDynamicSamplingContext = { ...r });
    }
    get name() {
        return this._name;
    }
    set name(t) {
        this.setName(t);
    }
    setName(t, e = 'custom') {
        this._name = t, this.metadata.source = e;
    }
    initSpanRecorder(t = 1000) {
        !this.spanRecorder && (this.spanRecorder = new o.gB(t)), this.spanRecorder.add(this);
    }
    setContext(t, e) {
        null === e ? delete this._contexts[t] : this._contexts[t] = e;
    }
    setMeasurement(t, e, r = '') {
        this._measurements[t] = {
            value: e,
            unit: r
        };
    }
    setMetadata(t) {
        this.metadata = {
            ...this.metadata,
            ...t
        };
    }
    finish(t) {
        if (void 0 !== this.endTimestamp)
            return;
        !this.name && (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.warn('Transaction has no name, falling back to `<unlabeled transaction>`.'), this.name = '<unlabeled transaction>'), super.finish(t);
        let e = this._hub.getClient();
        if (e && e.emit && e.emit('finishTransaction', this), !0 !== this.sampled) {
            ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.log('[Tracing] Discarding transaction because its trace was not chosen to be sampled.'), e && e.recordDroppedEvent('sample_rate', 'transaction');
            return;
        }
        let r = this.spanRecorder ? this.spanRecorder.spans.filter(t => t !== this && t.endTimestamp) : [];
        this._trimEnd && r.length > 0 && (this.endTimestamp = r.reduce((t, e) => t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t).endTimestamp);
        let _ = this.metadata, a = {
                contexts: {
                    ...this._contexts,
                    trace: this.getTraceContext()
                },
                spans: r,
                start_timestamp: this.startTimestamp,
                tags: this.tags,
                timestamp: this.endTimestamp,
                transaction: this.name,
                type: 'transaction',
                sdkProcessingMetadata: {
                    ..._,
                    dynamicSamplingContext: this.getDynamicSamplingContext()
                },
                ..._.source && { transaction_info: { source: _.source } }
            };
        return Object.keys(this._measurements).length > 0 && (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.log('[Measurements] Adding measurements to transaction', JSON.stringify(this._measurements, void 0, 2)), a.measurements = this._measurements), ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.log(`[Tracing] Finishing ${ this.op } transaction: ${ this.name }.`), this._hub.captureEvent(a);
    }
    toContext() {
        let t = super.toContext();
        return (0, _.Jr)({
            ...t,
            name: this.name,
            trimEnd: this._trimEnd
        });
    }
    updateWithContext(t) {
        return super.updateWithContext(t), this.name = t.name || '', this._trimEnd = t.trimEnd, this;
    }
    getDynamicSamplingContext() {
        if (this._frozenDynamicSamplingContext)
            return this._frozenDynamicSamplingContext;
        let t = this._hub || (0, a.Gd)(), e = t.getClient();
        if (!e)
            return {};
        let r = t.getScope(), n = (0, i._)(this.traceId, e, r), _ = this.metadata.sampleRate;
        void 0 !== _ && (n.sample_rate = `${ _ }`);
        let o = this.metadata.source;
        return o && 'url' !== o && (n.transaction = this.name), void 0 !== this.sampled && (n.sampled = String(this.sampled)), n;
    }
    setHub(t) {
        this._hub = t;
    }
}
