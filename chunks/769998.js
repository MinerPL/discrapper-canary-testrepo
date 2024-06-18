"use strict";
t.d(s, {
  Z: function() {
    return I
  }
});
var n = t(735250);
t(470079);
var i = t(442837),
  l = t(481060),
  a = t(430824),
  r = t(496675),
  o = t(556012),
  c = t(273504),
  d = t(981631),
  u = t(590433),
  E = t(689938),
  _ = t(39097);

function I(e) {
  var s;
  let {
    action: t,
    triggerType: I,
    guildId: T,
    toggled: N,
    onToggleAction: m
  } = e, S = e => () => m(e), h = (0, o.c)(t.type, t, I), g = null === (s = t.metadata) || void 0 === s ? void 0 : s.durationSeconds, x = null != g ? (0, u.L9)(g) : null, C = (0, i.e7)([r.Z, a.Z], () => r.Z.can(d.Plq.MODERATE_MEMBERS, a.Z.getGuild(T)), [T]);
  if (null == h) return null;
  let {
    headerText: R,
    descriptionText: L,
    icon: O
  } = h;
  return (0, n.jsxs)("div", {
    className: _.actionContainer,
    children: [(0, n.jsx)("div", {
      className: _.actionIconContainer,
      children: (0, n.jsx)(O, {
        width: 24,
        height: 24,
        className: _.actionIcon
      })
    }), (0, n.jsxs)("div", {
      className: _.actionTextContainer,
      children: [(0, n.jsx)(l.Heading, {
        variant: "heading-sm/semibold",
        children: R
      }), (0, n.jsx)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: L
      }), N && (0, n.jsxs)(l.Text, {
        color: "interactive-normal",
        variant: "text-xs/medium",
        children: [function(e, s) {
          if (null === s) return null;
          if (e === c.fX.MENTION_SPAM) return E.Z.Messages.GUILD_AUTOMOD_ACTIONS_TIMEOUT_EDIT_HELPER_MENTION_SPAM.format({
            friendlyDurationString: s
          });
          return E.Z.Messages.GUILD_AUTOMOD_ACTIONS_TIMEOUT_EDIT_HELPER.format({
            friendlyDurationString: s
          })
        }(I, x), C && (0, n.jsx)(l.Clickable, {
          onClick: S(!0),
          className: _.editChannel,
          tag: "span",
          role: "link",
          children: E.Z.Messages.GUILD_AUTOMOD_ACTIONS_TIMEOUT_UPDATE_DURATION
        })]
      })]
    }), (0, n.jsx)(l.Tooltip, {
      text: E.Z.Messages.GUILD_AUTOMOD_MISSING_TIMEOUT_PERMISSIONS.format(),
      "aria-label": E.Z.Messages.GUILD_AUTOMOD_MISSING_TIMEOUT_PERMISSIONS.plainFormat(),
      shouldShow: !C,
      children: e => (0, n.jsx)("div", {
        ...e,
        children: (0, n.jsx)(l.Checkbox, {
          type: l.Checkbox.Types.INVERTED,
          value: N,
          onChange: S(!1),
          disabled: !C,
          className: _.__invalid_actionCheckbox
        })
      })
    })]
  })
}