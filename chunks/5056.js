"use strict";
i.r(t);
var a = i("735250"),
  l = i("470079"),
  n = i("481060"),
  s = i("282597"),
  r = i("877715"),
  o = i("729285"),
  d = i("838221"),
  c = i("246364"),
  u = i("700833"),
  f = i("689938"),
  m = i("482249");

function E(e) {
  let {
    onClick: t,
    text: i,
    icon: l
  } = e;
  return (0, a.jsx)("div", {
    className: m.addFormFieldContainer,
    children: (0, a.jsxs)(n.Clickable, {
      className: m.addFormField,
      onClick: t,
      children: [(0, a.jsx)(l, {
        className: m.icon,
        height: 16,
        width: 16
      }), (0, a.jsx)(n.FormText, {
        className: m.addFormFieldText,
        children: i
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: I,
    guild: x
  } = e, h = l.useCallback(e => {
    (0, u.openEmptyFormFieldModal)(e, t, x)
  }, [t, x]), T = l.useCallback(e => {
    I ? (0, n.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([i.e("99387"), i.e("54845")]).then(i.bind(i, "199836"));
      return i => (0, a.jsx)(t, {
        ...i,
        onSubmit: () => h(e)
      })
    }) : h(e)
  }, [I, h]);
  return (0, a.jsxs)("div", {
    className: m.backgroundContainer,
    children: [(0, a.jsx)("div", {
      className: m.containerTopHat,
      children: (0, a.jsx)(n.Text, {
        className: m.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, a.jsxs)("div", {
      className: m.leftRailIconContainer,
      children: [(0, a.jsx)("div", {
        className: m.iconContainer,
        children: (0, a.jsx)(o.default, {
          width: 18,
          height: 20,
          className: m.icon
        })
      }), (0, a.jsxs)(n.FormSection, {
        children: [(0, a.jsx)(n.FormTitle, {
          tag: "h3",
          className: m.leftRailIconContainerTitle,
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, a.jsx)(n.FormText, {
          className: m.leftRailIconContainerDescription,
          type: n.FormText.Types.DESCRIPTION,
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, a.jsx)(E, {
          formFieldType: c.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: d.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => T(c.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, a.jsx)(E, {
          formFieldType: c.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: r.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => T(c.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, a.jsx)(E, {
          formFieldType: c.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: s.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => T(c.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}