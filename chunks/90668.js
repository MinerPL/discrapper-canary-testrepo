r.d(e, {
  T: function() {
return u;
  },
  l: function() {
return T;
  }
});
var n = r(529866),
  _ = r(46834),
  a = r(876122),
  i = r(633401),
  o = r(750513),
  E = r(376097),
  s = r(912033);

function c() {
  let t = this.getScope().getSpan();
  return t ? {
'sentry-trace': t.toTraceparent()
  } : {};
}

function I(t, e, r) {
  let a;
  return (0, i.z)(e) ? void 0 !== t.sampled ? (t.setMetadata({
sampleRate: Number(t.sampled)
  }), t) : ('function' == typeof e.tracesSampler ? (a = e.tracesSampler(r), t.setMetadata({
sampleRate: Number(a)
  })) : void 0 !== r.parentSampled ? a = r.parentSampled : void 0 !== e.tracesSampleRate ? (a = e.tracesSampleRate, t.setMetadata({
sampleRate: Number(a)
  })) : (a = 1, t.setMetadata({
sampleRate: a
  })), ! function(t) {
return (0, _.i2)(t) || !('number' == typeof t || 'boolean' == typeof t) ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${ JSON.stringify(t) } of type ${ JSON.stringify(typeof t) }.`), !1) : !(t < 0) && !(t > 1) || (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${ t }.`), !1);
  }(a)) ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.warn('[Tracing] Discarding transaction because of invalid sample rate.'), t.sampled = !1, t) : a ? (t.sampled = Math.random() < a, t.sampled) ? (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.log(`[Tracing] starting ${ t.op } transaction - ${ t.name }`), t) : (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${ Number(a) })`), t) : (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.log(`[Tracing] Discarding transaction because ${ 'function' == typeof e.tracesSampler ? 'tracesSampler returned 0 or false' : 'a negative sampling decision was inherited or tracesSampleRate is set to 0' }`), t.sampled = !1, t) : (t.sampled = !1, t);
}

function R(t, e) {
  let r = this.getClient(),
_ = r && r.getOptions() || {},
a = _.instrumenter || 'sentry',
i = t.instrumenter || 'sentry';
  a !== i && (('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && n.kg.error(`A transaction was started with instrumenter=\`${ i }\`, but the SDK is configured with the \`${ a }\` instrumenter.
The transaction will not be sampled. Please use the ${ a } instrumentation to start transactions.`), t.sampled = !1);
  let o = new s.Y(t, this);
  return (o = I(o, _, {
parentSampled: t.parentSampled,
transactionContext: t,
...e
  })).sampled && o.initSpanRecorder(_._experiments && _._experiments.maxSpans), r && r.emit && r.emit('startTransaction', o), o;
}

function T(t, e, r, n, _, a, i) {
  let o = t.getClient(),
s = o && o.getOptions() || {},
c = new E.io(e, t, r, n, i, _);
  return (c = I(c, s, {
parentSampled: e.parentSampled,
transactionContext: e,
...a
  })).sampled && c.initSpanRecorder(s._experiments && s._experiments.maxSpans), o && o.emit && o.emit('startTransaction', c), c;
}

function u() {
  let t = (0, a.cu)();
  if (!!t.__SENTRY__)
t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}, !t.__SENTRY__.extensions.startTransaction && (t.__SENTRY__.extensions.startTransaction = R), !t.__SENTRY__.extensions.traceHeaders && (t.__SENTRY__.extensions.traceHeaders = c), (0, o.e)();
}