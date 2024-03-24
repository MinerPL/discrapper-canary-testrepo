"use strict";
a.r(t), a.d(t, {
  addMessageReminders: function() {
    return f
  },
  updateReminderDueAt: function() {
    return E
  },
  toggleMessageReminders: function() {
    return h
  },
  completeMessageReminders: function() {
    return _
  },
  cleanupMessageReminders: function() {
    return S
  },
  fetchAndUpdateSavedMessages: function() {
    return v
  }
});
var n = a("872717"),
  s = a("913144"),
  r = a("679653"),
  u = a("42203"),
  l = a("305961"),
  d = a("27618"),
  i = a("697218"),
  c = a("599110"),
  o = a("520899"),
  m = a("988864"),
  g = a("49111");

function f(e, t) {
  c.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "adding",
    rating: "".concat(o.default.getMessageReminders().length)
  }), M([{
    messageId: e.id,
    channelId: e.channel_id,
    savedAt: new Date,
    dueAt: t,
    ... function(e) {
      let t = u.default.getChannel(e.channel_id);
      if (null == t) return null;
      let a = l.default.getGuild(t.guild_id),
        n = "",
        s = (0, r.computeChannelName)(t, i.default, d.default, !0);
      if (t.isPrivate()) n = s;
      else if (t.isThread()) {
        let e = u.default.getChannel(t.parent_id);
        if (null == e) return null;
        let a = (0, r.computeChannelName)(e, i.default, d.default, !0);
        n = "".concat(a, " > ").concat(s)
      } else n = s;
      let c = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
      return {
        authorSummary: e.author.username,
        authorId: e.author.id,
        channelSummary: n,
        messageSummary: c.length > 200 ? "".concat(c.slice(0, 197), "...") : c,
        guildId: null == a ? void 0 : a.id
      }
    }(e)
  }], [])
}

function E(e, t) {
  c.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "updating_due_at",
    rating: "".concat(o.default.getMessageReminders().length)
  });
  let a = o.default.getMessageReminders(),
    n = a.find(t => t.messageId === e);
  null != n && M([{
    ...n,
    savedAt: new Date,
    dueAt: t
  }], [n])
}

function h(e, t) {
  c.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: t,
    reason: "updating within the list",
    rating: "".concat(o.default.getMessageReminders().length)
  }), s.default.dispatch({
    type: "MESSAGE_REMINDER_TOGGLE",
    messageId: e,
    complete: t
  })
}

function _(e) {
  c.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "complete and clear immediately",
    rating: "".concat(o.default.getMessageReminders().length)
  });
  let t = o.default.getMessageReminders();
  M([], t.filter(t => t.messageId === e))
}

function S() {
  c.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "clearing",
    rating: "".concat(o.default.getMessageReminders().length)
  });
  let e = o.default.getMessageReminders();
  e.some(e => e.complete) && M([], e.filter(e => e.complete))
}

function I(e) {
  c.default.track(g.AnalyticEvents.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "updated_from_server",
    rating: "".concat(o.default.getMessageReminders().length)
  }), s.default.dispatch({
    type: "SAVED_MESSAGES_UPDATE",
    messages: e
  })
}

function M(e, t) {
  (0 !== e.length || 0 !== t.length) && n.HTTP.post({
    url: g.Endpoints.SAVED_MESSAGES,
    body: {
      added: e.map(m.savedMessageToServer),
      removed: t.map(m.savedMessageToServer)
    }
  }).then(e => {
    I(e.body.saved_messages.map(m.savedMessageToClient))
  })
}

function v() {
  return o.default.recentlyFetched() ? Promise.resolve() : n.HTTP.get({
    url: g.Endpoints.SAVED_MESSAGES
  }).then(e => {
    let t = e.body.saved_messages,
      a = t.map(m.savedMessageToClient);
    I(a)
  })
}