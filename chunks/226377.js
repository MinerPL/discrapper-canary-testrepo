r.d(t, {
  q: function() {
return A;
  }
});
var n = r(899517),
  a = r(622916),
  o = r(101284),
  i = r(263449),
  _ = r(255768),
  E = r(696486),
  s = r(152228),
  c = r(366569),
  I = r(147498);

function u(e, t) {
  let r = (0, n.Y)('globalMetricsAggregators', () => new WeakMap()),
a = r.get(e);
  if (a)
return a;
  let o = new t(e);
  return e.on('flush', () => o.flush()), e.on('close', () => o.close()), r.set(e, o), o;
}

function l(e, t, r, n, o = {}) {
  let s = o.client || (0, i.s3)();
  if (!s)
return;
  let c = (0, E.HN)(),
I = c ? (0, E.Gx)(c) : void 0,
l = I && (0, E.XU)(I).description,
{
  unit: R,
  tags: A,
  timestamp: T
} = o,
{
  release: d,
  environment: N
} = s.getOptions(),
p = {};
  d && (p.release = d), N && (p.environment = N), l && (p.transaction = l), _.X && a.kg.log(`Adding value of ${ n } to ${ t } metric ${ r }`), u(s, e).add(t, r, n, R, {
...p,
...A
  }, T);
}

function R(e, t, r, n) {
  l(e, I.g_, t, T(r), n);
}
let A = {
  increment: function(e, t, r = 1, n) {
l(e, I.JM, t, T(r), n);
  },
  distribution: R,
  set: function(e, t, r, n) {
l(e, I.is, t, r, n);
  },
  gauge: function(e, t, r, n) {
l(e, I.uG, t, T(r), n);
  },
  timing: function(e, t, r, n = 'second', a) {
if ('function' == typeof r) {
  let n = (0, o.ph)();
  return (0, s.V0)({
    op: 'metrics.timing',
    name: t,
    startTime: n,
    onlyIfParent: !0
  }, i => (0, c.i)(() => r(), () => {}, () => {
    let r = (0, o.ph)();
    R(e, t, r - n, {
      ...a,
      unit: 'second'
    }), i.end(r);
  }));
}
R(e, t, r, {
  ...a,
  unit: n
});
  },
  getMetricsAggregatorForClient: u
};

function T(e) {
  return 'string' == typeof e ? parseInt(e) : e;
}