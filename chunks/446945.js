"use strict";
i.r(t);
var a = i("735250");
i("470079");
var l = i("481060"),
  n = i("239091"),
  s = i("282597"),
  r = i("877715"),
  o = i("729285"),
  d = i("838221"),
  c = i("246364"),
  u = i("700833"),
  f = i("689938"),
  m = i("757607");

function E(e) {
  let {
    addFormField: t,
    onSelect: i,
    guild: o
  } = e;
  return (0, a.jsx)(l.Menu, {
    navId: "add-questions",
    className: m.menu,
    onClose: n.closeContextMenu,
    "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: i,
    children: (0, a.jsxs)(l.MenuGroup, {
      children: [(0, a.jsx)(l.MenuItem, {
        id: "text-input",
        icon: d.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
        action: () => (0, u.openEmptyFormFieldModal)(c.VerificationFormFieldTypes.TEXT_INPUT, t, o)
      }), (0, a.jsx)(l.MenuItem, {
        id: "paragraph",
        icon: r.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
        action: () => (0, u.openEmptyFormFieldModal)(c.VerificationFormFieldTypes.PARAGRAPH, t, o)
      }), (0, a.jsx)(l.MenuItem, {
        id: "multiple-choice",
        icon: s.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
        action: () => (0, u.openEmptyFormFieldModal)(c.VerificationFormFieldTypes.MULTIPLE_CHOICE, t, o)
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    guild: i
  } = e, s = e => {
    (0, n.openContextMenu)(e, e => (0, a.jsx)(E, {
      ...e,
      addFormField: t,
      guild: i
    }), {
      position: "top",
      align: "center"
    })
  };
  return (0, a.jsx)("div", {
    className: m.container,
    children: (0, a.jsx)(l.Tooltip, {
      text: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_QUESTION_LIMIT,
      children: e => (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(l.Clickable, {
          ...e,
          className: m.iconContainer,
          onClick: s,
          children: (0, a.jsx)(o.default, {
            width: 18,
            height: 20,
            className: m.icon
          })
        }), (0, a.jsx)(l.Text, {
          color: "interactive-normal",
          variant: "text-sm/normal",
          children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTION
        })]
      })
    })
  })
}