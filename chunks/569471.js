n(47120), n(789020);
var r, i, a, s, o = n(392711),
  l = n.n(o),
  u = n(442837),
  c = n(570140),
  d = n(798140),
  _ = n(131704),
  E = n(314897);
let f = {},
  h = new d.ZP(),
  p = new Set();

function m(e) {
  f = l()(f).reject(t => t.guildId === e).keyBy('threadId').value();
}

function I(e) {
  var t;
  null === (t = e.threads) || void 0 === t || t.forEach(T);
}

function T(e) {
  _.AW.has(e.type) && null != e.member && (f[e.id] = {
threadId: e.id,
guildId: e.guild_id,
flags: e.member.flags,
muted: e.member.muted,
muteConfig: e.member.muteConfig,
joinTimestamp: new Date(e.member.joinTimestamp)
  }, g(e.id));
}

function g(e) {
  let t = f[e];
  h.clearTimer(e), !0 === t.muted ? ((p = new Set(p)).add(e), h.setTimer(e, t.muteConfig, () => {
f[e].muted = !1, (p = new Set(p)).delete(e), N.emitChange();
  }) && (f[e].muted = !1, (p = new Set(p)).delete(e))) : (p = new Set(p)).delete(e);
}

function S(e) {
  let {
guildId: t,
members: n
  } = e;
  null != t && null != n && n.forEach(e => {
f[e.id] = {
  threadId: e.id,
  guildId: t,
  flags: e.flags,
  muted: e.muted,
  muteConfig: e.muteConfig,
  joinTimestamp: new Date(e.joinTimestamp)
}, g(e.id);
  });
}
class A extends(r = u.ZP.Store) {
  hasJoined(e) {
return e in f;
  }
  joinTimestamp(e) {
var t;
return null === (t = f[e]) || void 0 === t ? void 0 : t.joinTimestamp;
  }
  flags(e) {
var t;
return null === (t = f[e]) || void 0 === t ? void 0 : t.flags;
  }
  getInitialOverlayState() {
return Object.values(f);
  }
  getMuteConfig(e) {
var t;
return null === (t = f[e]) || void 0 === t ? void 0 : t.muteConfig;
  }
  getMutedThreads() {
return p;
  }
  isMuted(e) {
return p.has(e);
  }
}
s = 'JoinedThreadsStore', (a = 'displayName') in(i = A) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s;
let N = new A(c.Z, {
  CONNECTION_OPEN: function(e) {
h.reset(), p = new Set(), f = {}, e.guilds.forEach(e => {
  I(e);
});
  },
  OVERLAY_INITIALIZE: function(e) {
let {
  joinedThreads: t
} = e;
f = l()(t).map(e => ({
  ...e,
  joinTimestamp: new Date(e.joinTimestamp)
})).keyBy('threadId').value();
  },
  GUILD_CREATE: function(e) {
let {
  guild: t
} = e;
m(t.id), I(t);
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
m(t.id);
  },
  THREAD_CREATE: function(e) {
let {
  channel: t
} = e;
T(t);
  },
  THREAD_LIST_SYNC: S,
  SEARCH_FINISH: S,
  MOD_VIEW_SEARCH_FINISH: S,
  LOAD_THREADS_SUCCESS: S,
  LOAD_ARCHIVED_THREADS_SUCCESS: S,
  THREAD_DELETE: function(e) {
let {
  channel: t
} = e;
if (!(t.id in f))
  return !1;
f = {
  ...f
}, delete f[t.id];
  },
  THREAD_MEMBER_UPDATE: function(e) {
if (E.default.getId() !== e.userId)
  return !1;
f[e.id] = {
  threadId: e.id,
  guildId: e.guildId,
  flags: e.flags,
  muted: e.muted,
  muteConfig: e.muteConfig,
  joinTimestamp: new Date(e.joinTimestamp)
}, g(e.id);
  },
  THREAD_MEMBER_LOCAL_UPDATE: function(e) {
let {
  id: t,
  userId: n,
  guildId: r,
  isJoining: i
} = e;
if (E.default.getId() !== n || null === r)
  return !1;
i ? f[t] = {
  threadId: t,
  guildId: r,
  flags: 0,
  muted: !0,
  muteConfig: {
    end_time: void 0
  },
  joinTimestamp: new Date()
} : delete f[t];
  },
  THREAD_MEMBERS_UPDATE: function(e) {
var t, n;
let r = !1;
return (null === (t = e.removedMemberIds) || void 0 === t ? void 0 : t.includes(E.default.getId())) && e.id in f && (f = {
  ...f
}, delete f[e.id], r = !0), null === (n = e.addedMembers) || void 0 === n || n.forEach(t => {
  t.userId === E.default.getId() && ((f = {
    ...f
  })[e.id] = {
    threadId: e.id,
    guildId: e.guildId,
    flags: t.flags,
    muted: t.muted,
    muteConfig: t.muteConfig,
    joinTimestamp: new Date(t.joinTimestamp)
  }, g(e.id), r = !0);
}), r;
  }
});
t.Z = N;