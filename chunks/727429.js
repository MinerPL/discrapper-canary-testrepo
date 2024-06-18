"use strict";
n.d(t, {
  Z: function() {
    return a
  },
  e: function() {
    return l
  }
});
var i = n(442837),
  r = n(914010),
  s = n(853856),
  o = n(981631);

function a(e) {
  let t = (0, i.e7)([r.Z], () => r.Z.getGuildId());
  return null != t ? t : e.getGuildId()
}

function l(e) {
  return r.Z.getGuildId() !== o.I_8 ? e.getGuildId() : s.Z.isFavorite(e.id) || e.isThread() && s.Z.isFavorite(e.parent_id) ? o.I_8 : e.getGuildId()
}