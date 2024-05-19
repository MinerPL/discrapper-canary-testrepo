"use strict";
n.r(t), n.d(t, {
  showReportModalForDiscoverableGuild: function() {
    return E
  },
  showReportModalForFirstDM: function() {
    return h
  },
  showReportModalForGuildDirectoryEntry: function() {
    return I
  },
  showReportModalForGuildScheduledEvent: function() {
    return S
  },
  showReportModalForInappropriateConversationSafetyAlert: function() {
    return C
  },
  showReportModalForMessage: function() {
    return T
  },
  showReportModalForStageChannel: function() {
    return f
  },
  showReportModalForUser: function() {
    return m
  },
  showUnauthenticatedReportModalForMessage: function() {
    return p
  },
  showUnauthenticatedReportModalForUser: function() {
    return N
  },
  submitHamReportForFirstDM: function() {
    return A
  },
  submitReportForInappropriateConversationSafetyAlert: function() {
    return O
  }
});
var i = n("367907"),
  r = n("427679"),
  a = n("23750"),
  s = n("598077"),
  o = n("91156"),
  l = n("545197"),
  u = n("82554"),
  d = n("185625"),
  _ = n("443599"),
  c = n("981631");

function E(e, t) {
  R(u.ReportNames.GUILD_DISCOVERY, {
    guild_id: e.id
  }), (0, _.showReportModal)({
    name: u.ReportNames.GUILD_DISCOVERY,
    record: e
  }, {}, t)
}

function I(e, t) {
  R(u.ReportNames.GUILD_DIRECTORY_ENTRY, {
    channel_id: e.channelId,
    guild_id: e.guildId
  }), (0, _.showReportModal)({
    name: u.ReportNames.GUILD_DIRECTORY_ENTRY,
    record: e
  }, {}, t)
}

function T(e, t, n) {
  let i;
  R(u.ReportNames.MESSAGE, {
    message_id: e.id,
    channel_id: e.channel_id
  });
  let r = (0, o.isIarMessageDislikeEnabled)(t),
    a = (0, l.isIarSpamReorderExperimentEnabled)(t);
  a && r ? i = "6a_spam_reorder_with_dislikes_experiment" : a ? i = "6b_spam_reorder_experiment" : r && (i = "5_dislike_experiment"), (0, _.showReportModal)({
    name: u.ReportNames.MESSAGE,
    record: e
  }, {
    variant: i
  }, n)
}

function f(e, t) {
  let n = r.default.getStageInstanceByChannel(e.id);
  null != n && (R(u.ReportNames.STAGE_CHANNEL, {
    stage_instance_id: n.id,
    channel_id: n.channel_id,
    guild_id: n.guild_id
  }), (0, _.showReportModal)({
    name: u.ReportNames.STAGE_CHANNEL,
    record: n
  }, {}, t))
}

function S(e, t) {
  var n;
  R(u.ReportNames.GUILD_SCHEDULED_EVENT, {
    guild_scheduled_event_id: e.id,
    guild_id: e.guild_id,
    channel_id: null !== (n = e.channel_id) && void 0 !== n ? n : void 0
  }), (0, _.showReportModal)({
    name: u.ReportNames.GUILD_SCHEDULED_EVENT,
    record: e
  }, {}, t)
}

function h(e, t) {
  R(u.ReportNames.FIRST_DM, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, _.showReportModal)({
    name: u.ReportNames.FIRST_DM,
    record: e
  }, {}, t, void 0, !1)
}
async function A(e, t) {
  try {
    await (0, d.submitHeadlessReport)({
      name: u.ReportNames.FIRST_DM,
      record: e
    }, {
      variant: "_first_dm_ham_v1"
    }), null == t || t()
  } catch {}
}

function m(e, t, n) {
  R(u.ReportNames.USER, {
    reported_user_id: e.id
  }), (0, _.showReportModal)({
    name: u.ReportNames.USER,
    record: e,
    contextualGuildId: t
  }, {}, n, void 0, !1)
}

function N(e, t) {
  let n = new s.default({});
  R(u.UnauthenticatedReportNames.USER, {
    reported_user_id: n.id
  }), (0, _.showReportModal)({
    name: u.UnauthenticatedReportNames.USER,
    record: n
  }, {}, t, void 0, !1, !1, e)
}

function p(e, t) {
  let n = new a.default({});
  R(u.UnauthenticatedReportNames.MESSAGE, {
    message_id: void 0,
    channel_id: void 0
  }), (0, _.showReportModal)({
    name: u.UnauthenticatedReportNames.MESSAGE,
    record: n
  }, {}, t, void 0, !1, !1, e)
}
async function O(e, t, n) {
  try {
    await (0, d.submitHeadlessReport)({
      name: u.ReportNames.MESSAGE,
      record: e
    }, {
      variant: "safety_alerts_headless_v1"
    }), null == t || t()
  } catch {
    null == n || n()
  }
}

function C(e, t) {
  R(u.ReportNames.MESSAGE, {
    message_id: e.id,
    channel_id: e.channel_id
  }), (0, _.showReportModal)({
    name: u.ReportNames.MESSAGE,
    record: e
  }, {
    variant: "safety_alerts_v1"
  }, t)
}

function R(e, t) {
  i.default.trackWithMetadata(c.AnalyticEvents.IAR_MODAL_OPEN, {
    report_type: e,
    ...t
  })
}