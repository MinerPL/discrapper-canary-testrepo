n(47120);
var r = n(147913),
  i = n(474873),
  a = n(523746),
  s = n(292959),
  o = n(246946),
  l = n(979651),
  u = n(938475),
  c = n(557177);
let d = (0, c.uk)('call_calling', i.Z.getSoundpack());
class _ extends r.Z {
  handleSoundpackUpdate() {
d.stop(), d = (0, c.uk)('call_calling', i.Z.getSoundpack());
  }
  handleRingUpdate() {
let e = a.Z.getCalls().filter(e => e.ringing.length > 0 && l.Z.getCurrentClientVoiceChannelId(null) === e.channelId),
  t = l.Z.getCurrentClientVoiceChannelId(null);
null != t && u.ZP.countVoiceStatesForChannel(t) >= 2 || !(e.length > 0) || s.Z.isSoundDisabled('call_calling') || o.Z.disableSounds ? d.stop() : d.loop();
  }
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'stores', r = new Map().set(a.Z, this.handleRingUpdate).set(s.Z, this.handleRingUpdate).set(o.Z, this.handleRingUpdate).set(l.Z, this.handleRingUpdate).set(i.Z, this.handleSoundpackUpdate), n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new _();