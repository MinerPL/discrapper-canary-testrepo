t(47120), t(724458);
var r, u, l, i, c = t(286379),
  a = t(442837),
  o = t(570140),
  s = t(642047),
  d = t(797614),
  f = t(413402),
  Z = t(189786),
  C = t(5192),
  E = t(592125),
  g = t(19780),
  S = t(594174),
  h = t(979651),
  N = t(938475),
  T = t(981631),
  I = t(354459);
let _ = new s.Z(),
  y = new s.Z(),
  p = new Set(),
  m = !1;

function v(e, n, t) {
  let r = new Z.Z({
  userId: e.id,
  channelId: t
}),
u = (0, N.PH)(r, null != n ? n : T.ME, e.id);
  _.set(e.id, u);
  let l = {
type: I.fO.USER,
user: e,
id: e.id,
streamId: null,
voiceState: r,
voicePlatform: null,
speaking: !1,
lastSpoke: 0,
soundsharing: !1,
ringing: !1,
userNick: C.ZP.getName(n, t, e),
localVideoDisabled: !1
  };
  y.set(e.id, l);
}

function O(e) {
  let n = _.delete(e),
t = y.delete(e),
r = p.delete(e);
  return n || t || r;
}

function R() {
  var e;
  let n = g.Z.getChannelId();
  if (null == n)
return !1;
  let t = null === (e = E.Z.getChannel(n)) || void 0 === e ? void 0 : e.getGuildId(),
r = !1;
  return p.forEach(e => {
if (null != h.Z.getVoiceStateForChannel(n, e)) {
  p.delete(e);
  return;
}
let u = S.default.getUser(e);
null != u && (r = !0, p.delete(e), v(u, t, n));
  }), r;
}

function V() {
  _.clear(), y.clear(), p.clear();
}
class D extends(r = a.ZP.Store) {
  initialize() {
this.waitFor(h.Z, S.default, E.Z, g.Z), this.syncWith([S.default], R);
  }
  get desyncedVoiceStatesCount() {
return _.size();
  }
  getDesyncedUserIds() {
return _.keys();
  }
  getDesyncedVoiceStates() {
return _.values();
  }
  getDesyncedParticipants() {
return y.values();
  }
}
i = 'RTCConnectionDesyncStore', (l = 'displayName') in(u = D) ? Object.defineProperty(u, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[l] = i, n.Z = new D(o.Z, {
  CONNECTION_OPEN: function() {
m = (0, f.i)(), V();
  },
  VOICE_CHANNEL_SELECT: V,
  RTC_CONNECTION_STATE: function(e) {
let {
  state: n
} = e;
if (n !== T.hes.DISCONNECTED)
  return !1;
V();
  },
  VOICE_STATE_UPDATES: function(e) {
let {
  voiceStates: n
} = e, t = g.Z.getChannelId();
return null != t && n.reduce((e, n) => {
  let {
    userId: r,
    channelId: u
  } = n;
  return u === t && !!O(r) || e;
}, !1);
  },
  RTC_CONNECTION_CLIENT_CONNECT: function(e) {
let {
  userIds: n,
  guildId: t,
  channelId: r
} = e;
return n.reduce((e, n) => {
  if (null != h.Z.getVoiceStateForChannel(r, n))
    return e;
  let u = S.default.getUser(n);
  return null == u ? (null == t && m && d.Z.increment({
    name: c.V.RTC_CONNECTION_DESYNC_STORE_UNKNOWN_USER
  }), p.add(n), e) : (v(u, t, r), !0);
}, !1);
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
let {
  userId: n
} = e;
return O(n);
  }
});