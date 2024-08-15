r.d(t, {
  A: function() {
return R;
  },
  R: function() {
return A;
  }
});
var n = r(101284),
  a = r(622916),
  o = r(263449),
  i = r(255768),
  _ = r(988097),
  E = r(73453),
  s = r(99342),
  c = r(696486),
  I = r(789112),
  u = r(793373),
  l = r(152228);
let R = {
  idleTimeout: 1000,
  finalTimeout: 30000,
  childSpanTimeout: 15000
};

function A(e, t = {}) {
  let r;
  let A = new Map(),
T = !1,
d = 'externalFinish',
N = !t.disableAutoFinish,
p = [],
{
  idleTimeout: O = R.idleTimeout,
  finalTimeout: f = R.finalTimeout,
  childSpanTimeout: S = R.childSpanTimeout,
  beforeSpanEnd: D
} = t,
L = (0, o.s3)();
  if (!L || !(0, E.z)())
return new I.b();
  let h = (0, o.nZ)(),
C = (0, c.HN)(),
g = function(e) {
  let t = (0, l.qp)(e);
  return (0, s.D)((0, o.nZ)(), t), i.X && a.kg.log('[Tracing] Started span is an idle span'), t;
}(e);

  function M() {
r && (clearTimeout(r), r = void 0);
  }

  function P(e) {
M(), r = setTimeout(() => {
  !T && 0 === A.size && N && (d = 'idleTimeout', g.end(e));
}, O);
  }

  function m(e) {
r = setTimeout(() => {
  !T && N && (d = 'heartbeatFailed', g.end(e));
}, S);
  }
  g.end = new Proxy(g.end, {
apply(e, t, r) {
  D && D(g);
  let [a, ...o] = r, i = a || (0, n.ph)(), _ = (0, c.$k)(i), E = (0, c.Dp)(g).filter(e => e !== g);
  if (!E.length)
    return U(_), Reflect.apply(e, t, [
      _,
      ...o
    ]);
  let s = E.map(e => (0, c.XU)(e).timestamp).filter(e => !!e),
    I = s.length ? Math.max(...s) : void 0,
    u = (0, c.XU)(g).start_timestamp,
    l = Math.min(u ? u + f / 1000 : 1 / 0, Math.max(u || -1 / 0, Math.min(_, I || 1 / 0)));
  return U(l), Reflect.apply(e, t, [
    l,
    ...o
  ]);
}
  });

  function U(e) {
T = !0, A.clear(), p.forEach(e => e()), (0, s.D)(h, C);
let t = (0, c.XU)(g),
  {
    start_timestamp: r
  } = t;
if (!r)
  return;
!(t.data || {})[_.ju] && g.setAttribute(_.ju, d), a.kg.log(`[Tracing] Idle span "${ t.op }" finished`);
let n = (0, c.Dp)(g).filter(e => e !== g),
  o = 0;
n.forEach(t => {
  t.isRecording() && (t.setStatus({
    code: u.jt,
    message: 'cancelled'
  }), t.end(e), i.X && a.kg.log('[Tracing] Cancelling span since span ended early', JSON.stringify(t, void 0, 2)));
  let {
    timestamp: r = 0,
    start_timestamp: n = 0
  } = (0, c.XU)(t), _ = n <= e, E = r - n <= (f + O) / 1000;
  if (i.X) {
    let e = JSON.stringify(t, void 0, 2);
    _ ? !E && a.kg.log('[Tracing] Discarding span since it finished after idle span final timeout', e) : a.kg.log('[Tracing] Discarding span since it happened after idle span was finished', e);
  }
  (!E || !_) && ((0, c.ed)(g, t), o++);
}), o > 0 && g.setAttribute('sentry.idle_span_discarded_spans', o);
  }
  return p.push(L.on('spanStart', e => {
if (!T && e !== g && !(0, c.XU)(e).timestamp) {
  if ((0, c.Dp)(g).includes(e)) {
    var t;
    t = e.spanContext().spanId, M(), A.set(t, !0), m((0, n.ph)() + S / 1000);
  }
}
  })), p.push(L.on('spanEnd', e => {
var t;
if (!T)
  t = e.spanContext().spanId, A.has(t) && A.delete(t), 0 === A.size && P((0, n.ph)() + O / 1000);
  })), p.push(L.on('idleSpanEnableAutoFinish', e => {
e === g && (N = !0, P(), A.size && m());
  })), !t.disableAutoFinish && P(), setTimeout(() => {
!T && (g.setStatus({
  code: u.jt,
  message: 'deadline_exceeded'
}), d = 'finalTimeout', g.end());
  }, f), g;
}