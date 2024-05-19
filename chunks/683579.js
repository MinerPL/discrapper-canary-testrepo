"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("556012"),
  i = s("862085"),
  r = s("769998"),
  o = s("671066"),
  d = s("273504"),
  u = s("39097");

function c(e) {
  let {
    action: t,
    triggerType: s,
    toggled: i,
    onToggleAction: r
  } = e, o = (0, n.getActionInfo)(t.type, t, s);
  if (null == o) return null;
  let {
    headerText: d,
    descriptionText: c,
    icon: E
  } = o;
  return (0, a.jsxs)("div", {
    className: u.actionContainer,
    children: [(0, a.jsx)("div", {
      className: u.actionIconContainer,
      children: (0, a.jsx)(E, {
        width: 24,
        height: 24,
        className: u.actionIcon
      })
    }), (0, a.jsxs)("div", {
      className: u.actionTextContainer,
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-sm/semibold",
        children: d
      }), (0, a.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: c
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(l.Checkbox, {
        disabled: !o.isEditable,
        type: l.Checkbox.Types.INVERTED,
        value: i,
        onChange: () => r(!1),
        className: u.__invalid_actionCheckbox
      })
    })]
  })
}

function E(e) {
  let {
    action: t,
    guildId: s,
    triggerType: l,
    toggled: n,
    onToggleAction: u
  } = e;
  switch (t.type) {
    case d.AutomodActionType.FLAG_TO_CHANNEL:
      return (0, a.jsx)(o.default, {
        action: t,
        triggerType: l,
        toggled: n,
        onToggleAction: u
      });
    case d.AutomodActionType.USER_COMMUNICATION_DISABLED:
      return (0, a.jsx)(r.default, {
        action: t,
        guildId: s,
        triggerType: l,
        toggled: n,
        onToggleAction: u
      });
    case d.AutomodActionType.BLOCK_MESSAGE:
      return (0, a.jsx)(i.default, {
        action: t,
        triggerType: l,
        toggled: n,
        onToggleAction: u
      });
    default:
      return (0, a.jsx)(c, {
        action: t,
        guildId: s,
        toggled: n,
        triggerType: l,
        onToggleAction: u
      })
  }
}