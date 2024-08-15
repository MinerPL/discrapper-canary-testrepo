n.d(t, {
  Z: function() {
return C;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(338545),
  o = n(442837),
  c = n(481060),
  u = n(596454),
  d = n(607070),
  h = n(70956),
  m = n(456631),
  p = n(245285);
let _ = 6 * h.Z.Millis.SECOND,
  f = 2 * h.Z.Millis.SECOND,
  E = 2 * h.Z.Millis.SECOND,
  g = e => 'scale('.concat(1 - -(e / 120), ') rotate(').concat(e, 'deg)');

function C(e) {
  let {
userId: t,
voiceChannelEffect: n,
onComplete: s
  } = e, {
emoji: h,
sentAt: C
  } = n, I = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), [x, T] = a.useState(!0), N = !I, v = (0, c.useTransition)(x, {
from: {
  rotate: -120
},
enter: {
  rotate: 0
},
leave: {
  rotate: -120
},
config: r.config.default,
onRest: (e, t) => {
  let {
    phase: n
  } = t;
  'leave' === n && s();
}
  });
  return (a.useEffect(() => {
let e;
return Date.now() - C >= E ? (0, m.H)(t) : e = setTimeout(() => {
  T(!1), N && (0, m.H)(t);
}, N ? f : _), () => {
  null != e && clearTimeout(e);
};
  }, [
C,
t,
N
  ]), N) ? null : v((e, t) => {
var n;
let {
  rotate: a
} = e;
return t && (0, i.jsx)(r.animated.div, {
  className: p.voiceChannelEffectEmojiContainer,
  style: {
    transform: a.to(g)
  },
  children: (0, i.jsx)(u.Z, {
    className: l()(p.voiceChannelEffectEmoji),
    emojiId: h.id,
    emojiName: h.name,
    animated: null !== (n = h.animated) && void 0 !== n && n
  })
});
  });
}