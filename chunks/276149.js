"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(287734),
  o = n(19780),
  a = n(626135),
  l = n(915863),
  u = n(981631),
  _ = n(689938);

function d(e) {
  let {
    className: t,
    color: n,
    look: d,
    hangStatusChannel: c,
    onAction: E
  } = e, I = (0, r.e7)([o.Z], () => o.Z.getChannelId() === c.id);
  return (0, i.jsx)(l.Z, {
    className: t,
    disabled: I,
    onClick: () => {
      null == E || E(), s.default.selectVoiceChannel(c.id), a.default.track(u.rMx.HANG_STATUS_CTA_CLICKED, {
        source: "UserProfilePopout",
        guild_id: c.guild_id,
        channel_id: c.id
      })
    },
    color: n,
    look: d,
    fullWidth: !0,
    children: _.Z.Messages.PROFILE_JOIN_VOICE_CHANNEL
  }, "join-hang")
}