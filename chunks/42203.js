"use strict";
n.r(t), n.d(t, {
  default: function() {
    return ei
  }
}), n("222007"), n("581081"), n("70102");
var i = n("917351"),
  s = n.n(i),
  r = n("102053"),
  a = n("249654"),
  o = n("446674"),
  l = n("913144"),
  u = n("802493"),
  d = n("595525"),
  c = n("860255"),
  f = n("846527"),
  _ = n("1544"),
  h = n("605250"),
  g = n("379881"),
  m = n("560208"),
  E = n("233069"),
  p = n("271938"),
  v = n("305961"),
  S = n("697218"),
  T = n("49111");
let I = new h.default("ChannelStore"),
  C = {},
  A = {},
  y = {},
  N = {},
  R = null,
  O = {},
  D = {},
  P = 0,
  b = {},
  L = {},
  M = new Set,
  U = {},
  k = 0,
  w = 0;

function V(e, t, n) {
  if (null == e || !M.has(e) || 0 === t && f.default.hasGuild(e)) return;
  I.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
  let i = u.default.database(),
    s = null != i ? (0, d.tryLoadOrResetCacheGateway)("ensureGuildLoaded(".concat(e, ")"), () => c.default.getSync(i, e)) : null;
  if (null == s) {
    M.delete(e), f.default.restored(e), I.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(i, ")"));
    return
  }
  let [a, o] = s;
  for (let n of ((0, _.default)(a), 0 !== t && (w += 1), M.delete(e), f.default.restored(e), r.default.mark("❗", "loaded guild channels (guild: ".concat(e, ")"), o), a)) !Object.hasOwn(A, n.id) && W((0, E.castChannelRecord)(n));
  I.verbose("hydration complete (guild: ".concat(e, ", channels: ").concat(a.length, ", guilds_loaded: ").concat(w, ")"))
}

function G(e, t, n) {
  if (M.size > 0 && !Object.hasOwn(A, e) && !Object.hasOwn(N, e) && !Object.hasOwn(O, e) && !Object.hasOwn(L, e) && 1 === t) {
    let i = f.default.getBasicChannel(e);
    (null == i ? void 0 : i.guild_id) != null && V(i.guild_id, t, n)
  }
}

function F(e) {
  if (null != y[e]) {
    for (let t of Object.keys(y[e])) delete A[t];
    delete y[e]
  }
}

function x(e) {
  var t, n, i, s;
  return G(e, 0, "getBasicChannel"), null !== (s = null !== (i = null !== (n = null !== (t = A[e]) && void 0 !== t ? t : N[e]) && void 0 !== n ? n : O[e]) && void 0 !== i ? i : L[e]) && void 0 !== s ? s : f.default.getBasicChannel(e)
}

function B(e) {
  var t, n, i, s;
  return G(e, 1, "getChannel"), null !== (s = null !== (i = null !== (n = null !== (t = A[e]) && void 0 !== t ? t : N[e]) && void 0 !== n ? n : O[e]) && void 0 !== i ? i : L[e]) && void 0 !== s ? s : U[e]
}

function H(e) {
  e.isPrivate() ? (delete U[e.id], Y(e)) : e.isThread() ? j(e) : E.GUILD_CHANNEL_TYPES.has(e.type) && function(e) {
    W(e)
  }(e)
}

function Y(e) {
  N[e.id] = e, e.type === T.ChannelTypes.DM && (D[e.getRecipientId()] = e.id), P += 1
}

function j(e) {
  let t = A[e.parent_id];
  O[e.id] = e.merge({
    nsfw: (null == t ? void 0 : t.nsfw) === !0,
    parentChannelThreadType: null == t ? void 0 : t.type
  }), e.isScheduledForDeletion() && l.default.dispatch({
    type: "THREAD_DELETE",
    channel: e
  })
}

function W(e) {
  var t, n;
  let {
    id: i,
    guild_id: s
  } = e;
  A[i] = e, y[s] = null !== (t = y[s]) && void 0 !== t ? t : {}, y[s][i] = e, b[s] = (null !== (n = b[s]) && void 0 !== n ? n : 0) + 1
}

function K(e) {
  if (M.add(e.id), null != e.channels)
    for (let t of (F(e.id), M.delete(e.id), f.default.restored(e.id), e.channels)) W(t);
  if (null != e.channelUpdates) {
    let t = e.channelUpdates;
    for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && f.default.invalidate(e.id), t.deletes)) Z(A[n]);
    for (let e of t.writes) W(e)
  }
  if (null != e.threads)
    for (let t of e.threads) j(t)
}

function z() {
  D = {}, A = {}, y = {}, b = {}, N = {}, U = {}, O = {}, M = new Set
}

function q(e) {
  for (let t of (z(), e.channels)) H((0, _.deserializeChannel)((0, E.castChannelRecord)(t)));
  M = new Set(e.guilds.map(e => e.id))
}

function X(e) {
  if (!E.ALL_CHANNEL_TYPES.has(e.channel.type)) return !1;
  let t = B(e.channel.id);
  if (null == t) t = e.channel;
  else {
    var n;
    t = t.merge({
      ...e.channel.toJS(),
      bitrate: null !== (n = e.channel.bitrate) && void 0 !== n ? n : t.bitrate
    })
  }
  H(t)
}

function Q(e) {
  let {
    threads: t
  } = e;
  t.forEach(e => {
    E.ALL_CHANNEL_TYPES.has(e.type) && H((0, E.createChannelRecordFromServer)(e))
  })
}

function Z(e) {
  if (null == e) return;
  let t = e.guild_id;
  e.id in N && delete N[e.id], e.id in A && delete A[e.id], e.id in O && delete O[e.id], null != t && null != y[t] && e.id in y[t] && delete y[t][e.id], ! function(e) {
    if (null == e.guild_id || E.THREAD_CHANNEL_TYPES.has(e.type))(0, E.isPrivate)(e.type) && (P += 1);
    else {
      var t;
      b[e.guild_id] = (null !== (t = b[e.guild_id]) && void 0 !== t ? t : 0) + 1
    }
  }(e)
}

function J(e) {
  var t, n;
  let {
    channel: i
  } = e, s = null !== (n = null !== (t = A[i.id]) && void 0 !== t ? t : N[i.id]) && void 0 !== n ? n : O[i.id];
  if (null == s) return !1;
  Z(s), ! function(e) {
    if ("basicPermissions" in e || e.type !== T.ChannelTypes.DM) return;
    let t = e.getRecipientId(),
      n = D[t];
    n === e.id && delete D[t]
  }(s)
}

function $(e) {
  let {
    messages: t
  } = e;
  for (let e of t) null != e.thread && !(e.thread.id in O) && E.ALL_CHANNEL_TYPES.has(e.thread.type) && j((0, E.createChannelRecordFromServer)(e.thread))
}

function ee(e) {
  null != e && !(e.id in O) && E.ALL_CHANNEL_TYPES.has(e.type) && j((0, E.createChannelRecordFromServer)(e))
}

function et() {
  for (let e in L = {}, g.default.getFavoriteChannels()) {
    let t = g.default.getCategoryRecord(e);
    null != t && (L[e] = t)
  }
}
class en extends o.default.Store {
  initialize() {
    this.waitFor(f.default, S.default, v.default, g.default), this.syncWith([g.default], et)
  }
  hasChannel(e) {
    return null != x(e)
  }
  getBasicChannel(e) {
    if (null != e) return x(e)
  }
  getChannel(e) {
    if (null != e) return B(e)
  }
  loadAllGuildAndPrivateChannelsFromDisk() {
    for (let e of v.default.getGuildIds()) V(e, 1, "loadAllGuildAndPrivateChannelsFromDisk");
    return {
      ...A,
      ...N
    }
  }
  getChannelIds(e) {
    var t, n;
    return (V(e, 0, "getChannelIds"), null == e) ? Object.keys(N) : Object.keys(null !== (n = null !== (t = f.default.getGuildBasicChannels(e)) && void 0 !== t ? t : y[e]) && void 0 !== n ? n : C)
  }
  getMutablePrivateChannels() {
    return N
  }
  getMutableBasicGuildChannelsForGuild(e) {
    var t, n;
    return V(e, 0, "getMutableBasicGuildChannelsForGuild"), null !== (n = null !== (t = f.default.getGuildBasicChannels(e)) && void 0 !== t ? t : y[e]) && void 0 !== n ? n : C
  }
  getMutableGuildChannelsForGuild(e) {
    var t;
    return V(e, 1, "getMutableGuildChannelsForGuild"), null !== (t = y[e]) && void 0 !== t ? t : C
  }
  getSortedPrivateChannels() {
    return s(N).values().sort((e, t) => a.default.compare(e.lastMessageId, t.lastMessageId)).reverse().value()
  }
  getDMFromUserId(e) {
    if (null != e) return D[e]
  }
  getDMUserIds() {
    return Object.keys(D)
  }
  getPrivateChannelsVersion() {
    return P
  }
  getGuildChannelsVersion(e) {
    var t;
    return null !== (t = b[e]) && void 0 !== t ? t : 0
  }
  getAllThreadsForParent(e) {
    return s.values(O).filter(t => t.parent_id === e)
  }
  getInitialOverlayState() {
    return {
      ...A,
      ...N,
      ...O
    }
  }
}
en.displayName = "ChannelStore";
var ei = new en(l.default, {
  BACKGROUND_SYNC: function(e) {
    let {
      guilds: t
    } = e, n = y;
    A = {}, y = {}, b = {}, t.forEach(e => {
      if ("unavailable" === e.data_mode) s.forEach(n[e.id], W);
      else if ("partial" === e.data_mode) {
        var t, i;
        s.forEach(n[e.id], W);
        let r = null !== (i = e.partial_updates.deleted_channel_ids) && void 0 !== i ? i : [];
        r.length > 0 && (V(e.id, 1, "handleBackgroundSync"), r.forEach(e => Z(A[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach(t => W((0, E.createChannelRecordFromServer)(t, e.id)))
      } else F(e.id), M.delete(e.id), f.default.restored(e.id), e.channels.forEach(t => W((0, E.createChannelRecordFromServer)(t, e.id)))
    })
  },
  CACHE_LOADED_LAZY: function(e) {
    if (null != e.privateChannels)
      for (let t of e.privateChannels) H((0, E.castChannelRecord)(t));
    for (let [t, n] of e.guildChannels)
      for (let e of n) H((0, E.castChannelRecord)(e));
    e.guilds.length, M = new Set(e.guilds.map(e => e.id))
  },
  CACHE_LOADED: q,
  CHANNEL_CREATE: function(e) {
    H(e.channel)
  },
  CHANNEL_DELETE: J,
  CHANNEL_RECIPIENT_ADD: function(e) {
    let t = B(e.channelId),
      n = p.default.getId();
    return (null == t ? !!void 0 : !!t.isPrivate()) && (H(t.addRecipient(e.user.id, e.nick, n)), !0)
  },
  CHANNEL_RECIPIENT_REMOVE: function(e) {
    let t = B(e.channelId);
    return (null == t ? !!void 0 : !!t.isPrivate()) && (H(t.removeRecipient(e.user.id)), !0)
  },
  CHANNEL_UPDATES: function(e) {
    let t = e.channels.some(e => {
      let t = B(e.id);
      return e.nsfw !== (null == t ? void 0 : t.nsfw) || e.type !== (null == t ? void 0 : t.type)
    });
    for (let t of e.channels) H(t);
    t && Object.values(O).forEach(e => H(e))
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      lazyPrivateChannels: t
    } = e;
    null != R && (N = {}, R.forEach(Y)), t.forEach(Y)
  },
  CONNECTION_OPEN: function(e) {
    let t = y;
    for (let n of (D = {}, A = {}, y = {}, O = {}, b = {}, U = {}, M = new Set, R = e.initialPrivateChannels, e.initialPrivateChannels.forEach(Y), e.guilds)) "partial" === n.dataMode && s.forEach(t[n.id], W), K(n);
    et()
  },
  GUILD_CREATE: function(e) {
    K(e.guild)
  },
  GUILD_DELETE: function(e) {
    F(e.guild.id), M.delete(e.guild.id), f.default.invalidate(e.guild.id)
  },
  GUILD_FEED_FETCH_SUCCESS: function(e) {
    let {
      data: t
    } = e, n = !1, i = (0, m.getThreadsFromGuildFeedFetch)(t);
    for (let e of i) !(e.id in O) && E.ALL_CHANNEL_TYPES.has(e.type) && (j((0, E.createChannelRecordFromServer)(e)), n = !0);
    return n
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: Q,
  LOAD_MESSAGES_AROUND_SUCCESS: $,
  LOAD_MESSAGES_SUCCESS: $,
  LOAD_THREADS_SUCCESS: Q,
  LOGOUT: function() {
    z()
  },
  OVERLAY_INITIALIZE: q,
  SEARCH_FINISH: function(e) {
    let {
      messages: t,
      threads: n,
      channels: i
    } = e;
    for (let e of t)
      for (let t of e) ee(t.thread);
    n.forEach(ee), null == i || i.forEach(e => {
      let t = (0, E.createChannelRecordFromServer)(e),
        n = null != B(e.id),
        i = null != U[e.id];
      t.isPrivate() && (!n || i) ? U[t.id] = t : !n && H(t)
    })
  },
  THREAD_CREATE: X,
  THREAD_DELETE: J,
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      E.ALL_CHANNEL_TYPES.has(e.type) && H(e)
    })
  },
  THREAD_UPDATE: X
})