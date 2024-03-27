"use strict";
i.r(t), i.d(t, {
  default: function() {
    return T
  }
});
var n = i("37983"),
  a = i("884691"),
  l = i("77078"),
  s = i("100300"),
  r = i("879478"),
  o = i("151185"),
  d = i("179016"),
  u = i("567054"),
  c = i("546470"),
  f = i("782340"),
  E = i("935090");

function I(e) {
  let {
    onClick: t,
    text: i,
    icon: a
  } = e;
  return (0, n.jsx)("div", {
    className: E.addFormFieldContainer,
    children: (0, n.jsxs)(l.Clickable, {
      className: E.addFormField,
      onClick: t,
      children: [(0, n.jsx)(a, {
        className: E.icon,
        height: 16,
        width: 16
      }), (0, n.jsx)(l.FormText, {
        className: E.addFormFieldText,
        children: i
      })]
    })
  })
}
var T = function(e) {
  let {
    addFormField: t,
    showManualApprovalWarning: T,
    guild: m
  } = e, _ = a.useCallback(e => {
    (0, c.openEmptyFormFieldModal)(e, t, m)
  }, [t, m]), x = a.useCallback(e => {
    T ? (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await i.el("331761").then(i.bind(i, "331761"));
      return i => (0, n.jsx)(t, {
        ...i,
        onSubmit: () => _(e)
      })
    }) : _(e)
  }, [T, _]);
  return (0, n.jsxs)("div", {
    className: E.backgroundContainer,
    children: [(0, n.jsx)("div", {
      className: E.containerTopHat,
      children: (0, n.jsx)(l.Text, {
        className: E.containerTopHatText,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_MANUAL_APPROVAL_REQUIRED
      })
    }), (0, n.jsxs)("div", {
      className: E.leftRailIconContainer,
      children: [(0, n.jsx)("div", {
        className: E.iconContainer,
        children: (0, n.jsx)(o.default, {
          width: 18,
          height: 20,
          className: E.icon
        })
      }), (0, n.jsxs)(l.FormSection, {
        children: [(0, n.jsx)(l.FormTitle, {
          tag: "h3",
          className: E.leftRailIconContainerTitle,
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS
        }), (0, n.jsx)(l.FormText, {
          className: E.leftRailIconContainerDescription,
          type: l.FormText.Types.DESCRIPTION,
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTIONS_DESCRIPTION
        }), (0, n.jsx)(I, {
          formFieldType: u.VerificationFormFieldTypes.TEXT_INPUT,
          addFormField: t,
          icon: d.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
          onClick: () => x(u.VerificationFormFieldTypes.TEXT_INPUT)
        }), (0, n.jsx)(I, {
          formFieldType: u.VerificationFormFieldTypes.PARAGRAPH,
          addFormField: t,
          icon: r.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
          onClick: () => x(u.VerificationFormFieldTypes.PARAGRAPH)
        }), (0, n.jsx)(I, {
          formFieldType: u.VerificationFormFieldTypes.MULTIPLE_CHOICE,
          addFormField: t,
          icon: s.default,
          text: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
          onClick: () => x(u.VerificationFormFieldTypes.MULTIPLE_CHOICE)
        })]
      })]
    })]
  })
}