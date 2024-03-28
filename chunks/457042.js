"use strict";
n.r(t), n.d(t, {
  ParagraphFormFieldModal: function() {
    return I
  },
  TextInputFormFieldModal: function() {
    return E
  }
}), n("47120"), n("757143");
var l = n("735250"),
  a = n("470079"),
  s = n("481060"),
  r = n("881052"),
  i = n("246364"),
  o = n("915509"),
  u = n("592286"),
  c = n("689938");

function d(e) {
  var t;
  let {
    type: n,
    title: i,
    description: d,
    field: E,
    onSave: I,
    onClose: M
  } = e, [T, _] = a.useState(null !== (t = null == E ? void 0 : E.label) && void 0 !== t ? t : ""), [R, N] = a.useState(null), A = async () => {
    null != R && N(null);
    let e = T.trim();
    if ("" === e) {
      N(c.default.Messages.MEMBER_VERIFICATION_FIELD_QUESTION_REQUIRED_ERROR);
      return
    }
    try {
      await I({
        field_type: n,
        label: e,
        required: !0
      }), M()
    } catch (e) {
      N(new r.APIError(e).getAnyErrorMessage())
    }
  };
  return (0, l.jsx)(o.default, {
    ...e,
    errorText: R,
    title: i,
    description: d,
    onConfirm: A,
    onCancel: M,
    children: (0, l.jsx)(s.TextInput, {
      onChange: e => {
        null != R && N(null);
        let t = e.replace(/(\r\n|\n|\r)/g, " ");
        t.length > u.MAX_QUESTION_LENGTH && (t = t.slice(0, u.MAX_QUESTION_LENGTH)), _(t)
      },
      placeholder: c.default.Messages.MEMBER_VERIFICATION_FIELD_QUESTION,
      value: T
    })
  })
}

function E(e) {
  return (0, l.jsx)(d, {
    title: c.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
    description: c.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_TEXT_DESCRIPTION,
    type: i.VerificationFormFieldTypes.TEXT_INPUT,
    ...e
  })
}

function I(e) {
  return (0, l.jsx)(d, {
    title: c.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
    description: c.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PARAGRAPH_DESCRIPTION,
    type: i.VerificationFormFieldTypes.PARAGRAPH,
    ...e
  })
}