"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var l = a("442837"),
  u = a("481060"),
  s = a("496675"),
  d = a("981631"),
  i = a("647086"),
  r = a("689938");

function o(e) {
  let t = (0, l.useStateFromStores)([s.default], () => s.default.can(d.Permissions.MANAGE_CHANNELS, e));
  return __OVERLAY__ ? null : e.id === i.FAVORITES_RAW_GUILD_ID ? (0, n.jsx)(n.Fragment, {
    children: (0, n.jsx)(u.MenuItem, {
      id: "create-category",
      label: r.default.Messages.CREATE_CATEGORY,
      action: () => (0, u.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([a.e("99387"), a.e("1812")]).then(a.bind(a, "477782"));
        return t => (0, n.jsx)(e, {
          ...t
        })
      })
    })
  }) : t ? [(0, n.jsx)(u.MenuItem, {
    id: "create-channel",
    label: r.default.Messages.CREATE_CHANNEL,
    action: () => (0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
      return a => (0, n.jsx)(t, {
        ...a,
        channelType: d.ChannelTypes.GUILD_TEXT,
        guildId: e.id
      })
    })
  }, "create-channel"), (0, n.jsx)(u.MenuItem, {
    id: "create-category",
    label: r.default.Messages.CREATE_CATEGORY,
    action: () => (0, u.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([a.e("99387"), a.e("45094"), a.e("36494")]).then(a.bind(a, "218613"));
      return a => (0, n.jsx)(t, {
        ...a,
        channelType: d.ChannelTypes.GUILD_CATEGORY,
        guildId: e.id
      })
    })
  }, "create-category")] : null
}