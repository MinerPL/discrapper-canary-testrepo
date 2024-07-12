n.d(t, {
  S: function() {
return I;
  },
  m: function() {
return E;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(607070),
  o = n(426563),
  c = n(998502),
  d = n(689938),
  u = n(117414);
let _ = c.ZP.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function E() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
[t, n] = a.useState(!1),
i = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
r = a.useMemo(() => {
  let n = t || !i && !e;
  return (0, o.j)(n);
}, [
  t,
  i,
  e
]),
c = a.useCallback(() => n(!0), []);
  return {
avatarSrc: r,
eventHandlers: {
  onMouseEnter: c,
  onMouseLeave: a.useCallback(() => n(!1), [])
}
  };
}

function I(e) {
  let {
src: t
  } = e;
  return (0, i.jsx)('div', {
className: u.avatarContainer,
children: (0, i.jsx)(_, {
  src: t,
  size: r.AvatarSizes.SIZE_40,
  'aria-label': d.Z.Messages.GUILD_AUTOMOD_USERNAME
})
  });
}