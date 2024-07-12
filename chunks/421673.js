n.d(t, {
  ZP: function() {
return p;
  }
}), n(724458), n(653041), n(47120);
var r = n(658722),
  i = n.n(r),
  a = n(954955),
  o = n.n(a),
  s = n(339085),
  l = n(633302),
  u = n(626135),
  c = n(697426),
  d = n(242291),
  _ = n(981631);
let E = [],
  f = o()(function(e, t) {
u.default.track(_.rMx.SEARCH_STARTED, {
  channel_id: t,
  search_type: _.aib.SOUNDBOARD,
  location_stack: e
});
  }, 350),
  h = o()(function(e, t, n, r) {
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
  let o = t.reduce((e, t) => {
  for (let n of t.items)
    t.categoryInfo.type !== c.bg.FAVORITES && n.type === c.vB.SOUND && e.push(n.sound);
  return e;
}, []),
u = o.reduce((t, o) => (f(a, null == r ? void 0 : r.id), t[o.soundId] = function(e, t, n, r) {
  var a;
  let o = 0,
    u = t.name.toLocaleLowerCase(),
    c = null != t.emojiId ? s.Z.getCustomEmojiById(t.emojiId) : null,
    _ = null != t.emojiName ? l.ZP.convertSurrogateToName(t.emojiName, !1) : null,
    E = null != _ ? l.ZP.getByName(_) : null,
    f = null != c ? [c.name] : null !== (a = null == E ? void 0 : E.names) && void 0 !== a ? a : [];
  return e === u && (o += 8), f.includes(e) && (o += 7), u.startsWith(e) && (o += 6), f.some(t => t.startsWith(e)) && (o += 5), u.endsWith(e) && (o += 4), f.some(t => t.endsWith(e)) && (o += 3), i()(e, t.name.toLocaleLowerCase()) && (o += 2), f.some(t => i()(e, t)) && (o += 1), o > 0 && (0, d.Nq)(n, t, r) && (o += 100), o;
}(e.toLocaleLowerCase(), o, n, r), t), {}),
_ = o.filter(e => u[e.soundId] > 0).sort((e, t) => u[t.soundId] - u[e.soundId]);
  return h(_, a, null == r ? void 0 : r.id, e), _;
}