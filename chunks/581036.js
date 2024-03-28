"use strict";
u.r(t), u("47120");
var n, l, r, a, i = u("512722"),
  o = u.n(i),
  d = u("442837"),
  s = u("570140"),
  f = u("344185"),
  c = u("592125"),
  m = u("306680");
let g = {},
  S = new Set;
class T extends(n = d.default.Store) {
  initialize() {
    this.waitFor(f.default, c.default, m.default)
  }
  getCount(e) {
    return g[e]
  }
  getThreadIdsMissingCounts(e, t) {
    return o()(f.default.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"), t.filter(e => !(e in g) && !S.has(e))
  }
}
a = "ForumPostUnreadCountStore", (r = "displayName") in(l = T) ? Object.defineProperty(l, r, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[r] = a, t.default = new T(s.default, {
  CONNECTION_OPEN: function() {
    g = {}, S = new Set
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t,
      isNewlyCreated: u
    } = e;
    if (!u || !f.default.hasLoaded(t.guild_id)) return !1;
    g[t.id] = 0
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      optimistic: u,
      isPushNotification: n
    } = e;
    if (u || n || !(t in g)) return !1;
    g[t]++
  },
  FORUM_UNREADS: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      null != e.count && (g[e.threadId] = e.count)
    })
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    if (!(t in g)) {
      let e = c.default.getChannel(t),
        u = c.default.getChannel(null == e ? void 0 : e.parent_id);
      if (!(null == u ? void 0 : u.isForumLikeChannel())) return !1
    }
    g[t] = m.default.getUnreadCount(t)
  },
  REQUEST_FORUM_UNREADS: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      let {
        threadId: t
      } = e;
      return S.add(t)
    })
  }
})