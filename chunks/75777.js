"use strict";
l.r(t), l.d(t, {
  default: function() {
    return i
  }
});
var n = l("735250");
l("470079");
var s = l("207561"),
  a = l("624659"),
  o = l("496987"),
  u = l("689938");
let r = [o.GuildHomeRemoveChannelReasons.OTHER];

function i(e) {
  let {
    transitionState: t,
    onClose: l,
    channelId: i,
    onSubmit: d
  } = e, c = (0, s.useLazyValue)(o.getGuildHomeRemoveChannelReasons);
  return (0, n.jsx)(a.default, {
    header: u.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_TITLE,
    body: u.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_SUBTITLE,
    problems: c,
    feedbackProblems: r,
    onSubmit: function(e) {
      let {
        problem: t,
        feedback: l
      } = e, n = null == t;
      !n && ((0, o.trackGuildHomeRemoveChannelFeedback)(i, t, l, n), d())
    },
    onClose: l,
    transitionState: t,
    otherKey: o.GuildHomeRemoveChannelReasons.OTHER,
    canDismissForever: !1,
    showHelpdeskLink: !1
  })
}