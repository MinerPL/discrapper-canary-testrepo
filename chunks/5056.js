"use strict";
a.r(t);
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("481060"),
  o = a("282597"),
  c = a("877715"),
  d = a("729285"),
  u = a("838221"),
  f = a("246364"),
  m = a("700833"),
  h = a("689938"),
  p = a("17359");

function E(e) {
  let {
    onClick: t,
    text: a,
    icon: r
  } = e;
  return (0, n.jsx)("div", {
    className: p.addFormFieldContainer,
    children: (0, n.jsxs)(l.Clickable, {
      className: p.addFormField,
      onClick: t,
      children: [(0, n.jsx)(r, {
        className: p.icon,
        height: 16,
        width: 16
      }), (0, n.jsx)(l.FormText, {
        className: p.addFormFieldText,
        children: a
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: s,
    guild: T,
    showHeader: C
  } = e, x = r.useCallback(e => {
    (0, m.openEmptyFormFieldModal)(e, t, T)
  }, [t, T]), _ = r.useCallback(e => {
    s ? (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([a.e("99387"), a.e("54845")]).then(a.bind(a, "199836"));
      return a => (0, n.jsx)(t, {
        ...a,
        onSubmit: () => x(e)
      })
    }) : x(e)
  }, [s, x]);
  return (0, n.jsxs)("div", {
    className: i()(p.spacingContainer, p.backgroundContainer),
    children: [C && (0, n.jsx)("div", {
      className: p.containerTopHat,
      children: (0, n.jsx)(l.Text, {
        className: p.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: h.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, n.jsxs)("div", {
      className: p.leftRailIconContainer,
      children: [(0, n.jsx)("div", {
        className: p.iconContainer,
        children: (0, n.jsx)(d.default, {
          width: 18,
          height: 20,
          className: p.icon
        })
      }), (0, n.jsxs)(l.FormSection, {
        children: [(0, n.jsx)(l.FormTitle, {
          tag: "h3",
          className: p.leftRailIconContainerTitle,
          children: h.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, n.jsx)(l.FormText, {
          className: p.leftRailIconContainerDescription,
          type: l.FormText.Types.DESCRIPTION,
          children: h.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, n.jsx)(E, {
          formFieldType: f.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: u.default,
          text: h.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => _(f.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, n.jsx)(E, {
          formFieldType: f.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: c.default,
          text: h.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => _(f.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, n.jsx)(E, {
          formFieldType: f.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: o.default,
          text: h.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => _(f.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}