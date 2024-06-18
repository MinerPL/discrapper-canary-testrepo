"use strict";
let i;
var r, s, o, a, l = n(442837),
  u = n(570140),
  _ = n(594190),
  d = n(77498);
class c extends(a = l.ZP.Store) {
  getGameForPID(e) {
    var t;
    if (__OVERLAY__ || null == e) return null;
    let n = null === (t = _.ZP.getGameForPID(e)) || void 0 === t ? void 0 : t.name;
    return d.Z.getGameByName(n)
  }
  getGame() {
    return __OVERLAY__ ? i : null
  }
}
o = "OverlayRunningGameStore", (s = "displayName") in(r = c) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new c(u.Z, {
  OVERLAY_INITIALIZE: function(e) {
    i = e.currentGame
  },
  OVERLAY_SET_ASSOCIATED_GAME: function(e) {
    i = e.associatedGame
  }
})