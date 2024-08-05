var r = n(544891),
  i = n(570140),
  a = n(287734),
  s = n(703656),
  o = n(314897),
  l = n(709054),
  u = n(73346),
  c = n(924301),
  d = n(236373),
  _ = n(124165),
  E = n(765305),
  f = n(981631);
t.Z = {
  startEvent: (e, t) => r.tn.patch({
url: f.ANM.GUILD_EVENT(t, e),
body: {
  status: E.p1.ACTIVE
}
  }),
  endEvent: (e, t) => r.tn.patch({
url: f.ANM.GUILD_EVENT(t, e),
body: {
  status: E.p1.COMPLETED
}
  }),
  joinVoiceEvent(e, t) {
a.default.selectVoiceChannel(t), (0, s.uL)(f.Z5c.CHANNEL(e, t));
  },
  saveEvent(e, t, n, i) {
let a = E.pg.has(t.entityType) ? t.channelId : null,
  s = E._U.has(t.entityType) ? t.entityMetadata : null,
  o = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
  l = {
    name: t.name,
    description: t.description,
    image: o,
    privacy_level: t.privacyLevel,
    scheduled_start_time: t.scheduledStartTime,
    scheduled_end_time: t.scheduledEndTime,
    entity_type: t.entityType,
    channel_id: a,
    entity_metadata: s,
    broadcast_to_directory_channels: i.broadcastToDirectoryChannels,
    recurrence_rule: (0, d.J1)(t.recurrenceRule)
  };
return r.tn.patch({
  url: f.ANM.GUILD_EVENT(n, e),
  body: l
});
  },
  createGuildEvent(e, t, n) {
let i = {
  name: e.name,
  description: e.description,
  image: e.image,
  privacy_level: e.privacyLevel,
  scheduled_start_time: e.scheduledStartTime,
  scheduled_end_time: e.scheduledEndTime,
  entity_type: e.entityType,
  channel_id: e.channelId,
  entity_metadata: e.entityMetadata,
  broadcast_to_directory_channels: n.broadcastToDirectoryChannels,
  recurrence_rule: (0, d.J1)(e.recurrenceRule)
};
return r.tn.post({
  url: f.ANM.GUILD_EVENTS_FOR_GUILD(t),
  body: i
});
  },
  async fetchGuildEvent(e, t) {
let {
  body: n
} = await (0, u.Kb)(f.ANM.GUILD_EVENT(e, t));
return i.Z.dispatch({
  type: 'FETCH_GUILD_EVENT',
  guildScheduledEvent: n
}), n;
  },
  async fetchGuildEventsForGuild(e) {
let t = {
    url: f.ANM.GUILD_EVENTS_FOR_GUILD(e)
  },
  {
    body: n
  } = await (0, u.Kb)(t);
return i.Z.dispatch({
  type: 'FETCH_GUILD_EVENTS_FOR_GUILD',
  guildId: e,
  guildScheduledEvents: n
}), n;
  },
  async fetchGuildEventUserCounts(e, t, n) {
let a = {
    url: f.ANM.GUILD_EVENT_USER_COUNTS(e, t),
    query: {
      guild_scheduled_event_exception_ids: n
    }
  },
  {
    body: {
      guild_scheduled_event_count: s,
      guild_scheduled_event_exception_counts: o
    }
  } = await r.tn.get(a),
  l = {
    eventCount: s,
    recurrenceCounts: o
  };
return i.Z.dispatch({
  type: 'GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS',
  guildId: e,
  eventId: t,
  counts: l
}), l;
  },
  cancelGuildEvent: (e, t) => r.tn.patch({
url: f.ANM.GUILD_EVENT(t, e),
body: {
  status: E.p1.CANCELED
}
  }),
  deleteGuildEvent: (e, t) => r.tn.del({
url: f.ANM.GUILD_EVENT(t, e)
  }),
  async getGuildEventsForCurrentUser(e) {
let {
  body: t
} = await r.tn.get({
  url: f.ANM.USER_GUILD_EVENTS,
  query: {
    guild_ids: [e]
  }
});
i.Z.dispatch({
  type: 'GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS',
  guildScheduledEventUsers: t,
  guildId: e
});
  },
  async createRsvpForGuildEvent(e, t, n, a) {
let s = o.default.getId();
try {
  return i.Z.dispatch({
    type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
    userId: s,
    guildId: n,
    guildEventId: e,
    guildEventExceptionId: t,
    response: a
  }), await r.tn.put({
    url: f.ANM.USER_GUILD_EVENT(n, e, t),
    body: {
      response: a
    }
  });
} catch (r) {
  throw i.Z.dispatch({
    type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
    userId: s,
    guildId: n,
    guildEventId: e,
    guildEventExceptionId: t,
    response: a
  }), r;
}
  },
  async deleteRsvpForGuildEvent(e, t, n) {
let a = o.default.getId(),
  s = c.ZP.getRsvp(e, t, a);
if (null != s)
  try {
    return i.Z.dispatch({
      type: 'GUILD_SCHEDULED_EVENT_USER_REMOVE',
      userId: a,
      guildId: n,
      guildEventId: e,
      guildEventExceptionId: t,
      response: s.response
    }), await r.tn.del({
      url: f.ANM.USER_GUILD_EVENT(n, e, t)
    });
  } catch (r) {
    throw i.Z.dispatch({
      type: 'GUILD_SCHEDULED_EVENT_USER_ADD',
      userId: a,
      guildId: n,
      guildEventId: e,
      guildEventExceptionId: t,
      response: s.response
    }), r;
  }
  },
  async updateRsvp(e, t, n, r, i) {
if (null != (0, _.X2)(e, t))
  try {
    await this.deleteRsvpForGuildEvent(e, t, n), null == i || i();
  } catch (e) {
    null == i || i(e);
  }
else
  try {
    await this.createRsvpForGuildEvent(e, t, n, r), null == i || i();
  } catch (e) {
    null == i || i(e);
  }
  },
  async fetchUsersForGuildEvent(e, t, n) {
let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.rC;
if (null == e || null == n)
  return [];
let s = await r.tn.get({
  url: f.ANM.GUILD_EVENT_USERS(n, e, t),
  query: {
    limit: a,
    with_member: !0,
    upgrade_response_type: !0
  }
});
return i.Z.dispatch({
  type: 'GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS',
  guildEventId: e,
  guildScheduledEventUsers: s.body,
  guildId: n,
  guildEventExceptionId: t
}), s.body.users;
  },
  createGuildEventException(e, t, n) {
let {
  original_scheduled_start_time: i,
  scheduled_start_time: a,
  scheduled_end_time: s,
  is_canceled: o
} = e;
return r.tn.post({
  url: f.ANM.GUILD_EVENT_EXCEPTIONS(t, n),
  body: {
    original_scheduled_start_time: i,
    scheduled_start_time: a,
    scheduled_end_time: s,
    is_canceled: o
  }
});
  },
  updateGuildEventException(e, t, n, i) {
let {
  scheduled_start_time: a,
  scheduled_end_time: s,
  is_canceled: o
} = e;
return r.tn.patch({
  url: f.ANM.GUILD_EVENT_EXCEPTION(t, n, i),
  body: {
    scheduled_start_time: a,
    scheduled_end_time: s,
    is_canceled: o
  }
});
  },
  deleteGuildEventException: (e, t, n) => r.tn.del({
url: f.ANM.GUILD_EVENT_EXCEPTION(e, t, n)
  }),
  deleteRecurrence(e, t, n, r) {
if (null != r)
  this.updateGuildEventException({
    scheduled_start_time: r.scheduled_start_time,
    scheduled_end_time: r.scheduled_end_time,
    is_canceled: !0
  }, e, t, n);
else {
  let r = l.default.extractTimestamp(n);
  this.createGuildEventException({
    original_scheduled_start_time: new Date(r).toISOString(),
    is_canceled: !0
  }, e, t);
}
  }
};