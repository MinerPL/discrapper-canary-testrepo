"use strict";
n.d(e, {
  W: function() {
    return g
  }
});
var r = n(177668),
  i = n(529866),
  s = n(862315),
  a = n(46834),
  o = n(880803),
  u = n(50074),
  l = n(303155),
  c = n(507506),
  d = n(419767),
  h = n(595208),
  _ = n(741900),
  f = n(154405),
  p = n(392405);
let m = "Not capturing exception because it's already been captured.";
class g {
  __init() {
    this._integrations = {}
  }
  __init2() {
    this._integrationsInitialized = !1
  }
  __init3() {
    this._numProcessing = 0
  }
  __init4() {
    this._outcomes = {}
  }
  __init5() {
    this._hooks = {}
  }
  constructor(t) {
    if (g.prototype.__init.call(this), g.prototype.__init2.call(this), g.prototype.__init3.call(this), g.prototype.__init4.call(this), g.prototype.__init5.call(this), this._options = t, t.dsn ? this._dsn = (0, r.vK)(t.dsn) : ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("No DSN provided, client will not do anything."), this._dsn) {
      let e = (0, c.U)(this._dsn, t);
      this._transport = t.transport({
        recordDroppedEvent: this.recordDroppedEvent.bind(this),
        ...t.transportOptions,
        url: e
      })
    }
  }
  captureException(t, e, n) {
    if ((0, s.YO)(t)) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(m);
      return
    }
    let r = e && e.event_id;
    return this._process(this.eventFromException(t, e).then(t => this._captureEvent(t, e, n)).then(t => {
      r = t
    })), r
  }
  captureMessage(t, e, n, r) {
    let i = n && n.event_id,
      s = (0, a.pt)(t) ? this.eventFromMessage(String(t), e, n) : this.eventFromException(t, n);
    return this._process(s.then(t => this._captureEvent(t, n, r)).then(t => {
      i = t
    })), i
  }
  captureEvent(t, e, n) {
    if (e && e.originalException && (0, s.YO)(e.originalException)) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(m);
      return
    }
    let r = e && e.event_id;
    return this._process(this._captureEvent(t, e, n).then(t => {
      r = t
    })), r
  }
  captureSession(t) {
    if (!this._isEnabled()) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("SDK not enabled, will not capture session.");
      return
    }
    "string" != typeof t.release ? ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn("Discarded session because of missing or non-string release") : (this.sendSession(t), (0, _.CT)(t, {
      init: !1
    }))
  }
  getDsn() {
    return this._dsn
  }
  getOptions() {
    return this._options
  }
  getSdkMetadata() {
    return this._options._metadata
  }
  getTransport() {
    return this._transport
  }
  flush(t) {
    let e = this._transport;
    return e ? this._isClientDoneProcessing(t).then(n => e.flush(t).then(t => n && t)) : (0, o.WD)(!0)
  }
  close(t) {
    return this.flush(t).then(t => (this.getOptions().enabled = !1, t))
  }
  setupIntegrations() {
    this._isEnabled() && !this._integrationsInitialized && (this._integrations = (0, h.q4)(this._options.integrations), this._integrationsInitialized = !0)
  }
  getIntegrationById(t) {
    return this._integrations[t]
  }
  getIntegration(t) {
    try {
      return this._integrations[t.id] || null
    } catch (e) {
      return ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.warn(`Cannot retrieve integration ${t.id} from the current Client`), null
    }
  }
  addIntegration(t) {
    (0, h.m7)(t, this._integrations)
  }
  sendEvent(t, e = {}) {
    if (this._dsn) {
      let n = (0, d.M)(t, this._dsn, this._options._metadata, this._options.tunnel);
      for (let t of e.attachments || []) n = (0, u.BO)(n, (0, u.zQ)(t, this._options.transportOptions && this._options.transportOptions.textEncoder));
      let r = this._sendEnvelope(n);
      r && r.then(e => this.emit("afterSendEvent", t, e), null)
    }
  }
  sendSession(t) {
    if (this._dsn) {
      let e = (0, d.Q)(t, this._dsn, this._options._metadata, this._options.tunnel);
      this._sendEnvelope(e)
    }
  }
  recordDroppedEvent(t, e, n) {
    if (this._options.sendClientReports) {
      let n = `${t}:${e}`;
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.log(`Adding outcome: "${n}"`), this._outcomes[n] = this._outcomes[n] + 1 || 1
    }
  }
  on(t, e) {
    !this._hooks[t] && (this._hooks[t] = []), this._hooks[t].push(e)
  }
  emit(t, ...e) {
    this._hooks[t] && this._hooks[t].forEach(t => t(...e))
  }
  _updateSessionFromEvent(t, e) {
    let n = !1,
      r = !1,
      i = e.exception && e.exception.values;
    if (i)
      for (let t of (r = !0, i)) {
        let e = t.mechanism;
        if (e && !1 === e.handled) {
          n = !0;
          break
        }
      }
    let s = "ok" === t.status;
    (s && 0 === t.errors || s && n) && ((0, _.CT)(t, {
      ...n && {
        status: "crashed"
      },
      errors: t.errors || Number(r || n)
    }), this.captureSession(t))
  }
  _isClientDoneProcessing(t) {
    return new o.cW(e => {
      let n = 0,
        r = setInterval(() => {
          0 == this._numProcessing ? (clearInterval(r), e(!0)) : (n += 1, t && n >= t && (clearInterval(r), e(!1)))
        }, 1)
    })
  }
  _isEnabled() {
    return !1 !== this.getOptions().enabled && void 0 !== this._dsn
  }
  _prepareEvent(t, e, n) {
    let r = this.getOptions(),
      i = Object.keys(this._integrations);
    return !e.integrations && i.length > 0 && (e.integrations = i), (0, p.R)(r, t, e, n).then(t => {
      if (null === t) return t;
      let {
        propagationContext: e
      } = t.sdkProcessingMetadata || {};
      if (!(t.contexts && t.contexts.trace) && e) {
        let {
          traceId: r,
          spanId: i,
          parentSpanId: s,
          dsc: a
        } = e;
        t.contexts = {
          trace: {
            trace_id: r,
            span_id: i,
            parent_span_id: s
          },
          ...t.contexts
        };
        let o = a || (0, f._)(r, this, n);
        t.sdkProcessingMetadata = {
          dynamicSamplingContext: o,
          ...t.sdkProcessingMetadata
        }
      }
      return t
    })
  }
  _captureEvent(t, e = {}, n) {
    return this._processEvent(t, e, n).then(t => t.event_id, t => {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && ("log" === t.logLevel ? i.kg.log(t.message) : i.kg.warn(t))
    })
  }
  _processEvent(t, e, n) {
    let r = this.getOptions(),
      {
        sampleRate: i
      } = r;
    if (!this._isEnabled()) return (0, o.$2)(new l.b("SDK not enabled, will not capture event.", "log"));
    let s = v(t),
      u = y(t),
      c = t.type || "error",
      d = `before send for type \`${c}\``;
    if (u && "number" == typeof i && Math.random() > i) return this.recordDroppedEvent("sample_rate", "error", t), (0, o.$2)(new l.b(`Discarding event because it's not included in the random sample (sampling rate = ${i})`, "log"));
    let h = "replay_event" === c ? "replay" : c;
    return this._prepareEvent(t, e, n).then(n => {
      if (null === n) throw this.recordDroppedEvent("event_processor", h, t), new l.b("An event processor returned `null`, will not send event.", "log");
      return e.data && !0 === e.data.__sentry__ ? n : function(t, e) {
        let n = `${e} must return \`null\` or a valid event.`;
        if ((0, a.J8)(t)) return t.then(t => {
          if (!(0, a.PO)(t) && null !== t) throw new l.b(n);
          return t
        }, t => {
          throw new l.b(`${e} rejected with ${t}`)
        });
        if (!(0, a.PO)(t) && null !== t) throw new l.b(n);
        return t
      }(function(t, e, n) {
        let {
          beforeSend: r,
          beforeSendTransaction: i
        } = t;
        return y(e) && r ? r(e, n) : v(e) && i ? i(e, n) : e
      }(r, n, e), d)
    }).then(r => {
      if (null === r) throw this.recordDroppedEvent("before_send", h, t), new l.b(`${d} returned \`null\`, will not send event.`, "log");
      let i = n && n.getSession();
      !s && i && this._updateSessionFromEvent(i, r);
      let a = r.transaction_info;
      return s && a && r.transaction !== t.transaction && (r.transaction_info = {
        ...a,
        source: "custom"
      }), this.sendEvent(r, e), r
    }).then(null, t => {
      if (t instanceof l.b) throw t;
      throw this.captureException(t, {
        data: {
          __sentry__: !0
        },
        originalException: t
      }), new l.b(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.
Reason: ${t}`)
    })
  }
  _process(t) {
    this._numProcessing++, t.then(t => (this._numProcessing--, t), t => (this._numProcessing--, t))
  }
  _sendEnvelope(t) {
    if (this._transport && this._dsn) return this.emit("beforeEnvelope", t), this._transport.send(t).then(null, t => {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.error("Error while sending event:", t)
    });
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.kg.error("Transport disabled")
  }
  _clearOutcomes() {
    let t = this._outcomes;
    return this._outcomes = {}, Object.keys(t).map(e => {
      let [n, r] = e.split(":");
      return {
        reason: n,
        category: r,
        quantity: t[e]
      }
    })
  }
}

function y(t) {
  return void 0 === t.type
}

function v(t) {
  return "transaction" === t.type
}