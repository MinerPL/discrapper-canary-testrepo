"use strict";
n.r(t), n.d(t, {
  StaticGuildEventIndexes: function() {
    return c
  },
  scheduledEventSort: function() {
    return f
  },
  isGuildScheduledEventActive: function() {
    return O
  },
  isEventUpcoming: function() {
    return D
  },
  isGuildEventEnded: function() {
    return P
  },
  default: function() {
    return L
  }
}), n("424973"), n("222007");
var i = n("917351"),
  s = n.n(i),
  r = n("446674"),
  a = n("407846"),
  o = n("913144"),
  l = n("271938"),
  u = n("26989"),
  d = n("745049");
let c = {
  EVENT: "event",
  EVENT_ACTIVE: "active",
  EVENT_UPCOMING: "event-upcoming",
  GUILD_EVENT: e => "".concat(e, "-").concat(c.EVENT),
  GUILD_EVENT_ACTIVE: e => "".concat(e, "-").concat(c.EVENT_ACTIVE),
  GUILD_EVENT_UPCOMING: e => "".concat(e, "-").concat(c.EVENT_UPCOMING),
  CHANNEL_EVENT: e => "".concat(e, "-").concat(c.EVENT),
  CHANNEL_EVENT_ACTIVE: e => "".concat(e, "-").concat(c.EVENT_ACTIVE),
  CHANNEL_EVENT_UPCOMING: e => "".concat(e, "-").concat(c.EVENT_UPCOMING)
};

function f(e) {
  let {
    id: t,
    scheduled_start_time: n
  } = e, i = O(e) ? "\x00" : "\x01";
  return "".concat(i, "-").concat(new Date(n).getTime(), "-").concat(t)
}
let _ = new a.default(e => {
    let {
      guild_id: t,
      entity_id: n,
      channel_id: i
    } = e, s = [t];
    return null != n && s.push(n), s.push(c.GUILD_EVENT(t)), null != i && s.push(c.CHANNEL_EVENT(i)), O(e) && (s.push(c.EVENT_ACTIVE), s.push(c.GUILD_EVENT_ACTIVE(t)), null != i && s.push(c.CHANNEL_EVENT_ACTIVE(i))), D(e) && (s.push(c.EVENT_UPCOMING), s.push(c.GUILD_EVENT_UPCOMING(t)), null != i && s.push(c.CHANNEL_EVENT_UPCOMING(i))), s
  }, f),
  h = 0,
  g = [],
  m = "SERIES",
  E = {},
  p = {};

function v(e) {
  _.set(e.id, e), h += 1
}

function S(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  _.delete(e), delete E[e], t && delete p[e], h += 1
}

function T(e) {
  return null != e ? e : m
}

function I(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    i = e.guild_scheduled_event_id;
  null == E[i] && (E[i] = {});
  let s = T(e.guild_scheduled_event_exception_id);
  null == E[i][s] && (E[i][s] = {}), E[i][s][e.user_id] = e, t && function(e) {
    var t, n;
    let i = T(e.guild_scheduled_event_exception_id),
      s = null !== (n = null === (t = p[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : 0,
      r = null != e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.INTERESTED ? 1 : -1;
    A(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, s + r)
  }(e), n && (h += 1)
}

function C(e) {
  var t, n, i, s;
  let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    a = T(e.guild_scheduled_event_exception_id),
    o = (null === (n = E[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[a]) || void 0 === t ? void 0 : t[e.user_id]) != null,
    u = e.user_id === l.default.getId();
  (o || !u) && (null === (s = E[e.guild_scheduled_event_id]) || void 0 === s || null === (i = s[a]) || void 0 === i || delete i[e.user_id], function(e) {
    var t, n;
    let i = T(e.guild_scheduled_event_exception_id),
      s = null !== (n = null === (t = p[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : 0,
      r = null != e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.UNINTERESTED || null == e.guild_scheduled_event_exception_id && e.response === d.GuildScheduledEventUserResponses.INTERESTED ? -1 : 1;
    A(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, s + r)
  }(e), r && (h += 1))
}

function A(e, t, n) {
  let i = T(t);
  null == p[e] && (p[e] = {}), p[e][i] = n
}

function y(e, t) {
  _.values(c.GUILD_EVENT(e)).forEach(e => S(e.id, t))
}

function N(e) {
  let {
    guildScheduledEvent: t
  } = e;
  return v(t), !0
}

function R(e) {
  let {
    eventException: t
  } = e, n = _.get(t.event_id);
  if (null == n) return !1;
  let i = n.guild_scheduled_event_exceptions.findIndex(e => e.event_exception_id === t.event_exception_id),
    s = [...n.guild_scheduled_event_exceptions];
  return i < 0 ? s.push(t) : s[i] = t, v({
    ...n,
    guild_scheduled_event_exceptions: s
  }), !0
}

function O(e) {
  var t;
  return null != e && (t = (null == e ? void 0 : e.status) === d.GuildScheduledEventStatus.ACTIVE, t)
}

function D(e) {
  return !d.GuildScheduledEventStatusDone.has(e.status)
}

function P(e) {
  return null != e && d.GuildScheduledEventStatusDone.has(e.status)
}
class b extends r.default.Store {
  getGuildScheduledEvent(e) {
    var t;
    return null == e ? null : null !== (t = _.get(e)) && void 0 !== t ? t : null
  }
  getGuildEventCountByIndex(e) {
    return _.size(e)
  }
  getGuildScheduledEventsForGuild(e) {
    return null == e ? [] : _.values(e)
  }
  getGuildScheduledEventsByIndex(e) {
    return _.values(e)
  }
  getRsvpVersion() {
    return h
  }
  getRsvp(e, t, n) {
    var i, s;
    if (null == e) return null;
    let r = T(t);
    return null === (s = E[e]) || void 0 === s ? void 0 : null === (i = s[r]) || void 0 === i ? void 0 : i[n]
  }
  isInterestedInEventRecurrence(e, t) {
    let n = l.default.getId(),
      i = this.getRsvp(e, null, n),
      s = this.getRsvp(e, t, n),
      r = (null == i ? void 0 : i.response) === d.GuildScheduledEventUserResponses.INTERESTED,
      a = (null == s ? void 0 : s.response) === d.GuildScheduledEventUserResponses.INTERESTED,
      o = (null == s ? void 0 : s.response) === d.GuildScheduledEventUserResponses.UNINTERESTED;
    return r && !o || a
  }
  getUserCount(e, t) {
    var n, i, s, r;
    if (null == e) return 0;
    let a = null !== (s = null === (n = p[e]) || void 0 === n ? void 0 : n[m]) && void 0 !== s ? s : 0;
    if (null == t) return a;
    let o = null !== (r = null === (i = p[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== r ? r : 0;
    return a - o
  }
  hasUserCount(e, t) {
    var n;
    let i = T(t);
    return (null === (n = p[e]) || void 0 === n ? void 0 : n[i]) != null
  }
  isActive(e) {
    return null != e && O(_.get(e))
  }
  getActiveEventByChannel(e) {
    if (null == e) return;
    let t = this.getGuildScheduledEventsByIndex(c.CHANNEL_EVENT_ACTIVE(e));
    return t[0]
  }
  getUsersForGuildEvent(e, t) {
    var n, i;
    if (null == e) return {};
    let s = T(t);
    return null !== (i = null === (n = E[e]) || void 0 === n ? void 0 : n[s]) && void 0 !== i ? i : {}
  }
}
b.displayName = "GuildScheduledEventStore";
var L = new b(o.default, {
  CONNECTION_OPEN: function(e) {
    let {
      guilds: t
    } = e;
    return _.clear(), h = 0, E = {}, p = {}, g.forEach(v), t.forEach(e => e.guild_scheduled_events.forEach(e => v(e))), !0
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    return y(t.id, !1), t.guild_scheduled_events.forEach(e => v(e)), !0
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return y(t.id, !0), !0
  },
  FETCH_GUILD_EVENT: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    v(t)
  },
  FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
    let {
      guildId: t,
      guildScheduledEvents: n
    } = e, i = _.values(c.GUILD_EVENT(t), !0).map(e => e.id), r = n.map(e => e.id);
    for (let e of (s.difference(i, r).forEach(e => {
        S(e)
      }), n)) v(e);
    return !0
  },
  GUILD_SCHEDULED_EVENT_CREATE: N,
  GUILD_SCHEDULED_EVENT_UPDATE: N,
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    return S(t.id), !0
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    var t, n;
    let {
      userId: i,
      guildEventId: s,
      guildId: r,
      guildEventExceptionId: a,
      response: o
    } = e, l = T(a), d = null === (n = E[s]) || void 0 === n ? void 0 : null === (t = n[l]) || void 0 === t ? void 0 : t[i];
    null != d && C(d, !1);
    let c = u.default.getMember(r, i);
    return I({
      user_id: i,
      guild_scheduled_event_id: s,
      member: null != c ? c : {
        guildId: r
      },
      guild_scheduled_event_exception_id: a,
      response: o
    }), !0
  },
  GUILD_SCHEDULED_EVENT_USER_REMOVE: function(e) {
    let {
      userId: t,
      guildEventId: n,
      guildEventExceptionId: i,
      response: s
    } = e;
    C({
      user_id: t,
      guild_scheduled_event_id: n,
      guild_scheduled_event_exception_id: i,
      response: s
    })
  },
  GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: function(e) {
    let {
      guildScheduledEventUsers: t
    } = e;
    return t.forEach(e => I(e, !1, !1)), h += 1, !0
  },
  GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: function(e) {
    let {
      guildScheduledEventUsers: t
    } = e;
    return t.forEach(e => I(e, !1, !1)), h += 1, !0
  },
  GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: function(e) {
    let {
      eventId: t,
      counts: n
    } = e;
    for (let e in A(t, null, n.eventCount), n.recurrenceCounts) A(t, e, n.eventCount - n.recurrenceCounts[e])
  },
  INVITE_RESOLVE_SUCCESS: function(e) {
    let {
      invite: t
    } = e, n = t.guild_scheduled_event;
    return null != n && (v(n), !0)
  },
  GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: R,
  GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: R,
  GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: function(e) {
    let {
      eventException: t
    } = e, n = _.get(t.event_id);
    if (null == n) return !1;
    let i = n.guild_scheduled_event_exceptions.filter(e => e.event_exception_id !== t.event_exception_id);
    return v({
      ...n,
      guild_scheduled_event_exceptions: i
    }), !0
  },
  GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: function(e) {
    let {
      eventId: t
    } = e, n = _.get(t);
    return null != n && (v({
      ...n,
      guild_scheduled_event_exceptions: []
    }), !0)
  },
  LOGOUT: function() {
    return _.clear(), !0
  }
})