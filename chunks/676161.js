t.d(n, {
  Z: function() {
return r;
  }
}), t(724458);
var i = t(470079),
  a = t(700089),
  l = t(654455),
  o = t(496158);

function r(e) {
  let {
channel: n,
commands: t,
limit: r = t.length
  } = e, s = (0, o.D)(n), c = (0, a.R)(s), d = i.useMemo(() => t.reduce((e, n) => (e[n.id] = n, e), {}), [t]);
  return i.useMemo(() => c.map(e => d[e]).filter(e => null != e).sort((e, n) => {
let t = l.ZP.getScoreWithoutLoadingLatest(s, e);
return l.ZP.getScoreWithoutLoadingLatest(s, n) - t;
  }).slice(0, r), [
c,
d,
s,
r
  ]);
}