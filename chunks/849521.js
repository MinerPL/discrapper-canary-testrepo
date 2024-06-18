"use strict";
n.d(t, {
  y: function() {
    return l
  }
});
var i = n(873546),
  r = n(944486),
  s = n(914010),
  o = n(626135),
  a = n(981631);

function l(e, t) {
  o.default.track(a.rMx.APP_DIRECTORY_PROFILE_EMBED_SENT, {
    application_id: e,
    device_platform: i.tq ? "mobile_web" : "desktop_web",
    guild_id: s.Z.getGuildId(),
    channel_id: r.Z.getChannelId(),
    section: t
  })
}