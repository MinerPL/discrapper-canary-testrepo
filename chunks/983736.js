"use strict";
n.r(t), n.d(t, {
  isAutomaticApprovalFormField: function() {
    return a
  },
  isManualApprovalFormField: function() {
    return l
  },
  isValidFormResponse: function() {
    return i
  }
});
var r = n("823379"),
  s = n("246364"),
  o = n("592286");
let i = e => {
  let {
    required: t,
    response: n,
    field_type: o
  } = e;
  if (!t) return !0;
  if (null == n) return !1;
  switch (o) {
    case s.VerificationFormFieldTypes.TERMS:
    case s.VerificationFormFieldTypes.VERIFICATION:
      return !!n;
    case s.VerificationFormFieldTypes.TEXT_INPUT:
    case s.VerificationFormFieldTypes.PARAGRAPH:
      return "string" == typeof n && "" !== n.trim();
    case s.VerificationFormFieldTypes.MULTIPLE_CHOICE:
      return "number" == typeof n;
    default:
      return (0, r.assertNever)(o)
  }
};

function a(e) {
  return o.AUTOMATIC_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
}

function l(e) {
  return o.MANUAL_APPROVAL_FORM_FIELDS.has(null == e ? void 0 : e.field_type)
}