"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("155823"),
  u = n("987317"),
  s = n("305122"),
  o = n("675961"),
  r = n("957255"),
  d = n("18494"),
  c = n("49111"),
  f = n("782340");

function E(e, t) {
  let n = (0, i.useStateFromStores)([r.default], () => r.default.can(c.Permissions.CONNECT, e), [e]),
    E = (0, i.useStateFromStores)([d.default], () => d.default.getVoiceChannelId()),
    _ = (0, o.useCustomJoinSound)(t),
    S = E === e.id;
  return e.isGuildVocal() && n && null != _ && !S ? (0, a.jsx)(l.MenuItem, {
    id: "join-muted-custom-join-sound",
    label: f.default.Messages.VOICE_CHANNEL_MUTED_CUSTOM_JOIN_SOUND,
    action: () => {
      (0, s.muteCustomJoinSound)(e.id), u.default.selectVoiceChannel(e.id)
    }
  }) : null
}