s.r(a), s.d(a, {
  default: function() {
return u;
  }
}), s(47120);
var n = s(735250),
  t = s(470079),
  E = s(481060),
  _ = s(881052),
  r = s(434404),
  o = s(78451),
  I = s(915509),
  l = s(981631),
  i = s(689938),
  c = s(224499);

function u(e) {
  let {
guild: a,
onClose: s,
hideColors: u
  } = e, [N, d] = t.useState(a.verificationLevel), [R, T] = t.useState(null), L = a.hasFeature(l.oNc.COMMUNITY), C = (0, o.IF)(L, u).filter(e => !e.disabled), f = t.useCallback(async () => {
null != R && T(null);
try {
  await r.Z.saveGuild(a.id, {
    verificationLevel: N
  }), r.Z.updateGuild({
    verificationLevel: N
  }), s();
} catch (e) {
  T(new _.Hx(e).getAnyErrorMessage());
}
  }, [
R,
a.id,
N,
s
  ]);
  return (0, n.jsx)(I.Z, {
...e,
title: i.Z.Messages.FORM_LABEL_VERIFICATION_LEVEL,
errorText: R,
onConfirm: f,
onCancel: s,
children: (0, n.jsxs)(E.FormSection, {
  children: [
    (0, n.jsx)(E.FormText, {
      type: E.FormText.Types.DESCRIPTION,
      className: c.marginBottom20,
      children: i.Z.Messages.FORM_HELP_VERIFICATION_LEVEL.format()
    }),
    (0, n.jsx)(E.RadioGroup, {
      value: N,
      options: C,
      onChange: e => d(e.value)
    })
  ]
})
  });
}