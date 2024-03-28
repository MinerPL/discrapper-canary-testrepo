"use strict";
t.r(n), t.d(n, {
  default: function() {
    return d
  }
});
var a = t("735250");
t("470079");
var l = t("442837"),
  u = t("481060"),
  s = t("496675"),
  r = t("981631"),
  i = t("689938");

function d(e, n) {
  let d = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.type,
    o = (0, l.useStateFromStores)([s.default], () => s.default.can(r.Permissions.MANAGE_CHANNELS, e), [e]);
  if (__OVERLAY__ || !o) return null;
  let c = () => {
    (0, u.openModalLazy)(async () => {
      let {
        default: n
      } = await Promise.all([t.e("99387"), t.e("7590"), t.e("45094"), t.e("61672")]).then(t.bind(t, "218613"));
      return t => (0, a.jsx)(n, {
        ...t,
        channelType: d,
        guildId: e.guild_id,
        categoryId: e.parent_id
      })
    })
  };
  switch (d) {
    case r.ChannelTypes.GUILD_TEXT:
      return (0, a.jsx)(u.MenuItem, {
        id: "create-text-channel",
        label: i.default.Messages.CREATE_TEXT_CHANNEL,
        action: c
      });
    case r.ChannelTypes.GUILD_VOICE:
      return (0, a.jsx)(u.MenuItem, {
        id: "create-voice-channel",
        label: i.default.Messages.CREATE_VOICE_CHANNEL,
        action: c
      });
    default:
      return null
  }
}