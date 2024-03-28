"use strict";
n.r(t);
var l, u = n("442837"),
  a = n("570140"),
  s = n("314897"),
  d = n("924301"),
  i = n("658041"),
  r = n("765305");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = {},
  E = {};

function f(e) {
  let t = {
    ...c
  };
  delete t[e], c = t;
  let n = {
    ...E
  };
  delete n[e], E = n
}
class _ extends(l = u.default.PersistedStore) {
  initialize(e) {
    if (null != e) {
      var t, n;
      c = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, E = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {}
    }
  }
  getGuildEventNoticeDismissalTime(e) {
    return c[e]
  }
  getAllEventDismissals() {
    return c
  }
  getUpcomingNoticeSeenTime(e) {
    return E[e]
  }
  getAllUpcomingNoticeSeenTimes() {
    return E
  }
  getState() {
    return {
      upcomingEventDismissals: c,
      upcomingEventSeenTimestamps: E
    }
  }
}
o(_, "displayName", "UpcomingEventNoticesStore"), o(_, "persistKey", "UpcomingEventNotices"), t.default = new _(a.default, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
    let {
      eventId: t
    } = e, n = {
      ...c
    };
    n[t] = Date.now(), c = n
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    (t.status === r.GuildScheduledEventStatus.CANCELED || t.status === r.GuildScheduledEventStatus.COMPLETED) && f(t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e;
    f(t.id)
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
    let {
      userId: t,
      guildEventId: n
    } = e;
    if (t !== s.default.getId()) return;
    let l = d.default.getGuildScheduledEvent(n);
    if (null == l || l.status !== r.GuildScheduledEventStatus.SCHEDULED || null != c[n]) return;
    let u = E[n];
    if ((0, i.getNextShownUpcomingEventNoticeType)(l, void 0, u, !1) === r.UpcomingGuildEventNoticeTypes.NEW_EVENT) {
      let e = {
        ...c
      };
      e[n] = Date.now(), c = e
    }
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
    let {
      guildEventId: t
    } = e, n = {
      ...E
    };
    n[t] = Date.now(), E = n
  }
})