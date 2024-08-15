n(653041), n(47120);
var i = n(243814),
  a = n(100527),
  s = n(208049),
  r = n(763296),
  l = n(697426),
  o = n(242291),
  c = n(641015),
  d = n(594174),
  u = n(996106),
  _ = n(452426),
  E = n(736045),
  h = n(186901),
  m = n(231338);
t.Z = {
  [m.Et.GET_SOUNDBOARD_SOUNDS]: {
scope: {
  [h.Gp.ANY]: [
    i.x.RPC,
    h.lH
  ]
},
async handler() {
  await (0, s.w)();
  let e = r.Z.getSounds(),
    t = [];
  return e.forEach(e => e.forEach(e => t.push((0, l.QL)(e)))), t;
}
  },
  [m.Et.PLAY_SOUNDBOARD_SOUND]: {
scope: {
  [h.Gp.ALL]: [
    i.x.RPC,
    i.x.RPC_VOICE_WRITE
  ]
},
validation: e => (0, _.Z)(e).required().keys({
  guild_id: e.string(),
  sound_id: e.string()
}),
async handler(e) {
  let {
    args: {
      guild_id: t,
      sound_id: n
    }
  } = e;
  await (0, s.w)();
  let i = d.default.getCurrentUser(),
    l = r.Z.getSound(t, n),
    _ = (0, E.Z)(),
    h = null != l && null != i && (0, o.Nq)(i, l, _);
  if (null == _)
    throw new u.Z({
      errorCode: m.lT.INVALID_CHANNEL
    }, 'Invalid Channel.');
  if (h) {
    if ((0, c.Z)(_))
      null != l && (0, o.GN)(l, _.id, [a.Z.RPC]);
    else
      throw new u.Z({
        errorCode: m.lT.INVALID_PERMISSIONS
      }, 'Invalid Permissions.');
  } else
    throw new u.Z({
      errorCode: m.lT.INVALID_SOUND
    }, 'Invalid Sound.');
}
  }
};