n(47120);
var i = n(237997),
  a = n(998502),
  s = n(576027),
  r = n(13838),
  l = n(812967),
  o = n(350085),
  c = n(910484),
  d = n(443952),
  u = n(266572),
  _ = n(177698),
  h = n(121826),
  E = n(567481),
  I = n(498164),
  m = n(111097),
  g = n(908711),
  p = n(197941),
  T = n(462414),
  S = n(662194),
  f = n(188861);
let C = {
...s.A,
...d.Z,
...u.Z,
...h.Z,
...E.Z,
...I.Z,
...m.Z,
...p.Z,
...S.Z,
...T.Z,
..._.Z,
...g.Z
  },
  N = {
...r.Z,
...o.M,
...c.n
  };
t.Z = {
  server: l.Z,
  commands: C,
  events: N,
  stores: [i.Z],
  transports: [f.Z],
  registerTransportsForEmbeddedPlatform: function() {
a.ZP.ensureModule('discord_rpc').then(() => {
  for (let e of [
      n(178318).Z,
      n(967351).Z
    ])
    l.Z.registerTransport(e);
});
  }
};