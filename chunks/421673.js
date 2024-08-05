n.d(t, {
  ZP: function() {
return p;
  }
}), n(724458), n(653041), n(47120);
var r = n(658722),
  i = n.n(r),
  a = n(954955),
  s = n.n(a),
  o = n(339085),
  l = n(633302),
  u = n(626135),
  c = n(697426),
  d = n(242291),
  _ = n(981631);
let E = [],
  f = s()(function(e, t) {
u.default.track(_.rMx.SEARCH_STARTED, {
  channel_id: t,
  search_type: _.aib.SOUNDBOARD,
  location_stack: e
});
  }, 350),
  h = s()(function(e, t, n, r) {
u.default.track(_.rMx.SEARCH_RESULT_VIEWED, {
  search_type: _.aib.SOUNDBOARD,
  channel_id: n,
  query: r,
  total_results: e.length,
  location_stack: t
});
  }, 350);

function p(e, t, n, r, a) {
  if (0 === e.length)
return E;
  let s = t.reduce((e, t) => {
  for (let n of t.items)
    t.categoryInfo.type !== c.bg.FAVORITES && n.type === c.vB.SOUND && e.push(n.sound);
  return e;
}, []),
u = s.reduce((t, s) => (f(a, null == r ? void 0 : r.id), t[s.soundId] = function(e, t, n, r) {
  var a;
  let s = 0,
    u = t.name.toLocaleLowerCase(),
    c = null != t.emojiId ? o.Z.getCustomEmojiById(t.emojiId) : null,
    _ = null != t.emojiName ? l.ZP.convertSurrogateToName(t.emojiName, !1) : null,
    E = null != _ ? l.ZP.getByName(_) : null,
    f = null != c ? [c.name] : null !== (a = null == E ? void 0 : E.names) && void 0 !== a ? a : [];
  return e === u && (s += 8), f.includes(e) && (s += 7), u.startsWith(e) && (s += 6), f.some(t => t.startsWith(e)) && (s += 5), u.endsWith(e) && (s += 4), f.some(t => t.endsWith(e)) && (s += 3), i()(e, t.name.toLocaleLowerCase()) && (s += 2), f.some(t => i()(e, t)) && (s += 1), s > 0 && (0, d.Nq)(n, t, r) && (s += 100), s;
}(e.toLocaleLowerCase(), s, n, r), t), {}),
_ = s.filter(e => u[e.soundId] > 0).sort((e, t) => u[t.soundId] - u[e.soundId]);
  return h(_, a, null == r ? void 0 : r.id, e), _;
}