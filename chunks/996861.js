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
  createThread: function() {
    return b
  },
  deleteMessage: function() {
    return C
  },
  editMessage: function() {
    return R
  },
  goToThread: function() {
    return P
  },
  markMessageAsReminder: function() {
    return G
  },
  markMessageRemindersAsComplete: function() {
    return D
  },
  markMessageUnread: function() {
    return y
  },
  pinMessage: function() {
    return O
  },
  publishMessage: function() {
    return x
  },
  replyToMessage: function() {
    return j
  },
  retrySendMessage: function() {
    return N
  }
}), n("735250"), n("470079"), n("481060");
var a = n("332148"),
  i = n("904245"),
  l = n("257559"),
  s = n("143740"),
  u = n("434404");
n("726521");
var r = n("822893"),
  o = n("623292"),
  d = n("488131"),
  c = n("314897"),
  f = n("592125"),
  E = n("626135"),
  M = n("934415"),
  m = n("572004"),
  g = n("585483"),
  S = n("709054"),
  v = n("111618"),
  p = n("50284"),
  I = n("730954"),
  h = n("981631");

function A(e) {
  let t = e.getGuildId();
  null != t && u.default.open(t, h.GuildSettingsSections.OVERVIEW)
}

function _(e, t, n) {
  (0, m.copy)(n.shiftKey ? "".concat(t.channel_id, "-").concat(t.id) : t.id)
}

function T(e, t) {
  E.default.track(h.AnalyticEvents.MESSAGE_LINK_COPIED, {
    message_id: t.id,
    channel: t.channel_id
  }), (0, m.copy)((0, M.getChannelPermalink)(e.guild_id, e.id, t.id))
}

function C(e, t, n) {
  t.state === h.MessageStates.SEND_FAILED || n.shiftKey ? i.default.deleteMessage(e.id, t.id, t.state === h.MessageStates.SEND_FAILED) : l.default.confirmDelete(e, t)
}

function R(e, t) {
  i.default.startEditMessage(e.id, t.id, t.content)
}

function y(e, t) {
  (0, p.default)(e.id, t.id)
}

function O(e, t, n) {
  if (!1 === t.pinned) {
    n.shiftKey ? a.default.pinMessage(e, t.id) : l.default.confirmPin(e, t);
    return
  }
  n.shiftKey ? a.default.unpinMessage(e, t.id) : l.default.confirmUnpin(e, t)
}

function x(e, t) {
  (0, s.default)(e.id, t.id)
}

function N(e, t) {
  (0, I.default)(e, t, void 0, v.default.getOptions(t.id))
}

function j(e, t, n) {
  let a = e.isPrivate(),
    i = t.author.id === c.default.getId();
  (0, o.createPendingReply)({
    channel: e,
    message: t,
    shouldMention: !n.shiftKey && !i,
    showMentionToggle: !a && !i
  }), g.ComponentDispatch.dispatchToLastSubscribed(h.ComponentActions.TEXTAREA_FOCUS)
}

function b(e, t) {
  (0, d.openThreadSidebarForCreating)(e, t, "Message")
}

function P(e, t) {
  let n = f.default.getChannel(S.default.castMessageIdAsChannelId(t.id));
  null != n && (0, d.openThreadSidebarForViewing)(n)
}

function G(e, t) {
  (0, r.addMessageReminders)(t)
}

function D(e, t) {
  (0, r.completeMessageReminders)(t.id)
}