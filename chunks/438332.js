"use strict";
var i, r = n(913527),
  s = n.n(r),
  o = n(442837),
  a = n(570140),
  l = n(709054);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {
    lastSeenNewlyAddedEmojiIds: {}
  },
  d = _,
  c = {};

function E() {
  for (let e in c) d.lastSeenNewlyAddedEmojiIds[e] = c[e]
}
class I extends(i = o.ZP.PersistedStore) {
  initialize(e) {
    d = null != e ? e : _
  }
  getState() {
    return d
  }
  getLastSeenEmojiByGuild(e) {
    return d.lastSeenNewlyAddedEmojiIds[e]
  }
  isNewerThanLastSeen(e, t) {
    if (null == e || null == t) return !1;
    let n = this.getLastSeenEmojiByGuild(e);
    if (null == n) return !0;
    if (l.default.compare(t, n.id) > 0) return !0;
    {
      let e = s()(n.lastSeen);
      return s()().isBefore(e.add(2, "weeks")) && !n.acknowledged
    }
  }
}
u(I, "displayName", "NewlyAddedEmojiStore"), u(I, "persistKey", "NewlyAddedEmojiStore"), u(I, "migrations", [e => {
  let t = e.lastSeenNewlyAddedEmojiIds,
    n = {};
  for (let e in t) {
    let i = t[e];
    n[e] = {
      id: i,
      lastSeen: Date.now(),
      acknowledged: !1
    }
  }
  return {
    lastSeenNewlyAddedEmojiIds: n
  }
}]), t.Z = new I(a.Z, {
  LOGOUT: function() {
    d = _, c = {}
  },
  NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function(e) {
    var t;
    let {
      guildId: n,
      emojiId: i
    } = e, r = null !== (t = c[n]) && void 0 !== t ? t : d.lastSeenNewlyAddedEmojiIds[n];
    null == r || 0 > l.default.compare(r.id, i) ? c[n] = {
      id: i,
      lastSeen: Date.now(),
      acknowledged: !0
    } : c[n] = {
      ...r,
      acknowledged: !0
    }
  },
  NEWLY_ADDED_EMOJI_SEEN_PENDING: function(e) {
    var t;
    let {
      guildId: n,
      emojiId: i
    } = e, r = null !== (t = c[n]) && void 0 !== t ? t : d.lastSeenNewlyAddedEmojiIds[n];
    (null == r || 0 > l.default.compare(r.id, i)) && (c[n] = {
      id: i,
      lastSeen: Date.now(),
      acknowledged: !1
    })
  },
  NEWLY_ADDED_EMOJI_SEEN_UPDATED: E,
  CLEAR_CACHES: function() {
    d = _, E()
  },
  CONNECTION_CLOSED: E
})