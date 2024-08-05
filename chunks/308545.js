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
  o = t(444816);
let l = [
'#2d456e',
'#395788',
'#486ead',
'#4f7ac2',
'#5989d9',
'#729bdd',
'#96b3e3',
'#b5c9e9',
'#e0e0e2'
  ],
  c = ['#f7931e'],
  d = [
0.05,
0.09,
0.15,
0.2,
0.25,
0.33,
0.44,
0.57,
0.95
  ],
  u = [{
  base: 4,
  tint: 1
},
{
  base: 4,
  tint: 1
},
{
  base: 4,
  tint: 1
},
{
  base: 4,
  tint: 1
},
{
  base: 4,
  tint: 1
},
{
  base: 4,
  tint: 1
},
{
  base: 4,
  tint: 1
},
{
  base: 4,
  tint: 1
},
{
  base: 7,
  tint: 1
}
  ],
  m = [0.4],
  _ = [{
base: 1,
tint: 5
  }];

function C(e) {
  let {
width: n,
height: t,
primaryTintColor: C,
secondaryTintColor: f,
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
secondaryTintColor: f,
secondaryTintLuminances: m,
secondaryLuminanceWeights: _
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