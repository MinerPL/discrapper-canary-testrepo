"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
}), n("222007"), n("424973");
var a = n("913144"),
  s = n("316272"),
  l = n("870696"),
  i = n("271938"),
  r = n("945956"),
  o = n("18494"),
  u = n("191542"),
  d = n("709681"),
  c = n("880731"),
  f = n("943551"),
  E = n("49111");
let h = (0, d.createSoundForPack)("poggermode_applause", l.default.getSoundpack()),
  _ = !1,
  C = !1,
  S = [],
  I = null,
  m = () => {
    !_ && (h.loop(), _ = !0)
  },
  p = () => {
    h.stop(), _ = !1
  },
  T = () => {
    let e = c.default.isEnabled(),
      t = c.default.comboSoundsEnabled;
    if (!e || !t) return !1;
    let n = o.default.getChannelId();
    return null != n && !0
  },
  g = () => {
    if (0 === S.length || !T() || C) return;
    C = !0;
    let [e, t] = S[S.length - 1];
    (0, d.playSound)(e, t), I = setTimeout(A, 1e3)
  },
  A = () => {
    S.pop(), C = !1, g()
  },
  N = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
      n = r.default.isConnected();
    S.push([e, t * (n ? .1 : 1)]), g()
  };
class R extends s.default {
  _initialize() {
    f.default.addChangeListener(this.startAudio), a.default.subscribe("RTC_CONNECTION_STATE", this.setVolume), a.default.subscribe("TYPING_STOP", this.stopAudio), a.default.subscribe("TYPING_STOP_LOCAL", this.stopAudio), a.default.subscribe("CHANNEL_SELECT", this.stopAudio), a.default.subscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio)
  }
  _terminate() {
    f.default.removeChangeListener(this.startAudio), a.default.unsubscribe("RTC_CONNECTION_STATE", this.setVolume), a.default.unsubscribe("TYPING_STOP", this.stopAudio), a.default.unsubscribe("TYPING_STOP_LOCAL", this.stopAudio), a.default.unsubscribe("CHANNEL_SELECT", this.stopAudio), a.default.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.stopAudio), clearTimeout(I)
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
    } = e, n = i.default.getId();
    n === t && p()
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
    a && l >= 7 ? m() : p()
  }
  playAchievementUnlockSound() {
    T() && N("poggermode_achievement_unlock")
  }
}
var O = new R