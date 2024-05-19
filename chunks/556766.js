"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  a = n("392711"),
  s = n.n(a),
  o = n("207561"),
  l = n("920906"),
  u = n("442837"),
  d = n("317381"),
  _ = n("966302"),
  c = n("378364"),
  E = n("197344"),
  I = n("474873"),
  T = n("292959"),
  f = n("944486"),
  S = n("246946"),
  h = n("340895"),
  A = n("557177"),
  m = n("918559"),
  N = n("871465");
let p = {
    transform: "scale(0.7)",
    opacity: 0
  },
  O = {
    transform: "scale(1)",
    opacity: 1
  };
t.default = () => {
  let {
    connectedActivityChannelId: e,
    activityPanelMode: t
  } = (0, u.useStateFromStoresObject)([d.default], () => ({
    connectedActivityChannelId: d.default.getConnectedActivityChannelId(),
    activityPanelMode: d.default.getActivityPanelMode()
  })), {
    currentChannelId: n,
    selectedVoiceChannelId: a
  } = (0, u.useStateFromStoresObject)([f.default], () => ({
    currentChannelId: f.default.getChannelId(),
    selectedVoiceChannelId: f.default.getVoiceChannelId()
  })), C = (0, u.useStateFromStoresArray)([h.default], () => h.default.getIncomingCalls().filter(i => {
    let {
      channel: r
    } = i, s = e === r.id && a !== r.id && t === m.ActivityPanelModes.PANEL;
    return n !== r.id || s
  })), R = (0, u.useStateFromStores)([h.default], () => h.default.hasIncomingCalls()), g = (0, u.useStateFromStores)([T.default], () => T.default.isSoundDisabled("call_ringing")), L = E.default.useIsRingtoneEligible(), v = E.default.useIsRingtoneDisabled(), D = (0, u.useStateFromStores)([S.default], () => S.default.disableSounds), M = (0, u.useStateFromStores)([I.default], () => I.default.getSoundpack()), y = r.useRef(!1), P = (0, o.useStableMemo)(() => {
    let e = "call_ringing";
    return L && !v ? (0, A.createSound)(c.default.ringtone, e) : M === N.Soundpacks.CLASSIC ? (0, A.createSound)(500 !== s().random(1, 1e3) ? "call_ringing" : s().sample(["call_ringing_beat", "call_ringing_snow_halation"]), e) : (0, A.createSoundForPack)("call_ringing", M)
  }, [M, v, L]);
  return r.useEffect(() => () => {
    P.stop()
  }, [P]), r.useEffect(() => {
    if (D || g) {
      y.current && (P.stop(), y.current = !1);
      return
    }
    R && !y.current ? (P.loop(), y.current = !0) : !R && y.current && (P.stop(), y.current = !1)
  }, [g, D, R, P]), (0, l.useTransition)(C, {
    keys: e => {
      var t;
      return null === (t = e.channel) || void 0 === t ? void 0 : t.id
    },
    enter: {
      from: p,
      to: O
    },
    leave: p,
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: !0
    }
  })((e, t) => (0, i.jsx)(_.default, {
    ...t,
    animatedStyle: e
  }))
}