"use strict";
n.d(e, {
  Y: function() {
    return u
  }
});
var r = n(529866),
  i = n(442853),
  s = n(876122),
  a = n(154405),
  o = n(48950);
class u extends o.Dr {
  __init() {
    this._measurements = {}
  }
  __init2() {
    this._contexts = {}
  }
  __init3() {
    this._frozenDynamicSamplingContext = void 0
  }
  constructor(t, e) {
    super(t), u.prototype.__init.call(this), u.prototype.__init2.call(this), u.prototype.__init3.call(this), this._hub = e || (0, s.Gd)(), this._name = t.name || "", this.metadata = {
      source: "custom",
      ...t.metadata,
      spanMetadata: {}
    }, this._trimEnd = t.trimEnd, this.transaction = this;
    let n = this.metadata.dynamicSamplingContext;
    n && (this._frozenDynamicSamplingContext = {
      ...n
    })
  }
  get name() {
    return this._name
  }
  set name(t) {
    this.setName(t)
  }
  setName(t, e = "custom") {
    this._name = t, this.metadata.source = e
  }
  initSpanRecorder(t = 1e3) {
    !this.spanRecorder && (this.spanRecorder = new o.gB(t)), this.spanRecorder.add(this)
  }
  setContext(t, e) {
    null === e ? delete this._contexts[t] : this._contexts[t] = e
  }
  setMeasurement(t, e, n = "") {
    this._measurements[t] = {
      value: e,
      unit: n
    }
  }
  setMetadata(t) {
    this.metadata = {
      ...this.metadata,
      ...t
    }
  }
  finish(t) {
    if (void 0 !== this.endTimestamp) return;
    !this.name && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), this.name = "<unlabeled transaction>"), super.finish(t);
    let e = this._hub.getClient();
    if (e && e.emit && e.emit("finishTransaction", this), !0 !== this.sampled) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled."), e && e.recordDroppedEvent("sample_rate", "transaction");
      return
    }
    let n = this.spanRecorder ? this.spanRecorder.spans.filter(t => t !== this && t.endTimestamp) : [];
    this._trimEnd && n.length > 0 && (this.endTimestamp = n.reduce((t, e) => t.endTimestamp && e.endTimestamp ? t.endTimestamp > e.endTimestamp ? t : e : t).endTimestamp);
    let i = this.metadata,
      s = {
        contexts: {
          ...this._contexts,
          trace: this.getTraceContext()
        },
        spans: n,
        start_timestamp: this.startTimestamp,
        tags: this.tags,
        timestamp: this.endTimestamp,
        transaction: this.name,
        type: "transaction",
        sdkProcessingMetadata: {
          ...i,
          dynamicSamplingContext: this.getDynamicSamplingContext()
        },
        ...i.source && {
          transaction_info: {
            source: i.source
          }
        }
      };
    return Object.keys(this._measurements).length > 0 && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)), s.measurements = this._measurements), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`), this._hub.captureEvent(s)
  }
  toContext() {
    let t = super.toContext();
    return (0, i.Jr)({
      ...t,
      name: this.name,
      trimEnd: this._trimEnd
    })
  }
  updateWithContext(t) {
    return super.updateWithContext(t), this.name = t.name || "", this._trimEnd = t.trimEnd, this
  }
  getDynamicSamplingContext() {
    if (this._frozenDynamicSamplingContext) return this._frozenDynamicSamplingContext;
    let t = this._hub || (0, s.Gd)(),
      e = t.getClient();
    if (!e) return {};
    let n = t.getScope(),
      r = (0, a._)(this.traceId, e, n),
      i = this.metadata.sampleRate;
    void 0 !== i && (r.sample_rate = `${i}`);
    let o = this.metadata.source;
    return o && "url" !== o && (r.transaction = this.name), void 0 !== this.sampled && (r.sampled = String(this.sampled)), r
  }
  setHub(t) {
    this._hub = t
  }
}