"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var l = n("917351"),
  u = n.n(l),
  i = n("446674"),
  a = n("913144"),
  r = n("398604"),
  d = n("813006"),
  s = n("730647");
let o = !1,
  c = {},
  f = {},
  E = {},
  v = e => (E[e.guild_scheduled_event.id] = new d.default(e.guild_scheduled_event.guild), f[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
    channelId: e.directory_channel_id,
    scheduledEventId: e.entity_id,
    type: s.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
    authorId: e.author_id,
    createdAt: e.created_at
  });
class g extends i.default.Store {
  isFetching() {
    return o
  }
  getEventDirectoryEntries(e) {
    if (null != e) return c[e]
  }
  getCachedGuildByEventId(e) {
    var t;
    return null !== (t = E[e]) && void 0 !== t ? t : void 0
  }
  getCachedGuildScheduledEventById(e) {
    var t;
    return null !== (t = f[e]) && void 0 !== t ? t : void 0
  }
}
g.displayName = "EventDirectoryStore";
var S = new g(a.default, {
  EVENT_DIRECTORY_FETCH_START: function() {
    o = !0
  },
  EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
    let {
      channelId: t,
      entries: n
    } = e;
    o = !1;
    let l = u.sortBy([...n], [function(e) {
        return (0, r.scheduledEventSort)(e.guild_scheduled_event)
      }]),
      i = u.map(l, v);
    c[t] = i
  },
  EVENT_DIRECTORY_FETCH_FAILURE: function() {
    o = !1
  }
})