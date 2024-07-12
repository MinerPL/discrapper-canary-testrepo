n.d(t, {
  m: function() {
return i;
  },
  o: function() {
return f;
  }
}), n(47120);
var i, a, l = n(259443),
  s = n(379649),
  r = n(314897),
  o = n(592125),
  c = n(866960),
  d = n(19780),
  u = n(979651),
  h = n(626135),
  p = n(981631);

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
(a = i || (i = {})).SELF_VIDEO = 'self_video', a.SELF_STREAM = 'self_stream', a.REMOTE_VIDEO = 'remote_video', a.REMOTE_STREAM = 'remote_stream', a.CHANGE_VIDEO_BACKGROUND = 'change_video_background', a.VIDEO_PLAYER = 'video_player', a.REPLAY_VIDEO_STREAM = 'replay_video_stream';
let _ = new Map();
class f {
  onSpinnerStarted() {
null == this.spinnerVisibleStart && (this.spinnerVisibleStart = (0, s.zO)());
  }
  trackSpinnerDuration(e, t, n) {
if (null == this.spinnerVisibleStart)
  return;
let i = function(e) {
    var t;
    let n = (null !== (t = _.get(e)) && void 0 !== t ? t : 0) + 1;
    return _.set(e, n), n;
  }(n),
  a = (0, s.zO)() - this.spinnerVisibleStart;
if (this.spinnerVisibleStart = null, a < 0) {
  this.logger.warn('spinner duration is negative: '.concat(a, ' ms\n        [').concat(e, ', count for stream: ').concat(i, ']'));
  return;
}
this.logger.info('spinner visible for '.concat(a, ' ms\n      [').concat(e, ', count for stream: ').concat(i, ']'));
let l = d.Z.getGuildId(),
  m = u.Z.getUserVoiceChannelId(l, r.default.getId()),
  f = function(e) {
    if (null != e) {
      if (e.isGuildVoice())
        return 'guild_voice';
      if (e.isGuildStageVoice())
        return 'is_stage_channel';
      if (e.isDM())
        return 'dm';
      if (e.isGroupDM())
        return 'group_dm';
    }
    return null;
  }(o.Z.getChannel(m));
h.default.track(p.rMx.VIDEO_SPINNER_SHOWN_V2, {
  video_spinner_context: e,
  duration_video_spinner_visible_ms: a,
  rtc_connection_id: d.Z.getRTCConnectionId(),
  media_session_id: d.Z.getMediaSessionId(),
  event_count_for_stream: i,
  guild_id: l,
  channel_id: m,
  channel_type: f,
  spinning_user_id: t,
  connection_type: c.Z.getType(),
  effective_connection_speed: c.Z.getEffectiveConnectionSpeed(),
  service_provider: c.Z.getServiceProvider()
});
  }
  constructor(e) {
m(this, 'logger', void 0), m(this, 'spinnerVisibleStart', null), this.logger = new l.Y(e);
  }
}