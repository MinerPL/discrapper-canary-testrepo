"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var l = n("656015"),
  a = n("462579"),
  i = n("701909"),
  r = n("49111"),
  o = n("782340"),
  u = n("498126");

function d(e) {
  let t, {
      message: n,
      channel: d,
      onDeleteMessage: c,
      children: E
    } = e,
    f = (0, l.useIsMessageInteractionForcedEphemeral)(n, d, {
      location: "EphemeralAccessories"
    }),
    _ = () => c(n, !0);
  return t = f ? (0, s.jsx)("div", {
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
    children: [(0, s.jsx)(a.default, {
      className: u.icon,
      width: 16,
      height: 16
    }), t, E]
  })
}