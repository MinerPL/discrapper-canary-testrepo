"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983");
s("884691");
var l = s("446674"),
  n = s("77078"),
  i = s("679653"),
  r = s("42203"),
  o = s("27618"),
  d = s("697218"),
  u = s("462392"),
  c = s("782340"),
  E = s("439418");

function _(e) {
  var t;
  let {
    action: s,
    triggerType: _,
    toggled: I,
    onToggleAction: T
  } = e, S = e => () => T(e), f = (0, u.getActionInfo)(s.type, s, _), m = null === (t = s.metadata) || void 0 === t ? void 0 : t.channelId, N = (0, l.useStateFromStores)([d.default, o.default, r.default], () => {
    let e = r.default.getChannel(m);
    if (null == e) return null;
    let t = (0, i.computeChannelName)(e, d.default, o.default);
    return t
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
        className: E.actionCheckbox
      })
    })]
  })
}