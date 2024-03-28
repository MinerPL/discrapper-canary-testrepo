"use strict";
n.r(t), n("47120");
var a = n("570140"),
  s = n("846027"),
  l = n("317770"),
  i = n("594190"),
  r = n("928518"),
  o = n("131951"),
  u = n("451478"),
  d = n("981631"),
  c = n("65154");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let E = new Set,
  h = new Set,
  _ = null;

function C() {
  for (let e of E) s.default.setDisableLocalVideo(e, d.VideoToggleState.MANUAL_ENABLED, c.MediaEngineContextTypes.DEFAULT, !1);
  h.clear(), E.clear()
}
class m extends l.default {
  _initialize() {
    a.default.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), a.default.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), a.default.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), a.default.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.default.addChangeListener(this.handlePopoutChange)
  }
  _terminate() {
    a.default.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), a.default.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), a.default.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), a.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.default.removeChangeListener(this.handlePopoutChange), C(), _ = null
  }
  handleIncomingVideo(e) {
    let {
      userId: t,
      context: n,
      streamId: a
    } = e;
    if (n !== c.MediaEngineContextTypes.DEFAULT || null == a) return;
    let l = null != i.default.getVisibleGame(),
      f = u.default.isVisible(),
      _ = r.default.getWindowVisible(d.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
      C = o.default.isLocalVideoDisabled(t, n),
      m = h.has(t);
    l && !f && !_ && !C && !m && (E.add(t), s.default.setDisableLocalVideo(t, d.VideoToggleState.DISABLED, n, !1))
  }
  handleManualLocalVideoToggle(e) {
    let {
      userId: t,
      persist: n
    } = e;
    n && (h.add(t), E.delete(t))
  }
  constructor(...e) {
    super(...e), f(this, "handleWindowVisibilityChange", e => {
      let {
        visible: t
      } = e;
      t && C()
    }), f(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t
      } = e;
      t !== _ && (C(), _ = t)
    }), f(this, "handlePopoutChange", () => {
      r.default.getWindowVisible(d.PopoutWindowKeys.CHANNEL_CALL_POPOUT) && C()
    })
  }
}
t.default = new m