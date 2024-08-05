n.d(t, {
  Z: function() {
return T;
  }
});
var s = n(735250);
n(470079);
var a = n(780384),
  r = n(481060),
  i = n(410030),
  l = n(44315),
  o = n(889901),
  c = n(955204),
  d = n(231338),
  _ = n(477730);
let u = {
trophy: d.Il.PRIMARY_400,
locked: d.Il.PRIMARY_400,
unlocked: d.Il.GREEN_330
  },
  E = {
trophy: d.Il.PRIMARY_400,
locked: d.Il.PRIMARY_400,
unlocked: d.Il.GREEN_330
  };

function T(e) {
  var t;
  let {
achievementId: n,
unlocked: d,
size: T = r.AvatarSizes.SIZE_40
  } = e, I = (0, i.ZP)(), R = (0, c.oX)(n);
  if (null == R)
return null;
  let C = (0, r.getAvatarSpecs)(T),
{
  name: g,
  rarity: p
} = R,
{
  color: A
} = (0, c.F7)(p),
m = (0, a.wj)(I) ? u : E,
N = (C.size - C.offset - 2 * C.stroke) * 0.8,
f = C.size - C.stroke,
h = {
  width: 0.4 * N,
  height: 0.4 * N
},
S = {
  width: h.width + 1,
  height: h.height + 1,
  right: C.stroke + 1,
  bottom: C.stroke + 1,
  padding: 0
};
  return (0, s.jsxs)('div', {
className: _.container,
style: {
  width: f,
  height: f,
  padding: C.stroke
},
'aria-label': ''.concat(null !== (t = g()) && void 0 !== t ? t : ''),
children: [
  (0, s.jsx)('div', {
    className: _.trophyIconContainer,
    children: (0, s.jsx)(r.TrophyIcon, {
      size: 'custom',
      color: d ? A : (0, l.Lq)(m.trophy),
      width: N,
      height: N
    })
  }),
  !d && (0, s.jsx)('div', {
    className: _.lockContainer,
    style: S,
    children: (0, s.jsx)(r.LockIcon, {
      size: 'custom',
      color: (0, l.Lq)(m.locked),
      ...h
    })
  }),
  d && p === c.EP.LEGENDARY && (0, s.jsx)('div', {
    className: _.lockContainer,
    style: S,
    children: (0, s.jsx)(o.Z, {
      className: _.confettiIcon,
      ...h
    })
  })
]
  });
}
T.Sizes = r.AvatarSizes;