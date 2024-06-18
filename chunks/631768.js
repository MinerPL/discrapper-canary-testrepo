"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(981631);
let _ = u.Ucd.AUTO;
class d extends(o = a.ZP.Store) {
  get mode() {
    return _
  }
}
s = "VideoQualityModeStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new d(l.Z, {
  SET_CHANNEL_VIDEO_QUALITY_MODE: function(e) {
    _ = e.mode
  }
})