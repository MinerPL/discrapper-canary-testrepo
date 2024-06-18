"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(433517),
  u = n(570140),
  _ = n(706454),
  d = n(695346),
  c = n(581883),
  E = n(596401);
let I = {},
  T = {},
  h = null,
  S = null,
  f = null,
  N = "lastChangeLogDate",
  A = null,
  m = null,
  O = new Set;

function R() {
  A = d.l4.getSetting()
}
class C extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(_.default, c.Z), this.syncWith([_.default], () => !0), this.syncWith([c.Z], R);
    let e = l.K.get(N);
    if (null != e) try {
      m = new Date(e)
    } catch {
      l.K.remove(N)
    }
  }
  getChangelog(e, t) {
    var n, i;
    return null !== (i = null === (n = I[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : null
  }
  latestChangelogId() {
    return h
  }
  getChangelogLoadStatus(e, t) {
    var n, i;
    return null !== (i = null === (n = T[e]) || void 0 === n ? void 0 : n[t]) && void 0 !== i ? i : E.LU.NOT_LOADED
  }
  hasLoadedConfig() {
    return null != f
  }
  getConfig() {
    return f
  }
  overrideId() {
    return S
  }
  lastSeenChangelogId() {
    return A
  }
  lastSeenChangelogDate() {
    return m
  }
  getStateForDebugging() {
    return {
      changelogConfig: f,
      loadedChangelogs: T,
      lastSeenChangelogId: A,
      lastSeenChangelogDate: m
    }
  }
  isLocked() {
    return O.size > 0
  }
}
o = "ChangelogStore", (s = "displayName") in(r = C) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new C(u.Z, {
  CHANGE_LOG_LOCK: function(e) {
    let {
      key: t
    } = e;
    if (O.has(t)) return !1;
    (O = new Set(O)).add(t)
  },
  CHANGE_LOG_UNLOCK: function(e) {
    let {
      key: t
    } = e;
    if (!O.has(t)) return !1;
    (O = new Set(O)).delete(t)
  },
  CHANGE_LOG_SET_CONFIG: function(e) {
    let {
      config: t,
      latestChangelogId: n
    } = e;
    h = n, f = t
  },
  CHANGE_LOG_FETCH_SUCCESS: function(e) {
    let {
      id: t,
      changelog: n
    } = e;
    null == I[t] && (I[t] = {}), I[t][n.locale] = {
      id: t,
      date: n.date,
      body: n.content,
      revision: 1,
      locale: n.locale,
      [n.asset_type === E.h3.YOUTUBE_VIDEO_ID ? "youtube_video_id" : "image"]: n.asset
    }, null == T[t] && (T[t] = {}), T[t][n.locale] = E.LU.LOADED_SUCCESS
  },
  CHANGE_LOG_FETCH_FAILED: function(e) {
    let {
      id: t,
      locale: n
    } = e;
    if (null != I[t] && null != I[t][n]) return !1;
    null == T[t] && (T[t] = {}), T[t][n] = E.LU.LOADED_FAILURE
  },
  CHANGE_LOG_SET_OVERRIDE: function(e) {
    let {
      id: t
    } = e;
    S = t
  },
  CHANGE_LOG_MARK_SEEN: function(e) {
    let {
      changelogDate: t
    } = e;
    m = new Date(t), l.K.set(N, t)
  }
})