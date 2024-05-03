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
  f = s("196345"),
  E = s("707592"),
  M = s("981631");

function F(e) {
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
        return (0, l.jsx)(f.TermsFormField, {
          channelId: r,
          formField: e,
          onChange: (e, s) => d(t, s)
        }, t);
      case u.VerificationFormFieldTypes.TEXT_INPUT:
        return (0, l.jsx)(E.TextInputFormField, {
          formField: e,
          autofocus: 0 === t,
          onChange: e => o(t, e)
        }, t);
      case u.VerificationFormFieldTypes.PARAGRAPH:
        return (0, l.jsx)(I.ParagraphFormField, {
          formField: e,
          autofocus: 0 === t,
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
  } = e, u = (0, i.useStateFromStores)([a.default], () => a.default.getGuild(t)), c = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()), I = (0, d.useIsPhoneVerificationLevel)({
    guildId: t
  }) ? m.PreviewPhoneRequirementFormField : o.PreviewEmailRequirementFormField, f = null == u ? void 0 : u.hasFeature(M.GuildFeatures.COMMUNITY);
  return null == c ? null : (0, l.jsxs)(l.Fragment, {
    children: [f && (0, l.jsx)(I, {}), (0, l.jsx)(F, {
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
    updateFormFields: u
  } = e, c = (0, i.useStateFromStores)([a.default], () => a.default.getGuild(t)), I = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()), {
    isPhoneVerificationLevel: f,
    isCurrentUserVerified: E
  } = (0, d.useCurrentUserVerificationStatus)({
    guildId: t
  }), R = n.useRef(E), _ = f ? m.PhoneRequirementFormField : o.EmailRequirementFormField, N = (null == c ? void 0 : c.hasFeature(M.GuildFeatures.COMMUNITY)) && !R.current;
  return null == I ? null : (0, l.jsxs)(l.Fragment, {
    children: [N && (0, l.jsx)(_, {
      isUserVerified: E
    }), (0, l.jsx)(F, {
      guildId: t,
      formFields: s,
      updateFormFields: u
    })]
  })
}