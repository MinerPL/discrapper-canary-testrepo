a.r(t), a.d(t, {
  ParagraphFormFieldModal: function() {
return I;
  },
  TextInputFormFieldModal: function() {
return f;
  }
}), a(47120), a(757143);
var n = a(735250),
  r = a(470079),
  o = a(481060),
  l = a(881052),
  s = a(246364),
  i = a(915509),
  d = a(592286),
  u = a(689938);

function c(e) {
  var t;
  let {
type: a,
title: s,
description: c,
field: f,
onSave: I,
onClose: _
  } = e, [p, E] = r.useState(null !== (t = null == f ? void 0 : f.label) && void 0 !== t ? t : ''), [m, C] = r.useState(null), R = async () => {
null != m && C(null);
let e = p.trim();
if ('' === e) {
  C(u.Z.Messages.MEMBER_VERIFICATION_FIELD_QUESTION_REQUIRED_ERROR);
  return;
}
try {
  await I({
    field_type: a,
    label: e,
    required: !0
  }), _();
} catch (e) {
  C(new l.Hx(e).getAnyErrorMessage());
}
  };
  return (0, n.jsx)(i.Z, {
...e,
errorText: m,
title: s,
description: c,
onConfirm: R,
onCancel: _,
children: (0, n.jsx)(o.TextInput, {
  onChange: e => {
    null != m && C(null);
    let t = e.replace(/(\r\n|\n|\r)/g, ' ');
    t.length > d.XN && (t = t.slice(0, d.XN)), E(t);
  },
  placeholder: u.Z.Messages.MEMBER_VERIFICATION_FIELD_QUESTION,
  value: p,
  onKeyDown: e => 'Enter' === e.key && R()
})
  });
}

function f(e) {
  return (0, n.jsx)(c, {
title: u.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
description: u.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_TEXT_DESCRIPTION,
type: s.QJ.TEXT_INPUT,
...e
  });
}

function I(e) {
  return (0, n.jsx)(c, {
title: u.Z.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
description: u.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PARAGRAPH_DESCRIPTION,
type: s.QJ.PARAGRAPH,
...e
  });
}