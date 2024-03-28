"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("594174"),
  i = n("318010"),
  r = n("246364"),
  o = n("489813"),
  u = n("186078"),
  d = n("73880"),
  c = n("196345"),
  f = n("707592"),
  h = n("689938");
t.default = function(e) {
  let {
    formFields: t,
    user: n,
    showRequirements: m = !0
  } = e;
  return null == (0, l.useStateFromStores)([s.default], () => null != n ? n : s.default.getCurrentUser()) ? null : (0, a.jsxs)(a.Fragment, {
    children: [m && (0, a.jsx)(o.RequirementRenderer, {
      icon: i.default,
      text: h.default.Messages.MEMBER_VERIFICATION_FORM_PASSED_REQUIREMENTS,
      meetsRequirement: !0
    }), t.map((e, t) => (function(e, t) {
      switch (e.field_type) {
        case r.VerificationFormFieldTypes.TERMS:
          return (0, a.jsx)(c.DisabledTermsRequirementFormField, {
            formField: e
          }, t);
        case r.VerificationFormFieldTypes.TEXT_INPUT:
          return (0, a.jsx)(f.DisabledTextInputFormField, {
            formField: e
          }, t);
        case r.VerificationFormFieldTypes.PARAGRAPH:
          return (0, a.jsx)(d.DisabledParagraphFormField, {
            formField: e
          }, t);
        case r.VerificationFormFieldTypes.MULTIPLE_CHOICE:
          return (0, a.jsx)(u.DisabledMultipleChoiceFormField, {
            formField: e
          }, t)
      }
    })(e, t))]
  })
}