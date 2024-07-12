s.d(t, {
  Z: function() {
return o;
  }
});
var n = s(735250);
s(470079);
var a = s(481060),
  i = s(993413),
  r = s(689938);

function o(e) {
  let {
sectionTitle: t,
errors: s,
onPronounsChange: o,
pendingPronouns: l,
placeholder: c,
currentPronouns: d,
disabled: _ = !1
  } = e;
  return (0, n.jsx)(i.Z, {
title: t,
errors: s,
disabled: _,
children: (0, n.jsx)(a.TextInput, {
  placeholder: null != c ? c : r.Z.Messages.PROFILE_CUSTOMIZATION_PRONOUNS_PLACEHOLDER,
  maxLength: 40,
  value: null != l ? l : d,
  onChange: function(e) {
    o(e === d ? void 0 : e);
  },
  disabled: _
})
  });
}