"use strict";
u.r(t), u.d(t, {
  default: function() {
    return r
  }
});
var a = u("735250");
u("470079");
var n = u("442837"),
  l = u("481060"),
  s = u("471253"),
  d = u("146085"),
  i = u("496675"),
  o = u("689938");

function r(e, t) {
  let u = (0, n.useStateFromStores)([i.default], () => i.default.can(d.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]);
  return null != t && u ? (0, a.jsx)(l.MenuItem, {
    id: "end-stage",
    label: o.default.Messages.END_STAGE,
    color: "danger",
    action: function() {
      (0, l.openModal)(t => (0, a.jsx)(l.ConfirmModal, {
        ...t,
        header: o.default.Messages.END_STAGE_TITLE,
        confirmText: o.default.Messages.END_STAGE,
        cancelText: o.default.Messages.CANCEL,
        onConfirm: () => (0, s.endStage)(e),
        children: (0, a.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: o.default.Messages.EXPLICIT_END_STAGE_SUBTITLE
        })
      }))
    }
  }) : null
}