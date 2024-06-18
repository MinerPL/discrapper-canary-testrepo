"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(287734),
  _ = n(579806),
  d = n(695346),
  c = n(70956),
  E = n(358085),
  I = n(314897),
  T = n(981631),
  h = n(65154);
let S = Date.now(),
  f = !1,
  N = !1,
  A = !1,
  m = !1,
  O = !1;

function R() {
  return A || m || (0, E.isAndroid)() && O
}

function C() {
  Date.now() - S > T.OSm || R() ? f || l.Z.dispatch({
    type: "IDLE",
    idle: !0,
    idleSince: S
  }) : f && l.Z.dispatch({
    type: "IDLE",
    idle: !1
  }), Date.now() - S > Math.min(d.CM.getSetting() * c.Z.Millis.SECOND, T.OSm) || R() ? N || l.Z.dispatch({
    type: "AFK",
    afk: !0
  }) : N && l.Z.dispatch({
    type: "AFK",
    afk: !1
  })
}!__OVERLAY__ && (E.isPlatformEmbedded && (null === _.Z || void 0 === _.Z ? void 0 : _.Z.remotePowerMonitor) != null ? (! function e() {
  var t;
  let n = t => {
    S = Math.max(Date.now() - t, S), C(), setTimeout(e, 10 * c.Z.Millis.SECOND)
  };
  if ((null === _.Z || void 0 === _.Z ? void 0 : null === (t = _.Z.remotePowerMonitor) || void 0 === t ? void 0 : t.getSystemIdleTimeMs) != null) {
    let e = _.Z.remotePowerMonitor.getSystemIdleTimeMs();
    e instanceof Promise ? e.then(n) : n(e)
  }
}(), _.Z.remotePowerMonitor.on("resume", () => {
  A = !1, p({})
}), _.Z.remotePowerMonitor.on("suspend", () => {
  A = !0, p({}), u.default.disconnect()
}), _.Z.remotePowerMonitor.on("lock-screen", () => {
  m = !0, p({})
}), _.Z.remotePowerMonitor.on("unlock-screen", () => {
  m = !1, p({})
})) : setInterval(C, .25 * T.OSm));

function p(e) {
  let {
    timestamp: t,
    type: n
  } = e, i = "OVERLAY_SET_NOT_IDLE" === n && null != t;
  return (!i || !(t <= S)) && (S = i ? t : Date.now(), __OVERLAY__ ? l.Z.dispatch({
    type: "OVERLAY_SET_NOT_IDLE",
    timestamp: S
  }) : C(), !1)
}
class g extends(o = a.ZP.Store) {
  isIdle() {
    return f
  }
  isAFK() {
    return N
  }
  getIdleSince() {
    return f ? S : null
  }
}
s = "IdleStore", (r = "displayName") in(i = g) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new g(l.Z, {
  IDLE: function(e) {
    f = e.idle
  },
  AFK: function(e) {
    N = e.afk
  },
  SPEAKING: function(e) {
    let {
      userId: t,
      speakingFlags: n
    } = e;
    return n !== h.Dg.NONE && t === I.default.getId() && p({}), !1
  },
  APP_STATE_UPDATE: function(e) {
    let {
      state: t
    } = e;
    return O = t === T.$7l.BACKGROUND, S = Date.now(), C(), !1
  },
  OVERLAY_SET_NOT_IDLE: p,
  CHANNEL_SELECT: p,
  VOICE_CHANNEL_SELECT: p,
  WINDOW_FOCUS: p,
  OVERLAY_INITIALIZE: p,
  OVERLAY_SET_INPUT_LOCKED: p,
  USER_SETTINGS_PROTO_UPDATE: p
})