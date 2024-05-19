"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("423984"),
  i = n("194359"),
  r = n("631937"),
  o = n("702321"),
  u = n("377171"),
  d = n("699516"),
  c = n("626135"),
  f = n("63063"),
  h = n("862679"),
  m = n("981631"),
  p = n("596401"),
  E = n("689938");

function C(e) {
  let {
    channel: t,
    children: C
  } = e, g = (0, l.useStateFromStores)([d.default], () => d.default.isBlocked(t.getRecipientId()));
  (0, r.default)(t.id);
  let S = (0, o.default)(t.id),
    _ = t.isSystemDM(),
    T = g && !_ && !t.isMultiUserDM(),
    I = {};
  if (_) {
    let e = S ? (0, a.jsxs)(a.Fragment, {
      children: [E.default.Messages.SYSTEM_DM_OPEN_BLOG, (0, a.jsx)(s.WindowLaunchIcon, {
        width: 16,
        height: 16,
        color: u.default.HEADER_PRIMARY
      })]
    }) : E.default.Messages.LEARN_MORE;
    I.message = E.default.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION, I.subtitle = E.default.Messages.SYSTEM_DM_CHANNEL_DESCRIPTION_SUBTEXT, I.buttonText = e, I.onButtonClick = () => {
      if (S) {
        open(p.CHANGELOG_URL), c.default.track(m.AnalyticEvents.CHANGE_LOG_CTA_CLICKED, {
          cta_type: "chat_blocker",
          target: p.CHANGELOG_URL
        });
        return
      }
      open(f.default.getArticleURL(m.HelpdeskArticles.SYSTEM_DMS))
    }, I.imageSrc = n("780961")
  } else T && (I.message = E.default.Messages.DM_VERIFICATION_TEXT_BLOCKED, I.buttonText = E.default.Messages.UNBLOCK, I.onButtonClick = () => {
    i.default.unblockUser(t.getRecipientId())
  });
  return (0, a.jsx)(h.default, {
    ...I,
    children: C
  })
}