t(47120), t(724458);
var r, u, l, i, c = t(286379),
  a = t(442837),
  o = t(570140),
  s = t(642047),
  d = t(797614),
  f = t(413402),
  C = t(189786),
  Z = t(5192),
  E = t(592125),
  g = t(19780),
  h = t(594174),
  N = t(979651),
  I = t(938475),
  S = t(981631),
  T = t(354459);
let _ = new s.Z(),
  m = new s.Z(),
  p = new Set(),
  v = !1;

function y(e, n, t) {
  let r = new C.Z({
  userId: e.id,
  channelId: t
}),
u = (0, I.PH)(r, null != n ? n : S.ME, e.id);
  _.set(e.id, u);
  let l = {
type: T.fO.USER,
user: e,
id: e.id,
streamId: null,
voiceState: r,
voicePlatform: null,
speaking: !1,
lastSpoke: 0,
soundsharing: !1,
ringing: !1,
userNick: Z.ZP.getName(n, t, e),
localVideoDisabled: !1
  };
  m.set(e.id, l);
}

function O(e) {
  let n = _.delete(e),
t = m.delete(e),
r = p.delete(e);
  return n || t || r;
}

function D() {
  var e;
  let n = g.Z.getChannelId();
  if (null == n)
return !1;
  let t = null === (e = E.Z.getChannel(n)) || void 0 === e ? void 0 : e.getGuildId(),
r = !1;
  return p.forEach(e => {
if (null != N.Z.getVoiceStateForChannel(n, e)) {
  p.delete(e);
  return;
}
let u = h.default.getUser(e);
null != u && (r = !0, p.delete(e), y(u, t, n));
  }), r;
}

function b() {
  _.clear(), m.clear(), p.clear();
}
class V extends(r = a.ZP.Store) {
  initialize() {
this.waitFor(N.Z, h.default, E.Z, g.Z), this.syncWith([h.default], D);
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
return m.values();
  }
}
i = 'RTCConnectionDesyncStore', (l = 'displayName') in(u = V) ? Object.defineProperty(u, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[l] = i, n.Z = new V(o.Z, {
  CONNECTION_OPEN: function() {
v = (0, f.i)(), b();
  },
  VOICE_CHANNEL_SELECT: b,
  RTC_CONNECTION_STATE: function(e) {
let {
  state: n
} = e;
if (n !== S.hes.DISCONNECTED)
  return !1;
b();
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
  if (null != N.Z.getVoiceStateForChannel(r, n))
    return e;
  let u = h.default.getUser(n);
  return null == u ? (null == t && v && d.Z.increment({
    name: c.V.RTC_CONNECTION_DESYNC_STORE_UNKNOWN_USER
  }), p.add(n), e) : (y(u, t, r), !0);
}, !1);
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function(e) {
let {
  userId: n
} = e;
return O(n);
  }
});