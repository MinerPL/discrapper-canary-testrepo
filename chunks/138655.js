n.d(t, {
  Z: function() {
return h;
  }
}), n(47120);
var r = n(470079),
  i = n(120356),
  a = n.n(i),
  o = n(866442),
  s = n(442837),
  l = n(780384),
  u = n(607070),
  c = n(629935),
  d = n(168551),
  _ = n(792125),
  E = n(168631);
let f = Object.freeze({
  '--profile-gradient-primary-color': 'var(--background-secondary-alt)',
  '--profile-gradient-secondary-color': 'var(--background-secondary-alt)',
  '--profile-gradient-overlay-color': 'rgba(0, 0, 0, 0)',
  '--profile-gradient-button-color': 'var(--button-secondary-background)',
  '--profile-avatar-border-color': 'var(--background-secondary-alt)',
  '--profile-body-background-color': 'var(--background-floating)',
  '--profile-body-background-hover': 'var(--background-modifier-hover)',
  '--profile-body-divider-color': 'var(--background-modifier-accent)',
  '--profile-body-border-color': 'var(--border-faint)',
  '--profile-message-input-border-color': 'var(--background-modifier-accent)',
  '--profile-note-background-color': 'var(--background-tertiary)',
  '--profile-role-pill-background-color': 'var(--background-secondary-alt)',
  '--profile-role-pill-border-color': 'var(--interactive-normal)'
});

function h(e) {
  let {
theme: t,
primaryColor: n,
secondaryColor: i
  } = e, [h, p] = (0, s.Wu)([u.Z], () => [
u.Z.desaturateUserColors,
u.Z.syncProfileThemeWithUserTheme
  ]), m = (0, E.fq)(t), I = (0, E.wu)(t, n, p), T = (0, E.lM)(t, n), g = (0, E.e4)(t, i), S = p ? null == m ? void 0 : m.overlaySyncedWithUserTheme : null == m ? void 0 : m.overlay;
  return {
profileThemeStyle: (0, r.useMemo)(() => {
  if (null == n || null == i || null == m || null == I || null == T || null == g || null == S)
    return f;
  let e = (e, t) => (0, o.ho)(e, h, null, t);
  return {
    '--profile-gradient-primary-color': e(n),
    '--profile-gradient-secondary-color': e(i),
    '--profile-gradient-overlay-color': S,
    '--profile-gradient-button-color': e((0, E.ZB)(n)),
    '--profile-avatar-border-color': e(I),
    '--profile-body-background-color': m.sectionBox,
    '--profile-body-background-hover': m.profileBodyBackgroundHover,
    '--profile-body-divider-color': e(T, m.dividerOpacity),
    '--profile-body-border-color': e(T, 0.12),
    '--profile-message-input-border-color': e(g),
    '--profile-note-background-color': m.noteBackgroundColor,
    '--profile-role-pill-background-color': m.rolePillBackgroundColor,
    '--profile-role-pill-border-color': m.rolePillBorderColor,
    ...(0, c.W4)({
      enabled: !0,
      primaryColor: n,
      secondaryColor: i,
      isDarkTheme: (0, l.wj)(t),
      textMixAmount: 25
    })
  };
}, [
  n,
  i,
  m,
  I,
  T,
  g,
  S,
  t,
  h
]),
profileThemeClassName: a()((0, _.Q)(t), {
  [d.e3]: null != n,
  'custom-profile-theme': null != n
})
  };
}