n.d(t, {
  Z: function() {
return C;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(338545),
  o = n(442837),
  c = n(596454),
  d = n(607070),
  u = n(70956),
  h = n(456631),
  p = n(219040);
let m = 6 * u.Z.Millis.SECOND,
  _ = 2 * u.Z.Millis.SECOND,
  f = 2 * u.Z.Millis.SECOND,
  E = e => 'scale('.concat(1 - -(e / 120), ') rotate(').concat(e, 'deg)');

function C(e) {
  let {
userId: t,
voiceChannelEffect: n,
onComplete: l
  } = e, {
emoji: u,
sentAt: C
  } = n, g = (0, o.e7)([d.Z], () => d.Z.useReducedMotion), [I, x] = a.useState(!0), T = !g, v = (0, r.useTransition)(I, {
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
immediate: g,
onRest: (e, t) => {
  let {
    phase: n
  } = t;
  'leave' === n && l();
}
  });
  return (a.useEffect(() => {
let e;
return Date.now() - C >= f ? (0, h.H)(t) : e = setTimeout(() => {
  x(!1), T && (0, h.H)(t);
}, T ? _ : m), () => {
  null != e && clearTimeout(e);
};
  }, [
C,
t,
T
  ]), T) ? null : v((e, t) => {
var n;
let {
  rotate: a
} = e;
return t && (0, i.jsx)(r.animated.div, {
  className: p.voiceChannelEffectEmojiContainer,
  style: {
    transform: a.to(E)
  },
  children: (0, i.jsx)(c.Z, {
    className: s()(p.voiceChannelEffectEmoji),
    emojiId: u.id,
    emojiName: u.name,
    animated: null !== (n = u.animated) && void 0 !== n && n
  })
});
  });
}