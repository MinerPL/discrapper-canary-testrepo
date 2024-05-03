"use strict";
n.r(t);
var a = n("735250"),
  i = n("470079"),
  r = n("120356"),
  s = n.n(r),
  l = n("481060"),
  o = n("282597"),
  c = n("877715"),
  d = n("729285"),
  u = n("838221"),
  f = n("246364"),
  m = n("700833"),
  h = n("689938"),
  E = n("915580");

function T(e) {
  let {
    onClick: t,
    text: n,
    icon: i
  } = e;
  return (0, a.jsx)("div", {
    className: E.addFormFieldContainer,
    children: (0, a.jsxs)(l.Clickable, {
      className: E.addFormField,
      onClick: t,
      children: [(0, a.jsx)(i, {
        className: E.icon,
        height: 16,
        width: 16
      }), (0, a.jsx)(l.FormText, {
        className: E.addFormFieldText,
        children: n
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: r,
    guild: p,
    showHeader: _
  } = e, C = i.useCallback(e => {
    (0, m.openEmptyFormFieldModal)(e, t, p)
  }, [t, p]), g = i.useCallback(e => {
    r ? (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await Promise.all([n.e("99387"), n.e("54845")]).then(n.bind(n, "199836"));
      return n => (0, a.jsx)(t, {
        ...n,
        onSubmit: () => C(e)
      })
    }) : C(e)
  }, [r, C]);
  return (0, a.jsxs)("div", {
    className: s()(E.spacingContainer, E.backgroundContainer),
    children: [_ && (0, a.jsx)("div", {
      className: E.containerTopHat,
      children: (0, a.jsx)(l.Text, {
        className: E.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: h.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, a.jsxs)("div", {
      className: E.leftRailIconContainer,
      children: [(0, a.jsx)("div", {
        className: E.iconContainer,
        children: (0, a.jsx)(d.default, {
          width: 18,
          height: 20,
          className: E.icon
        })
      }), (0, a.jsxs)(l.FormSection, {
        children: [(0, a.jsx)(l.FormTitle, {
          tag: "h3",
          className: E.leftRailIconContainerTitle,
          children: h.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, a.jsx)(l.FormText, {
          className: E.leftRailIconContainerDescription,
          type: l.FormText.Types.DESCRIPTION,
          children: h.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, a.jsx)(T, {
          formFieldType: f.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: u.default,
          text: h.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => g(f.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, a.jsx)(T, {
          formFieldType: f.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: c.default,
          text: h.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => g(f.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, a.jsx)(T, {
          formFieldType: f.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: o.default,
          text: h.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => g(f.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}