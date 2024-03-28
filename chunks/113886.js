"use strict";
t.r(a), t("47120");
var s = t("735250"),
  u = t("470079"),
  n = t("481060"),
  i = t("693546"),
  l = t("246364"),
  d = t("689938");
a.default = e => {
  let {
    guildId: a,
    userId: t,
    onConfirm: E,
    onError: c,
    modalProps: r
  } = e, [I, T] = u.useState(), _ = async () => {
    try {
      await i.default.updateGuildJoinRequest(a, t, l.GuildJoinRequestApplicationStatuses.REJECTED, I), null == E || E()
    } catch (e) {
      null == c || c()
    }
  };
  return (0, s.jsx)(n.ConfirmModal, {
    header: d.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_MODAL_TITLE,
    cancelText: d.default.Messages.CANCEL,
    confirmText: d.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_DENY_APPLICATION,
    onConfirm: _,
    ...r,
    children: (0, s.jsx)(n.TextArea, {
      value: I,
      onChange: T,
      maxLength: 160
    })
  })
}