"use strict";
n.d(t, {
  g2: function() {
    return S
  },
  hf: function() {
    return T
  },
  tP: function() {
    return h
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(920906),
  o = n(442837),
  a = n(594190),
  l = n(594174),
  u = n(869472),
  _ = n(617136),
  d = n(918701),
  c = n(920916),
  E = n(669041),
  I = n(341907);

function T(e) {
  let {
    quest: t,
    location: n,
    questContentPosition: i
  } = e, s = (0, o.e7)([l.default], () => {
    var e;
    return null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.verified
  });
  return r.useCallback(() => {
    null != t && ((0, _._3)({
      questId: t.id,
      questContent: n,
      questContentCTA: _.jZ.CLAIM_REWARD,
      questContentPosition: i
    }), s ? (0, d.Xv)(t.config) ? (0, c.openCollectibleRewardModal)(t, n) : (0, I.h)({
      questId: t.id,
      location: n,
      questContentPosition: i
    }) : (0, E.openRewardModalUnverified)())
  }, [t, n, i, s])
}

function h(e) {
  var t;
  let n = (0, o.Wu)([a.ZP], () => a.ZP.getGamesSeen(!1)).find(t => (null == t ? void 0 : t.id) === e);
  if (null == n) return !1;
  let i = Date.now() - 2592e7;
  return i <= (null !== (t = n.lastLaunched) && void 0 !== t ? t : 0)
}
let S = e => {
  let {
    useReducedMotion: t,
    className: n,
    size: o = 16
  } = e, [a, l] = (0, s.useSpring)(() => ({})), _ = r.useRef(!1), d = (0, s.animated)(u.Z);
  return {
    render: () => (0, i.jsx)(d, {
      className: n,
      style: t ? void 0 : a,
      height: o,
      width: o
    }),
    startAnimation: () => {
      _.current = !0, l({
        from: {
          rotate: "0deg"
        },
        to: {
          rotate: "360deg"
        },
        config: {
          tension: 750,
          mass: 5,
          friction: 100
        },
        loop: () => _,
        immediate: t
      })
    },
    stopAnimation: () => {
      _.current = !1
    }
  }
}