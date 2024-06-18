"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(981631);
let _ = {};
class d extends(o = a.ZP.Store) {
  getHookError(e) {
    return _[e]
  }
}
s = "HookErrorStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new d(l.Z, {
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function() {
    _ = {}
  },
  MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: function() {
    delete _[u.K3D.SOUND]
  },
  MEDIA_ENGINE_SOUNDSHARE_FAILED: function(e) {
    let {
      errorMessage: t,
      errorCode: n
    } = e;
    _[u.K3D.SOUND] = {
      errorMessage: t,
      errorCode: n
    }
  }
})