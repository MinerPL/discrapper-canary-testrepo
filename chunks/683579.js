"use strict";
t.d(s, {
  Z: function() {
    return E
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(556012),
  a = t(862085),
  r = t(769998),
  o = t(671066),
  c = t(273504),
  d = t(39097);

function u(e) {
  let {
    action: s,
    triggerType: t,
    toggled: a,
    onToggleAction: r
  } = e, o = (0, l.c)(s.type, s, t);
  if (null == o) return null;
  let {
    headerText: c,
    descriptionText: u,
    icon: E
  } = o;
  return (0, n.jsxs)("div", {
    className: d.actionContainer,
    children: [(0, n.jsx)("div", {
      className: d.actionIconContainer,
      children: (0, n.jsx)(E, {
        width: 24,
        height: 24,
        className: d.actionIcon
      })
    }), (0, n.jsxs)("div", {
      className: d.actionTextContainer,
      children: [(0, n.jsx)(i.Heading, {
        variant: "heading-sm/semibold",
        children: c
      }), (0, n.jsx)(i.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: u
      })]
    }), (0, n.jsx)("div", {
      children: (0, n.jsx)(i.Checkbox, {
        disabled: !o.isEditable,
        type: i.Checkbox.Types.INVERTED,
        value: a,
        onChange: () => r(!1),
        className: d.__invalid_actionCheckbox
      })
    })]
  })
}

function E(e) {
  let {
    action: s,
    guildId: t,
    triggerType: i,
    toggled: l,
    onToggleAction: d
  } = e;
  switch (s.type) {
    case c.jj.FLAG_TO_CHANNEL:
      return (0, n.jsx)(o.Z, {
        action: s,
        triggerType: i,
        toggled: l,
        onToggleAction: d
      });
    case c.jj.USER_COMMUNICATION_DISABLED:
      return (0, n.jsx)(r.Z, {
        action: s,
        guildId: t,
        triggerType: i,
        toggled: l,
        onToggleAction: d
      });
    case c.jj.BLOCK_MESSAGE:
      return (0, n.jsx)(a.Z, {
        action: s,
        triggerType: i,
        toggled: l,
        onToggleAction: d
      });
    default:
      return (0, n.jsx)(u, {
        action: s,
        guildId: t,
        toggled: l,
        triggerType: i,
        onToggleAction: d
      })
  }
}