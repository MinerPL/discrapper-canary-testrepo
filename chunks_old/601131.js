"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("817963"),
  s = n("244480"),
  o = n("398604"),
  r = n("322224"),
  d = n("745049"),
  c = n("782340");

function f(e, t, n) {
  let {
    canManageGuildEvent: f
  } = (0, u.useManageResourcePermissions)(null != n ? n : t), E = (0, i.useStateFromStores)([o.default], () => o.default.isActive(e)), _ = (0, i.useStateFromStores)([o.default], () => o.default.getGuildScheduledEvent(e), [e]), S = f(_);
  if (null == e || !S || !E || (null == _ ? void 0 : _.entity_type) === d.GuildScheduledEventEntityTypes.EXTERNAL) return null;
  let N = () => {
    if (null == n ? void 0 : n.isGuildStageVoice()) {
      (0, s.endStage)(n);
      return
    }
    null != e && r.default.endEvent(e, t.id), (0, l.closeAllModals)()
  };
  return (0, a.jsx)(l.MenuItem, {
    id: c.default.Messages.END_EVENT,
    label: c.default.Messages.END_EVENT,
    action: function() {
      (0, l.openModal)(e => (0, a.jsx)(l.ConfirmModal, {
        ...e,
        header: c.default.Messages.END_EVENT,
        confirmText: c.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
        cancelText: c.default.Messages.CANCEL,
        onConfirm: N,
        children: (0, a.jsx)(l.Text, {
          variant: "text-md/normal",
          children: c.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
        })
      }))
    },
    color: "danger"
  })
}