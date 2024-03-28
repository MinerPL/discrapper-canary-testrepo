"use strict";
n.r(t), n("47120"), n("653041");
var a = n("570140"),
  s = n("317770"),
  l = n("474873"),
  i = n("314897"),
  r = n("19780"),
  o = n("944486"),
  u = n("111583"),
  d = n("557177"),
  c = n("351780"),
  f = n("843693"),
  E = n("981631");
let h = (0, d.createSoundForPack)("poggermode_applause", l.default.getSoundpack()),
  _ = !1,
  C = !1,
  m = [],
  S = null,
  I = () => {
    !_ && (h.loop(), _ = !0)
  },
  p = () => {
    h.stop(), _ = !1
  },
  T = () => {
    let e = c.default.isEnabled(),
      t = c.default.comboSoundsEnabled;
    return !!e && !!t && null != o.default.getChannelId() || !1
  },
  g = () => {
    if (0 === m.length || !T() || C) return;
    C = !0;
    let [e, t] = m[m.length - 1];
    (0, d.playSound)(e, t), S = setTimeout(A, 1e3)
  },
  A = () => {
    m.pop(), C = !1, g()
  },
  N = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = r.default.isConnected();
    m.push([e, t * (n ? .1 : 1)]), g()
  };
class v extends s.default {
  _initialize() {
    f.default.addChangeListener(this.startAudio), a.default.subscribe("RTC_CONNECTION_STATE", this.setVolume), a.default.subscribe("TYPING_STOP", this.stopAudio), a.default.subscribe("TYPING_STOP_LOCAL", this.stopAudio), a.default.subscribe("CHANNEL_SELECT", this.stopAudio), a.default.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    f.default.removeChangeListener(this.startAudio), a.default.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), a.default.unsubscribe("TYPING_STOP", this.stopAudio), a.default.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), a.default.unsubscribe("CHANNEL_SELECT", this.stopAudio), a.default.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(S)
  }
  setVolume(e) {
    let {
      state: t
    } = e;
    t === E.RTCConnectionStates.RTC_CONNECTED ? h.volume = .1 : h.volume = 1
  }
  handleTypingStop(e) {
    let {
      userId: t
    } = e;
    i.default.getId() === t && p()
  }
  stopAudio() {
    p()
  }
  startAudio() {
    var e;
    if (!T()) return;
    let t = o.default.getChannelId();
    if (null == t) return;
    let n = i.default.getId(),
      a = u.default.isTyping(t, n),
      s = f.default.getUserCombo(n, t),
      l = null !== (e = null == s ? void 0 : s.multiplier) && void 0 !== e ? e : 1;
    a && l >= 7 ? I() : p()
  }
  playAchievementUnlockSound() {
    T() && N("poggermode_achievement_unlock")
  }
}
t.default = new v