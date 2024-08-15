u.d(n, {
  Z: function() {
return i;
  }
});
var a = u(735250);
u(470079);
var l = u(481060),
  r = u(36703),
  t = u(208049),
  s = u(242291),
  o = u(689938);

function i() {
  let e = (0, s.pI)();
  return (0, a.jsx)(l.MenuControlItem, {
id: 'user-volume',
'aria-haspopup': !0,
label: o.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
control: (n, u) => (0, a.jsx)(l.MenuSliderControl, {
  ...n,
  ref: u,
  value: (0, r.P)(e),
  maxValue: 100,
  onChange: e => (0, t.xz)((0, r.A)(e)),
  'aria-label': o.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME
})
  });
}