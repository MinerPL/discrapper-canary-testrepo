let r, i, a, o, s, l, u;
n.d(t, {
  C: function() {
return F;
  }
}), n(47120), n(724458);
var c, d, _, E, f = n(392711),
  h = n.n(f),
  p = n(442837),
  m = n(433517),
  I = n(570140),
  T = n(57132),
  g = n(703656),
  S = n(131704),
  A = n(823379),
  N = n(314897),
  v = n(592125),
  O = n(984933),
  R = n(430824),
  C = n(131951),
  y = n(914010),
  D = n(981631),
  L = n(176505);
let b = 'SelectedChannelStore',
  M = {},
  P = {},
  U = {},
  w = new Set();

function x(e) {
  return String(e);
}

function G() {
  !__OVERLAY__ && m.K.set(b, {
selectedChannelId: a,
selectedVoiceChannelId: s,
lastChannelFollowingDestination: o,
lastConnectedTime: l,
selectedChannelIds: M,
mostRecentSelectedTextChannelIds: U,
knownThreadIds: h()(M).values().concat(h().values(U)).filter(A.lm).uniq().filter(e => {
  let t = v.Z.getBasicChannel(e);
  return w.has(e) || null != t && S.Ec.has(t.type);
}).value()
  });
}

function k(e) {
  if (null != e) {
let t = O.ZP.getDefaultChannel(e);
if (null != t)
  return t.id;
  }
}

function B(e, t) {
  if (null == e || null == t || U[e] === t)
return !1;
  let n = v.Z.getChannel(t),
r = null != n && (0, S.zi)(n.type),
i = (null == n ? void 0 : n.getGuildId()) === e;
  return !!r && !!i && (U[e] = t, !0);
}

function F(e) {
  let t = v.Z.getMutableBasicGuildChannelsForGuild(e),
n = h().find(t, e => e.type === D.d4z.GUILD_VOICE);
  return null == n ? void 0 : n.id;
}

function V() {
  let e = !1,
t = R.Z.getGuilds();
  return h().each(M, (t, n) => {
(null == t || !v.Z.hasChannel(t) && t !== a && !w.has(t) && !(0, L.ME)(t)) && (delete M[n], delete P[n], e = !0);
  }), h().each(U, (t, n) => {
(null == t || !v.Z.hasChannel(t) && !w.has(t)) && (delete U[n], e = !0);
  }), h().each(t, e => {
let t = M[e.id];
null == U[e.id] && B(e.id, t);
  }), null != l && Date.now() - l >= 300000 && (s = null, e = !0), e;
}

function H(e, t) {
  if (w.delete(e), null == t) {
let n = y.Z.getGuildId();
M[x(n)] === e && (t = n);
  }
  let n = null != R.Z.getGuild(t) ? t : null,
r = !1;
  s === e && (s = null, r = !0), !(0, T.cn)() && (M[x(n)] === e && (M[x(n)] = k(x(n)), y.Z.getGuildId() === n && (0, g.dL)(D.Z5c.CHANNEL(t, M[x(n)])), r = !0), null != n && U[n] === e && (delete U[n], r = !0)), r && G();
}

function Z(e) {
  let {
channel: {
  id: t,
  guild_id: n
}
  } = e;
  H(t, n);
}
class Y extends(c = p.ZP.Store) {
  initialize() {
if (!__OVERLAY__) {
  var e, t;
  let n = null !== (e = m.K.get(b)) && void 0 !== e ? e : {
    selectedChannelId: a,
    selectedVoiceChannelId: s,
    lastChannelFollowingDestination: o,
    lastConnectedTime: l,
    selectedChannelIds: M,
    mostRecentSelectedTextChannelIds: U
  };
  null != n.knownThreadIds && (w = new Set(n.knownThreadIds)), s = n.selectedVoiceChannelId, o = n.lastChannelFollowingDestination, l = n.lastConnectedTime, U = null !== (t = n.mostRecentSelectedTextChannelIds) && void 0 !== t ? t : {}, null != n.selectedChannelIds && (M = {
    ...n.selectedChannelIds,
    null: null
  });
}
this.mustEmitChanges(e => 'CONNECTION_OPEN' !== e.type && 'VOICE_STATE_UPDATES' !== e.type), this.waitFor(R.Z, v.Z, y.Z, O.ZP, C.Z);
  }
  getChannelId(e) {
var t, n;
let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
  i = x(e === D.ME ? null : null !== (t = null != e ? e : y.Z.getGuildId()) && void 0 !== t ? t : null);
return r ? null !== (n = M[i]) && void 0 !== n ? n : k(i) : M[i];
  }
  getVoiceChannelId() {
return C.Z.isSupported() ? s : null;
  }
  getMostRecentSelectedTextChannelId(e) {
var t;
return null == e ? null : null !== (t = U[e]) && void 0 !== t ? t : null;
  }
  getCurrentlySelectedChannelId(e) {
return null != e ? M[e] : a;
  }
  getLastSelectedChannelId(e) {
return null != e ? P[e] : i;
  }
  getLastSelectedChannels(e) {
return P[e];
  }
  getLastChannelFollowingDestination() {
return o;
  }
}
E = 'SelectedChannelStore', (_ = 'displayName') in(d = Y) ? Object.defineProperty(d, _, {
  value: E,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[_] = E, t.Z = new Y(I.Z, {
  CONNECTION_OPEN: function(e) {
r = e.sessionId, null != s && null == v.Z.getChannel(s) && (s = null), V() && G();
  },
  OVERLAY_INITIALIZE: function(e) {
r = e.sessionId, s = e.selectedVoiceChannelId, M = {}, P = {}, a = e.selectedChannelId, M[e.selectedGuildId] = e.selectedChannelId, B(e.selectedGuildId, a), V();
  },
  CONNECTION_CLOSED: function() {
r = null;
  },
  CHANNEL_SELECT: function(e) {
let {
  guildId: t,
  channelId: n
} = e;
if (void 0 === t)
  return !1;
null == n && (n = k(t)), null != a && n !== a && (i = a), a = n, B(t, n), M[x(t)] !== n && (P[x(t)] = M[x(t)], M[x(t)] = a), G();
  },
  CHANNEL_CREATE: function(e) {
let {
  channel: t
} = e;
switch (t.type) {
  case D.d4z.GUILD_ANNOUNCEMENT:
  case D.d4z.GUILD_TEXT:
    let n = t.guild_id;
    if (null != n && null == U[n] && (U[n] = t.id), null != n && null == M[n])
      return M[n] = k(n), !0;
}
return !1;
  },
  CHANNEL_DELETE: Z,
  CHANNEL_UPDATES: function(e) {
let {
  channels: t
} = e;
for (let e of t)
  e.isScheduledForDeletion() && H(e.id, e.guild_id);
  },
  THREAD_DELETE: Z,
  GUILD_CREATE: function(e) {
let {
  guild: t
} = e;
if (null == M[t.id]) {
  let e = k(t.id);
  M[t.id] = e, B(t.id, e), G();
}
  },
  GUILD_DELETE: function(e) {
let {
  guild: {
    id: t,
    unavailable: n
  }
} = e;
if (s === M[t] && (s = null), n)
  return !1;
delete U[t], delete M[t], G();
  },
  VOICE_CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
if (null == t) {
  let e = v.Z.getChannel(s),
    t = null == e ? void 0 : e.guild_id;
  null != t && t !== y.Z.getGuildId() && M[t] === s && (M[t] = k(t));
}
s = t, G();
  },
  VOICE_STATE_UPDATES: function(e) {
let {
  voiceStates: t
} = e;
return t.reduce((e, t) => {
  var n, i, a;
  if (t.sessionId === r) {
    clearInterval(u);
    let e = null === (n = v.Z.getChannel(s)) || void 0 === n ? void 0 : n.getGuildId();
    t.guildId !== e && null == t.channelId || (s = t.channelId), l = Date.now(), null != s && (u = setInterval(() => {
      l = Date.now(), G();
    }, 60000)), G();
  } else {
    if (t.userId !== N.default.getId())
      return e;
    clearInterval(u), u = void 0, l = 0;
    let n = null === (i = v.Z.getChannel(s)) || void 0 === i ? void 0 : i.getGuildId(),
      r = null === (a = v.Z.getChannel(t.channelId)) || void 0 === a ? void 0 : a.getGuildId();
    (null != n && r === n || s === t.channelId) && (s = null), G();
  }
  return !0;
}, !1);
  },
  CHANNEL_FOLLOWER_CREATED: function(e) {
let {
  channelId: t,
  guildId: n
} = e;
(null == o || t !== o.channelId) && (o = {
  channelId: t,
  guildId: n
}, G());
  },
  LOGOUT: function() {
M = {}, a = null, i = void 0, U = {}, o = {}, s = null, m.K.remove(b);
  }
});