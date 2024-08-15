n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(735250);
n(470079);
var s = n(475413),
  i = n(901952),
  l = n(689938),
  a = n(122269);

function o(e) {
  let {
user: t,
hideMessageInput: n,
hideExampleButton: o
  } = e;
  return n ? (0, r.jsx)('footer', {
className: a.footer,
children: !o && (0, r.jsx)(s.tG, {
  text: l.Z.Messages.USER_SETTINGS_CUSTOMIZE_PROFILE_EXAMPLE_BUTTON,
  fullWidth: !0
})
  }) : (0, r.jsx)('footer', {
inert: '',
className: a.footer,
children: (0, r.jsx)(i.Z, {
  user: t
})
  });
}