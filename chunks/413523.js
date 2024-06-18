"use strict";
n.d(t, {
  Yr: function() {
    return g
  },
  ZP: function() {
    return L
  },
  sI: function() {
    return i
  }
}), n(47120), n(724458), n(653041);
var i, r, s = n(392711),
  o = n(759174),
  a = n(586902),
  l = n(317381),
  u = n(569545),
  _ = n(199902),
  d = n(314897),
  c = n(523746),
  E = n(592125),
  I = n(131951),
  T = n(606304),
  h = n(594174),
  S = n(33039),
  f = n(979651),
  N = n(5192),
  A = n(933546),
  m = n(354459),
  O = n(981631),
  R = n(65154);

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let p = "__EMBEDDED_ACTIVITIES__";

function g(e) {
  switch (e.type) {
    case m.fO.ACTIVITY:
      return "\0".concat(e.sortKey);
    case m.fO.HIDDEN_STREAM:
    case m.fO.STREAM:
      return "".concat(e.userVideo ? "\x01" : "\x02").concat((0, A.Z)(e.userNick, e.user), "\x02");
    case m.fO.USER:
      var t, n;
      let i = "\x04";
      return (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? i = "\x02" : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfStream) && (i = "\x03"), "".concat(i).concat((0, A.Z)(e.userNick, e.user))
  }
}(r = i || (i = {})).VIDEO = "VIDEO", r.STREAM = "STREAM", r.FILTERED = "FILTERED", r.SPEAKING = "SPEAKING", r.ACTIVITY = "ACTIVITY";
class L {
  get version() {
    return this.participantByIndex.version
  }
  size(e) {
    return this.participantByIndex.size(e)
  }
  toArray(e) {
    return this.participantByIndex.values(e, !0)
  }
  rebuild() {
    let e = E.Z.getChannel(this.channelId);
    if (null == e || e.type === O.d4z.GUILD_TEXT) return !1;
    if (this.call = c.Z.getCall(this.channelId), e.isPrivate() && (null == this.call || this.call.unavailable)) return !1;
    let t = new Set(e.isGuildVocalOrThread() ? Object.keys(f.Z.getVoiceStatesForChannel(e.id)) : e.recipients);
    return t.add(d.default.getId()), _.Z.getAllActiveStreamsForChannel(this.channelId).forEach(e => {
      let {
        ownerId: n
      } = e;
      return t.add(n)
    }), this.participantByIndex.clear(), this.participants = {}, t.forEach(e => this.updateParticipant(e)), this.updateEmbeddedActivities(), !0
  }
  getParticipant(e) {
    var t;
    return null !== (t = this.participantByIndex.get(e)) && void 0 !== t ? t : null
  }
  updateEmbeddedActivities() {
    return this.updateParticipant(p)
  }
  hasEmbeddedActivity() {
    let e = this.participants[p];
    return null != e && e.length > 0
  }
  updateParticipant(e) {
    let t = this.participants[e],
      n = e === p ? this._getParticipantsForEmbeddedActivities() : this._getParticipantsForUser(e);
    return (null != t || 0 !== n.length) && (null == t || t.forEach(e => {
      this.participantByIndex.delete(e.id)
    }), n.forEach(e => {
      this.participantByIndex.set(e.id, e)
    }), this.participants[e] = n, !0)
  }
  updateParticipantSpeaking(e) {
    var t, n;
    return null !== (n = null === (t = this.participants[e]) || void 0 === t ? void 0 : t.reduce((t, n) => {
      if (n.type === m.fO.USER) {
        let t = (0, a.O)({
          userId: e,
          checkIsMuted: !0
        });
        return t && (this.lastSpoke[e] = Date.now()), this.participantByIndex.set(n.id, {
          ...n,
          speaking: t,
          lastSpoke: this.lastSpoke[e],
          soundsharing: T.Z.isSoundSharing(e)
        }), !0
      }
      return t
    }, !1)) && void 0 !== n && n
  }
  updateParticipantQuality(e, t, n) {
    var i, r;
    return null !== (r = null === (i = this.participants[e]) || void 0 === i ? void 0 : i.reduce((e, i) => i.type === m.fO.STREAM ? (this.participantByIndex.set(i.id, {
      ...i,
      maxResolution: t,
      maxFrameRate: n
    }), !0) : e, !1)) && void 0 !== r && r
  }
  _getEmbeddedActivities() {
    let e = l.ZP.getEmbeddedActivitiesForChannel(this.channelId),
      t = l.ZP.getSelfEmbeddedActivityForChannel(this.channelId);
    return null == t ? e : (0, s.uniqBy)([...e, t], e => e.applicationId)
  }
  _getParticipantsForEmbeddedActivities() {
    return this._getEmbeddedActivities().map((e, t) => {
      var n, i, r;
      return {
        type: m.fO.ACTIVITY,
        id: e.applicationId,
        activityType: O.IIU.PLAYING,
        activityUrl: e.url,
        participants: [...null !== (i = e.participants) && void 0 !== i ? i : []],
        guildId: null !== (r = null === (n = E.Z.getChannel(this.channelId)) || void 0 === n ? void 0 : n.getGuildId()) && void 0 !== r ? r : null,
        sortKey: t.toString()
      }
    })
  }
  _getParticipantsForUser(e) {
    var t, n, i, r, s, o;
    let l, c;
    let A = [],
      O = h.default.getUser(e);
    if (null == O) return A;
    let C = f.Z.getVoiceStateForChannel(this.channelId, e),
      p = f.Z.getVoicePlatformForChannel(this.channelId, e),
      g = E.Z.getChannel(this.channelId),
      L = null !== (i = null === (n = this.call) || void 0 === n ? void 0 : null === (t = n.ringing) || void 0 === t ? void 0 : t.includes(e)) && void 0 !== i && i;
    (null != C || L) && (l = {
      type: m.fO.USER,
      ...S.Z.getUserStreamData(e, null == g ? void 0 : g.getGuildId()),
      user: O,
      id: O.id,
      voiceState: C,
      voicePlatform: p,
      speaking: (0, a.O)({
        userId: e,
        checkIsMuted: !0
      }),
      lastSpoke: null !== (r = this.lastSpoke[e]) && void 0 !== r ? r : 0,
      soundsharing: T.Z.isSoundSharing(e),
      ringing: L,
      userNick: N.ZP.getName(null == g ? void 0 : g.getGuildId(), this.channelId, O),
      localVideoDisabled: I.Z.isLocalVideoDisabled(O.id)
    }, A.push(l));
    let v = null !== (s = _.Z.getStreamForUser(e, null == g ? void 0 : g.getGuildId())) && void 0 !== s ? s : _.Z.getActiveStreamForUser(e, null == g ? void 0 : g.getGuildId());
    if (null != v && v.channelId === this.channelId) {
      let t = (0, u.V9)(v),
        n = this.getParticipant(t),
        i = v.ownerId === d.default.getId() && _.Z.isSelfStreamHidden(this.channelId),
        r = (null == n ? void 0 : n.type) === m.fO.STREAM ? {
          maxResolution: null != n.maxResolution ? {
            ...n.maxResolution
          } : void 0,
          maxFrameRate: n.maxFrameRate
        } : null;
      c = {
        ...S.Z.getUserStreamData(e, null == g ? void 0 : g.getGuildId(), R.Yn.STREAM),
        ...r,
        type: i ? m.fO.HIDDEN_STREAM : m.fO.STREAM,
        id: t,
        userVideo: null !== (o = null == C ? void 0 : C.selfVideo) && void 0 !== o && o,
        user: O,
        userNick: N.ZP.getName(null == g ? void 0 : g.getGuildId(), this.channelId, O),
        stream: v
      }, A.push(c)
    }
    return A
  }
  constructor(e) {
    C(this, "channelId", void 0), C(this, "call", void 0), C(this, "participants", {}), C(this, "lastSpoke", {}), C(this, "participantByIndex", new o.h(e => {
      var t;
      let n = [];
      return e.type === m.fO.USER && e.speaking && n.push("SPEAKING"), e.type === m.fO.USER && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo) ? (n.push("VIDEO"), !e.localVideoDisabled && n.push("FILTERED")) : (0, m._5)(e) && (n.push("STREAM"), e.type !== m.fO.HIDDEN_STREAM && null != e.streamId && n.push("FILTERED")), e.type === m.fO.ACTIVITY && (n.push("ACTIVITY"), n.push("FILTERED")), n
    }, g)), this.channelId = e
  }
}