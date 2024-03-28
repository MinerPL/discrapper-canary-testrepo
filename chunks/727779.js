"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("824203"),
  l = n("794358"),
  i = n("63063"),
  r = n("981631"),
  o = n("689938"),
  u = n("438601");

function d(e) {
  let t, {
      message: n,
      channel: d,
      onDeleteMessage: c,
      children: f
    } = e,
    E = (0, a.useIsMessageInteractionForcedEphemeral)(n, d, {
      location: "EphemeralAccessories"
    }),
    _ = () => c(n, !0);
  return t = E ? (0, s.jsx)("div", {
    className: u.userAppsBetaContent,
    children: o.default.Messages.APPLICATION_COMMAND_USER_INSTALL_BETA_EPHEMERAL.format({
      learnMoreUrl: i.default.getArticleURL(r.HelpdeskArticles.USING_APPS_FAQ),
      handleDelete: _
    })
  }) : n.type === r.MessageTypes.STAGE_RAISE_HAND ? o.default.Messages.STAGE_SYSTEM_MESSAGE_MODERATOR_VISIBILITY_MESSAGE.format({
    handleDelete: _
  }) : o.default.Messages.ONLY_YOU_CAN_SEE_AND_DELETE_THESE.format({
    count: 1,
    countMessages: 1,
    handleDelete: _
  }), (0, s.jsxs)("div", {
    className: u.ephemeralMessage,
    onClick: e => e.stopPropagation(),
    children: [(0, s.jsx)(l.default, {
      className: u.icon,
      width: 16,
      height: 16
    }), t, f]
  })
}