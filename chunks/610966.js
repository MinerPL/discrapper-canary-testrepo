t.d(s, {
  Z: function() {
return _;
  }
});
var n = t(735250);
t(470079);
var a = t(866442),
  i = t(692547),
  r = t(481060),
  o = t(220082),
  l = t(193528),
  c = t(993413),
  d = t(689938);

function _(e) {
  var s;
  let {
user: t,
savedUserColor: _,
pendingColor: E,
setPendingAccentColor: u
  } = e, I = t.getAvatarURL(null, 80), T = (0, r.useToken)(i.Z.unsafe_rawColors.PRIMARY_530).hex(), S = (0, o.Cf)(I, T, !1), N = (0, a._i)(S[0]);
  return (0, n.jsx)(c.Z, {
title: d.Z.Messages.USER_SETTINGS_BANNER_COLOR_TITLE,
children: (0, n.jsx)(l.Z, {
  onChange: e => u(e),
  color: null !== (s = null != E ? E : _) && void 0 !== s ? s : N,
  suggestedColors: S,
  showEyeDropper: !0
})
  });
}