"use strict";
t.r(a), t.d(a, {
  default: function() {
    return c
  }
});
var n = t("735250");
t("470079");
var s = t("481060"),
  d = t("239091"),
  l = t("299206"),
  u = t("693546"),
  o = t("703656"),
  i = t("914010"),
  r = t("981631"),
  E = t("689938");

function c(e) {
  let {
    guild: a,
    onSelect: t
  } = e, c = a.id, f = (0, l.default)({
    id: a.id,
    label: E.default.Messages.COPY_ID_GUILD
  }), M = () => {
    u.default.removeGuildJoinRequest(c), i.default.getGuildId() === c && (0, o.transitionTo)(r.Routes.ME)
  };
  return (0, n.jsxs)(s.Menu, {
    navId: "join-request-guild-context",
    onClose: d.closeContextMenu,
    "aria-label": E.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: t,
    children: [(0, n.jsx)(s.MenuItem, {
      id: "leave-guild",
      label: E.default.Messages.LEAVE_SERVER,
      action: () => {
        (0, s.openModal)(e => (0, n.jsx)(s.ConfirmModal, {
          header: E.default.Messages.LEAVE_SERVER_TITLE.format({
            name: a.name
          }),
          confirmText: E.default.Messages.LEAVE_SERVER,
          cancelText: E.default.Messages.CANCEL,
          onConfirm: M,
          ...e,
          children: (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            children: E.default.Messages.LEAVE_SERVER_BODY.format({
              name: a.name
            })
          })
        }))
      },
      color: "danger"
    }), (0, n.jsx)(s.MenuGroup, {
      children: f
    })]
  })
}