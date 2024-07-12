n.d(t, {
  Ui: function() {
return i;
  },
  ZP: function() {
return y;
  },
  pV: function() {
return r;
  }
}), n(653041), n(47120);
var r, i, a, o, s = n(759174),
  l = n(933546),
  u = n(569545),
  c = n(199902),
  d = n(592125),
  _ = n(720202),
  E = n(271383),
  f = n(699516),
  h = n(594174),
  p = n(979651),
  m = n(5192),
  I = n(88751),
  T = n(427679),
  g = n(590415),
  S = n(974609),
  A = n(981631);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}

function v(e) {
  var t;
  let {
speaker: n,
role: r,
user: i,
userNick: a,
connectedOn: o,
voiceState: s,
type: u
  } = e, c = s.selfMute ? '\x01' : '\0', d = s.selfVideo ? '\0' : '\x01', _ = ''.concat(null !== (t = null == r ? void 0 : r.position) && void 0 !== t ? t : 999).padStart(3, '0');
  return ''.concat(n ? '\0' : '\x01').concat('STREAM' === u ? '\0' : '\x01').concat(c).concat(d).concat(_).concat(o).concat((0, l.Z)(a, i));
}

function O(e) {
  let {
user: t,
voiceState: n
  } = e, r = n.requestToSpeakTimestamp;
  return null == r ? t.id : ''.concat(Date.parse(r)).concat(t.id);
}

function R(e) {
  return e === g.xO.REQUESTED_TO_SPEAK || e === g.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
}

function C(e) {
  let {
speaker: t,
role: n,
rtsState: r,
blocked: i,
isFriend: a
  } = e, o = [];
  return R(r) && o.push('ALL_REQUESTED_TO_SPEAK'), r === g.xO.REQUESTED_TO_SPEAK && o.push('REQUESTED_TO_SPEAK_ONLY'), t ? o.push('SPEAKER') : (null != n ? o.push(n.id) : o.push('NO_ROLE'), o.push('AUDIENCE')), i && o.push('BLOCKED'), a && o.push('FRIEND'), o;
}
(a = r || (r = {})).SPEAKER = 'SPEAKER', a.AUDIENCE = 'AUDIENCE', a.NO_ROLE = 'NO_ROLE', a.ALL_REQUESTED_TO_SPEAK = 'ALL_REQUESTED_TO_SPEAK', a.REQUESTED_TO_SPEAK_ONLY = 'REQUESTED_TO_SPEAK_ONLY', a.BLOCKED = 'BLOCKED', a.FRIEND = 'FRIEND', a.SELECTED = 'SELECTED', a.MEDIA = 'MEDIA', (o = i || (i = {})).VOICE = 'VOICE', o.STREAM = 'STREAM';
class y {
  _getParticipantsForUser(e, t) {
var n, r;
let i;
let a = [],
  o = p.Z.getVoiceStateForChannel(this.channelId, e);
if (null == o)
  return a;
let s = h.default.getUser(e);
if (null == s)
  return null != this.guildId && T.Z.isPublic(this.channelId) && _.Z.requestMember(this.guildId, e), a;
let l = null != t ? t[0] : null,
  d = {
    user: s,
    userNick: m.ZP.getName(this.guildId, this.channelId, s),
    voiceState: o,
    role: (0, S.H)(this.guildId, e),
    speaker: I.ZP.isSpeaker(e, this.channelId),
    member: null != this.guildId ? E.ZP.getMember(this.guildId, e) : null,
    blocked: f.Z.getRelationships()[s.id] === A.OGo.BLOCKED,
    isFriend: f.Z.isFriend(s.id),
    connectedOn: null !== (n = null == l ? void 0 : l.connectedOn) && void 0 !== n ? n : Date.now()
  },
  N = {
    ...d,
    type: 'VOICE',
    id: s.id,
    rtsState: (0, g.gf)(o)
  };
a.push(N);
let v = null !== (r = c.Z.getStreamForUser(e, this.guildId)) && void 0 !== r ? r : c.Z.getActiveStreamForUser(e, this.guildId);
if (null != v && v.channelId === this.channelId) {
  let e = (0, u.V9)(v);
  i = {
    ...d,
    id: e,
    type: 'STREAM',
    rtsState: g.xO.NONE
  }, a.push(i);
}
return a;
  }
  updateParticipant(e) {
let t = this.participants[e],
  n = this._getParticipantsForUser(e, t);
return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
  this._participantsIndex.delete(e.id), this._requestToSpeakIndex.delete(e.id);
}), n.forEach(t => {
  this._participantsIndex.set(t.id, t), t.id === e && R(t.rtsState) ? this._requestToSpeakIndex.set(e, t) : this._requestToSpeakIndex.delete(e);
}), this.participants[e] = n, !0);
  }
  rebuild() {
let e = d.Z.getChannel(this.channelId);
if (null == e || !e.isGuildStageVoice())
  return !1;
let t = new Set(Object.keys(p.Z.getVoiceStatesForChannel(e.id)));
return this._participantsIndex.clear(), this._requestToSpeakIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), !0;
  }
  get version() {
return this._participantsIndex.version;
  }
  size(e) {
return this._participantsIndex.size(e);
  }
  toArray(e) {
return this._participantsIndex.values(e, !0);
  }
  getParticipant(e) {
var t;
return null !== (t = this._participantsIndex.get(e)) && void 0 !== t ? t : null;
  }
  get requestToSpeakVersion() {
return this._requestToSpeakIndex.version;
  }
  getRequestToSpeakParticipants() {
return this._requestToSpeakIndex.values(void 0, !0);
  }
  constructor(e) {
var t;
N(this, 'channelId', void 0), N(this, 'guildId', void 0), N(this, 'participants', {}), N(this, '_participantsIndex', new s.h(C, v)), N(this, '_requestToSpeakIndex', new s.h(() => [], O)), this.channelId = e, this.guildId = null === (t = d.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId();
  }
}