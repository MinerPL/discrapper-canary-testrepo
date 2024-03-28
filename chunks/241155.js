"use strict";
E.r(_), E("47120");
var a, T, n, s, t = E("392711"),
  d = E.n(t),
  l = E("442837"),
  L = E("570140"),
  M = E("924301"),
  I = E("601964"),
  A = E("486527");
let C = !1,
  i = {},
  U = {},
  G = {},
  p = e => (G[e.guild_scheduled_event.id] = new I.default(e.guild_scheduled_event.guild), U[e.guild_scheduled_event.id] = e.guild_scheduled_event, {
    channelId: e.directory_channel_id,
    scheduledEventId: e.entity_id,
    type: A.DirectoryEntryTypes.GUILD_SCHEDULED_EVENT,
    authorId: e.author_id,
    createdAt: e.created_at
  });
class O extends(a = l.default.Store) {
  isFetching() {
    return C
  }
  getEventDirectoryEntries(e) {
    if (null != e) return i[e]
  }
  getCachedGuildByEventId(e) {
    var _;
    return null !== (_ = G[e]) && void 0 !== _ ? _ : void 0
  }
  getCachedGuildScheduledEventById(e) {
    var _;
    return null !== (_ = U[e]) && void 0 !== _ ? _ : void 0
  }
}
s = "EventDirectoryStore", (n = "displayName") in(T = O) ? Object.defineProperty(T, n, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : T[n] = s, _.default = new O(L.default, {
  EVENT_DIRECTORY_FETCH_START: function() {
    C = !0
  },
  EVENT_DIRECTORY_FETCH_SUCCESS: function(e) {
    let {
      channelId: _,
      entries: E
    } = e;
    C = !1;
    let a = d().sortBy([...E], [function(e) {
        return (0, M.scheduledEventSort)(e.guild_scheduled_event)
      }]),
      T = d().map(a, p);
    i[_] = T
  },
  EVENT_DIRECTORY_FETCH_FAILURE: function() {
    C = !1
  }
})