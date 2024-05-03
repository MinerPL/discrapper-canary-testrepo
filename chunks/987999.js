"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
});
var s = a("735250");
a("470079");
var n = a("442837"),
  l = a("481060"),
  u = a("239091"),
  d = a("299206"),
  i = a("693546"),
  o = a("246364"),
  I = a("937111"),
  r = a("703656"),
  E = a("914010"),
  M = a("981631"),
  _ = a("689938");

function C(e) {
  let {
    guild: t,
    onSelect: a
  } = e, C = t.id, A = (0, d.default)({
    id: t.id,
    label: _.default.Messages.COPY_ID_GUILD
  }), c = (0, n.useStateFromStores)([I.default], () => I.default.getRequest(C)), f = () => {
    i.default.removeGuildJoinRequest(C), E.default.getGuildId() === C && (0, r.transitionTo)(M.Routes.ME)
  };
  return (0, s.jsxs)(l.Menu, {
    navId: "join-request-guild-context",
    onClose: u.closeContextMenu,
    "aria-label": _.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: a,
    children: [(null == c ? void 0 : c.applicationStatus) === o.GuildJoinRequestApplicationStatuses.REJECTED && (0, s.jsx)(l.MenuItem, {
      id: "reapply",
      label: _.default.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_MODAL_REAPPLY,
      action: () => {
        i.default.resetGuildJoinRequest(C).then(() => {
          (0, r.transitionTo)(M.Routes.GUILD_MEMBER_VERIFICATION(C))
        })
      },
      color: "default"
    }), (0, s.jsx)(l.MenuItem, {
      id: "withdraw",
      label: _.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
      action: () => {
        (0, l.openModal)(e => (0, s.jsx)(l.ConfirmModal, {
          header: _.default.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
          confirmText: _.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
          cancelText: _.default.Messages.CANCEL,
          onConfirm: f,
          ...e,
          children: (0, s.jsx)(l.Text, {
            variant: "text-md/normal",
            children: _.default.Messages.MEMBER_VERIFICATION_WITHDRAW_APPLICATION_CONFIRMATION.format({
              name: t.name
            })
          })
        }))
      },
      color: "danger"
    }), (0, s.jsx)(l.MenuGroup, {
      children: A
    })]
  })
}