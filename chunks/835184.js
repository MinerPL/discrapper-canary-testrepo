var l, r = n(442837),
  i = n(570140),
  s = n(314897),
  u = n(924301),
  a = n(658041),
  d = n(765305);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let o = {},
  c = {};

function N(e) {
  let t = {
...o
  };
  delete t[e], o = t;
  let n = {
...c
  };
  delete n[e], c = n;
}
class _ extends(l = r.ZP.PersistedStore) {
  initialize(e) {
if (null != e) {
  var t, n;
  o = null !== (t = e.upcomingEventDismissals) && void 0 !== t ? t : {}, c = null !== (n = e.upcomingEventSeenTimestamps) && void 0 !== n ? n : {};
}
  }
  getGuildEventNoticeDismissalTime(e) {
return o[e];
  }
  getAllEventDismissals() {
return o;
  }
  getUpcomingNoticeSeenTime(e) {
return c[e];
  }
  getAllUpcomingNoticeSeenTimes() {
return c;
  }
  getState() {
return {
  upcomingEventDismissals: o,
  upcomingEventSeenTimestamps: c
};
  }
}
E(_, 'displayName', 'UpcomingEventNoticesStore'), E(_, 'persistKey', 'UpcomingEventNotices'), t.Z = new _(i.Z, {
  UPCOMING_GUILD_EVENT_NOTICE_HIDE: function(e) {
let {
  eventId: t
} = e, n = {
  ...o
};
n[t] = Date.now(), o = n;
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
let {
  guildScheduledEvent: t
} = e;
(t.status === d.p1.CANCELED || t.status === d.p1.COMPLETED) && N(t.id);
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
let {
  guildScheduledEvent: t
} = e;
N(t.id);
  },
  GUILD_SCHEDULED_EVENT_USER_ADD: function(e) {
let {
  userId: t,
  guildEventId: n
} = e;
if (t !== s.default.getId())
  return;
let l = u.ZP.getGuildScheduledEvent(n);
if (null == l || l.status !== d.p1.SCHEDULED || null != o[n])
  return;
let r = c[n];
if ((0, a.M)(l, void 0, r, !1) === d.X_.NEW_EVENT) {
  let e = {
    ...o
  };
  e[n] = Date.now(), o = e;
}
  },
  UPCOMING_GUILD_EVENT_NOTICE_SEEN: function(e) {
let {
  guildEventId: t
} = e, n = {
  ...c
};
n[t] = Date.now(), c = n;
  }
});