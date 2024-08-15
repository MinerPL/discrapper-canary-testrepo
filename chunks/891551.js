var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(442837),
  r = n(846027),
  o = n(793148),
  c = n(131951),
  u = n(36703),
  d = n(358085),
  h = n(618158),
  m = n(239527);
t.Z = l.ZP.connectStores([c.Z], e => {
  let {
userId: t,
context: n
  } = e;
  return {
currentVolume: c.Z.getLocalVolume(t, n),
muted: c.Z.isLocalMute(t, n)
  };
})(function(e) {
  let {
className: t,
iconClassName: n,
sliderClassName: a,
userId: l,
currentVolume: c,
muted: p,
context: _,
currentWindow: f = window
  } = e;
  return (0, i.jsx)(h.Z, {
children: (0, i.jsx)(o.Z, {
  currentWindow: f,
  iconClassName: s()(n, m.controlIcon),
  sliderClassName: a,
  className: t,
  value: (0, u.P)(c),
  muted: p,
  maxValue: d.isPlatformEmbedded ? 200 : 100,
  onValueChange: e => {
    var t, n, i, a;
    return t = e, n = l, i = p, a = _, void(t > 0 && i && r.Z.toggleLocalMute(n, a), r.Z.setLocalVolume(n, (0, u.A)(t), a));
  },
  onToggleMute: () => {
    var e, t;
    return e = l, t = _, void r.Z.toggleLocalMute(e, t);
  }
})
  });
});