n.d(t, {
  U: function() {
return s;
  },
  k: function() {
return es;
  }
}), n(47120);
var s, r, o = n(735250);
n(470079);
var i = n(120356),
  c = n.n(i),
  a = n(442837),
  l = n(246946),
  u = n(91802),
  d = n(222727),
  p = n(981631),
  f = n(782082),
  g = n(500052),
  x = n(375832),
  b = n(992171),
  v = n(937064),
  _ = n(434336),
  h = n(128955),
  S = n(803353),
  T = n(479388),
  C = n(179581),
  E = n(13174),
  A = n(580248),
  I = n(966294),
  L = n(302143),
  m = n(146121),
  B = n(705500),
  M = n(402127),
  U = n(153652),
  j = n(485487),
  P = n(200985),
  N = n(270930),
  O = n(46514),
  R = n(750876),
  w = n(993855),
  D = n(701497),
  G = n(937717),
  Z = n(165194),
  y = n(208802),
  k = n(145905),
  F = n(335302),
  H = n(956172),
  Y = n(695579),
  V = n(541764),
  W = n(191706),
  X = n(67528),
  z = n(332150),
  K = n(581902),
  J = n(167219),
  Q = n(704381),
  $ = n(591417),
  q = n(929883),
  ee = n(261137),
  et = n(958700);
(r = s || (s = {}))[r.PrivateMessages = 0] = 'PrivateMessages', r[r.SettingsMenu = 1] = 'SettingsMenu';
let en = new Map([
  [
'PE',
W
  ],
  [
'PH',
X
  ],
  [
'CL',
h
  ],
  [
'CO',
S
  ],
  [
'AR',
g
  ],
  [
'JP',
R
  ],
  [
'VN',
et
  ],
  [
'TH',
ee
  ],
  [
'ID',
j
  ],
  [
'MY',
H
  ],
  [
'MX',
F
  ],
  [
'KR',
w
  ],
  [
'BG',
v
  ],
  [
'CZ',
C
  ],
  [
'HU',
U
  ],
  [
'RO',
J
  ],
  [
'SE',
Q
  ],
  [
'CY',
T
  ],
  [
'EE',
A
  ],
  [
'IS',
N
  ],
  [
'IE',
P
  ],
  [
'LV',
y
  ],
  [
'LI',
D
  ],
  [
'LT',
G
  ],
  [
'LU',
Z
  ],
  [
'MT',
k
  ],
  [
'SK',
q
  ],
  [
'SI',
$
  ],
  [
'GR',
B
  ],
  [
'FI',
L
  ],
  [
'PT',
K
  ],
  [
'NO',
V
  ],
  [
'BE',
b
  ],
  [
'AT',
x
  ],
  [
'CH',
_
  ],
  [
'FR',
m
  ],
  [
'DE',
E
  ],
  [
'ES',
I
  ],
  [
'IT',
O
  ],
  [
'NL',
Y
  ],
  [
'PL',
z
  ],
  [
'HR',
M
  ]
]);

function es(e) {
  let {
entryPoint: t,
className: n
  } = e, r = (0, a.e7)([l.Z], () => l.Z.hidePersonalInformation), i = (0, u.n)(), g = null == i ? void 0 : i.countryCode;
  if ((0, d.U)(p.jXE.SETTINGS_PREMIUM, g), null == g || !en.has(g) || r)
return null;
  let x = en.get(g),
b = 'badgeIcon' + s[t];
  return (0, o.jsx)('img', {
className: c()(n, f[b]),
'aria-hidden': !0,
alt: 'Wumpus holding a country-specific flag',
src: x
  });
}