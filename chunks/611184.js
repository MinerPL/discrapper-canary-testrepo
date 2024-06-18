"use strict";
n(47120);
var i = n(147913),
  r = n(594190),
  s = n(77498),
  o = n(454293);

function a(e) {
  var t, n;
  let {
    game: i
  } = e, a = r.ZP.isDetectionEnabled(i), l = null !== (n = i.id) && void 0 !== n ? n : null === (t = s.Z.getGameByName(i.name)) || void 0 === t ? void 0 : t.id;
  null != l && (0, o.M)(l, a)
}
class l extends i.Z {
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      RUNNING_GAME_TOGGLE_DETECTION: a,
      RUNNING_GAME_DELETE_ENTRY: a
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new l