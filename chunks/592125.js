n.d(t, {
  o: function() {
return Z;
  }
}), n(47120), n(51350), n(411104);
var r, i, a, s, o = n(392711),
  l = n.n(o),
  u = n(956067),
  c = n(442837),
  d = n(570140),
  _ = n(287328),
  E = n(86670),
  f = n(591526),
  h = n(458772),
  p = n(38217),
  m = n(710845),
  I = n(853856),
  T = n(131704),
  g = n(823379),
  S = n(709054),
  A = n(314897),
  N = n(430824),
  v = n(594174),
  O = n(981631);
let R = new m.Z('ChannelStore'),
  C = {},
  y = {},
  D = {},
  L = {},
  b = null,
  M = {},
  P = {},
  U = 0,
  w = {},
  x = {},
  G = new Set(),
  k = {},
  B = 0,
  F = {},
  V = 0,
  H = 0;
class Z {
  static loadAllMissingChannels() {
let e = N.Z.getGuildIds().filter(e => !G.has(e));
return this.loadGuildIds(e);
  }
  static loadGuildFromChannelId(e) {
var t;
return null == e ? null : Z.loadGuildIds([null === (t = K(e)) || void 0 === t ? void 0 : t.guild_id]);
  }
  static loadGuildIds(e) {
let t = e.filter(g.lm);
if (0 === t.length)
  return null;
let n = _.Z.database();
if (null == n || !t.some(e => !G.has(e)))
  return null;
let r = B;
return (0, E.gs)('loadChannels', async () => {
  let e = t.map(e => {
      if (G.has(e))
        return null;
      if (null != k[e])
        return R.fileOnly('Skipping loading '.concat(e, ' because a load is pending')), null;
      let t = f.Z.getAsync(n, e).then(t => (R.fileOnly('Lazy loaded channels for '.concat(e, ' #:').concat(t.length)), {
        guildId: e,
        channels: t
      }));
      return k[e] = t, {
        guildId: e,
        promise: t
      };
    }).filter(g.lm),
    i = e.map(e => e.promise);
  try {
    let t = await Promise.all(i);
    if (B !== r)
      return R.fileOnly('lastResetTime has changed, skipping loads for ' + e.map(e => e.guildId)), null;
    let n = t.filter(e => !G.has(e.guildId));
    await d.Z.dispatch({
      type: 'LOAD_CHANNELS',
      channels: n
    });
  } catch (t) {
    for (let n of (R.error('Failed to load channels from disk for ' + e.map(e => e.guildId), t), e))
      delete k[n.guildId];
    throw t;
  }
  return null;
});
  }
}

function Y(e, t, n) {
  if (null == e || 'null' === e || G.has(e) || 0 === t && h.Z.hasGuild(e))
return;
  let r = _.Z.database();
  if (null == r)
return;
  R.verbose('hydrating guild (guild: '.concat(e, ', trace: ').concat(n, ')'));
  let i = (0, E.Pv)('ensureGuildLoaded('.concat(e, ')'), () => f.Z.getSync(r, e), 'ensureGuildLoaded');
  if (null == i) {
G.add(e), h.Z.restored(e), R.log('load returned null; early returning (guild: '.concat(e, ', database: ').concat(r, ')'));
return;
  }
  let [a, s] = i;
  for (let n of ((0, p.ZP)(a), 0 !== t && (H += 1), G.add(e), h.Z.restored(e), u.Z.mark('\u2757', 'loaded guild channels (guild: '.concat(e, ')'), s), a))
!Object.hasOwn(y, n.id) && $((0, T._H)(n));
  R.verbose('hydration complete (guild: '.concat(e, ', channels: ').concat(a.length, ', guilds_loaded: ').concat(H, ')'));
}

function j(e, t, n) {
  if (!Object.hasOwn(y, e) && !Object.hasOwn(L, e) && !Object.hasOwn(M, e) && !Object.hasOwn(x, e) && 1 === t) {
let r = h.Z.getBasicChannel(e);
(null == r ? void 0 : r.guild_id) != null && Y(r.guild_id, t, n);
  }
}

function W(e) {
  if (R.fileOnly('Deleting guild channels for '.concat(e)), null != D[e]) {
for (let t of S.default.keys(D[e]))
  delete y[t];
delete D[e];
  }
}

function K(e) {
  var t, n, r, i;
  return j(e, 0, 'getBasicChannel'), null !== (i = null !== (r = null !== (n = null !== (t = y[e]) && void 0 !== t ? t : L[e]) && void 0 !== n ? n : M[e]) && void 0 !== r ? r : x[e]) && void 0 !== i ? i : h.Z.getBasicChannel(e);
}

function z(e) {
  var t, n, r, i;
  return j(e, 1, 'getChannel'), null !== (i = null !== (r = null !== (n = null !== (t = y[e]) && void 0 !== t ? t : L[e]) && void 0 !== n ? n : M[e]) && void 0 !== r ? r : x[e]) && void 0 !== i ? i : F[e];
}

function q(e) {
  e.isPrivate() ? (delete F[e.id], Q(e)) : e.isThread() ? X(e) : T.oj.has(e.type) && function(e) {
$(e);
  }(e);
}

function Q(e) {
  L[e.id] = e, e.type === O.d4z.DM && (P[e.getRecipientId()] = e.id), U += 1;
}

function X(e) {
  let t = y[e.parent_id];
  M[e.id] = e.merge({
nsfw: (null == t ? void 0 : t.nsfw) === !0,
parentChannelThreadType: null == t ? void 0 : t.type
  }), e.isScheduledForDeletion() && d.Z.dispatch({
type: 'THREAD_DELETE',
channel: e
  });
}

function $(e) {
  var t, n;
  let {
id: r,
guild_id: i
  } = e;
  y[r] = e, D[i] = null !== (t = D[i]) && void 0 !== t ? t : {}, D[i][r] = e, w[i] = (null !== (n = w[i]) && void 0 !== n ? n : 0) + 1;
}

function J(e) {
  if (null != e.channels)
for (let t of (R.fileOnly('GuildCreate contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), W(e.id), G.add(e.id), h.Z.restored(e.id), e.channels))
  $(t);
  if (null != e.channelUpdates) {
let t = e.channelUpdates;
for (let n of ((t.writes.length > 0 || t.deletes.length > 0) && h.Z.invalidate(e.id), t.deletes))
  en(y[n]);
for (let e of t.writes)
  $(e);
  }
  if (null != e.threads)
for (let t of e.threads)
  X(t);
}

function ee(e) {
  if (!T.AW.has(e.channel.type))
return !1;
  let t = z(e.channel.id);
  if (null == t)
t = e.channel;
  else {
var n;
t = t.merge({
  ...e.channel.toJS(),
  bitrate: null !== (n = e.channel.bitrate) && void 0 !== n ? n : t.bitrate
});
  }
  q(t);
}

function et(e) {
  let {
threads: t
  } = e;
  t.forEach(e => {
T.AW.has(e.type) && q((0, T.q_)(e));
  });
}

function en(e) {
  if (null == e)
return;
  let t = e.guild_id;
  e.id in L && delete L[e.id], e.id in y && delete y[e.id], e.id in M && delete M[e.id], null != t && null != D[t] && e.id in D[t] && delete D[t][e.id], ! function(e) {
if (null == e.guild_id || T.Ec.has(e.type))
  (0, T.hv)(e.type) && (U += 1);
else {
  var t;
  w[e.guild_id] = (null !== (t = w[e.guild_id]) && void 0 !== t ? t : 0) + 1;
}
  }(e);
}

function er(e) {
  var t, n;
  let {
channel: r
  } = e, i = null !== (n = null !== (t = y[r.id]) && void 0 !== t ? t : L[r.id]) && void 0 !== n ? n : M[r.id];
  if (null == i)
return !1;
  en(i), ! function(e) {
if ('basicPermissions' in e || e.type !== O.d4z.DM)
  return;
let t = e.getRecipientId();
if (P[t] === e.id)
  delete P[t];
  }(i);
}

function ei(e) {
  let {
messages: t
  } = e;
  for (let e of t)
null != e.thread && !(e.thread.id in M) && T.AW.has(e.thread.type) && X((0, T.q_)(e.thread));
}

function ea(e) {
  let {
messages: t,
threads: n,
channels: r
  } = e;
  for (let e of t)
for (let t of e)
  es(t.thread);
  n.forEach(es), null == r || r.forEach(e => {
let t = (0, T.q_)(e),
  n = null != z(e.id),
  r = null != F[e.id];
t.isPrivate() && (!n || r) ? F[t.id] = t : !n && q(t);
  });
}

function es(e) {
  null != e && !(e.id in M) && T.AW.has(e.type) && X((0, T.q_)(e));
}

function eo() {
  for (let e in (x = {}, I.Z.getFavoriteChannels())) {
let t = I.Z.getCategoryRecord(e);
null != t && (x[e] = t);
  }
}
class el extends(r = c.ZP.Store) {
  initialize() {
this.waitFor(h.Z, v.default, N.Z, I.Z), this.syncWith([I.Z], eo);
  }
  hasChannel(e) {
return null != K(e);
  }
  getBasicChannel(e) {
if (null != e)
  return K(e);
  }
  getChannel(e) {
if (null != e)
  return z(e);
  }
  loadAllGuildAndPrivateChannelsFromDisk() {
for (let e of N.Z.getGuildIds())
  Y(e, 1, 'loadAllGuildAndPrivateChannelsFromDisk');
return {
  ...y,
  ...L
};
  }
  getChannelIds(e) {
var t, n;
return (Y(e, 0, 'getChannelIds'), null == e) ? S.default.keys(L) : S.default.keys(null !== (n = null !== (t = h.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : D[e]) && void 0 !== n ? n : C);
  }
  getMutablePrivateChannels() {
return L;
  }
  getMutableBasicGuildChannelsForGuild(e) {
var t, n;
return Y(e, 0, 'getMutableBasicGuildChannelsForGuild'), null !== (n = null !== (t = h.Z.getGuildBasicChannels(e)) && void 0 !== t ? t : D[e]) && void 0 !== n ? n : C;
  }
  getMutableGuildChannelsForGuild(e) {
var t;
return Y(e, 1, 'getMutableGuildChannelsForGuild'), null !== (t = D[e]) && void 0 !== t ? t : C;
  }
  getSortedPrivateChannels() {
return l()(L).values().sort((e, t) => S.default.compare(e.lastMessageId, t.lastMessageId)).reverse().value();
  }
  getDMFromUserId(e) {
if (null != e)
  return P[e];
  }
  getDMChannelFromUserId(e) {
if (null != e)
  return this.getChannel(P[e]);
  }
  getMutableDMsByUserIds() {
return P;
  }
  getDMUserIds() {
return S.default.keys(P);
  }
  getPrivateChannelsVersion() {
return U;
  }
  getGuildChannelsVersion(e) {
var t;
return null !== (t = w[e]) && void 0 !== t ? t : 0;
  }
  getAllThreadsForParent(e) {
return l().values(M).filter(t => t.parent_id === e);
  }
  getInitialOverlayState() {
return {
  ...y,
  ...L,
  ...M
};
  }
  getDebugInfo() {
return {
  loadedGuildIds: Array.from(G).sort(S.default.compare),
  pendingGuildLoads: Object.keys(k).sort(S.default.compare),
  guildSizes: Object.keys(D).sort(S.default.compare).map(e => ''.concat(e, ': ').concat(eu(e)))
};
  }
}

function eu(e) {
  return null == D[e] ? null : Object.keys(D[e]).length;
}
s = 'ChannelStore', (a = 'displayName') in(i = el) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new el(d.Z, {
  BACKGROUND_SYNC: function(e) {
let {
  guilds: t
} = e, n = D;
y = {}, D = {}, w = {}, t.forEach(e => {
  if ('unavailable' === e.data_mode)
    R.fileOnly('Restoring guild channels b/c unavailable in bg sync, for '.concat(e.id, ' #:').concat(eu(e.id))), l().forEach(n[e.id], $);
  else if ('partial' === e.data_mode) {
    var t, r;
    R.fileOnly('Restoring guild channels b/c partial in bg sync, for '.concat(e.id, ' #:').concat(eu(e.id))), l().forEach(n[e.id], $);
    let i = null !== (r = e.partial_updates.deleted_channel_ids) && void 0 !== r ? r : [];
    i.length > 0 && (Y(e.id, 1, 'handleBackgroundSync'), i.forEach(e => en(y[e]))), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach(t => $((0, T.q_)(t, e.id)));
  } else
    R.fileOnly('BG sync contained full channels for '.concat(e.id, ' #:').concat(e.channels.length)), W(e.id), G.add(e.id), h.Z.restored(e.id), e.channels.forEach(t => $((0, T.q_)(t, e.id)));
});
  },
  CACHE_LOADED_LAZY: function(e) {
for (let [t, n] of e.guildChannels)
  for (let e of (R.fileOnly('Lazy cache contained full guild channels for '.concat(t, ' #:').concat(n.length)), G.add(t), n))
    q((0, T._H)(e));
  },
  CACHE_LOADED: function(e) {
var t;
e.guilds.length;
let {
  privateChannels: n,
  initialGuildChannels: r
} = e;
for (let e of [
    n,
    r
  ])
  for (let t of e)
    q((0, p.d7)((0, T._H)(t)));
let i = null === (t = r[0]) || void 0 === t ? void 0 : t.guild_id;
null != i && (R.fileOnly('Early cache contained full guild channels for '.concat(i)), G.add(i));
  },
  CHANNEL_CREATE: function(e) {
q(e.channel);
  },
  CHANNEL_DELETE: er,
  CHANNEL_RECIPIENT_ADD: function(e) {
let t = z(e.channelId),
  n = A.default.getId();
return (null == t ? !!void 0 : !!t.isPrivate()) && (q(t.addRecipient(e.user.id, e.nick, n)), !0);
  },
  CHANNEL_RECIPIENT_REMOVE: function(e) {
let t = z(e.channelId);
return (null == t ? !!void 0 : !!t.isPrivate()) && (q(t.removeRecipient(e.user.id)), !0);
  },
  CHANNEL_UPDATES: function(e) {
let t = e.channels.some(e => {
  let t = z(e.id);
  return e.nsfw !== (null == t ? void 0 : t.nsfw) || e.type !== (null == t ? void 0 : t.type);
});
for (let t of e.channels)
  q(t);
t && Object.values(M).forEach(e => q(e));
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
let {
  lazyPrivateChannels: t
} = e;
null != b && (L = {}, b.forEach(Q)), t.forEach(Q);
  },
  CONNECTION_OPEN: function(e) {
let t = D;
for (let n of (P = {}, y = {}, D = {}, M = {}, w = {}, F = {}, k = {}, B = Date.now(), b = e.initialPrivateChannels, e.initialPrivateChannels.forEach(Q), e.guilds))
  'partial' === n.dataMode && (l().forEach(t[n.id], $), R.fileOnly('Restoring guild channels for '.concat(n.id, ' #:').concat(eu(n.id)))), J(n);
eo();
  },
  GUILD_CREATE: function(e) {
J(e.guild);
  },
  GUILD_DELETE: function(e) {
R.fileOnly('GuildDelete of '.concat(e.guild.id)), W(e.guild.id), G.delete(e.guild.id), h.Z.invalidate(e.guild.id);
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: et,
  LOAD_CHANNELS: function(e) {
for (let {
    guildId: t,
    channels: n
  }
  of e.channels)
  for (let e of (R.fileOnly('Lazy loaded guild channels for '.concat(t)), (0, p.ZP)(n), G.add(t), h.Z.restored(t), n))
    !Object.hasOwn(y, e.id) && $((0, T._H)(e));
return !1;
  },
  LOAD_MESSAGES_AROUND_SUCCESS: ei,
  LOAD_MESSAGES_SUCCESS: ei,
  LOAD_THREADS_SUCCESS: et,
  LOGOUT: function() {
R.fileOnly('initializeClear()'), P = {}, y = {}, D = {}, w = {}, L = {}, F = {}, M = {}, G = new Set(), k = {}, B = Date.now();
  },
  OVERLAY_INITIALIZE: function(e) {
for (let t of (e.guilds.length, e.channels))
  q((0, p.d7)((0, T._H)(t)));
  },
  SEARCH_FINISH: ea,
  MOD_VIEW_SEARCH_FINISH: ea,
  THREAD_CREATE: ee,
  THREAD_DELETE: er,
  THREAD_LIST_SYNC: function(e) {
let {
  threads: t
} = e;
t.forEach(e => {
  T.AW.has(e.type) && q(e);
});
  },
  THREAD_UPDATE: ee
});