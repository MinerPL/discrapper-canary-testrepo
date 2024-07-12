s.d(t, {
  Z: function() {
return l;
  }
});
var n = s(735250);
s(470079);
var a = s(481060),
  i = s(993413),
  r = s(981631),
  o = s(689938);

function l(e) {
  var t, s;
  return (0, n.jsx)(i.Z, {
errors: e.errors,
disabled: e.disabled,
title: o.Z.Messages.DISPLAY_NAME,
children: (0, n.jsx)('div', {
  children: (0, n.jsx)(a.TextInput, {
    placeholder: e.placeholder,
    maxLength: r.JuI,
    onChange: e.onGlobalNameChange,
    value: null !== (s = null !== (t = e.pendingGlobalName) && void 0 !== t ? t : e.currentGlobalName) && void 0 !== s ? s : ''
  })
})
  });
}