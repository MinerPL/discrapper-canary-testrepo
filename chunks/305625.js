r.d(t, {
  Lh: function() {
return c;
  },
  _l: function() {
return I;
  },
  jC: function() {
return u;
  },
  uc: function() {
return l;
  }
});
var n = r(370336),
  a = r(285883),
  o = r(559508),
  i = r(263449),
  _ = r(988097),
  E = r(696486);
let s = '_frozenDsc';

function c(e, t) {
  (0, n.xp)(e, s, t);
}

function I(e, t) {
  let r = t.getOptions(),
{
  publicKey: a
} = t.getDsn() || {},
i = (0, n.Jr)({
  environment: r.environment || o.J,
  release: r.release,
  public_key: a,
  trace_id: e
});
  return t.emit('createDsc', i), i;
}

function u(e) {
  let t = (0, i.s3)();
  if (!t)
return {};
  let r = I((0, E.XU)(e).trace_id || '', t),
n = (0, E.Gx)(e),
o = n[s];
  if (o)
return o;
  let c = n.spanContext().traceState,
u = c && c.get('sentry.dsc'),
l = u && (0, a.EN)(u);
  if (l)
return l;
  let R = (0, E.XU)(n),
A = R.data || {},
T = A[_.TE];
  null != T && (r.sample_rate = `${ T }`);
  let d = A[_.Zj],
N = R.description;
  return 'url' !== d && N && (r.transaction = N), r.sampled = String((0, E.Tt)(n)), t.emit('createDsc', r, n), r;
}

function l(e) {
  let t = u(e);
  return (0, a.IQ)(t);
}