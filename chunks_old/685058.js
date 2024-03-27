"use strict";
n.r(t), n.d(t, {
  MODAL_KEY: function() {
    return d
  },
  openGuildRoleConnectionsModal: function() {
    return u
  },
  default: function() {
    return C
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  o = n("77078"),
  s = n("305961"),
  i = n("83900"),
  c = n("535013"),
  r = n("782340");
let d = "guild-connection-roles";

function u(e) {
  (0, o.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("918771").then(n.bind(n, "918771"));
    return n => (0, l.jsx)(t, {
      ...n,
      guildId: e
    })
  }, {
    modalKey: d,
    contextKey: o.DEFAULT_MODAL_CONTEXT,
    onCloseRequest: () => {
      (0, o.closeModal)(d, o.DEFAULT_MODAL_CONTEXT)
    }
  })
}

function C(e) {
  let t = (0, a.useStateFromStores)([s.default], () => (0, c.isVerifiedRolesChannelVisible)(e, s.default.getRoles(e.id)), [e]);
  return t ? (0, l.jsx)(o.MenuItem, {
    id: "guild-connection-roles",
    label: r.default.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
    icon: i.default,
    action: () => u(e.id)
  }) : null
}