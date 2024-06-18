"use strict";
t.d(s, {
  Z: function() {
    return _
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(933557),
  r = t(592125),
  o = t(699516),
  c = t(594174),
  d = t(556012),
  u = t(689938),
  E = t(39097);

function _(e) {
  var s;
  let {
    action: t,
    triggerType: _,
    toggled: I,
    onToggleAction: T
  } = e, N = e => () => T(e), m = (0, d.c)(t.type, t, _), S = null === (s = t.metadata) || void 0 === s ? void 0 : s.channelId, h = (0, i.e7)([c.default, o.Z, r.Z], () => {
    let e = r.Z.getChannel(S);
    return null == e ? null : (0, a.F6)(e, c.default, o.Z)
  }, [S]);
  if (null == m) return null;
  let {
    headerText: g,
    descriptionText: x,
    icon: C
  } = m;
  return (0, n.jsxs)("div", {
    className: E.actionContainer,
    children: [(0, n.jsx)("div", {
      className: E.actionIconContainer,
      children: (0, n.jsx)(C, {
        width: 24,
        height: 24,
        className: E.actionIcon
      })
    }), (0, n.jsxs)("div", {
      className: E.actionTextContainer,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-sm/semibold",
        children: g
      }), (0, n.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: x
      }), I && (0, n.jsxs)(l.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [null != h && u.Z.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_EDIT_HELPER.format({
          channelName: h
        }), (0, n.jsx)(l.Clickable, {
          onClick: N(!0),
          className: E.editChannel,
          tag: "span",
          role: "link",
          children: u.Z.Messages.EDIT_CHANNEL
        })]
      })]
    }), (0, n.jsx)("div", {
      children: (0, n.jsx)(l.Checkbox, {
        type: l.Checkbox.Types.INVERTED,
        value: I,
        onChange: N(!1),
        className: E.__invalid_actionCheckbox
      })
    })]
  })
}