"use strict";
s.r(a), s.d(a, {
  default: function() {
    return n
  }
});
var t = s("735250");
s("470079");
var _ = s("481060"),
  r = s("689938");

function n(e) {
  let {
    ruleName: a,
    keyword: s,
    ...n
  } = e, u = null != a ? a : r.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_NAME;
  return (0, t.jsx)(_.ConfirmModal, {
    ...n,
    header: r.default.Messages.GUILD_AUTOMOD_ADD_KEYWORD_TO_RULE_CONFIRM_TITLE,
    cancelText: r.default.Messages.CANCEL,
    confirmText: r.default.Messages.CONFIRM,
    children: (0, t.jsx)(_.Text, {
      variant: "text-md/normal",
      children: r.default.Messages.GUILD_AUTOMOD_ADD_KEYWORD_TO_RULE_CONFIRM_DESCRIPTION.format({
        ruleName: u,
        keyword: s
      })
    })
  })
}