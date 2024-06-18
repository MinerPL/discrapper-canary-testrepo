"use strict";
n.d(t, {
  Z: function() {
    return m
  }
});
var l = n(553813),
  s = n.n(l),
  a = n(375964),
  i = n(579806),
  r = n(131951),
  o = n(358085),
  u = n(70722),
  c = n(65154),
  d = n(689938);

function m() {
  if (!r.Z.supports(c.AN.SOUNDSHARE)) return a.GO_LIVE_SCREENSHARE_NO_SOUND;
  if ((0, o.isWindows)() && !s().satisfies(null === i.Z || void 0 === i.Z ? void 0 : i.Z.os.release, u.I9)) return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
  if ((0, o.isMac)() && !s().satisfies(null === i.Z || void 0 === i.Z ? void 0 : i.Z.os.release, u.Ec)) return d.Z.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
  return null
}