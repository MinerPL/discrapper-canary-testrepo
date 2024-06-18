"use strict";
n.d(t, {
  b: function() {
    return u
  },
  v: function() {
    return l
  }
}), n(47120), n(653041);
var i = n(392711),
  r = n.n(i),
  s = n(442837),
  o = n(592125),
  a = n(823379);

function l(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    s = r()(o.Z.getMutableGuildChannelsForGuild(e)).values().groupBy("parent_id").value(),
    l = r()(n).map(e => e.isCategory() ? e.id : e.parent_id).filter(a.lm).uniq().map(e => o.Z.getChannel(e)).filter(a.lm).sortBy("position").value(),
    u = new Set(l.map(e => e.id)),
    _ = n.filter(e => !e.isCategory() && (null == e.parent_id || !u.has(e.parent_id)));
  for (let e of (_ = r().sortBy(_, e => e.isGuildVocal() ? e.position + 1e4 : e.position), l)) {
    !i && _.push(e);
    let o = t.has(e.id) ? s[e.id] : n.filter(t => t.parent_id === e.id);
    o = r().sortBy(null != o ? o : [], e => e.isGuildVocal() ? e.position + 1e4 : e.position), _.push(...o)
  }
  return _
}

function u(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return (0, s.Wu)([o.Z], () => {
    let i = Array.from(t).map(e => o.Z.getChannel(e)).filter(a.lm);
    return l(e, t, i, n)
  })
}