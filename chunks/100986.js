"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(594190),
  r = n(592125),
  s = n(19780),
  o = n(944486),
  a = n(626135),
  l = n(710111),
  u = n(981631),
  _ = n(474936);

function d(e, t, n, d) {
  var c, E, I;
  let T = r.Z.getChannel(o.Z.getVoiceChannelId()),
    h = null == T ? void 0 : T.getGuildId(),
    S = s.Z.getMediaSessionId(),
    f = s.Z.getRTCConnectionId(),
    N = null === (c = i.ZP.getCurrentGameForAnalytics()) || void 0 === c ? void 0 : c.name,
    A = h !== n.guildId && n.guildId !== l.X8;
  let m = (E = n, I = A, E.guildId === l.X8 ? "default" : I ? "custom-external" : "custom");
  a.default.track(u.rMx.PREMIUM_FEATURE_USAGE, {
    feature_name: _.QP.SOUNDBOARD_PLAY,
    feature_tier: A ? _.h1.PREMIUM_STANDARD : _.h1.FREE,
    guild_id: h,
    location_stack: e,
    rtc_connection_id: f,
    media_session_id: S,
    in_overlay: t,
    application_name: N,
    emoji_count: null != n.emojiId || null != n.emojiName ? 1 : 0,
    feature_selection: m,
    feature_selection_id: n.soundId,
    sound_type: d,
    is_broadcast: null != T && T.isBroadcastChannel()
  })
}