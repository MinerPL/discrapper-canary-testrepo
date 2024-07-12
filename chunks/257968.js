n.d(t, {
  c: function() {
return u;
  },
  p: function() {
return d;
  }
});
var i = n(442837),
  s = n(507885),
  a = n(379146),
  r = n(273003),
  l = n(754332),
  o = n(140863),
  c = n(701488);

function d() {
  return (0, i.e7)([s.Z], () => u(s.Z));
}

function u(e) {
  let t = 0,
n = e.getAcknowledged();
  return a.q.getCurrentConfig({
location: '1d9280_2'
  }).enabled && !n.has(c.ES.GDM_ACTIVITIES) && t++, o.u.getCurrentConfig({
location: '1d9280_3'
  }).enabled && !n.has(c.ES.PUTT_PARTY) && t++, r.q.getCurrentConfig({
location: '1d9280_4'
  }).enabled && !n.has(c.ES.JAMSPACE) && t++, l.m.getCurrentConfig({
location: '1d9280_5'
  }).enabled && !n.has(c.ES.POKER) && t++, !n.has(c.ES.DISCORD_TURNS_8) && t <= 0 && t++, t;
}