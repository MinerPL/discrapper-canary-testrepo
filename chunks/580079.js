n(653041), n(47120), n(724458);
var i, s, a, r, l = n(392711),
  o = n.n(l),
  c = n(442837),
  d = n(570140),
  u = n(592125);
n(914010);
var _ = n(709054),
  h = n(176505);
let E = {},
  I = {},
  m = {},
  g = {};

function p(e) {
  let t = I[e];
  if (null == t)
return;
  let n = _.default.fromTimestamp(Date.now() - 900000),
i = o().findIndex(t, e => _.default.compare(e.id, n) > 0);
  if (-1 === i)
I[e] = [];
  else {
let n = Math.max(i, t.length - 26);
I[e] = o().slice(t, n);
  }
  m[e] = Date.now();
}

function T(e, t, n, i) {
  E[e].add(t);
  let s = m[t];
  (null == s || s + 300000 > Date.now()) && p(t), null == I[t] && (I[t] = []), I[t].push({
id: n,
userId: i
  });
}

function S(e) {
  let {
channel: t
  } = e;
  delete I[t.id], delete m[t.id];
}
class C extends(i = c.ZP.Store) {
  getActiveChannelsFetchStatus(e) {
return g[e];
  }
  getActiveChannelIds(e) {
return E[e];
  }
  getChannelMessageData(e) {
return I[e];
  }
  shouldFetch(e) {
var t;
return null == E[e] && !(null === (t = g[e]) || void 0 === t ? void 0 : t.loading);
  }
}
r = 'ActiveChannelsStore', (a = 'displayName') in(s = C) ? Object.defineProperty(s, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = r, new C(d.Z, {
  CHANNEL_SELECT: function(e) {
let {
  channelId: t,
  guildId: n
} = e;
if (!(0, h.ME)(t) || null == n)
  return !1;
let i = E[n];
if (null == i)
  return !1;
i.forEach(e => {
  var t;
  p(e), (null === (t = I[e]) || void 0 === t ? void 0 : t.length) === 0 && delete I[e];
});
let s = o().chain(Array.from(i)).filter(e => e in I).sortBy(e => {
  var t, n;
  return -(null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0);
}).value();
E[n] = new Set(s);
  },
  MESSAGE_CREATE: function(e) {
var t;
let {
  channelId: n,
  message: i,
  optimistic: s,
  isPushNotification: a
} = e;
if (s || a)
  return !1;
let r = u.Z.getChannel(n);
if (null == r)
  return !1;
let l = r.guild_id;
if (null == l || null == E[l])
  return !1;
T(l, n, i.id, null === (t = i.author) || void 0 === t ? void 0 : t.id);
  },
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
delete E[t.id];
  },
  CHANNEL_DELETE: S,
  THREAD_DELETE: S,
  ACTIVE_CHANNELS_FETCH_START: function(e) {
let {
  guildId: t
} = e;
g[t] = {
  loading: !0,
  error: null,
  fetchedAt: Date.now()
};
  },
  ACTIVE_CHANNELS_FETCH_SUCCESS: function(e) {
let {
  guildId: t,
  channels: n
} = e;
g[t] = {
  loading: !1,
  error: null,
  fetchedAt: Date.now()
}, E[t] = new Set(), n.forEach(e => {
  let {
    channel_id: n,
    messages: i
  } = e;
  i.forEach(e => {
    T(t, n, e.message_id, e.user_id);
  });
});
  },
  ACTIVE_CHANNELS_FETCH_FAILURE: function(e) {
let {
  guildId: t,
  error: n
} = e;
g[t] = {
  loading: !1,
  error: n,
  fetchedAt: null
};
  },
  CONNECTION_OPEN: function() {}
});