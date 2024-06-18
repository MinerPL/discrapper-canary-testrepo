"use strict";
n.d(t, {
  CQ: function() {
    return S
  },
  Ld: function() {
    return b
  },
  Z2: function() {
    return G
  },
  bN: function() {
    return h
  },
  xt: function() {
    return U
  }
}), n(653041), n(47120);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(442837),
  _ = n(759174),
  d = n(570140),
  c = n(314897),
  E = n(271383),
  I = n(709054),
  T = n(765305);
let h = {
  EVENT: "event",
  EVENT_ACTIVE: "active",
  EVENT_UPCOMING: "event-upcoming",
  GUILD_EVENT: e => "".concat(e, "-").concat(h.EVENT),
  GUILD_EVENT_ACTIVE: e => "".concat(e, "-").concat(h.EVENT_ACTIVE),
  GUILD_EVENT_UPCOMING: e => "".concat(e, "-").concat(h.EVENT_UPCOMING),
  CHANNEL_EVENT: e => "".concat(e, "-").concat(h.EVENT),
  CHANNEL_EVENT_ACTIVE: e => "".concat(e, "-").concat(h.EVENT_ACTIVE),
  CHANNEL_EVENT_UPCOMING: e => "".concat(e, "-").concat(h.EVENT_UPCOMING)
};

function S(e) {
  let {
    id: t,
    scheduled_start_time: n
  } = e, i = U(e) ? "\0" : "\x01";
  return "".concat(i, "-").concat(new Date(n).getTime(), "-").concat(t)
}
let f = new _.h(e => {
    let {
      guild_id: t,
      entity_id: n,
      channel_id: i
    } = e, r = [t];
    return null != n && r.push(n), r.push(h.GUILD_EVENT(t)), null != i && r.push(h.CHANNEL_EVENT(i)), U(e) && (r.push(h.EVENT_ACTIVE), r.push(h.GUILD_EVENT_ACTIVE(t)), null != i && r.push(h.CHANNEL_EVENT_ACTIVE(i))), b(e) && (r.push(h.EVENT_UPCOMING), r.push(h.GUILD_EVENT_UPCOMING(t)), null != i && r.push(h.CHANNEL_EVENT_UPCOMING(i))), r
  }, S),
  N = 0,
  A = [],
  m = "SERIES",
  O = {},
  R = {};

function C(e) {
  f.set(e.id, e), N += 1
}

function p(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  f.delete(e), delete O[e], t && delete R[e], N += 1
}

function g(e) {
  return null != e ? e : m
}

function L(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = e.guild_scheduled_event_id;
  null == O[i] && (O[i] = {});
  let r = g(e.guild_scheduled_event_exception_id);
  null == O[i][r] && (O[i][r] = {}), O[i][r][e.user_id] = e, t && function(e) {
    var t, n;
    let i = g(e.guild_scheduled_event_exception_id),
      r = null !== (n = null === (t = R[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : 0,
      s = null != e.guild_scheduled_event_exception_id && e.response === T.gv.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === T.gv.INTERESTED ? 1 : -1;
    D(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, r + s)
  }(e), n && (N += 1)
}

function v(e) {
  var t, n, i, r;
  let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    o = g(e.guild_scheduled_event_exception_id),
    a = (null === (n = O[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[o]) || void 0 === t ? void 0 : t[e.user_id]) != null,
    l = e.user_id === c.default.getId();
  (a || !l) && (null === (r = O[e.guild_scheduled_event_id]) || void 0 === r || null === (i = r[o]) || void 0 === i || delete i[e.user_id], function(e) {
    var t, n;
    let i = g(e.guild_scheduled_event_exception_id),
      r = null !== (n = null === (t = R[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : 0,
      s = null != e.guild_scheduled_event_exception_id && e.response === T.gv.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === T.gv.INTERESTED ? -1 : 1;
    D(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, r + s)
  }(e), s && (N += 1))
}

function D(e, t, n) {
  let i = g(t);
  null == R[e] && (R[e] = {}), R[e][i] = n
}

function M(e, t) {
  f.values(h.GUILD_EVENT(e)).forEach(e => p(e.id, t))
}

function P(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return C(t), !0
}

function y(e) {
  let {
    eventException: t
  } = e, n = f.get(t.event_id);
  if (null == n) return !1;
  let i = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
    r = [...n.guild_scheduled_event_exceptions];
  return i < 0 ? r.push(t) : r[i] = t, C({
    ...n,
    guild_scheduled_event_exceptions: r
  }), !0
}

function U(e) {
  var t;
  return null != e && (t = (null == e ? void 0 : e.status) === T.p1.ACTIVE, t)
}

function b(e) {
  return !T.$I.has(e.status)
}

function G(e) {
  return null != e && T.$I.has(e.status)
}
class w extends(i = u.ZP.Store) {
  getGuildScheduledEvent(e) {
    var t;
    return null == e ? null : null !== (t = f.get(e)) && void 0 !== t ? t : null
  }
  getGuildEventCountByIndex(e) {
    return f.size(e)
  }
  getGuildScheduledEventsForGuild(e) {
    return null == e ? [] : f.values(e)
  }
  getGuildScheduledEventsByIndex(e) {
    return f.values(e)
  }
  getRsvpVersion() {
    return N
  }
  getRsvp(e, t, n) {
    var i, r;
    if (null == e) return null;
    let s = g(t);
    return null === (r = O[e]) || void 0 === r ? void 0 : null === (i = r[s]) || void 0 === i ? void 0 : i[n]
  }
  isInterestedInEventRecurrence(e, t) {
    let n = c.default.getId(),
      i = this.getRsvp(e, null, n),
      r = this.getRsvp(e, t, n),
      s = (null == i ? void 0 : i.response) === T.gv.INTERESTED,
      o = (null == r ? void 0 : r.response) === T.gv.INTERESTED,
      a = (null == r ? void 0 : r.response) === T.gv.UNINTERESTED;
    return s && !a || o
  }
  getUserCount(e, t) {
    var n, i, r, s;
    if (null == e) return 0;
    let o = null !== (r = null === (n = R[e]) || void 0 === n ? void 0 : n[m]) && void 0 !== r ? r : 0;
    return null == t ? o : o - (null !== (s = null === (i = R[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== s ? s : 0)
  }
  hasUserCount(e, t) {
    var n;
    let i = g(t);
    return (null === (n = R[e]) || void 0 === n ? void 0 : n[i]) != null
  }
  isActive(e) {
    return null != e && U(f.get(e))
  }
  getActiveEventByChannel(e) {
    if (null != e) return this.getGuildScheduledEventsByIndex(h.CHANNEL_EVENT_ACTIVE(e))[0]
  }
  getUsersForGuildEvent(e, t) {
    var n, i;
    if (null == e) return {};
    let r = g(t);
    return null !== (i = null === (n = O[e]) || void 0 === n ? void 0 : n[r]) && void 0 !== i ? i : {}
  }
}
o = "GuildScheduledEventStore", (s = "displayName") in(r = w) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.ZP = new w(d.Z, {
  CONNECTION_OPEN: function(e) {
    let {
      guilds: t
    } = e;
    return f.clear(), N = 0, O = {}, R = {}, A.forEach(C), t.forEach(e => e.guild_scheduled_events.forEach(e => C(e))), !0
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return M(t.id, !1), t.guild_scheduled_events.forEach(e => C(e)), !0
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return M(t.id, !0), !0
  },
  FETCH_GUILD_EVENT: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    C(t)
  },
  FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
    let {
      guildId: t,
      guildScheduledEvents: n
    } = e, i = f.values(h.GUILD_EVENT(t), !0).map(e => e.id), r = n.map(e => e.id);
    for (let e of (l().difference(i, r).forEach(e => {
        p(e)
      }), n)) C(e);
    return !0
  },
  GUILD_SCHEDULED_EVENT_CREATE: P,
  GUILD_SCHEDULED_EVENT_UPDATE: P,
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    return p(t.id), !0
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    var t, n;
    let {
      userId: i,
      guildEventId: r,
      guildId: s,
      guildEventExceptionId: o,
      response: a
    } = e, l = g(o), u = null === (n = O[r]) || void 0 === n ? void 0 : null === (t = n[l]) || void 0 === t ? void 0 : t[i];
    null != u && v(u, !1);
    let _ = E.ZP.getMember(s, i);
    return L({
      user_id: i,
      guild_scheduled_event_id: r,
      member: null != _ ? _ : void 0,
      guild_scheduled_event_exception_id: o,
      response: a
    }), !0
  },
  GUILD_SCHEDULED_EVENT_USER_REMOVE: function(e) {
    let {
      userId: t,
      guildEventId: n,
      guildEventExceptionId: i,
      response: r
    } = e;
    v({
      user_id: t,
      guild_scheduled_event_id: n,
      guild_scheduled_event_exception_id: i,
      response: r
    })
  },
  GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
    let {
      guildScheduledEventUsers: t
    } = e;
    return t.forEach(e => L(e, !1, !1)), N += 1, !0
  },
  GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
    let {
      guildScheduledEventUsers: t
    } = e;
    return t.forEach(e => L(e, !1, !1)), N += 1, !0
  },
  GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function(e) {
    let {
      eventId: t,
      counts: n
    } = e;
    D(t, null, n.eventCount), I.default.forEachKey(n.recurrenceCounts, e => {
      D(t, e, n.eventCount - n.recurrenceCounts[e])
    })
  },
  INVITE_RESOLVE_SUCCESS: function(e) {
    let {
      invite: t
    } = e, n = t.guild_scheduled_event;
    return null != n && (C(n), !0)
  },
  GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: y,
  GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: y,
  GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function(e) {
    let {
      eventException: t
    } = e, n = f.get(t.event_id);
    if (null == n) return !1;
    let i = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
    return C({
      ...n,
      guild_scheduled_event_exceptions: i
    }), !0
  },
  GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function(e) {
    let {
      eventId: t
    } = e, n = f.get(t);
    return null != n && (C({
      ...n,
      guild_scheduled_event_exceptions: []
    }), !0)
  },
  LOGOUT: function() {
    return f.clear(), !0
  }
})