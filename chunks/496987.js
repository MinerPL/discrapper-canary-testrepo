"use strict";
l.r(t), l.d(t, {
  GuildHomeRemoveChannelReasons: function() {
    return s
  },
  getGuildHomeRemoveChannelReasons: function() {
    return i
  },
  trackGuildHomeRemoveChannelFeedback: function() {
    return d
  }
});
var n, s, a = l("592125"),
  o = l("626135"),
  u = l("981631"),
  r = l("689938");

function i() {
  return [{
    value: "bot-spam",
    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_BOTS
  }, {
    value: "no-go",
    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_NO_GO
  }, {
    value: "overwhelm",
    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_TOO_MUCH
  }, {
    value: "sensitive",
    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_SENSITIVE
  }, {
    value: "other",
    label: r.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_OPTION_OTHER
  }]
}

function d(e, t, l, n) {
  let s = a.default.getChannel(e);
  null != s && o.default.track(u.AnalyticEvents.USER_REPORT_SUBMITTED, {
    report_name: "Guild Home Channel Removed",
    guild_id: s.guild_id,
    channel_id: s.id,
    reason: t,
    feedback: l,
    skipped: n
  })
}(n = s || (s = {})).BOT_SPAM = "bot-spam", n.NO_GO = "no-go", n.OVERWHELM = "overwhelm", n.SENSITIVE = "sensitive", n.OTHER = "other"