"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n("735250");
n("470079");
var u = n("442837"),
  a = n("481060"),
  s = n("889161"),
  d = n("471253"),
  i = n("924301"),
  r = n("482241"),
  o = n("765305"),
  c = n("689938");

function E(e, t, n) {
  let {
    canManageGuildEvent: E
  } = (0, s.useManageResourcePermissions)(null != n ? n : t), f = (0, u.useStateFromStores)([i.default], () => i.default.isActive(e)), _ = (0, u.useStateFromStores)([i.default], () => i.default.getGuildScheduledEvent(e), [e]), T = E(_);
  if (null == e || !T || !f || (null == _ ? void 0 : _.entity_type) === o.GuildScheduledEventEntityTypes.EXTERNAL) return null;
  let S = () => {
    if (null == n ? void 0 : n.isGuildStageVoice()) {
      (0, d.endStage)(n);
      return
    }
    null != e && r.default.endEvent(e, t.id), (0, a.closeAllModals)()
  };
  return (0, l.jsx)(a.MenuItem, {
    id: c.default.Messages.END_EVENT,
    label: c.default.Messages.END_EVENT,
    action: function() {
      (0, a.openModal)(e => (0, l.jsx)(a.ConfirmModal, {
        ...e,
        header: c.default.Messages.END_EVENT,
        confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: c.default.Messages.CANCEL,
        onConfirm: S,
        children: (0, l.jsx)(a.Text, {
          variant: "text-md/normal",
          children: c.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    },
    color: "danger"
  })
}