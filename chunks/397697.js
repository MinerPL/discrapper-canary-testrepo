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
  o = t(12008);
let l = [
'#01007f',
'#0000b0',
'#0000e1',
'#2d3dee',
'#5470e9',
'#a091eb',
'#cc99ff'
  ],
  c = [
'#a7e4e4',
'#ffffff'
  ],
  d = [
0.01,
0.03,
0.055,
0.1,
0.19,
0.25,
0.35
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
  base: 6,
  tint: 1
},
{
  base: 6,
  tint: 1
},
{
  base: 6,
  tint: 1
},
{
  base: 6,
  tint: 1
},
{
  base: 6,
  tint: 1
}
  ],
  m = [
0.55,
1
  ],
  f = [{
  base: 8,
  tint: 1
},
{
  base: 20,
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