"use strict";
n.r(t);
var i, a, l, s, o = n("442837"),
  r = n("570140");
let d = !1,
  u = !1;
class c extends(s = o.default.Store) {
  get keepOpen() {
    return u
  }
  get enabled() {
    return d
  }
}
l = "SoundboardOverlayStore", (a = "displayName") in(i = c) ? Object.defineProperty(i, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = l, t.default = new c(r.default, {
  SOUNDBOARD_SET_OVERLAY_ENABLED: function(e) {
    if (d = e.enabled, e.enabled) {
      var t;
      u = null !== (t = e.keepOpen) && void 0 !== t && t
    }
  }
})