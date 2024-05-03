"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  a = n("287734"),
  s = n("19780"),
  o = n("626135"),
  l = n("915863"),
  u = n("981631"),
  d = n("689938");

function _(e) {
  let {
    className: t,
    color: n,
    look: _,
    hangStatusChannel: c,
    onAction: E
  } = e, I = (0, r.useStateFromStores)([s.default], () => s.default.getChannelId() === c.id);
  return (0, i.jsx)(l.default, {
    className: t,
    disabled: I,
    onClick: () => {
      null == E || E(), a.default.selectVoiceChannel(c.id), o.default.track(u.AnalyticEvents.HANG_STATUS_CTA_CLICKED, {
        source: "UserProfilePopout",
        guild_id: c.guild_id,
        channel_id: c.id
      })
    },
    color: n,
    look: _,
    fullWidth: !0,
    children: d.default.Messages.PROFILE_JOIN_VOICE_CHANNEL
  }, "join-hang")
}