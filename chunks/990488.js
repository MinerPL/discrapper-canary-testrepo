"use strict";
s.r(t), s.d(t, {
  ApplicantFormRenderer: function() {
    return _
  },
  PreviewFormRenderer: function() {
    return R
  }
}), s("47120");
var l = s("735250"),
  n = s("470079"),
  i = s("442837"),
  a = s("430824"),
  r = s("594174"),
  u = s("246364"),
  d = s("866319"),
  o = s("118346"),
  c = s("186078"),
  I = s("73880"),
  m = s("276486"),
  E = s("196345"),
  f = s("707592");

function M(e) {
  let {
    guildId: t,
    formFields: s,
    updateFormFields: n
  } = e, r = (0, i.useStateFromStores)([a.default], () => {
    var e;
    return null === (e = a.default.getGuild(t)) || void 0 === e ? void 0 : e.rulesChannelId
  }), d = (e, t) => {
    let l = s[e];
    n([...s.slice(0, e), {
      ...l,
      response: t
    }, ...s.slice(e + 1)])
  }, o = (e, t) => {
    let l = s[e];
    n([...s.slice(0, e), {
      ...l,
      response: t
    }, ...s.slice(e + 1)])
  }, m = (e, t) => {
    let {
      value: l
    } = t, i = s[e];
    n([...s.slice(0, e), {
      ...i,
      response: l
    }, ...s.slice(e + 1)])
  }, M = (e, t) => {
    switch (e.field_type) {
      case u.VerificationFormFieldTypes.TERMS:
        return (0, l.jsx)(E.TermsFormField, {
          channelId: r,
          formField: e,
          onChange: (e, s) => d(t, s)
        }, t);
      case u.VerificationFormFieldTypes.TEXT_INPUT:
        return (0, l.jsx)(f.TextInputFormField, {
          formField: e,
          onChange: e => o(t, e)
        }, t);
      case u.VerificationFormFieldTypes.PARAGRAPH:
        return (0, l.jsx)(I.ParagraphFormField, {
          formField: e,
          onChange: e => o(t, e)
        }, t);
      case u.VerificationFormFieldTypes.MULTIPLE_CHOICE:
        return (0, l.jsx)(c.MultipleChoiceFormField, {
          formField: e,
          onChange: e => m(t, e)
        }, t)
    }
  };
  return (0, l.jsx)(l.Fragment, {
    children: s.map((e, t) => M(e, t))
  })
}

function R(e) {
  let {
    guildId: t,
    formFields: s,
    updateFormFields: n
  } = e, a = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()), u = (0, d.useIsPhoneVerificationLevel)({
    guildId: t
  }) ? m.PreviewPhoneRequirementFormField : o.PreviewEmailRequirementFormField;
  return null == a ? null : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(u, {}), (0, l.jsx)(M, {
      guildId: t,
      formFields: s,
      updateFormFields: n
    })]
  })
}

function _(e) {
  let {
    guildId: t,
    formFields: s,
    updateFormFields: a
  } = e, u = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()), {
    isPhoneVerificationLevel: c,
    isCurrentUserVerified: I
  } = (0, d.useCurrentUserVerificationStatus)({
    guildId: t
  }), E = n.useRef(I), f = c ? m.PhoneRequirementFormField : o.EmailRequirementFormField;
  return null == u ? null : (0, l.jsxs)(l.Fragment, {
    children: [!E.current && (0, l.jsx)(f, {
      isUserVerified: I
    }), (0, l.jsx)(M, {
      guildId: t,
      formFields: s,
      updateFormFields: a
    })]
  })
}