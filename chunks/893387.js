"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(592125),
  r = n(19780),
  s = n(797258),
  o = n(626135),
  a = n(981631);

function l(e, t, n) {
  var l, u;
  o.default.track(a.rMx.VOICE_CALL_TRANSFER, {
    source_platform: null != n ? null === (l = s.Z.getSessionById(n)) || void 0 === l ? void 0 : l.clientInfo.os : "discord_client",
    guild_id: null === (u = i.Z.getChannel(e)) || void 0 === u ? void 0 : u.guild_id,
    channel_id: e,
    rtc_connection_id: r.Z.getRTCConnectionId(),
    target_platform: t
  })
}