"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var a = n("913144"),
  s = n("629109"),
  l = n("316272"),
  i = n("161454"),
  r = n("292687"),
  o = n("42887"),
  u = n("471671"),
  d = n("49111"),
  c = n("353927");
let f = new Set,
  E = new Set,
  h = null;

function _() {
  for (let e of f) s.default.setDisableLocalVideo(e, d.VideoToggleState.MANUAL_ENABLED, c.MediaEngineContextTypes.DEFAULT, !1);
  E.clear(), f.clear()
}
class C extends l.default {
  _initialize() {
    a.default.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), a.default.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), a.default.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), a.default.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.default.addChangeListener(this.handlePopoutChange)
  }
  _terminate() {
    a.default.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo), a.default.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle), a.default.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange), a.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), r.default.removeChangeListener(this.handlePopoutChange), _(), h = null
  }
  handleIncomingVideo(e) {
    let {
      userId: t,
      context: n,
      streamId: a
    } = e;
    if (n !== c.MediaEngineContextTypes.DEFAULT || null == a) return;
    let l = null != i.default.getVisibleGame(),
      h = u.default.isVisible(),
      _ = r.default.getWindowVisible(d.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
      C = o.default.isLocalVideoDisabled(t, n),
      S = E.has(t);
    l && !h && !_ && !C && !S && (f.add(t), s.default.setDisableLocalVideo(t, d.VideoToggleState.DISABLED, n, !1))
  }
  handleManualLocalVideoToggle(e) {
    let {
      userId: t,
      persist: n
    } = e;
    n && (E.add(t), f.delete(t))
  }
  constructor(...e) {
    super(...e), this.handleWindowVisibilityChange = e => {
      let {
        visible: t
      } = e;
      t && _()
    }, this.handleVoiceChannelSelect = e => {
      let {
        channelId: t
      } = e;
      t !== h && (_(), h = t)
    }, this.handlePopoutChange = () => {
      r.default.getWindowVisible(d.PopoutWindowKeys.CHANNEL_CALL_POPOUT) && _()
    }
  }
}
var S = new C