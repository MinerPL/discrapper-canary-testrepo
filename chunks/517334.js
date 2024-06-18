"use strict";
n.d(t, {
  ZP: function() {
    return _
  }
}), n(724458), n(653041), n(47120);
var i = n(442837),
  r = n(592125),
  s = n(496675),
  o = n(823379),
  a = n(709054),
  l = n(146085),
  u = n(427679);

function _(e) {
  return function(e) {
    let t = (0, i.Wu)([r.Z], () => e.map(e => r.Z.getChannel(e)).filter(o.lm), [e]);
    return (0, i.Wu)([s.Z], () => t.filter(e => s.Z.can(l.gl, e)), [t])
  }((0, i.Wu)([u.Z], () => a.default.keys(u.Z.getStageInstancesByGuild(e)), [e]))
}