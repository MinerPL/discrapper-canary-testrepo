"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  },
  useActiveEvent: function() {
    return M
  },
  useActiveEventsByChannel: function() {
    return h
  },
  useFirstActiveEventChannel: function() {
    return O
  },
  useGuildActiveEvent: function() {
    return D
  },
  useGuildChannelScheduledEvents: function() {
    return R
  },
  useGuildUpcomingEventsNotice: function() {
    return p
  },
  useImminentUpcomingGuildEvents: function() {
    return C
  }
}), n("47120"), n("724458");
var l = n("470079"),
  u = n("442837"),
  a = n("241155"),
  s = n("592125"),
  d = n("984933"),
  i = n("430824"),
  r = n("496675"),
  o = n("70956"),
  c = n("823379"),
  E = n("924301"),
  f = n("658041"),
  _ = n("835184"),
  T = n("79874"),
  S = n("854698"),
  N = n("765305"),
  v = n("981631");
let I = [],
  g = 15 * o.default.Millis.MINUTE;

function m(e, t) {
  return (0, u.useStateFromStoresArray)([i.default, a.default, E.default, r.default, s.default, d.default], () => {
    let n = i.default.getGuild(e);
    if (null == n) return I;
    if (n.hasFeature(v.GuildFeatures.HUB)) {
      var l, u;
      let e = null === (l = d.default.getDefaultChannel(n.id)) || void 0 === l ? void 0 : l.id;
      return (null !== (u = a.default.getEventDirectoryEntries(e)) && void 0 !== u ? u : []).map(e => {
        let t = e.scheduledEventId,
          n = E.default.getGuildScheduledEvent(t);
        return null != n ? n : a.default.getCachedGuildScheduledEventById(t)
      }).filter(c.isNotNullish)
    }
    return E.default.getGuildScheduledEventsByIndex(null != t ? t : E.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(n.id)).filter(e => {
      let t = e.channel_id;
      if (null == t) return !0;
      let n = s.default.getChannel(t);
      return r.default.can(v.Permissions.VIEW_CHANNEL, n)
    })
  }, [t, e])
}

function M(e) {
  return (0, u.useStateFromStores)([E.default, s.default, r.default], () => {
    let t = s.default.getChannel(e);
    if (!r.default.can(v.Permissions.VIEW_CHANNEL, t) || null == (null == t ? void 0 : t.guild_id)) return null;
    let n = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_ACTIVE(e));
    return n.length > 0 ? n[0] : null
  }, [e])
}

function h(e) {
  let t = (0, u.useStateFromStoresArray)([E.default], () => E.default.getGuildScheduledEventsForGuild(e), [e]);
  return l.useMemo(() => {
    let e = new Map;
    return t.forEach(t => {
      let n = t.channel_id;
      null != n && e.set(n, t)
    }), e
  }, [t])
}

function p(e) {
  var t, n;
  let l = (t = e, (0, u.useStateFromStoresArray)([E.default, s.default, r.default], () => E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_UPCOMING(t)).filter(e => {
      if (e.entity_type === N.GuildScheduledEventEntityTypes.NONE || e.status !== N.GuildScheduledEventStatus.SCHEDULED) return !1;
      if (null == e.channel_id) return !0;
      let t = s.default.getChannel(e.channel_id);
      return r.default.can(v.Permissions.VIEW_CHANNEL, t)
    }), [t])),
    a = (0, u.useStateFromStoresObject)([_.default], () => _.default.getAllEventDismissals()),
    d = (0, u.useStateFromStoresObject)([_.default], () => _.default.getAllUpcomingNoticeSeenTimes()),
    i = (0, u.useStateFromStoresObject)([E.default], () => null == l ? {} : l.reduce((e, t) => {
      let n = (0, S.getNextRecurrenceIdInEvent)(t);
      return {
        ...e,
        [t.id]: E.default.isInterestedInEventRecurrence(t.id, n)
      }
    }, {}), [l]);
  if (null != l && null != i)
    for (let e = 0; e < l.length; e++) {
      ;
      let t = l[e],
        u = a[t.id],
        s = d[t.id],
        r = null !== (n = i[t.id]) && void 0 !== n && n,
        o = (0, f.getNextShownUpcomingEventNoticeType)(t, u, s, r);
      if (null != o) return {
        upcomingEvent: t,
        noticeType: o
      }
    }
}

function D(e) {
  return (0, u.useStateFromStores)([E.default, s.default, r.default], () => E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => {
    if (e.entity_type === N.GuildScheduledEventEntityTypes.NONE || !(0, E.isGuildScheduledEventActive)(e)) return !1;
    if (null == e.channel_id) return !0;
    let t = s.default.getChannel(e.channel_id);
    return r.default.can(v.Permissions.VIEW_CHANNEL, t)
  }), [e])
}

function R(e) {
  return (0, u.useStateFromStores)([E.default], () => E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e])
}

function O(e) {
  return (0, u.useStateFromStores)([s.default, E.default], () => {
    let t = E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.GUILD_EVENT_ACTIVE(e)).find(e => null != s.default.getChannel(e.channel_id));
    return s.default.getChannel(null == t ? void 0 : t.channel_id)
  }, [e])
}

function C(e) {
  let [t, n] = l.useState(() => Date.now());
  l.useEffect(() => {
    let e = setInterval(() => {
      n(Date.now())
    }, g);
    return () => clearInterval(e)
  }, []);
  let a = (0, u.useStateFromStores)([E.default], () => null == e ? [] : E.default.getGuildScheduledEventsByIndex(E.StaticGuildEventIndexes.CHANNEL_EVENT_UPCOMING(e)), [e, t]);
  return l.useMemo(() => a.filter(e => {
    let {
      startTime: t,
      endTime: n
    } = (0, T.getEventSchedule)(e), {
      withinStartWindow: l,
      diffMinutes: u
    } = (0, S.getEventTimeData)(t.toISOString(), null == n ? void 0 : n.toISOString());
    return e.status !== N.GuildScheduledEventStatus.ACTIVE && l && u < 15
  }), [a])
}