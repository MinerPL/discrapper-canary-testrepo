n.d(t, {
  Z: function() {
return _;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  o = n(887024),
  a = n(338545),
  l = n(748780),
  r = n(481060),
  c = n(596454),
  u = n(745510),
  d = n(912893),
  h = n(153850),
  m = n(768581),
  p = n(176354),
  g = n(675654),
  f = n(130667);
let T = [];

function _(e) {
  let {
messageId: t,
emoji: n,
startPosition: _,
targetPosition: v
  } = e, [b, E] = s.useState(0), [I, x] = s.useState(0), [C, S] = s.useState(null), {
confettiCanvas: R
  } = s.useContext(u.h), N = (0, o.uR)(R, C), O = s.useMemo(() => [{
src: null == n.id ? p.ZP.getURL(n.name) : m.ZP.getEmojiURL({
  id: n.id,
  animated: !1,
  size: 22
}),
colorize: !1
  }], [
n.name,
n.id
  ]), Z = v.x - v.width / 2 * 0.5, j = v.y - v.height / 2 * 0.5, M = (0, r.useSpring)({
from: {
  y: _.y
},
to: {
  y: j
},
config: {
  duration: 450,
  easing: l.Z.Easing.in(l.Z.Easing.exp)
},
onChange: e => {
  let {
    y: t
  } = e;
  x(t);
}
  }), A = (0, r.useSpring)({
from: {
  x: _.x,
  scale: 1,
  opacity: 1
},
to: {
  x: Z,
  scale: 0.5,
  opacity: 0.4
},
config: {
  duration: 450,
  easing: l.Z.Easing.in(l.Z.Easing.ease)
},
onRest: () => {
  (0, d.G)(t, n.name, n.id);
},
onChange: e => {
  let {
    x: t
  } = e;
  E(t);
}
  });
  return s.useEffect(() => {
b > 0 && I > 0 && N.createConfetti({
  ...g.We,
  position: {
    type: 'static',
    value: {
      x: b,
      y: I
    }
  }
});
  }, [
N,
b,
I
  ]), (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(o.Ji, {
    ref: S,
    sprites: O,
    colors: T,
    spriteWidth: g.Ko,
    spriteHeight: g.Ko
  }),
  (0, i.jsx)(h.ZP, {
    children: (0, i.jsx)(a.animated.div, {
      style: {
        ...M
      },
      className: f.emojiContainer,
      children: (0, i.jsx)(a.animated.div, {
        style: {
          ...A,
          opacity: A.opacity
        },
        children: (0, i.jsx)(c.Z, {
          className: f.emoji,
          emojiId: n.id,
          emojiName: n.name,
          animated: n.animated,
          size: 'jumbo'
        })
      })
    })
  })
]
  });
}