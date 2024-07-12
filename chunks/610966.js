s.d(t, {
  Z: function() {
return _;
  }
});
var n = s(735250);
s(470079);
var a = s(866442),
  i = s(692547),
  r = s(481060),
  o = s(220082),
  l = s(193528),
  c = s(993413),
  d = s(689938);

function _(e) {
  var t;
  let {
user: s,
savedUserColor: _,
pendingColor: E,
setPendingAccentColor: u
  } = e, T = s.getAvatarURL(null, 80), I = (0, r.useToken)(i.Z.unsafe_rawColors.PRIMARY_530).hex(), S = (0, o.Cf)(T, I, !1), N = (0, a._i)(S[0]);
  return (0, n.jsx)(c.Z, {
title: d.Z.Messages.USER_SETTINGS_BANNER_COLOR_TITLE,
children: (0, n.jsx)(l.Z, {
  onChange: e => u(e),
  color: null !== (t = null != E ? E : _) && void 0 !== t ? t : N,
  suggestedColors: S,
  showEyeDropper: !0
})
  });
}