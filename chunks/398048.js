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
  let d = (0, l.useStateFromStores)([s.default], () => s.default.can(r.Permissions.MANAGE_CHANNELS, e), [e]);
  return __OVERLAY__ || !d ? null : (0, a.jsx)(u.MenuItem, {
    id: "clone-channel",
    label: i.default.Messages.CLONE_CHANNEL,
    action: () => (0, u.openModalLazy)(async () => {
      let {
        default: l
      } = await Promise.all([t.e("99387"), t.e("7590"), t.e("45094"), t.e("61672")]).then(t.bind(t, "218613"));
      return t => (0, a.jsx)(l, {
        ...t,
        channelType: e.type,
        guildId: n.id,
        categoryId: e.parent_id,
        cloneChannelId: e.id
      })
    })
  })
}