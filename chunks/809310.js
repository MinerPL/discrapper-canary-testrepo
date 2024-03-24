"use strict";
n.r(t), n.d(t, {
  ENABLE_CACHE_STORE: function() {
    return y
  }
}), n("222007"), n("808653");
var a = n("102053");
n("576863");
var s = n("316693"),
  l = n("446674"),
  i = n("95410"),
  r = n("913144"),
  o = n("595525"),
  u = n("759370"),
  d = n("29328"),
  c = n("849365"),
  f = n("219788"),
  E = n("11275"),
  h = n("131552"),
  _ = n("994746"),
  C = n("353026"),
  S = n("860255"),
  I = n("723939"),
  m = n("605250"),
  p = n("619443"),
  T = n("410912"),
  g = n("271938"),
  A = n("18494"),
  N = n("162771"),
  R = n("831588"),
  O = n("969388"),
  v = n("1544"),
  L = n("619317"),
  M = n("49111");
let P = new m.default("CacheStore"),
  y = !1,
  D = !1,
  x = "initializing",
  b = 0,
  U = !1,
  G = !1,
  j = !1;

function w(e) {
  P.log("Clearing cache store"), b = Date.now(), i.default.remove(M.CACHE_STORE_KEY), i.default.remove(M.CACHE_STORE_LAZY_KEY), i.default.remove(M.CACHE_STORE_CHANNELS_LAZY_KEY), x = "no-cache", "CLEAR_CACHES" === e.type && e.preventWritingCachesAgainThisSession && (D = !0)
}
async function k(e, t, n) {
  let a = performance.now();
  if (null == e || null == n) return P.verbose("skipped loaded messages (channel: ".concat(n, ", database: ").concat(e, ").")), [performance.now() - a, {
    guildId: null,
    channelId: null,
    users: [],
    members: [],
    messages: []
  }];
  {
    let s = await f.default.startupLoad(e, t, n, M.MAX_MESSAGES_PER_CHANNEL);
    P.verbose("loaded ".concat(s.messages.length, " messages (guild: ").concat(t, ", channel: ").concat(n, ")."));
    let l = {
      guildId: t,
      channelId: n,
      users: s.users,
      members: s.members,
      messages: s.messages
    };
    return [performance.now() - a, l]
  }
}
async function F(e, t, n) {
  var s, i, o;
  P.verbose("loading early cache");
  let u = p.default.getSocket();
  u.connect();
  let d = null !== (s = N.default.getGuildId()) && void 0 !== s ? s : null,
    c = null !== (i = A.default.getChannelId()) && void 0 !== i ? i : null,
    f = performance.now(),
    E = T.default.loadCachedMessages.measureAsyncWithoutNesting(() => k(e, d, c)),
    I = T.default.fetchGuildCache.measureAsync(() => H(e, n)),
    m = T.default.fetchGuildCache.measureAsync(() => V(e, n)),
    g = null != e ? a.default.timeAsync("\uD83D\uDCBE", "cache: private_channels", () => S.default.getAsync(e, null)) : Promise.resolve([]),
    R = null == e ? Promise.resolve({}) : a.default.timeAsync("\uD83D\uDCBE", "cache: user_settings", () => C.default.getAll(e)),
    O = null == e ? Promise.resolve([]) : a.default.timeAsync("\uD83D\uDCBE", "cache: read_states", () => h.default.getAll(e)),
    v = null == e ? Promise.resolve([]) : a.default.timeAsync("\uD83D\uDCBE", "cache: user_guild_settings", () => _.default.getAll(e)),
    [
      [M, y], D, x, b, U, G, j
    ] = await Promise.all([E, I, m, g, R, O, v]),
    w = performance.now() - f;
  if (P.verbose("cache loaded in ".concat(w, "ms (channel_history ").concat(M, "ms)")), null == y) return (0, L.default)("database:history_cache_null"), P.verbose("finished without dispatching CACHE_LOADED"), [!1, null, 0];
  {
    let s = Object.fromEntries(y.members.map(e => [e.userId, e])),
      i = null != x.guildId && null != x.channels,
      f = x.guildId;
    return l.default.Emitter.batched(() => {
      a.default.time("\uD83D\uDCBE", "Dispatch Mini Cache", () => {
        var e;
        return r.default.dispatch({
          type: "CACHE_LOADED",
          guilds: D,
          privateChannels: b,
          initialGuildChannels: null !== (e = x.channels) && void 0 !== e ? e : [],
          users: [...y.users],
          messages: null == y.channelId ? {} : {
            [y.channelId]: y.messages
          },
          guildMembers: null == y.guildId ? {} : {
            [y.guildId]: s
          },
          userSettings: U,
          userGuildSettings: j,
          readStates: G
        })
      }), a.default.time("\uD83D\uDCBE", "socket.processFirstQueuedDispatch()", () => u.dispatcher.processFirstQueuedDispatch(new Set(["INITIAL_GUILD"])))
    }), P.verbose("early_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          selected_guild: ").concat(d, "\n          selected_channel: ").concat(c, "\n          navigation_state: ").concat(JSON.stringify(n), "\n          database: ").concat(null != e, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            private_channels: ").concat(b.length, "\n            channel_history:\n              guild: ").concat(y.guildId, "\n              channel: ").concat(y.channelId, "\n              messages: ").concat(y.messages.length, "\n                members: ").concat(y.members.length, "\n                users: ").concat(y.users.length, "\n            initial_guild:\n              id: ").concat(f, "\n              channels: ").concat(null === (o = x.channels) || void 0 === o ? void 0 : o.length, "\n            user_settings: ").concat(Object.keys(U).length, "\n            read_states: ").concat(G.length, "\n            user_guild_settings: ").concat(j.length, "\n      )")), P.verbose("finished dispatching CACHE_LOADED"), [!0, i && null != f ? f : null, b.length]
  }
}
let B = !1;
async function H(e, t) {
  var n, s;
  if (null == e) return [];
  switch (t.page) {
    case "private-channels":
    case "guild-channels":
      B = !0;
      break;
    case "other":
      "@me" === t.guildId && (B = !0)
  }
  if (B) return null !== (n = await (0, o.tryLoadAsync)(() => a.default.timeAsync("\uD83D\uDCBE", "cache: guilds", () => d.default.getAsync(e)))) && void 0 !== n ? n : [];
  let l = await E.default.getCommittedVersions(),
    i = null !== (s = l.initial_guild_id) && void 0 !== s ? s : t.guildId;
  if (null == i || "@me" === i) return [];
  let r = await (0, o.tryLoadAsync)(() => d.default.getOneAsync(e, i));
  return null != r ? [r] : []
}
async function V(e, t) {
  if (null == e) return Promise.resolve({
    channels: null,
    guildId: null
  });
  let n = await E.default.getCommittedVersions(),
    a = n.initial_guild_id;
  if (null == a && "guild-channels" === t.page && (a = t.guildId), null == e || null == a) return P.verbose("skipped loading initial guild (guild: ".concat(a, ", database: ").concat(e, ")")), Promise.resolve({
    channels: null,
    guildId: null
  });
  let s = a,
    l = await (0, o.tryLoadAsync)(() => S.default.getAsync(e, s));
  return {
    channels: l,
    guildId: a
  }
}
async function Y(e, t, n, l) {
  P.verbose("loading late lazy cache");
  let [i, f, E] = await T.default.fetchLazyCache.measureAsync(() => Promise.all([(0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "cache: cache_version", () => c.default.okAsync(e)) : Promise.resolve(!0)), (0, o.tryLoadAsync)(() => null == e || B ? Promise.resolve([]) : a.default.timeAsync("\uD83D\uDCBE", "cache: lazy guilds", () => d.default.getAsync(e))), (0, o.tryLoadAsync)(() => null != e ? a.default.timeAsync("\uD83D\uDCBE", "cache: basic_channels", () => u.default.getAsync(e)) : Promise.resolve({
    all: [],
    stale: [],
    channels: []
  }))])), h = await T.default.fetchStaleChannels.measureAsync(() => null != e && null != E && E.stale.length > 0 ? (0, o.tryLoadAsync)(() => {
    var t, n;
    return t = e, n = E.stale, P.verbose("loading stale guild channels (count: ".concat(n.length, ", ids: ").concat(n.join(", "), ")")), Promise.all(n.map(e => S.default.getAsync(t, e).then(t => [e, t])))
  }) : Promise.resolve([]));
  await new Promise(e => setTimeout(e, 0)), T.default.loadLazyCache.recordStart();
  let _ = p.default.getSocket();
  W(() => {
    let a = performance.now();
    if (!1 === i) {
      (0, L.default)("database:not_ok"), r.default.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:not_ok"
      }), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == f || null == E || null == h) {
      (0, L.default)("database:load_failed"), P.log("couldn't load database item (\n          database: ".concat(null != e, "\n          basic_channels: ").concat(null != E, "\n          guild_channels: ").concat(null != h, "\n          guilds: ").concat(null != f, "\n        )")), r.default.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:load_failed"
      }), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (null == i && (f.length > 0 || E.all.length > 0)) {
      (0, L.default)("database:versionless"), P.log("kv_cache was not ok (null version with values)"), r.default.dispatch({
        type: "CLEAR_CACHES",
        reason: "database:versionless"
      }), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    if (G) {
      (0, L.default)("already_connected"), P.log("Skipping lazy cache; already connected."), r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      });
      return
    }
    _.addAnalytics({
      hadCacheAtStartup: !0
    });
    let o = {
      type: "CACHE_LOADED_LAZY",
      guilds: f,
      guildChannels: h,
      basicGuildChannels: E.channels,
      initialGuildId: n
    };
    T.default.deserializeCache.measure(() => (function(e) {
      if (null != e.guilds) {
        for (let {
            roles: t
          }
          of e.guilds)
          if (null != t)
            for (let e in t) {
              let n = t[e];
              n.permissions = s.deserialize(n.permissions)
            }
      }
      null != e.channels && (0, v.default)(e.channels), null != e.privateChannels && (0, v.default)(e.privateChannels), null != e.guildChannels && (0, v.deserializeChannelEntries)(e.guildChannels)
    })(o)), T.default.dispatchLazyCache.measure(() => r.default.dispatch(o)), P.verbose("late lazy cache loaded (ok: true, took: ".concat(performance.now() - a, "ms)")), _.addAnalytics({
      usedCacheAtStartup: !0
    });
    let u = h.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      d = h.length,
      c = E.all.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      C = E.channels.reduce((e, t) => {
        let [n, a] = t;
        return e + a.length
      }, 0),
      S = c - C,
      I = 0 === E.stale.length ? "" : " \xb7 ".concat(E.stale.join(", "));
    P.verbose("lazy_cache_summary: (\n        ok: true\n        meta:\n          auth_user_id: ".concat(t, "\n          initial_guild: ").concat(n, "\n          database: ").concat(null != e, "\n            ok: ").concat(i, "\n            name: ").concat(null == e ? void 0 : e.name, "\n        data:\n          database:\n            guilds: ").concat(f.length, "\n            basic_channels:\n              total: ").concat(c, " (").concat(E.channels.length, " guilds)\n              stale: ").concat(S, " (").concat(E.stale.length, " guilds").concat(I, ")\n              unstale: ").concat(C, "\n            full_channels (guilds_with_stale_basic_channels):\n              total: ").concat(u, " (").concat(h.length, " guilds)\n      )")), T.default.setCacheInfo({
      guilds: f.length,
      privateChannels: l,
      basicChannels: c,
      basicChannelsStale: S,
      fullChannels: u,
      fullChannelGuilds: d
    })
  })
}

function W(e) {
  let t = p.default.getSocket(),
    n = !1;
  l.default.Emitter.batched(() => {
    try {
      if (e(), !t.dispatcher.hasStuffToDispatchNow()) {
        P.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue();
        return
      }
      n = !0, T.default.loadLazyCache.recordEnd(), P.verbose("Processing First Queued Dispatch"), t.dispatcher.processFirstQueuedDispatch(new Set(["READY", "INITIAL_GUILD"])), setTimeout(() => {
        P.verbose("Unpausing Dispatch Queue"), t.dispatcher.unpauseDispatchQueue()
      }, 100)
    } catch (e) {
      P.warn("Lazy cache has encountered error", e), r.default.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "LazyCache"
        }
      })
    }
  }), !n && T.default.loadLazyCache.recordEnd()
}
class K extends l.default.Store {
  initialize() {
    if (!y) {
      let e = p.default.getSocket();
      e.dispatcher.unpauseDispatchQueue()
    }
  }
  hasCache() {
    return !y || U
  }
  getLazyCacheStatus() {
    return y ? x : "no-cache"
  }
  get lastWriteTime() {
    return b
  }
  canWriteCaches(e) {
    return (0, R.isAuthenticated)() ? D ? (P.log("Not writing cache because caches cleared"), !1) : !!e || !!j || (P.log("Not writing cache because never connected"), !1) : (P.log("Not writing cache because not authenticated"), !1)
  }
  async loadCacheAsync(e, t) {
    let n = (0, O.callOnce)(t);
    if ("initializing" !== x) {
      (0, L.default)("cache:lazy_cache_not_initializing"), n(), setTimeout(() => {
        var e, t;
        return null === (t = p.default.getSocket()) || void 0 === t ? void 0 : null === (e = t.dispatcher) || void 0 === e ? void 0 : e.unpauseDispatchQueue()
      }, 0);
      return
    }
    try {
      let t = g.default.getId(),
        a = I.default.carefullyOpenDatabase(t),
        [s, l, i] = await T.default.loadMiniCache.measureAsync(() => F(a, t, e));
      s ? (n(), await Y(a, t, l, i)) : (n(), await (W(() => r.default.dispatch({
        type: "CACHE_LOADED_LAZY_NO_CACHE"
      })), Promise.resolve()))
    } catch (e) {
      P.error("clearing cache. exception encountered while loading cache.", e, e.stack), (0, L.default)("cache:exception"), n(), r.default.dispatch({
        type: "RESET_SOCKET",
        args: {
          error: e,
          action: "loadCacheAsync"
        }
      })
    }
  }
}
K.displayName = "CacheStore", new K(r.default, y ? {
  CONNECTION_OPEN: function() {
    return G = !0, j = !0, !1
  },
  LOGOUT: w,
  CONNECTION_CLOSED: function() {
    return G = !1, j = !0, !1
  },
  CACHE_LOADED: function() {
    U = !0
  },
  CACHE_LOADED_LAZY: function() {
    U = !0, x = "cache-loaded"
  },
  CACHE_LOADED_LAZY_NO_CACHE: function() {
    x = "no-cache"
  },
  CLEAR_CACHES: w,
  WRITE_CACHES: function() {
    P.verbose("Writing cache now"), b = Date.now(), U = !0, i.default.remove(M.CACHE_STORE_KEY), i.default.remove(M.CACHE_STORE_CHANNELS_LAZY_KEY), i.default.remove(M.CACHE_STORE_LAZY_KEY)
  }
} : {})