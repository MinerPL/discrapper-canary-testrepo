"use strict";
var i = n(544891),
  r = n(570140),
  s = n(287734),
  o = n(703656),
  a = n(314897),
  l = n(709054),
  u = n(73346),
  _ = n(924301),
  d = n(236373),
  c = n(124165),
  E = n(765305),
  I = n(981631);
t.Z = {
  startEvent: (e, t) => i.tn.patch({
    url: I.ANM.GUILD_EVENT(t, e),
    body: {
      status: E.p1.ACTIVE
    }
  }),
  endEvent: (e, t) => i.tn.patch({
    url: I.ANM.GUILD_EVENT(t, e),
    body: {
      status: E.p1.COMPLETED
    }
  }),
  joinVoiceEvent(e, t) {
    s.default.selectVoiceChannel(t), (0, o.uL)(I.Z5c.CHANNEL(e, t))
  },
  saveEvent(e, t, n, r) {
    let s = E.pg.has(t.entityType) ? t.channelId : null,
      o = E._U.has(t.entityType) ? t.entityMetadata : null,
      a = null != t.image && !1 === /^data:/.test(t.image) ? void 0 : t.image,
      l = {
        name: t.name,
        description: t.description,
        image: a,
        privacy_level: t.privacyLevel,
        scheduled_start_time: t.scheduledStartTime,
        scheduled_end_time: t.scheduledEndTime,
        entity_type: t.entityType,
        channel_id: s,
        entity_metadata: o,
        broadcast_to_directory_channels: r.broadcastToDirectoryChannels,
        recurrence_rule: (0, d.J1)(t.recurrenceRule)
      };
    return i.tn.patch({
      url: I.ANM.GUILD_EVENT(n, e),
      body: l
    })
  },
  createGuildEvent(e, t, n) {
    let r = {
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
    return i.tn.post({
      url: I.ANM.GUILD_EVENTS_FOR_GUILD(t),
      body: r
    })
  },
  async fetchGuildEvent(e, t) {
    let {
      body: n
    } = await (0, u.Kb)(I.ANM.GUILD_EVENT(e, t));
    return r.Z.dispatch({
      type: "FETCH_GUILD_EVENT",
      guildScheduledEvent: n
    }), n
  },
  async fetchGuildEventsForGuild(e) {
    let t = {
        url: I.ANM.GUILD_EVENTS_FOR_GUILD(e)
      },
      {
        body: n
      } = await (0, u.Kb)(t);
    return r.Z.dispatch({
      type: "FETCH_GUILD_EVENTS_FOR_GUILD",
      guildId: e,
      guildScheduledEvents: n
    }), n
  },
  async fetchGuildEventUserCounts(e, t, n) {
    let s = {
        url: I.ANM.GUILD_EVENT_USER_COUNTS(e, t),
        query: {
          guild_scheduled_event_exception_ids: n
        }
      },
      {
        body: {
          guild_scheduled_event_count: o,
          guild_scheduled_event_exception_counts: a
        }
      } = await i.tn.get(s),
      l = {
        eventCount: o,
        recurrenceCounts: a
      };
    return r.Z.dispatch({
      type: "GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS",
      guildId: e,
      eventId: t,
      counts: l
    }), l
  },
  cancelGuildEvent: (e, t) => i.tn.patch({
    url: I.ANM.GUILD_EVENT(t, e),
    body: {
      status: E.p1.CANCELED
    }
  }),
  deleteGuildEvent: (e, t) => i.tn.del({
    url: I.ANM.GUILD_EVENT(t, e)
  }),
  async getGuildEventsForCurrentUser(e) {
    let {
      body: t
    } = await i.tn.get({
      url: I.ANM.USER_GUILD_EVENTS,
      query: {
        guild_ids: [e]
      }
    });
    r.Z.dispatch({
      type: "GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS",
      guildScheduledEventUsers: t,
      guildId: e
    })
  },
  async createRsvpForGuildEvent(e, t, n, s) {
    let o = a.default.getId();
    try {
      return r.Z.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
        userId: o,
        guildId: n,
        guildEventId: e,
        guildEventExceptionId: t,
        response: s
      }), await i.tn.put({
        url: I.ANM.USER_GUILD_EVENT(n, e, t),
        body: {
          response: s
        }
      })
    } catch (i) {
      throw r.Z.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
        userId: o,
        guildId: n,
        guildEventId: e,
        guildEventExceptionId: t,
        response: s
      }), i
    }
  },
  async deleteRsvpForGuildEvent(e, t, n) {
    let s = a.default.getId(),
      o = _.ZP.getRsvp(e, t, s);
    if (null != o) try {
      return r.Z.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
        userId: s,
        guildId: n,
        guildEventId: e,
        guildEventExceptionId: t,
        response: o.response
      }), await i.tn.del({
        url: I.ANM.USER_GUILD_EVENT(n, e, t)
      })
    } catch (i) {
      throw r.Z.dispatch({
        type: "GUILD_SCHEDULED_EVENT_USER_ADD",
        userId: s,
        guildId: n,
        guildEventId: e,
        guildEventExceptionId: t,
        response: o.response
      }), i
    }
  },
  async updateRsvp(e, t, n, i, r) {
    if (null != (0, c.X2)(e, t)) try {
      await this.deleteRsvpForGuildEvent(e, t, n), null == r || r()
    } catch (e) {
      null == r || r(e)
    } else try {
      await this.createRsvpForGuildEvent(e, t, n, i), null == r || r()
    } catch (e) {
      null == r || r(e)
    }
  },
  async fetchUsersForGuildEvent(e, t, n) {
    let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : E.rC;
    if (null == e || null == n) return [];
    let o = await i.tn.get({
      url: I.ANM.GUILD_EVENT_USERS(n, e, t),
      query: {
        limit: s,
        with_member: !0,
        upgrade_response_type: !0
      }
    });
    return r.Z.dispatch({
      type: "GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS",
      guildEventId: e,
      guildScheduledEventUsers: o.body,
      guildId: n,
      guildEventExceptionId: t
    }), o.body.users
  },
  createGuildEventException(e, t, n) {
    let {
      original_scheduled_start_time: r,
      scheduled_start_time: s,
      scheduled_end_time: o,
      is_canceled: a
    } = e;
    return i.tn.post({
      url: I.ANM.GUILD_EVENT_EXCEPTIONS(t, n),
      body: {
        original_scheduled_start_time: r,
        scheduled_start_time: s,
        scheduled_end_time: o,
        is_canceled: a
      }
    })
  },
  updateGuildEventException(e, t, n, r) {
    let {
      scheduled_start_time: s,
      scheduled_end_time: o,
      is_canceled: a
    } = e;
    return i.tn.patch({
      url: I.ANM.GUILD_EVENT_EXCEPTION(t, n, r),
      body: {
        scheduled_start_time: s,
        scheduled_end_time: o,
        is_canceled: a
      }
    })
  },
  deleteGuildEventException: (e, t, n) => i.tn.del({
    url: I.ANM.GUILD_EVENT_EXCEPTION(e, t, n)
  }),
  deleteRecurrence(e, t, n, i) {
    if (null != i) this.updateGuildEventException({
      scheduled_start_time: i.scheduled_start_time,
      scheduled_end_time: i.scheduled_end_time,
      is_canceled: !0
    }, e, t, n);
    else {
      let i = l.default.extractTimestamp(n);
      this.createGuildEventException({
        original_scheduled_start_time: new Date(i).toISOString(),
        is_canceled: !0
      }, e, t)
    }
  }
}