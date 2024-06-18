"use strict";
var i, r = n(442837),
  s = n(570140),
  o = n(657254),
  a = n(871465);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = {
  soundpack: a.YC.CLASSIC
};
class _ extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    o.Z.subscribe({
      location: "1"
    }, () => this.emitChange()), null != e && (u = e)
  }
  getState() {
    return u
  }
  getSoundpack() {
    var e;
    let {
      allowAprilFoolsSoundpack: t
    } = o.Z.getCurrentConfig({
      location: "37bac2_1"
    }, {
      autoTrackExposure: !1
    });
    return t && (e = u.soundpack, Object.values(a.YC).includes(e)) ? u.soundpack : a.YC.CLASSIC
  }
}
l(_, "displayName", "SoundpackStore"), l(_, "persistKey", "SoundpackStore"), t.Z = new _(s.Z, {
  SET_SOUNDPACK: function(e) {
    let {
      soundpack: t
    } = e;
    u = {
      soundpack: t
    }
  }
})