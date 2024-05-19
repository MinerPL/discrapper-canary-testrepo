"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("430824"),
  r = s("496675"),
  o = s("556012"),
  d = s("273504"),
  u = s("981631"),
  c = s("590433"),
  E = s("689938"),
  _ = s("39097");

function I(e) {
  var t;
  let {
    action: s,
    triggerType: I,
    guildId: T,
    toggled: S,
    onToggleAction: f
  } = e, m = e => () => f(e), N = (0, o.getActionInfo)(s.type, s, I), g = null === (t = s.metadata) || void 0 === t ? void 0 : t.durationSeconds, h = null != g ? (0, c.getFriendlyDurationString)(g) : null, C = (0, l.useStateFromStores)([r.default, i.default], () => r.default.can(u.Permissions.MODERATE_MEMBERS, i.default.getGuild(T)), [T]);
  if (null == N) return null;
  let {
    headerText: R,
    descriptionText: x,
    icon: L
  } = N;
  return (0, a.jsxs)("div", {
    className: _.actionContainer,
    children: [(0, a.jsx)("div", {
      className: _.actionIconContainer,
      children: (0, a.jsx)(L, {
        width: 24,
        height: 24,
        className: _.actionIcon
      })
    }), (0, a.jsxs)("div", {
      className: _.actionTextContainer,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-sm/semibold",
        children: R
      }), (0, a.jsx)(n.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: x
      }), S && (0, a.jsxs)(n.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: [function(e, t) {
          if (null === t) return null;
          if (e === d.AutomodTriggerType.MENTION_SPAM) return E.default.Messages.GUILD_AUTOMOD_ACTIONS_TIMEOUT_EDIT_HELPER_MENTION_SPAM.format({
            friendlyDurationString: t
          });
          return E.default.Messages.GUILD_AUTOMOD_ACTIONS_TIMEOUT_EDIT_HELPER.format({
            friendlyDurationString: t
          })
        }(I, h), C && (0, a.jsx)(n.Clickable, {
          onClick: m(!0),
          className: _.editChannel,
          tag: "span",
          role: "link",
          children: E.default.Messages.GUILD_AUTOMOD_ACTIONS_TIMEOUT_UPDATE_DURATION
        })]
      })]
    }), (0, a.jsx)(n.Tooltip, {
      text: E.default.Messages.GUILD_AUTOMOD_MISSING_TIMEOUT_PERMISSIONS.format(),
      "aria-label": E.default.Messages.GUILD_AUTOMOD_MISSING_TIMEOUT_PERMISSIONS.plainFormat(),
      shouldShow: !C,
      children: e => (0, a.jsx)("div", {
        ...e,
        children: (0, a.jsx)(n.Checkbox, {
          type: n.Checkbox.Types.INVERTED,
          value: S,
          onChange: m(!1),
          disabled: !C,
          className: _.__invalid_actionCheckbox
        })
      })
    })]
  })
}