"use strict";
i.r(t), i.d(t, {
  default: function() {
    return T
  }
});
var n = i("37983");
i("884691");
var a = i("77078"),
  l = i("272030"),
  s = i("100300"),
  r = i("879478"),
  o = i("151185"),
  d = i("179016"),
  u = i("567054"),
  c = i("546470"),
  f = i("782340"),
  E = i("70933");

function I(e) {
  let {
    addFormField: t,
    onSelect: i,
    guild: o
  } = e;
  return (0, n.jsx)(a.Menu, {
    navId: "add-questions",
    className: E.menu,
    onClose: l.closeContextMenu,
    "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: i,
    children: (0, n.jsxs)(a.MenuGroup, {
      children: [(0, n.jsx)(a.MenuItem, {
        id: "text-input",
        icon: d.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
        action: () => (0, c.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.TEXT_INPUT, t, o)
      }), (0, n.jsx)(a.MenuItem, {
        id: "paragraph",
        icon: r.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
        action: () => (0, c.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.PARAGRAPH, t, o)
      }), (0, n.jsx)(a.MenuItem, {
        id: "multiple-choice",
        icon: s.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
        action: () => (0, c.openEmptyFormFieldModal)(u.VerificationFormFieldTypes.MULTIPLE_CHOICE, t, o)
      })]
    })
  })
}
var T = function(e) {
  let {
    addFormField: t,
    guild: i
  } = e, s = e => {
    (0, l.openContextMenu)(e, e => (0, n.jsx)(I, {
      ...e,
      addFormField: t,
      guild: i
    }), {
      position: "top",
      align: "center"
    })
  };
  return (0, n.jsx)("div", {
    className: E.container,
    children: (0, n.jsx)(a.Tooltip, {
      text: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_QUESTION_LIMIT,
      children: e => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(a.Clickable, {
          ...e,
          className: E.iconContainer,
          onClick: s,
          children: (0, n.jsx)(o.default, {
            width: 18,
            height: 20,
            className: E.icon
          })
        }), (0, n.jsx)(a.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTION
        })]
      })
    })
  })
}