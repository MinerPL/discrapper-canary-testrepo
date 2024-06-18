"use strict";
n.d(t, {
  Z: function() {
    return T
  }
});
var i = n(570140),
  r = n(367907),
  s = n(932724),
  o = n(634041),
  a = n(647177),
  l = n(592125),
  u = n(131951),
  _ = n(19780),
  d = n(944486),
  c = n(594174);
let E = (e, t) => ({
    channel_id: e.id,
    channel_type: e.type,
    guild_id: e.getGuildId(),
    rtc_connection_id: _.Z.getRTCConnectionId(),
    duration: _.Z.getDuration(),
    media_session_id: _.Z.getMediaSessionId(),
    ...(0, r.kO)(_.Z.getGuildId(), _.Z.getChannelId(), t)
  }),
  I = () => {
    var e;
    let t = (0, s.P)(c.default.getCurrentUser());
    return {
      video_device_name: null === (e = u.Z.getVideoDevices()[u.Z.getVideoDeviceId()]) || void 0 === e ? void 0 : e.name,
      video_hardware_scaling_enabled: u.Z.getHardwareH264(),
      video_effect_type: (0, a.TA)(t),
      video_effect_detail: (0, a.V$)(t)
    }
  };

function T(e, t, n, r) {
  let s = d.Z.getVoiceChannelId(),
    a = l.Z.getChannel(s);
  if (null == t && null != s && null != a) {
    let t = E(a, r);
    if (e(), o.Z.hasUsedBackgroundInCall) {
      let e = {
        ...t,
        ...I()
      };
      i.Z.dispatch({
        type: "VIDEO_BACKGROUND_SHOW_FEEDBACK",
        analyticsData: e
      })
    } else i.Z.dispatch({
      type: "VOICE_CHANNEL_SHOW_FEEDBACK",
      analyticsData: t
    })
  } else e()
}