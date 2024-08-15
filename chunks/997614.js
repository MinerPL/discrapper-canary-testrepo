n.d(t, {
  Z: function() {
return x;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(399606),
  l = n(704215),
  r = n(481060),
  o = n(239091),
  c = n(706140),
  u = n(242291),
  d = n(792165),
  h = n(603074),
  m = n(294629),
  p = n(390322),
  _ = n(871499),
  f = n(131951),
  E = n(459273),
  g = n(304388),
  C = n(981631),
  I = n(689938);

function x(e) {
  let {
channel: t,
themeable: x
  } = e, T = t.getGuildId(), {
mute: N,
suppress: v
  } = (0, m.Z)(t), S = (0, s.e7)([f.Z], () => f.Z.isDeaf()), Z = N || v || S, A = (0, u.sR)({
isSoundboardButtonDisabled: Z
  }), [M, b] = (0, c.cv)(A);

  function R(e) {
null != T && (0, o.jW)(e, async () => {
  let {
    default: e
  } = await n.e('56049').then(n.bind(n, 338991));
  return t => (0, i.jsx)(e, {
    guildId: T,
    ...t
  });
});
  }
  let j = a.useRef(null),
L = a.useCallback(() => {
  var e;
  null === (e = j.current) || void 0 === e || e.hidePopout();
}, []);
  return (0, E.yp)({
event: C.CkL.TOGGLE_SOUNDBOARD,
handler: L
  }), (0, i.jsx)(g.Z, {
ref: j,
renderPopout: e => {
  let {
    closePopout: n
  } = e;
  return (0, i.jsx)(p.Z, {
    children: (0, i.jsx)(h.Z, {
      guildId: T,
      channel: t,
      onClose: n,
      gridNotice: M === l.z.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && (0, i.jsx)(d.o, {
        onClose: n,
        markAsDismissed: b
      }),
      analyticsSource: 'action bar button'
    })
  });
},
children: e => (0, i.jsx)(_.Z, {
  themeable: x,
  label: function() {
    if (N)
      return I.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_GUILD_MUTE;
    if (v)
      return I.Z.Messages.SOUNDBOARD_OPEN_SOUNDBOARD_ERROR_SUPPRESSED;
    if (S)
      return I.Z.Messages.SOUNDBOARD_OPEN_SOUNBOARRD_ERROR_DEAFENED;
  }(),
  iconComponent: r.SoundboardIcon,
  disabled: Z,
  onContextMenu: R,
  ...e
})
  });
}