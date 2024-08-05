t.d(s, {
  U: function() {
return n;
  },
  k: function() {
return en;
  }
}), t(47120);
var n, r, a = t(735250);
t(470079);
var o = t(120356),
  i = t.n(o),
  c = t(442837),
  l = t(246946),
  u = t(91802),
  d = t(222727),
  f = t(981631),
  p = t(782082),
  g = t(500052),
  x = t(375832),
  b = t(992171),
  v = t(937064),
  _ = t(434336),
  h = t(128955),
  S = t(803353),
  T = t(479388),
  C = t(179581),
  E = t(13174),
  A = t(580248),
  I = t(966294),
  L = t(302143),
  m = t(146121),
  B = t(705500),
  M = t(402127),
  U = t(153652),
  j = t(485487),
  P = t(200985),
  N = t(270930),
  O = t(46514),
  R = t(750876),
  w = t(993855),
  D = t(701497),
  G = t(937717),
  Z = t(165194),
  y = t(208802),
  k = t(145905),
  F = t(335302),
  H = t(956172),
  Y = t(695579),
  V = t(541764),
  W = t(191706),
  X = t(67528),
  z = t(332150),
  K = t(581902),
  J = t(167219),
  Q = t(704381),
  $ = t(591417),
  q = t(929883),
  ee = t(261137),
  es = t(958700);
(r = n || (n = {}))[r.PrivateMessages = 0] = 'PrivateMessages', r[r.SettingsMenu = 1] = 'SettingsMenu';
let et = new Map([
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
es
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

function en(e) {
  let {
entryPoint: s,
className: t
  } = e, r = (0, c.e7)([l.Z], () => l.Z.hidePersonalInformation), o = (0, u.n)(), g = null == o ? void 0 : o.countryCode;
  if ((0, d.U)(f.jXE.SETTINGS_PREMIUM, g), null == g || !et.has(g) || r)
return null;
  let x = et.get(g),
b = 'badgeIcon' + n[s];
  return (0, a.jsx)('img', {
className: i()(t, p[b]),
'aria-hidden': !0,
alt: 'Wumpus holding a country-specific flag',
src: x
  });
}