"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("933557"),
  r = s("592125"),
  o = s("699516"),
  d = s("594174"),
  u = s("556012"),
  c = s("689938"),
  E = s("39097");

function _(e) {
  var t;
  let {
    action: s,
    triggerType: _,
    toggled: I,
    onToggleAction: T
  } = e, S = e => () => T(e), f = (0, u.getActionInfo)(s.type, s, _), m = null === (t = s.metadata) || void 0 === t ? void 0 : t.channelId, N = (0, l.useStateFromStores)([d.default, o.default, r.default], () => {
    let e = r.default.getChannel(m);
    return null == e ? null : (0, i.computeChannelName)(e, d.default, o.default)
  }, [m]);
  if (null == f) return null;
  let {
    headerText: g,
    descriptionText: h,
    icon: C
  } = f;
  return (0, a.jsxs)("div", {
    className: E.actionContainer,
    children: [(0, a.jsx)("div", {
      className: E.actionIconContainer,
      children: (0, a.jsx)(C, {
        width: 24,
        height: 24,
        className: E.actionIcon
      })
    }), (0, a.jsxs)("div", {
      className: E.actionTextContainer,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-sm/semibold",
        children: g
      }), (0, a.jsx)(n.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: h
      }), I && (0, a.jsxs)(n.Text, {
        color: "text-muted",
        variant: "text-xs/medium",
        children: [null != N && c.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_EDIT_HELPER.format({
          channelName: N
        }), (0, a.jsx)(n.Clickable, {
          onClick: S(!0),
          className: E.editChannel,
          tag: "span",
          role: "link",
          children: c.default.Messages.EDIT_CHANNEL
        })]
      })]
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(n.Checkbox, {
        type: n.Checkbox.Types.INVERTED,
        value: I,
        onChange: S(!1),
        className: E.__invalid_actionCheckbox
      })
    })]
  })
}