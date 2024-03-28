"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var a = l("553813"),
  s = l.n(a),
  n = l("375964"),
  i = l("579806"),
  r = l("131951"),
  u = l("358085"),
  o = l("70722"),
  d = l("65154"),
  c = l("689938");

function f() {
  if (!r.default.supports(d.Features.SOUNDSHARE)) return n.GO_LIVE_SCREENSHARE_NO_SOUND;
  if ((0, u.isWindows)() && !s().satisfies(null === i.default || void 0 === i.default ? void 0 : i.default.os.release, o.WINDOWS_SOUNDSHARE_VERSION)) return c.default.Messages.GO_LIVE_SCREENSHARE_UPDATE_WINDOWS_FOR_SOUNDSHARE;
  if ((0, u.isMac)() && !s().satisfies(null === i.default || void 0 === i.default ? void 0 : i.default.os.release, o.DARWIN_SOUNDSHARE_VERSION)) return c.default.Messages.GO_LIVE_SCREENSHARE_UPDATE_MACOS_FOR_SOUNDSHARE;
  return null
}