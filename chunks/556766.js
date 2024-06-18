"use strict";
var i = n(735250),
  r = n(470079),
  s = n(392711),
  o = n.n(s),
  a = n(792986),
  l = n(920906),
  u = n(442837),
  _ = n(317381),
  d = n(966302),
  c = n(378364),
  E = n(197344),
  I = n(474873),
  T = n(292959),
  h = n(944486),
  S = n(246946),
  f = n(340895),
  N = n(557177),
  A = n(918559),
  m = n(871465);
let O = {
    transform: "scale(0.7)",
    opacity: 0
  },
  R = {
    transform: "scale(1)",
    opacity: 1
  };
t.Z = () => {
  let {
    connectedActivityChannelId: e,
    activityPanelMode: t
  } = (0, u.cj)([_.ZP], () => ({
    connectedActivityChannelId: _.ZP.getConnectedActivityChannelId(),
    activityPanelMode: _.ZP.getActivityPanelMode()
  })), {
    currentChannelId: n,
    selectedVoiceChannelId: s
  } = (0, u.cj)([h.Z], () => ({
    currentChannelId: h.Z.getChannelId(),
    selectedVoiceChannelId: h.Z.getVoiceChannelId()
  })), C = (0, u.Wu)([f.Z], () => f.Z.getIncomingCalls().filter(i => {
    let {
      channel: r
    } = i, o = e === r.id && s !== r.id && t === A.Ez.PANEL;
    return n !== r.id || o
  })), p = (0, u.e7)([f.Z], () => f.Z.hasIncomingCalls()), g = (0, u.e7)([T.Z], () => T.Z.isSoundDisabled("call_ringing")), L = E.Z.useIsRingtoneEligible(), v = E.Z.useIsRingtoneDisabled(), D = (0, u.e7)([S.Z], () => S.Z.disableSounds), M = (0, u.e7)([I.Z], () => I.Z.getSoundpack()), P = r.useRef(!1), y = (0, a.Z)(() => {
    let e = "call_ringing";
    return L && !v ? (0, N.tu)(c.Z.ringtone, e) : M === m.YC.CLASSIC ? (0, N.tu)(500 !== o().random(1, 1e3) ? "call_ringing" : o().sample(["call_ringing_beat", "call_ringing_snow_halation"]), e) : (0, N.uk)("call_ringing", M)
  }, [M, v, L]);
  return r.useEffect(() => () => {
    y.stop()
  }, [y]), r.useEffect(() => {
    if (D || g) {
      P.current && (y.stop(), P.current = !1);
      return
    }
    p && !P.current ? (y.loop(), P.current = !0) : !p && P.current && (y.stop(), P.current = !1)
  }, [g, D, p, y]), (0, l.useTransition)(C, {
    keys: e => {
      var t;
      return null === (t = e.channel) || void 0 === t ? void 0 : t.id
    },
    enter: {
      from: O,
      to: R
    },
    leave: O,
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: !0
    }
  })((e, t) => (0, i.jsx)(d.Z, {
    ...t,
    animatedStyle: e
  }))
}