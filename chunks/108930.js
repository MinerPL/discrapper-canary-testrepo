t.d(n, {
  Z: function() {
return C;
  }
});
var a = t(735250);
t(470079);
var r = t(249849),
  i = t(907561),
  s = t(689938),
  o = t(307536);
let l = [
'#50599c',
'#cc99ff',
'#fefefe'
  ],
  c = [
'#39306f',
'#aeaad2'
  ],
  d = [
0.05,
0.4,
1
  ],
  u = [{
  base: 8,
  tint: 1
},
{
  base: 6,
  tint: 1
},
{
  base: 10,
  tint: 1
}
  ],
  m = [
0.05,
0.4
  ],
  f = [{
  base: 8,
  tint: 1
},
{
  base: 8,
  tint: 1
}
  ];

function C(e) {
  let {
width: n,
height: t,
primaryTintColor: C,
secondaryTintColor: _,
...h
  } = e, {
primaryColorsTransformed: x,
secondaryColorsTransformed: g
  } = (0, r.s)({
primaryBaseColors: l,
primaryTintColor: C,
primaryTintLuminances: d,
primaryLuminanceWeights: u,
secondaryBaseColors: c,
secondaryTintColor: _,
secondaryTintLuminances: m,
secondaryLuminanceWeights: f
  }), {
styleContent: p,
containerId: T
  } = (0, i.bC)(x, g);
  return (0, a.jsxs)('svg', {
...h,
'aria-label': s.Z.Messages.CLAN_LOOK_BANNER,
width: n,
height: t,
viewBox: '0 0 '.concat(i.Km, ' ').concat(i.md),
children: [
  (0, a.jsx)('defs', {
    children: (0, a.jsx)('style', {
      children: p
    })
  }),
  (0, a.jsx)('use', {
    href: ''.concat(o, '#wrapper-layer'),
    id: T
  })
]
  });
}