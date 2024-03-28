"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("735250");
s("470079");
var l = s("392711"),
  n = s("442837"),
  i = s("481060"),
  r = s("230711"),
  o = s("496675"),
  d = s("594174"),
  u = s("434404"),
  c = s("449226"),
  E = s("981631"),
  _ = s("689938"),
  I = s("893079");

function T(e) {
  let t, {
      guild: s
    } = e,
    T = s.mfaLevel,
    S = (0, n.useStateFromStores)([o.default], () => null != s && o.default.can(E.Permissions.MANAGE_GUILD, s), [s]),
    f = (0, n.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    m = s.isOwner(f),
    N = null == f ? void 0 : f.mfaEnabled,
    g = T === E.MFALevels.ELEVATED,
    h = m && N,
    C = (0, l.throttle)(async e => {
      h && await u.default.updateMFALevel({
        guildId: s.id,
        level: e ? E.MFALevels.ELEVATED : E.MFALevels.NONE,
        isEnabled: !e
      })
    }, 1e3);
  if (!S) return null;
  !h && (t = m ? _.default.Messages.GUILD_SETTINGS_SAFETY_MFA_OWNER_DETAIL.format({
    settingsHook: () => r.default.open(E.UserSettingsSections.ACCOUNT)
  }) : _.default.Messages.GUILD_SETTINGS_SAFETY_MFA_NON_OWNER_DETAIL);
  let R = s.hasFeature(E.GuildFeatures.DISCOVERABLE);
  return (0, a.jsxs)("div", {
    className: I.simpleItemWrapper,
    children: [(0, a.jsxs)("div", {
      className: I.itemContent,
      children: [(0, a.jsx)(i.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: _.default.Messages.GUILD_SETTINGS_REQ_MFA_LABEL
      }), (0, a.jsxs)(i.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [_.default.Messages.GUILD_SETTINGS_SAFETY_MFA_BODY, " ", t]
      })]
    }), !h || g && R ? (0, a.jsx)(i.Tooltip, {
      text: R ? _.default.Messages.GUILD_SETTINGS_SAFETY_MFA_DISCOVERABLE_DISABLED_TOOLTIP : m ? _.default.Messages.GUILD_SETTINGS_SAFETY_MFA_OWNER_TOOLTIP : _.default.Messages.GUILD_SETTINGS_SAFETY_MFA_NON_OWNER_TOOLTIP,
      children: e => (0, a.jsx)(c.default, {
        checked: g,
        disabled: !0,
        onChange: C,
        className: I.bringToFront,
        tooltipProps: e
      })
    }) : (0, a.jsx)(c.default, {
      checked: g,
      onChange: C,
      className: I.bringToFront
    })]
  })
}