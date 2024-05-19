"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var s = a("735250");
a("470079");
var l = a("442837"),
  u = a("481060"),
  n = a("239091"),
  d = a("100527"),
  i = a("970606"),
  o = a("299206"),
  I = a("693546"),
  r = a("246364"),
  E = a("937111"),
  M = a("703656"),
  C = a("914010"),
  A = a("981631"),
  _ = a("689938");

function c(e) {
  let {
    guild: t,
    onSelect: a
  } = e, c = t.id, f = (0, o.default)({
    id: t.id,
    label: _.default.Messages.COPY_ID_GUILD
  }), R = (0, l.useStateFromStores)([E.default], () => E.default.getRequest(c)), N = () => {
    I.default.removeGuildJoinRequest(c), C.default.getGuildId() === c && (0, M.transitionTo)(A.Routes.ME)
  };
  return (0, s.jsxs)(u.Menu, {
    navId: "join-request-guild-context",
    onClose: n.closeContextMenu,
    "aria-label": _.default.Messages.GUILD_ACTIONS_MENU_LABEL,
    onSelect: a,
    children: [(null == R ? void 0 : R.applicationStatus) === r.GuildJoinRequestApplicationStatuses.REJECTED && (0, s.jsx)(u.MenuItem, {
      id: "reapply",
      label: _.default.Messages.MEMBER_VERIFICATION_PENDING_APPLICATION_MODAL_REAPPLY,
      action: () => {
        t.hasFeature(A.GuildFeatures.CLAN) && (0, i.trackClanApplyToJoinViewed)({
          guildId: c,
          source: d.default.CLAN_REAPPLY
        }), I.default.resetGuildJoinRequest(c).then(() => {
          (0, M.transitionTo)(A.Routes.GUILD_MEMBER_VERIFICATION(c))
        })
      },
      color: "default"
    }), (0, s.jsx)(u.MenuItem, {
      id: "withdraw",
      label: _.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
      action: () => {
        (0, u.openModal)(e => (0, s.jsx)(u.ConfirmModal, {
          header: _.default.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
          confirmText: _.default.Messages.MEMBER_VERIFICATION_CANCEL_APPLICATION,
          cancelText: _.default.Messages.CANCEL,
          onConfirm: N,
          ...e,
          children: (0, s.jsx)(u.Text, {
            variant: "text-md/normal",
            children: _.default.Messages.MEMBER_VERIFICATION_WITHDRAW_APPLICATION_CONFIRMATION.format({
              name: t.name
            })
          })
        }))
      },
      color: "danger"
    }), (0, s.jsx)(u.MenuGroup, {
      children: f
    })]
  })
}