"use strict";
n.r(t), n.d(t, {
  configureJoin: function() {
    return A
  },
  copyId: function() {
    return _
  },
  copyLink: function() {
    return T
  },
  deleteMessage: function() {
    return C
  },
  editMessage: function() {
    return R
  },
  markMessageUnread: function() {
    return O
  },
  pinMessage: function() {
    return x
  },
  publishMessage: function() {
    return y
  },
  retrySendMessage: function() {
    return N
  },
  replyToMessage: function() {
    return b
  },
  createThread: function() {
    return j
  },
  goToThread: function() {
    return G
  },
  markMessageAsReminder: function() {
    return D
  },
  markMessageRemindersAsComplete: function() {
    return P
  }
}), n("37983"), n("884691"), n("77078");
var a = n("828986"),
  i = n("819689"),
  l = n("249561"),
  s = n("550762"),
  u = n("592407");
n("377114");
var r = n("931318"),
  d = n("529805"),
  o = n("967241"),
  c = n("271938"),
  f = n("42203"),
  E = n("599110"),
  m = n("404008"),
  M = n("306160"),
  g = n("659500"),
  p = n("299039"),
  S = n("613387"),
  I = n("456936"),
  v = n("409058"),
  h = n("49111");

function A(e) {
  let t = e.getGuildId();
  null != t && u.default.open(t, h.GuildSettingsSections.OVERVIEW)
}

function _(e, t, n) {
  (0, M.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
}

function T(e, t) {
  E.default.track(h.AnalyticEvents.MESSAGE_LINK_COPIED, {
    message_id: t.id,
    channel: t.channel_id
  }), (0, M.copy)((0, m.getChannelPermalink)(e.guild_id, e.id, t.id))
}

function C(e, t, n) {
  t.state === h.MessageStates.SEND_FAILED || n.shiftKey ? i.default.deleteMessage(e.id, t.id, t.state === h.MessageStates.SEND_FAILED) : l.default.confirmDelete(e, t)
}

function R(e, t) {
  i.default.startEditMessage(e.id, t.id, t.content)
}

function O(e, t) {
  (0, I.default)(e.id, t.id)
}

function x(e, t, n) {
  if (!1 === t.pinned) {
    n.shiftKey ? a.default.pinMessage(e, t.id) : l.default.confirmPin(e, t);
    return
  }
  n.shiftKey ? a.default.unpinMessage(e, t.id) : l.default.confirmUnpin(e, t)
}

function y(e, t) {
  (0, s.default)(e.id, t.id)
}

function N(e, t) {
  (0, v.default)(e, t, void 0, S.default.getOptions(t.id))
}

function b(e, t, n) {
  let a = e.isPrivate(),
    i = t.author.id === c.default.getId();
  (0, d.createPendingReply)({
    channel: e,
    message: t,
    shouldMention: !n.shiftKey && !i,
    showMentionToggle: !a && !i
  }), g.ComponentDispatch.dispatchToLastSubscribed(h.ComponentActions.TEXTAREA_FOCUS)
}

function j(e, t) {
  (0, o.openThreadSidebarForCreating)(e, t, "Message")
}

function G(e, t) {
  let n = f.default.getChannel(p.default.castMessageIdAsChannelId(t.id));
  null != n && (0, o.openThreadSidebarForViewing)(n)
}

function D(e, t) {
  (0, r.addMessageReminders)(t)
}

function P(e, t) {
  (0, r.completeMessageReminders)(t.id)
}