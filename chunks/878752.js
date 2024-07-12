n.d(t, {
  Z: function() {
return v;
  }
});
var i = n(735250);
n(470079);
var a = n(512722),
  l = n.n(a),
  s = n(442837),
  r = n(779618),
  o = n(446226),
  c = n(441167),
  d = n(822183),
  u = n(641015),
  h = n(131951),
  p = n(594174),
  m = n(700785),
  _ = n(213652),
  f = n(320427),
  E = n(145010),
  C = n(933686),
  g = n(997614),
  I = n(159909),
  x = n(981631),
  T = n(593483);

function v(e) {
  let {
channel: t,
hasActiveStream: n,
themeable: a = !1
  } = e, v = (0, s.e7)([p.default], () => {
let e = p.default.getCurrentUser();
return l()(null != e, 'CenterControlTray: currentUser cannot be undefined'), e;
  }), N = (0, o.Z)(), {
isSharedCanvasEnabled: S
  } = d.Z.useExperiment({
guildId: null == t ? void 0 : t.guild_id,
location: 'b7309a_1'
  }), {
enableViewerClipping: Z
  } = c.Z.useExperiment({
location: 'VoiceEffectsActionBar'
  }, {
autoTrackExposure: !1
  }), A = (0, r.Z)(h.Z);
  if (null == t || null != N)
return null;
  let M = (0, u.Z)(t),
b = m.BT({
  permission: x.Plq.ADD_REACTIONS,
  user: v,
  context: t
});
  return (0, i.jsxs)('div', {
className: T.voiceEffectsActionBar,
children: [
  M && (0, i.jsx)(g.Z, {
    channel: t,
    themeable: a
  }),
  b && (0, i.jsx)(C.Z, {
    channel: t
  }),
  Z && A && (0, i.jsx)(_.Z, {
    channel: t
  }),
  S && n && (0, i.jsx)(f.Z, {}),
  S && n && (0, i.jsx)(E.Z, {
    channel: t
  }),
  S && n && (0, i.jsx)(I.Z, {})
]
  });
}