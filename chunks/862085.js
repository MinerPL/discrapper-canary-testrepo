"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("556012"),
  i = s("689938"),
  r = s("413237");

function o(e) {
  let {
    action: t,
    triggerType: s,
    toggled: o,
    onToggleAction: d
  } = e, u = e => () => d(e), c = (0, n.getActionInfo)(t.type, t, s);
  if (null == c) return null;
  let {
    headerText: E,
    descriptionText: _,
    icon: I
  } = c;
  return (0, a.jsxs)("div", {
    className: r.actionContainer,
    children: [(0, a.jsx)("div", {
      className: r.actionIconContainer,
      children: (0, a.jsx)(I, {
        width: 24,
        height: 24,
        className: r.actionIcon
      })
    }), (0, a.jsxs)("div", {
      className: r.actionTextContainer,
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-sm/semibold",
        children: E
      }), (0, a.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: _
      }), o ? (0, a.jsxs)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [i.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_CUSTOM_MESSAGE_HELPER, (0, a.jsx)(l.Clickable, {
          onClick: u(!0),
          className: r.editChannel,
          tag: "span",
          role: "link",
          children: i.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_CUSTOM_MESSAGE_CTA
        })]
      }) : null]
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(l.Checkbox, {
        type: l.Checkbox.Types.INVERTED,
        value: o,
        onChange: u(!1),
        className: r.__invalid_actionCheckbox
      })
    })]
  })
}