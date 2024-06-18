"use strict";
n.d(t, {
  Am: function() {
    return d
  },
  ZP: function() {
    return c
  },
  s$: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(430824),
  a = n(757698),
  l = n(275759),
  u = n(689938);
let _ = "guild-connection-roles";

function d(e) {
  (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("40897")]).then(n.bind(n, 507294));
    return n => (0, i.jsx)(t, {
      ...n,
      guildId: e
    })
  }, {
    modalKey: _,
    contextKey: s.DEFAULT_MODAL_CONTEXT,
    onCloseRequest: () => {
      (0, s.closeModal)(_, s.DEFAULT_MODAL_CONTEXT)
    }
  })
}

function c(e) {
  return (0, r.e7)([o.Z], () => (0, l.kQ)(e, o.Z.getRoles(e.id)), [e]) ? (0, i.jsx)(s.MenuItem, {
    id: "guild-connection-roles",
    label: u.Z.Messages.CONNECTIONS_ROLES_CHANNEL_NAME,
    icon: a.Z,
    action: () => d(e.id)
  }) : null
}