"use strict";
n.d(t, {
  Z: function() {
    return a
  }
}), n(724458);
var i = n(470079),
  r = n(700089),
  s = n(654455),
  o = n(496158);

function a(e) {
  let {
    channel: t,
    commands: n,
    limit: a = n.length
  } = e, l = (0, o.D)(t), u = (0, r.R)(l), _ = i.useMemo(() => n.reduce((e, t) => (e[t.id] = t, e), {}), [n]);
  return i.useMemo(() => u.map(e => _[e]).filter(e => null != e).sort((e, t) => {
    let n = s.ZP.getScoreWithoutLoadingLatest(l, e);
    return s.ZP.getScoreWithoutLoadingLatest(l, t) - n
  }).slice(0, a), [u, _, l, a])
}