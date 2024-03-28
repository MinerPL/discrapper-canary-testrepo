"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("194359"),
  i = n("699516"),
  r = n("63063"),
  o = n("862679"),
  u = n("981631"),
  d = n("689938");

function c(e) {
  let {
    channel: t,
    children: c
  } = e, f = (0, l.useStateFromStores)([i.default], () => i.default.isBlocked(t.getRecipientId())), h = t.isSystemDM(), m = f && !h && !t.isMultiUserDM(), p = {};
  return h ? (p.message = d.default.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION, p.subtitle = d.default.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION_SUBTEXT, p.buttonText = d.default.Messages.LEARN_MORE, p.onButtonClick = () => open(r.default.getArticleURL(u.HelpdeskArticles.SYSTEM_DMS)), p.imageSrc = n("780961")) : m && (p.message = d.default.Messages.DM_VERIFICATION_TEXT_BLOCKED, p.buttonText = d.default.Messages.UNBLOCK, p.onButtonClick = () => {
    s.default.unblockUser(t.getRecipientId())
  }), (0, a.jsx)(o.default, {
    ...p,
    children: c
  })
}