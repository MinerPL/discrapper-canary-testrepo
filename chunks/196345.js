"use strict";
n.r(t), n.d(t, {
  DisabledTermsRequirementFormField: function() {
    return m
  },
  TermsFieldBody: function() {
    return h
  },
  TermsFieldCheckbox: function() {
    return f
  },
  TermsFormField: function() {
    return E
  }
}), n("47120");
var r = n("735250");
n("470079");
var s = n("803997"),
  o = n.n(s),
  i = n("481060"),
  a = n("454585"),
  l = n("814550"),
  u = n("489813"),
  d = n("689938"),
  c = n("819104");

function h(e) {
  let {
    terms: t,
    channelId: n,
    className: s
  } = e;
  return (0, r.jsx)("div", {
    className: o()(c.termsFieldBody, s),
    children: t.map((e, t) => (0, r.jsxs)("div", {
      className: c.termsRow,
      children: [(0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: "".concat(t + 1, ".")
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        className: c.termsRowContent,
        children: a.default.parseGuildVerificationFormRule(e, !0, {
          channelId: n
        })
      })]
    }, "term-".concat(t)))
  })
}

function f(e) {
  let {
    onChange: t,
    checked: n,
    disabled: s
  } = e;
  return (0, r.jsx)(i.Checkbox, {
    size: 20,
    type: i.Checkbox.Types.INVERTED,
    value: n,
    onChange: t,
    disabled: s,
    style: {
      borderWidth: 2
    },
    className: c.checkbox,
    children: (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: d.default.Messages.MEMBER_VERIFICATION_READ_RULES
    })
  })
}

function m(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(u.RequirementRenderer, {
    icon: l.default,
    text: d.default.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
    meetsRequirement: !!t.response
  })
}
let E = e => {
  let {
    channelId: t,
    formField: n,
    onChange: s
  } = e;
  return (0, r.jsxs)(u.QuestionRenderer, {
    title: d.default.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
    children: [(0, r.jsx)(h, {
      className: c.fieldBackground,
      terms: n.values,
      channelId: t
    }), (0, r.jsx)(f, {
      onChange: s,
      checked: n.response
    })]
  })
}