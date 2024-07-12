n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250),
  a = n(470079),
  l = n(512722),
  s = n.n(l),
  r = n(399606),
  o = n(618158),
  c = n(594174),
  d = n(822183),
  u = n(364125),
  h = n(610947),
  p = n(345392);

function m(e) {
  let {
focused: t,
channelId: n,
streamerId: l,
stream: d
  } = e, m = a.useRef(null), _ = (0, r.e7)([c.default], () => c.default.getCurrentUser());
  s()(null != _, 'user cannot be null'), (0, h.Z)(m, _, l, n);
  let {
handleClick: f,
handleMouseDown: E,
handleMouseEnter: C,
handleMouseMove: g,
handleMouseUp: I
  } = (0, u.Z)({
user: _,
channelId: n,
streamerId: l,
stream: d,
focused: t,
canvas: m.current
  });
  return (0, i.jsx)(o.Z, {
children: (0, i.jsx)('canvas', {
  ref: m,
  onClick: f,
  onMouseDown: E,
  onMouseEnter: C,
  onMouseMove: g,
  onMouseUp: I,
  className: p.sharedCanvas
})
  });
}

function _(e) {
  let {
isSharedCanvasEnabled: t
  } = d.Z.useExperiment({
guildId: e.guildId,
location: 'd0de1c_1'
  }, {
autoTrackExposure: !0
  });
  return !t || e.hasScreenMessage ? null : (0, i.jsx)(m, {
...e
  });
}