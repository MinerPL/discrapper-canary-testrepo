"use strict";
n.d(t, {
  V: function() {
    return u
  }
});
var i = n(819553),
  r = n(931261),
  s = n(592125),
  o = n(984933),
  a = n(944486),
  l = n(176505);

function u(e) {
  var t;
  let n = a.Z.getChannelId(e),
    u = null === (t = o.ZP.getDefaultChannel(e)) || void 0 === t ? void 0 : t.id;
  return (n !== l.oC.GUILD_ONBOARDING || i.ZP.shouldShowOnboarding(e)) && (n !== l.oC.GUILD_HOME || (0, r.s)(e)) && null != s.Z.getChannel(n) ? n : u
}