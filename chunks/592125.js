"use strict";
n.d(t, {
  o: function() {
    return F
  }
}), n(47120), n(51350), n(411104);
var i, r, s, o, a = n(392711),
  l = n.n(a),
  u = n(956067),
  _ = n(442837),
  d = n(570140),
  c = n(287328),
  E = n(86670),
  I = n(591526),
  T = n(458772),
  h = n(38217),
  S = n(710845),
  f = n(853856),
  N = n(131704),
  A = n(823379),
  m = n(709054),
  O = n(314897),
  R = n(430824),
  C = n(594174),
  p = n(981631);
let g = new S.Z("ChannelStore"),
  L = {},
  v = {},
  D = {},
  M = {},
  P = null,
  y = {},
  U = {},
  b = 0,
  G = {},
  w = {},
  k = new Set,
  B = {},
  x = 0,
  V = {},
  Z = 0,
  H = 0;
class F {
  static loadAllMissingChannels() {
    let e = R.Z.getGuildIds().filter(e => !k.has(e));
    return this.loadGuildIds(e)
  }
  static loadGuildFromChannelId(e) {
    var t;
    return null == e ? null : F.loadGuildIds([null === (t = K(e)) || void 0 === t ? void 0 : t.guild_id])
  }
  static loadGuildIds(e) {
    let t = e.filter(A.lm);
    if (0 === t.length) return null;
    let n = c.Z.database();
    if (null == n || !t.some(e => !k.has(e))) return null;
    let i = x;
    return (0, E.gs)("loadChannels", async () => {
      let e = t.map(e => {
          if (k.has(e)) return null;
          if (null != B[e]) return g.fileOnly("Skipping loading ".concat(e, " because a load is pending")), null;
          let t = I.Z.getAsync(n, e).then(t => (g.fileOnly("Lazy loaded channels for ".concat(e, " #:").concat(t.length)), {
            guildId: e,
            channels: t
          }));
          return B[e] = t, {
            guildId: e,
            promise: t
          }
        }).filter(A.lm),
        r = e.map(e => e.promise);
      try {
        let t = await Promise.all(r);
        if (x !== i) return g.fileOnly("lastResetTime has changed, skipping loads for " + e.map(e => e.guildId)), null;
        let n = t.filter(e => !k.has(e.guildId));
        await d.Z.dispatch({
          type: "LOAD_CHANNELS",
          channels: n
        })
      } catch (t) {
        for (let n of (g.error("Failed to load channels from disk for " + e.map(e => e.guildId), t), e)) delete B[n.guildId];
        throw t
      }
      return null
    })
  }
}

function Y(e, t, n) {
  if (null == e || "null" === e || k.has(e) || 0 === t && T.Z.hasGuild(e)) return;
  let i = c.Z.database();
  if (null == i) return;
  g.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
  let r = (0, E.Pv)("ensureGuildLoaded(".concat(e, ")"), () => I.Z.getSync(i, e), "ensureGuildLoaded");
  if (null == r) {
    k.add(e), T.Z.restored(e), g.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(i, ")"));
    return
  }
  let [s, o] = r;
  for (let n of ((0, h.ZP)(s), 0 !== t && (H += 1), k.add(e), T.Z.restored(e), u.Z.mark("❗", "loaded guild channels (guild: ".concat(e, ")"), o), s)) !Object.hasOwn(v, n.id) && J((0, N._H)(n));
  g.verbose("hydration complete (guild: ".concat(e, ", channels: ").concat(s.length, ", guilds_loaded: ").concat(H, ")"))
}

function j(e, t, n) {
  if (!Object.hasOwn(v, e) && !Object.hasOwn(M, e) && !Object.hasOwn(y, e) && !Object.hasOwn(w, e) && 1 === t) {
    let i = T.Z.getBasicChannel(e);
    (null == i ? void 0 : i.guild_id) != null && Y(i.guild_id, t, n)
  }
}

function W(e) {
  if (g.fileOnly("Deleting guild channels for ".concat(e)), null != D[e]) {
    for (let t of m.default.keys(D[e])) delete v[t];
    delete D[e]
  }
}

function K(e) {
  var t, n, i, r;
  return j(e, 0, "getBasicChannel"), null !== (r = null !== (i = null !== (n = null !== (t = v[e]) && void 0 !== t ? t : M[e]) && void 0 !== n ? n : y[e]) && void 0 !== i ? i : w[e]) && void 0 !== r ? r : T.Z.getBasicChannel(e)
}

function z(e) {
  var t, n, i, r;
  return j(e, 1, "getChannel"), null !== (r = null !== (i = null !== (n = null !== (t = v[e]) && void 0 !== t ? t : M[e]) && void 0 !== n ? n : y[e]) && void 0 !== i ? i : w[e]) && void 0 !== r ? r : V[e]
}

function q(e) {
  e.isPrivate() ? (delete V[e.id], X(e)) : e.isThread() ? Q(e) : N.oj.has(e.type) && function(e) {
    J(e)
  }(e)
}

function X(e) {
  M[e.id] = e, e.type === p.d4z.DM && (U[e.getRecipientId()] = e.id), b += 1
}

function Q(e) {
  let t = v[e.parent_id];
  y[e.id] = e.merge({
    nsfw: (null == t ? void 0 : t.nsfw) === !0,
    parentChannelThreadType: null == t ? void 0 : t.type
  }), e.isScheduledForDeletion() && d.Z.dispatch({
    type: "THREAD_DELETE",
    channel: e
  })
}

function J(e) {
  var t, n;
  let {
    id: i,
    guild_id: r
  } = e;
  v[i] = e, D[r] = null !== (t = D[r]) && void 0 !== t ? t : {}, D[r][i] = e, G[r] = (null !== (n = G[r]) && void 0 !== n ? n : 0) + 1
}

function $(e) {
  if (null != e.channels)
    for (let t of (g.fileOnly("GuildCreate contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), W(e.id), k.add(e.id), T.Z.restored(e.id), e.channels)) J(t);
  if (null != e.channelUpdates) {
    let t = e.channelUpdates;
    for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && T.Z.invalidate(e.id), t.deletes)) en(v[n]);
    for (let e of t.writes) J(e)
  }
  if (null != e.threads)
    for (let t of e.threads) Q(t)
}

function ee(e) {
  if (!N.AW.has(e.channel.type)) return !1;
  let t = z(e.channel.id);
  if (null == t) t = e.channel;
  else {
    var n;
    t = t.merge({
      ...e.channel.toJS(),
      bitrate: null !== (n = e.channel.bitrate) && void 0 !== n ? n : t.bitrate
    })
  }
  q(t)
}

function et(e) {
  let {
    threads: t
  } = e;
  t.forEach(e => {
    N.AW.has(e.type) && q((0, N.q_)(e))
  })
}

function en(e) {
  if (null == e) return;
  let t = e.guild_id;
  e.id in M && delete M[e.id], e.id in v && delete v[e.id], e.id in y && delete y[e.id], null != t && null != D[t] && e.id in D[t] && delete D[t][e.id], ! function(e) {
    if (null == e.guild_id || N.Ec.has(e.type))(0, N.hv)(e.type) && (b += 1);
    else {
      var t;
      G[e.guild_id] = (null !== (t = G[e.guild_id]) && void 0 !== t ? t : 0) + 1
    }
  }(e)
}

function ei(e) {
  var t, n;
  let {
    channel: i
  } = e, r = null !== (n = null !== (t = v[i.id]) && void 0 !== t ? t : M[i.id]) && void 0 !== n ? n : y[i.id];
  if (null == r) return !1;
  en(r), ! function(e) {
    if ("basicPermissions" in e || e.type !== p.d4z.DM) return;
    let t = e.getRecipientId();
    if (U[t] === e.id) delete U[t]
  }(r)
}

function er(e) {
  let {
    messages: t
  } = e;
  for (let e of t) null != e.thread && !(e.thread.id in y) && N.AW.has(e.thread.type) && Q((0, N.q_)(e.thread))
}

function es(e) {
  let {
    messages: t,
    threads: n,
    channels: i
  } = e;
  for (let e of t)
    for (let t of e) eo(t.thread);
  n.forEach(eo), null == i || i.forEach(e => {
    let t = (0, N.q_)(e),
      n = null != z(e.id),
      i = null != V[e.id];
    t.isPrivate() && (!n || i) ? V[t.id] = t : !n && q(t)
  })
}

function eo(e) {
  null != e && !(e.id in y) && N.AW.has(e.type) && Q((0, N.q_)(e))
}

function ea() {
  for (let e in w = {}, f.Z.getFavoriteChannels()) {
    let t = f.Z.getCategoryRecord(e);
    null != t && (w[e] = t)
  }
}
class el extends(i = _.ZP.Store) {
  initialize() {
    this.waitFor(T.Z, C.default, R.Z, f.Z), this.syncWith([f.Z], ea)
  }
  hasChannel(e) {
    return null != K(e)
  }
  getBasicChannel(e) {
    if (null != e) return K(e)
  }
  getChannel(e) {
    if (null != e) return z(e)
  }
  loadAllGuildAndPrivateChannelsFromDisk() {
    for (let e of R.Z.getGuildIds()) Y(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
    return {
      ...v,
      ...M
    }
  }
  getChannelIds(e) {
    var t, n;
    return (Y(e, 0, "getChannelIds"), null == e) ? m.default.keys(M) : m.default.keys(null !== (n = null !== (t = T.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : D[e]) && void 0 !== n ? n : L)
  }
  getMutablePrivateChannels() {
    return M
  }
  getMutableBasicGuildChannelsForGuild(e) {
    var t, n;
    return Y(e, 0, "getMutableBasicGuildChannelsForGuild"), null !== (n = null !== (t = T.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : D[e]) && void 0 !== n ? n : L
  }
  getMutableGuildChannelsForGuild(e) {
    var t;
    return Y(e, 1, "getMutableGuildChannelsForGuild"), null !== (t = D[e]) && void 0 !== t ? t : L
  }
  getSortedPrivateChannels() {
    return l()(M).values().sort((e, t) => m.default.compare(e.lastMessageId, t.lastMessageId)).reverse().value()
  }
  getDMFromUserId(e) {
    if (null != e) return U[e]
  }
  getMutableDMsByUserIds() {
    return U
  }
  getDMUserIds() {
    return m.default.keys(U)
  }
  getPrivateChannelsVersion() {
    return b
  }
  getGuildChannelsVersion(e) {
    var t;
    return null !== (t = G[e]) && void 0 !== t ? t : 0
  }
  getAllThreadsForParent(e) {
    return l().values(y).filter(t => t.parent_id === e)
  }
  getInitialOverlayState() {
    return {
      ...v,
      ...M,
      ...y
    }
  }
  getDebugInfo() {
    return {
      loadedGuildIds: Array.from(k).sort(m.default.compare),
      pendingGuildLoads: Object.keys(B).sort(m.default.compare),
      guildSizes: Object.keys(D).sort(m.default.compare).map(e => "".concat(e, ": ").concat(eu(e)))
    }
  }
}

function eu(e) {
  return null == D[e] ? null : Object.keys(D[e]).length
}
o = "ChannelStore", (s = "displayName") in(r = el) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new el(d.Z, {
  BACKGROUND_SYNC: function(e) {
    let {
      guilds: t
    } = e, n = D;
    v = {}, D = {}, G = {}, t.forEach(e => {
      if ("unavailable" === e.data_mode) g.fileOnly("Restoring guild channels b/c unavailable in bg sync, for ".concat(e.id, " #:").concat(eu(e.id))), l().forEach(n[e.id], J);
      else if ("partial" === e.data_mode) {
        var t, i;
        g.fileOnly("Restoring guild channels b/c partial in bg sync, for ".concat(e.id, " #:").concat(eu(e.id))), l().forEach(n[e.id], J);
        let r = null !== (i = e.partial_updates.deleted_channel_ids) && void 0 !== i ? i : [];
        r.length > 0 && (Y(e.id, 1, "handleBackgroundSync"), r.forEach(e => en(v[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach(t => J((0, N.q_)(t, e.id)))
      } else g.fileOnly("BG sync contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), W(e.id), k.add(e.id), T.Z.restored(e.id), e.channels.forEach(t => J((0, N.q_)(t, e.id)))
    })
  },
  CACHE_LOADED_LAZY: function(e) {
    for (let [t, n] of e.guildChannels)
      for (let e of (g.fileOnly("Lazy cache contained full guild channels for ".concat(t, " #:").concat(n.length)), k.add(t), n)) q((0, N._H)(e))
  },
  CACHE_LOADED: function(e) {
    var t;
    e.guilds.length;
    let {
      privateChannels: n,
      initialGuildChannels: i
    } = e;
    for (let e of [n, i])
      for (let t of e) q((0, h.d7)((0, N._H)(t)));
    let r = null === (t = i[0]) || void 0 === t ? void 0 : t.guild_id;
    null != r && (g.fileOnly("Early cache contained full guild channels for ".concat(r)), k.add(r))
  },
  CHANNEL_CREATE: function(e) {
    q(e.channel)
  },
  CHANNEL_DELETE: ei,
  CHANNEL_RECIPIENT_ADD: function(e) {
    let t = z(e.channelId),
      n = O.default.getId();
    return (null == t ? !!void 0 : !!t.isPrivate()) && (q(t.addRecipient(e.user.id, e.nick, n)), !0)
  },
  CHANNEL_RECIPIENT_REMOVE: function(e) {
    let t = z(e.channelId);
    return (null == t ? !!void 0 : !!t.isPrivate()) && (q(t.removeRecipient(e.user.id)), !0)
  },
  CHANNEL_UPDATES: function(e) {
    let t = e.channels.some(e => {
      let t = z(e.id);
      return e.nsfw !== (null == t ? void 0 : t.nsfw) || e.type !== (null == t ? void 0 : t.type)
    });
    for (let t of e.channels) q(t);
    t && Object.values(y).forEach(e => q(e))
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      lazyPrivateChannels: t
    } = e;
    null != P && (M = {}, P.forEach(X)), t.forEach(X)
  },
  CONNECTION_OPEN: function(e) {
    let t = D;
    for (let n of (U = {}, v = {}, D = {}, y = {}, G = {}, V = {}, B = {}, x = Date.now(), P = e.initialPrivateChannels, e.initialPrivateChannels.forEach(X), e.guilds)) "partial" === n.dataMode && (l().forEach(t[n.id], J), g.fileOnly("Restoring guild channels for ".concat(n.id, " #:").concat(eu(n.id)))), $(n);
    ea()
  },
  GUILD_CREATE: function(e) {
    $(e.guild)
  },
  GUILD_DELETE: function(e) {
    g.fileOnly("GuildDelete of ".concat(e.guild.id)), W(e.guild.id), k.delete(e.guild.id), T.Z.invalidate(e.guild.id)
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: et,
  LOAD_CHANNELS: function(e) {
    for (let {
        guildId: t,
        channels: n
      }
      of e.channels)
      for (let e of (g.fileOnly("Lazy loaded guild channels for ".concat(t)), (0, h.ZP)(n), k.add(t), T.Z.restored(t), n)) !Object.hasOwn(v, e.id) && J((0, N._H)(e));
    return !1
  },
  LOAD_MESSAGES_AROUND_SUCCESS: er,
  LOAD_MESSAGES_SUCCESS: er,
  LOAD_THREADS_SUCCESS: et,
  LOGOUT: function() {
    g.fileOnly("initializeClear()"), U = {}, v = {}, D = {}, G = {}, M = {}, V = {}, y = {}, k = new Set, B = {}, x = Date.now()
  },
  OVERLAY_INITIALIZE: function(e) {
    for (let t of (e.guilds.length, e.channels)) q((0, h.d7)((0, N._H)(t)))
  },
  SEARCH_FINISH: es,
  MOD_VIEW_SEARCH_FINISH: es,
  THREAD_CREATE: ee,
  THREAD_DELETE: ei,
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      N.AW.has(e.type) && q(e)
    })
  },
  THREAD_UPDATE: ee
})