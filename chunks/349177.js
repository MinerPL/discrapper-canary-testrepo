t.d(s, {
  Z: function() {
return l;
  }
});
var n = t(735250);
t(470079);
var a = t(481060),
  i = t(993413),
  r = t(981631),
  o = t(689938);

function l(e) {
  var s, t;
  return (0, n.jsx)(i.Z, {
errors: e.errors,
disabled: e.disabled,
title: o.Z.Messages.DISPLAY_NAME,
children: (0, n.jsx)('div', {
  children: (0, n.jsx)(a.TextInput, {
    placeholder: e.placeholder,
    maxLength: r.JuI,
    onChange: e.onGlobalNameChange,
    value: null !== (t = null !== (s = e.pendingGlobalName) && void 0 !== s ? s : e.currentGlobalName) && void 0 !== t ? t : ''
  })
})
  });
}