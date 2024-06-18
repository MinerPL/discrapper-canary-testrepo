"use strict";
let i, r;
n(724458);
var s, o, a, l, u = n(442837),
  _ = n(433517),
  d = n(570140),
  c = n(592125),
  E = n(430824);
let I = "hideSuppressWarning",
  T = !1,
  h = !0,
  S = !1;
class f extends(s = u.ZP.Store) {
  initialize() {
    S = _.K.get(I) || S
  }
  isAFKChannel() {
    let e = c.Z.getChannel(r);
    if (null == e) return !1;
    let t = E.Z.getGuild(e.getGuildId());
    return null != t && e.id === t.afkChannelId
  }
  shouldShowWarning() {
    var e;
    return !(null === (e = c.Z.getChannel(r)) || void 0 === e ? void 0 : e.isGuildStageVoice()) && !h
  }
}
l = "PermissionSpeakStore", (a = "displayName") in(o = f) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new f(d.Z, {
  CONNECTION_OPEN: function(e) {
    i = e.sessionId, T = !1
  },
  CONNECTION_CLOSED: function() {
    i = null, r = null, h = !0
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => i !== t.sessionId ? e : (T !== t.suppress && (h = !(T = t.suppress)), r !== t.channelId && (r = t.channelId, h = !T), (S || null == t.channelId) && (h = !0), !0), !1)
  },
  PERMISSION_CLEAR_SUPPRESS_WARNING: function(e) {
    let {
      forever: t
    } = e;
    h = !0, t && (S = !0, _.K.set(I, S))
  }
})