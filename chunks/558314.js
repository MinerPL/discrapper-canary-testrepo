"use strict";
n.r(t);
var s, a, l, i, r = n("442837"),
  o = n("570140");
let u = {
  matureAgree: !1,
  muted: !0
};
class d extends(i = r.default.Store) {
  get didMatureAgree() {
    return u.matureAgree
  }
  get isDirectoryMuted() {
    return u.muted
  }
}
l = "ApplicationStoreSettingsStore", (a = "displayName") in(s = d) ? Object.defineProperty(s, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = l, t.default = new d(o.default, {
  APPLICATION_STORE_MATURE_AGREE: function() {
    u.matureAgree = !0
  },
  APPLICATION_STORE_DIRECTORY_MUTE: function() {
    u.muted = !0
  },
  APPLICATION_STORE_DIRECTORY_UNMUTE: function() {
    u.muted = !1
  }
})