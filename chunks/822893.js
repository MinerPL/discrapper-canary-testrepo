"use strict";
n.d(t, {
  BW: function() {
    return I
  },
  Kp: function() {
    return S
  },
  Mf: function() {
    return f
  },
  Y_: function() {
    return h
  },
  dR: function() {
    return T
  },
  sE: function() {
    return m
  }
});
var i = n(544891),
  r = n(570140),
  s = n(933557),
  o = n(592125),
  a = n(430824),
  l = n(699516),
  u = n(594174),
  _ = n(626135),
  d = n(329461),
  c = n(831267),
  E = n(981631);

function I(e, t) {
  _.default.track(E.rMx.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "adding",
    rating: "".concat(d.Z.getMessageReminders().length)
  }), A([{
    messageId: e.id,
    channelId: e.channel_id,
    savedAt: new Date,
    dueAt: t,
    ... function(e) {
      let t = o.Z.getChannel(e.channel_id);
      if (null == t) return null;
      let n = a.Z.getGuild(t.guild_id),
        i = "",
        r = (0, s.F6)(t, u.default, l.Z, !0);
      if (t.isPrivate()) i = r;
      else if (t.isThread()) {
        let e = o.Z.getChannel(t.parent_id);
        if (null == e) return null;
        let n = (0, s.F6)(e, u.default, l.Z, !0);
        i = "".concat(n, " > ").concat(r)
      } else i = r;
      let _ = "".concat(e.content.length > 0 ? e.content : "".concat(e.attachments.length, " attachments"));
      return {
        authorSummary: e.author.username,
        authorId: e.author.id,
        channelSummary: i,
        messageSummary: _.length > 200 ? "".concat(_.slice(0, 197), "...") : _,
        guildId: null == n ? void 0 : n.id
      }
    }(e)
  }], [])
}

function T(e, t) {
  _.default.track(E.rMx.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "updating_due_at",
    rating: "".concat(d.Z.getMessageReminders().length)
  });
  let n = d.Z.getMessageReminders().find(t => t.messageId === e);
  if (null != n) A([{
    ...n,
    savedAt: new Date,
    dueAt: t
  }], [n])
}

function h(e, t) {
  _.default.track(E.rMx.GUILD_JOIN_FEEDBACK, {
    skipped: t,
    reason: "updating within the list",
    rating: "".concat(d.Z.getMessageReminders().length)
  }), r.Z.dispatch({
    type: "MESSAGE_REMINDER_TOGGLE",
    messageId: e,
    complete: t
  })
}

function S(e) {
  _.default.track(E.rMx.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "complete and clear immediately",
    rating: "".concat(d.Z.getMessageReminders().length)
  }), A([], d.Z.getMessageReminders().filter(t => t.messageId === e))
}

function f() {
  _.default.track(E.rMx.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "clearing",
    rating: "".concat(d.Z.getMessageReminders().length)
  });
  let e = d.Z.getMessageReminders();
  e.some(e => e.complete) && A([], e.filter(e => e.complete))
}

function N(e) {
  _.default.track(E.rMx.GUILD_JOIN_FEEDBACK, {
    skipped: !1,
    reason: "updated_from_server",
    rating: "".concat(d.Z.getMessageReminders().length)
  }), r.Z.dispatch({
    type: "SAVED_MESSAGES_UPDATE",
    messages: e
  })
}

function A(e, t) {
  (0 !== e.length || 0 !== t.length) && i.tn.post({
    url: E.ANM.SAVED_MESSAGES,
    body: {
      added: e.map(c.cu),
      removed: t.map(c.cu)
    }
  }).then(e => {
    N(e.body.saved_messages.map(c.lY))
  })
}

function m() {
  return d.Z.recentlyFetched() ? Promise.resolve() : i.tn.get({
    url: E.ANM.SAVED_MESSAGES
  }).then(e => {
    N(e.body.saved_messages.map(c.lY))
  })
}