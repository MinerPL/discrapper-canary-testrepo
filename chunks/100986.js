n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(594190),
  i = n(592125),
  a = n(19780),
  o = n(944486),
  s = n(626135),
  l = n(710111),
  u = n(981631),
  c = n(474936);

function d(e, t, n, d) {
  var _, E, f;
  let h = i.Z.getChannel(o.Z.getVoiceChannelId()),
p = null == h ? void 0 : h.getGuildId(),
m = a.Z.getMediaSessionId(),
I = a.Z.getRTCConnectionId(),
T = null === (_ = r.ZP.getCurrentGameForAnalytics()) || void 0 === _ ? void 0 : _.name,
g = p !== n.guildId && n.guildId !== l.X8;
  let S = (E = n, f = g, E.guildId === l.X8 ? 'default' : f ? 'custom-external' : 'custom');
  s.default.track(u.rMx.PREMIUM_FEATURE_USAGE, {
feature_name: c.QP.SOUNDBOARD_PLAY,
feature_tier: g ? c.h1.PREMIUM_STANDARD : c.h1.FREE,
guild_id: p,
location_stack: e,
rtc_connection_id: I,
media_session_id: m,
in_overlay: t,
application_name: T,
emoji_count: null != n.emojiId || null != n.emojiName ? 1 : 0,
feature_selection: S,
feature_selection_id: n.soundId,
sound_type: d,
is_broadcast: null != h && h.isBroadcastChannel()
  });
}