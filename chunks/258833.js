"use strict";
n(47120);
var i = n(147913),
  r = n(474873),
  s = n(523746),
  o = n(292959),
  a = n(246946),
  l = n(979651),
  u = n(938475),
  _ = n(557177);
let d = (0, _.uk)("call_calling", r.Z.getSoundpack());
class c extends i.Z {
  handleSoundpackUpdate() {
    d.stop(), d = (0, _.uk)("call_calling", r.Z.getSoundpack())
  }
  handleRingUpdate() {
    let e = s.Z.getCalls().filter(e => e.ringing.length > 0 && l.Z.getCurrentClientVoiceChannelId(null) === e.channelId),
      t = l.Z.getCurrentClientVoiceChannelId(null);
    null != t && u.ZP.countVoiceStatesForChannel(t) >= 2 || !(e.length > 0) || o.Z.isSoundDisabled("call_calling") || a.Z.disableSounds ? d.stop() : d.loop()
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "stores", i = new Map().set(s.Z, this.handleRingUpdate).set(o.Z, this.handleRingUpdate).set(a.Z, this.handleRingUpdate).set(l.Z, this.handleRingUpdate).set(r.Z, this.handleSoundpackUpdate), n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new c