"use strict";
n.d(e, {
  T: function() {
    return f
  },
  l: function() {
    return _
  }
});
var r = n(529866),
  i = n(46834),
  s = n(876122),
  a = n(633401),
  o = n(750513),
  u = n(376097),
  l = n(912033);

function c() {
  let t = this.getScope().getSpan();
  return t ? {
    "sentry-trace": t.toTraceparent()
  } : {}
}

function d(t, e, n) {
  let s;
  return (0, a.z)(e) ? void 0 !== t.sampled ? (t.setMetadata({
    sampleRate: Number(t.sampled)
  }), t) : ("function" == typeof e.tracesSampler ? (s = e.tracesSampler(n), t.setMetadata({
    sampleRate: Number(s)
  })) : void 0 !== n.parentSampled ? s = n.parentSampled : void 0 !== e.tracesSampleRate ? (s = e.tracesSampleRate, t.setMetadata({
    sampleRate: Number(s)
  })) : (s = 1, t.setMetadata({
    sampleRate: s
  })), ! function(t) {
    return (0, i.i2)(t) || !("number" == typeof t || "boolean" == typeof t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`), !1) : !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${t}.`), !1)
  }(s)) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."), t.sampled = !1, t) : s ? (t.sampled = Math.random() < s, t.sampled) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] starting ${t.op} transaction - ${t.name}`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(s)})`), t) : (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.log(`[Tracing] Discarding transaction because ${"function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0"}`), t.sampled = !1, t) : (t.sampled = !1, t)
}

function h(t, e) {
  let n = this.getClient(),
    i = n && n.getOptions() || {},
    s = i.instrumenter || "sentry",
    a = t.instrumenter || "sentry";
  s !== a && (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && r.kg.error(`A transaction was started with instrumenter=\`${a}\`, but the SDK is configured with the \`${s}\` instrumenter.
The transaction will not be sampled. Please use the ${s} instrumentation to start transactions.`), t.sampled = !1);
  let o = new l.Y(t, this);
  return (o = d(o, i, {
    parentSampled: t.parentSampled,
    transactionContext: t,
    ...e
  })).sampled && o.initSpanRecorder(i._experiments && i._experiments.maxSpans), n && n.emit && n.emit("startTransaction", o), o
}

function _(t, e, n, r, i, s, a) {
  let o = t.getClient(),
    l = o && o.getOptions() || {},
    c = new u.io(e, t, n, r, a, i);
  return (c = d(c, l, {
    parentSampled: e.parentSampled,
    transactionContext: e,
    ...s
  })).sampled && c.initSpanRecorder(l._experiments && l._experiments.maxSpans), o && o.emit && o.emit("startTransaction", c), c
}

function f() {
  let t = (0, s.cu)();
  if (!!t.__SENTRY__) t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, !t.__SENTRY__.extensions.startTransaction && (t.__SENTRY__.extensions.startTransaction = h), !t.__SENTRY__.extensions.traceHeaders && (t.__SENTRY__.extensions.traceHeaders = c), (0, o.e)()
}