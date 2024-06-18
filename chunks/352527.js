"use strict";
var i, s, l, a, o = n(442837),
  r = n(570140);
let d = !1,
  c = !1;
class u extends(a = o.ZP.Store) {
  get keepOpen() {
    return c
  }
  get enabled() {
    return d
  }
}
l = "SoundboardOverlayStore", (s = "displayName") in(i = u) ? Object.defineProperty(i, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = l, t.Z = new u(r.Z, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (d = e.enabled, e.enabled) {
      var t;
      c = null !== (t = e.keepOpen) && void 0 !== t && t
    }
  }
})