"use strict";
n.r(t);
var a = n("735250");
n("470079");
var i = n("481060"),
  r = n("239091"),
  s = n("282597"),
  l = n("877715"),
  o = n("729285"),
  c = n("838221"),
  d = n("246364"),
  u = n("700833"),
  f = n("689938"),
  m = n("956655");

function h(e) {
  let {
    addFormField: t,
    onSelect: n,
    guild: o
  } = e;
  return (0, a.jsx)(i.Menu, {
    navId: "add-questions",
    className: m.menu,
    onClose: r.closeContextMenu,
    "aria-label": f.default.Messages.USER_ACTIONS_MENU_LABEL,
    onSelect: n,
    children: (0, a.jsxs)(i.MenuGroup, {
      children: [(0, a.jsx)(i.MenuItem, {
        id: "text-input",
        icon: c.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_TEXT_INPUT,
        action: () => (0, u.openEmptyFormFieldModal)(d.VerificationFormFieldTypes.TEXT_INPUT, t, o)
      }), (0, a.jsx)(i.MenuItem, {
        id: "paragraph",
        icon: l.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_PARAGRAPH,
        action: () => (0, u.openEmptyFormFieldModal)(d.VerificationFormFieldTypes.PARAGRAPH, t, o)
      }), (0, a.jsx)(i.MenuItem, {
        id: "multiple-choice",
        icon: s.default,
        label: f.default.Messages.MEMBER_VERIFICATION_FORM_ITEM_MULTIPLE_CHOICE,
        action: () => (0, u.openEmptyFormFieldModal)(d.VerificationFormFieldTypes.MULTIPLE_CHOICE, t, o)
      })]
    })
  })
}
t.default = function(e) {
  let {
    addFormField: t,
    guild: n
  } = e, s = e => {
    (0, r.openContextMenu)(e, e => (0, a.jsx)(h, {
      ...e,
      addFormField: t,
      guild: n
    }), {
      position: "top",
      align: "center"
    })
  };
  return (0, a.jsx)(i.Tooltip, {
    text: f.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_QUESTION_LIMIT,
    children: e => (0, a.jsxs)(i.Clickable, {
      ...e,
      className: m.container,
      onClick: s,
      children: [(0, a.jsx)(o.default, {
        width: 24,
        height: 24,
        className: m.icon
      }), (0, a.jsx)(i.Text, {
        color: "interactive-active",
        variant: "text-md/semibold",
        children: f.default.Messages.MEMBER_VERIFICATION_ADD_QUESTION
      })]
    })
  })
}