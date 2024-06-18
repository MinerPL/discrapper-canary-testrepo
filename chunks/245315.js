"use strict";
n.d(t, {
  BF: function() {
    return d
  },
  QA: function() {
    return _
  },
  cp: function() {
    return u
  }
});
var i = n(367907),
  r = n(368859),
  s = n(626135),
  o = n(135899),
  a = n(981631),
  l = n(943702);

function u(e) {
  return (0, r.Z)(e) && e.messageReference.guild_id === o.M_ || null != e.author && e.author.id === o.c9
}

function _() {
  return l
}
let d = e => {
  s.default.track(a.rMx.USER_FLOW_TRANSITION, {
    flow_type: o.tA,
    from_step: e.fromStep,
    to_step: e.toStep,
    ...(0, i.hH)(e.guildId)
  })
}