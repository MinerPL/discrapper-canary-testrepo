"use strict";
t.d(s, {
  Z: function() {
    return o
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(556012),
  a = t(689938),
  r = t(39097);

function o(e) {
  let {
    action: s,
    triggerType: t,
    toggled: o,
    onToggleAction: c
  } = e, d = e => () => c(e), u = (0, l.c)(s.type, s, t);
  if (null == u) return null;
  let {
    headerText: E,
    descriptionText: _,
    icon: I
  } = u;
  return (0, n.jsxs)("div", {
    className: r.actionContainer,
    children: [(0, n.jsx)("div", {
      className: r.actionIconContainer,
      children: (0, n.jsx)(I, {
        width: 24,
        height: 24,
        className: r.actionIcon
      })
    }), (0, n.jsxs)("div", {
      className: r.actionTextContainer,
      children: [(0, n.jsx)(i.Heading, {
        variant: "heading-sm/semibold",
        children: E
      }), (0, n.jsx)(i.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: _
      }), o ? (0, n.jsxs)(i.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [a.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_CUSTOM_MESSAGE_HELPER, (0, n.jsx)(i.Clickable, {
          onClick: d(!0),
          className: r.editChannel,
          tag: "span",
          role: "link",
          children: a.Z.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_CUSTOM_MESSAGE_CTA
        })]
      }) : null]
    }), (0, n.jsx)("div", {
      children: (0, n.jsx)(i.Checkbox, {
        type: i.Checkbox.Types.INVERTED,
        value: o,
        onChange: d(!1),
        className: r.__invalid_actionCheckbox
      })
    })]
  })
}