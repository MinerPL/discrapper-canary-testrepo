"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = !1;
class _ extends(o = a.ZP.Store) {
  isProtocolRegistered() {
    return u
  }
}
s = "SpotifyProtocolStore", (r = "displayName") in(i = _) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new _(l.Z, {
  SPOTIFY_SET_PROTOCOL_REGISTERED: function(e) {
    let {
      isRegistered: t
    } = e;
    u = t
  }
})