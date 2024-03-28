"use strict";
n.r(t), n.d(t, {
  VideoSpinnerContext: function() {
    return a
  },
  VideoSpinnerTimer: function() {
    return E
  }
}), n("47120");
var a, l, s = n("259443"),
  i = n("379649"),
  r = n("314897"),
  o = n("592125"),
  u = n("866960"),
  d = n("19780"),
  c = n("979651"),
  f = n("626135"),
  h = n("981631");

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(l = a || (a = {})).SELF_VIDEO = "self_video", l.SELF_STREAM = "self_stream", l.REMOTE_VIDEO = "remote_video", l.REMOTE_STREAM = "remote_stream", l.CHANGE_VIDEO_BACKGROUND = "change_video_background", l.VIDEO_PLAYER = "video_player", l.REPLAY_VIDEO_STREAM = "replay_video_stream";
let p = new Map;
class E {
  onSpinnerStarted() {
    null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, i.now)())
  }
  trackSpinnerDuration(e, t, n) {
    if (null == this.spinnerVisibleStart) return;
    let a = function(e) {
        var t;
        let n = (null !== (t = p.get(e)) && void 0 !== t ? t : 0) + 1;
        return p.set(e, n), n
      }(n),
      l = (0, i.now)() - this.spinnerVisibleStart;
    if (this.spinnerVisibleStart = null, l < 0) {
      this.logger.warn("spinner duration is negative: ".concat(l, " ms\n        [").concat(e, ", count for stream: ").concat(a, "]"));
      return
    }
    this.logger.info("spinner visible for ".concat(l, " ms\n      [").concat(e, ", count for stream: ").concat(a, "]"));
    let s = d.default.getGuildId(),
      m = c.default.getUserVoiceChannelId(s, r.default.getId()),
      E = function(e) {
        if (null != e) {
          if (e.isGuildVoice()) return "guild_voice";
          if (e.isGuildStageVoice()) return "is_stage_channel";
          if (e.isDM()) return "dm";
          if (e.isGroupDM()) return "group_dm"
        }
        return null
      }(o.default.getChannel(m));
    f.default.track(h.AnalyticEvents.VIDEO_SPINNER_SHOWN_V2, {
      video_spinner_context: e,
      duration_video_spinner_visible_ms: l,
      rtc_connection_id: d.default.getRTCConnectionId(),
      media_session_id: d.default.getMediaSessionId(),
      event_count_for_stream: a,
      guild_id: s,
      channel_id: m,
      channel_type: E,
      spinning_user_id: t,
      connection_type: u.default.getType(),
      effective_connection_speed: u.default.getEffectiveConnectionSpeed(),
      service_provider: u.default.getServiceProvider()
    })
  }
  constructor(e) {
    m(this, "logger", void 0), m(this, "spinnerVisibleStart", null), this.logger = new s.Logger(e)
  }
}