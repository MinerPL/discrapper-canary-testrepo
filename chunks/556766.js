"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("392711"),
  i = n.n(l),
  r = n("207561"),
  o = n("718017"),
  u = n("442837"),
  d = n("966302"),
  c = n("378364"),
  f = n("197344"),
  E = n("474873"),
  h = n("292959"),
  _ = n("944486"),
  C = n("246946"),
  m = n("340895"),
  S = n("557177"),
  I = n("871465");
let p = {
    transform: "scale(0.7)",
    opacity: 0
  },
  T = {
    transform: "scale(1)",
    opacity: 1
  };
t.default = () => {
  let e = (0, u.useStateFromStores)([_.default], () => _.default.getChannelId()),
    t = (0, u.useStateFromStoresArray)([m.default], () => m.default.getIncomingCalls().filter(t => {
      let {
        channel: n
      } = t;
      return e !== n.id
    })),
    n = (0, u.useStateFromStores)([m.default], () => m.default.hasIncomingCalls()),
    l = (0, u.useStateFromStores)([h.default], () => h.default.isSoundDisabled("call_ringing")),
    g = f.default.useIsRingtoneEligible(),
    A = f.default.useIsRingtoneDisabled(),
    N = (0, u.useStateFromStores)([C.default], () => C.default.disableSounds),
    v = (0, u.useStateFromStores)([E.default], () => E.default.getSoundpack()),
    O = s.useRef(!1),
    R = (0, r.useStableMemo)(() => {
      let e = "call_ringing";
      if (g && !A) return (0, S.createSound)(c.default.ringtone, e);
      if (v === I.Soundpacks.CLASSIC) {
        let t = 500 === i().random(1, 1e3) ? "call_ringing_beat" : "call_ringing";
        return (0, S.createSound)(t, e)
      }
      return (0, S.createSoundForPack)("call_ringing", v)
    }, [v, A, g]);
  return s.useEffect(() => () => {
    R.stop()
  }, [R]), s.useEffect(() => {
    if (N || l) {
      O.current && (R.stop(), O.current = !1);
      return
    }
    n && !O.current ? (R.loop(), O.current = !0) : !n && O.current && (R.stop(), O.current = !1)
  }, [l, N, n, R]), (0, o.useTransition)(t, {
    keys: e => {
      var t;
      return null === (t = e.channel) || void 0 === t ? void 0 : t.id
    },
    enter: {
      from: p,
      to: T
    },
    leave: p,
    config: {
      mass: 1,
      tension: 500,
      friction: 18,
      clamp: !0
    }
  })((e, t) => (0, a.jsx)(d.default, {
    ...t,
    animatedStyle: e
  }))
}