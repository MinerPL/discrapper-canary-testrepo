"use strict";
l.r(a);
var s = l("735250");
l("470079");
var t = l("442837"),
  n = l("481060"),
  d = l("239091"),
  o = l("995532"),
  u = l("689938");
a.default = e => {
  var a;
  let {
    guildId: i,
    welcomeChannel: _,
    onEdit: E,
    onChannelReorder: c,
    setShowConfirmModal: r,
    index: I,
    onSelect: M
  } = e, L = (0, t.useStateFromStores)([o.default], () => o.default.get(i)), C = (null !== (a = null == L ? void 0 : L.welcome_channels) && void 0 !== a ? a : []).length - 1, N = e => {
    c(_, e, !0)
  };
  return (0, s.jsxs)(n.Menu, {
    navId: "welcome-settings-context",
    "aria-label": u.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
    onClose: d.closeContextMenu,
    onSelect: M,
    children: [(0, s.jsxs)(n.MenuGroup, {
      children: [(0, s.jsx)(n.MenuItem, {
        id: "move-up",
        label: u.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_MOVE_UP,
        disabled: I <= 0,
        action: () => N(I - 1)
      }), (0, s.jsx)(n.MenuItem, {
        id: "move-down",
        label: u.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_MOVE_DOWN,
        disabled: I > C,
        action: () => N(I + 1)
      })]
    }), (0, s.jsxs)(n.MenuGroup, {
      children: [(0, s.jsx)(n.MenuItem, {
        id: "edit",
        label: u.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_EDIT,
        action: () => (0, n.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([l.e("99387"), l.e("39143")]).then(l.bind(l, "737868"));
          return a => (0, s.jsx)(e, {
            ...a,
            welcomeChannel: _,
            guildId: i,
            onSave: E
          })
        })
      }), (0, s.jsx)(n.MenuItem, {
        id: "delete",
        label: u.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DELETE,
        action: () => r(!0),
        color: "danger"
      })]
    })]
  })
}