"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(149765),
  r = n(131704),
  s = n(700785),
  o = n(231338);

function a(e) {
  if (null == e) return !1;
  let {
    type: t
  } = e;
  if (null == e.guild_id || !r.zS.has(t)) return !1;
  if (e.isGuildVocal() && !s.Uu(o.Pl.CONNECT, e)) return !0;
  let n = e.permissionOverwrites[e.guild_id];
  return null != n && i.e$(n.deny, o.Pl.VIEW_CHANNEL)
}