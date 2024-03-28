"use strict";
u.r(t), u.d(t, {
  default: function() {
    return E
  }
});
var a = u("735250");
u("470079");
var n = u("442837"),
  l = u("828214"),
  s = u("287734"),
  d = u("208049"),
  i = u("893663"),
  o = u("496675"),
  r = u("944486"),
  f = u("981631"),
  c = u("689938");

function E(e, t) {
  let u = (0, n.useStateFromStores)([o.default], () => o.default.can(f.Permissions.CONNECT, e), [e]),
    E = (0, n.useStateFromStores)([r.default], () => r.default.getVoiceChannelId()),
    _ = (0, i.useCustomJoinSound)(t),
    M = E === e.id;
  return e.isGuildVocal() && u && null != _ && !M ? (0, a.jsx)(l.MenuItem, {
    id: "join-muted-custom-join-sound",
    label: c.default.Messages.VOICE_CHANNEL_MUTED_CUSTOM_JOIN_SOUND,
    action: () => {
      (0, d.muteCustomJoinSound)(e.id), s.default.selectVoiceChannel(e.id)
    }
  }) : null
}