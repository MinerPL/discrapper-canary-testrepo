"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(442837),
  r = n(780384),
  s = n(410030),
  o = n(358221),
  a = n(944486),
  l = n(981631);

function u(e, t) {
  let n = (0, i.e7)([a.Z], () => a.Z.getVoiceChannelId()),
    u = (0, i.e7)([o.Z], () => null != n ? o.Z.getMode(n) : null),
    _ = (0, s.ZP)();
  return null != e ? e : u === l.WtW.VOICE && (0, r.ap)(_) ? t ? "activeLight" : "primaryLight" : t ? "white" : "primaryDark"
}