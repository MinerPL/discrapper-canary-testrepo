"use strict";
n(47120), n(789020), n(724458);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(700785),
  _ = n(592125),
  d = n(131951),
  c = n(19780),
  E = n(944486),
  I = n(981631),
  T = n(65154);
let h = new Map,
  S = null,
  f = null,
  N = null;

function A(e, t) {
  let n = h.get(e);
  if (null == n) return !1;
  let i = n.delete(t);
  return 0 === n.size && h.delete(e), i
}

function m(e, t, n) {
  var i, r, s;
  return ((null !== (s = null === (r = h.get(e)) || void 0 === r ? void 0 : null === (i = r.get(t)) || void 0 === i ? void 0 : i.flags) && void 0 !== s ? s : T.Dg.NONE) & n) === n
}

function O(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = h.get(e);
  if (null == i) return !1;
  for (let [e, {
      flags: r
    }] of i) {
    if (!n || e !== S) {
      if ((r & t) === t) return !0
    }
  }
  return !1
}

function R(e) {
  let {
    user: t,
    sessionId: n
  } = e;
  S = t.id, f = n, N = null
}
class C extends(i = a.ZP.Store) {
  initialize() {
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(c.Z)
  }
  getSpeakingDuration(e, t) {
    var n, i;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T.Yn.DEFAULT,
      s = null === (i = h.get(r)) || void 0 === i ? void 0 : null === (n = i.get(e)) || void 0 === n ? void 0 : n.since;
    return null != s ? t - s : 0
  }
  getSpeakers() {
    var e, t;
    let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Yn.DEFAULT;
    return Array.from(null !== (t = null === (e = h.get(n)) || void 0 === e ? void 0 : e.keys()) && void 0 !== t ? t : []).filter(e => m(n, e, T.Dg.VOICE))
  }
  isSpeaking(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.Yn.DEFAULT;
    return m(t, e, T.Dg.VOICE)
  }
  isPrioritySpeaker(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.Yn.DEFAULT;
    return m(t, e, T.Dg.PRIORITY)
  }
  isSoundSharing(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.Yn.DEFAULT;
    return m(t, e, T.Dg.SOUNDSHARE)
  }
  isAnyoneElseSpeaking() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Yn.DEFAULT;
    return O(e, T.Dg.VOICE, !0)
  }
  isCurrentUserSpeaking() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Yn.DEFAULT;
    return null != S && this.isSpeaking(S, e)
  }
  isAnyonePrioritySpeaking() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Yn.DEFAULT;
    return O(e, T.Dg.VOICE | T.Dg.PRIORITY)
  }
  isCurrentUserPrioritySpeaking() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Yn.DEFAULT;
    return null != S && this.isPrioritySpeaker(S, e) && this.isSpeaking(S, e)
  }
}
o = "SpeakingStore", (s = "displayName") in(r = C) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new C(l.Z, {
  CONNECTION_OPEN: R,
  OVERLAY_INITIALIZE: R,
  SPEAKING: function(e) {
    let {
      context: t,
      userId: n,
      speakingFlags: i
    } = e;
    if ((i & T.Dg.PRIORITY) === T.Dg.PRIORITY) {
      let e = _.Z.getChannel(E.Z.getVoiceChannelId());
      null != e && u.BT({
        permission: I.Plq.PRIORITY_SPEAKER,
        user: n,
        context: e
      }) ? d.Z.setCanHavePriority(n, !0) : (d.Z.setCanHavePriority(n, !1), i &= ~T.Dg.PRIORITY)
    }
    return function(e, t, n) {
      var i, r;
      let s = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.Yn.DEFAULT,
            t = h.get(e);
          return null == t && (t = new Map, h.set(e, t)), t
        }(e),
        o = s.get(t),
        a = null !== (i = null == o ? void 0 : o.flags) && void 0 !== i ? i : 0;
      if (0 === a && 0 === n) return !1;
      if (0 === n) s.delete(t), 0 === s.size && h.delete(e);
      else {
        let e = null !== (r = null == o ? void 0 : o.since) && void 0 !== r ? r : null,
          i = (a & T.Dg.VOICE) === T.Dg.VOICE,
          l = (n & T.Dg.VOICE) === T.Dg.VOICE;
        i !== l && (e = l ? Date.now() : null), s.set(t, {
          flags: n,
          since: e
        })
      }
      return !0
    }(t, n, i)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let {
        userId: n,
        channelId: i,
        sessionId: r
      } = t, s = !1, o = N;
      return n === S && r === f && (N = null != i ? i : null), o !== N && (s = h.delete(T.Yn.DEFAULT) || s), null == i ? s = n === S && r === f ? h.delete(T.Yn.DEFAULT) || s : A(T.Yn.DEFAULT, n) || s : n === S && r !== f ? s = h.delete(T.Yn.DEFAULT) || s : n !== S && i !== c.Z.getChannelId() && (s = A(T.Yn.DEFAULT, n) || s), s || e
    }, !1)
  }
})