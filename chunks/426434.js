"use strict";
t.d(s, {
  Z: function() {
    return T
  }
});
var n = t(735250);
t(470079);
var i = t(392711),
  l = t(442837),
  a = t(481060),
  r = t(230711),
  o = t(496675),
  c = t(594174),
  d = t(434404),
  u = t(449226),
  E = t(981631),
  _ = t(689938),
  I = t(212723);

function T(e) {
  let s, {
      guild: t
    } = e,
    T = t.mfaLevel,
    N = (0, l.e7)([o.Z], () => null != t && o.Z.can(E.Plq.MANAGE_GUILD, t), [t]),
    m = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
    S = t.isOwner(m),
    h = null == m ? void 0 : m.mfaEnabled,
    g = T === E.BpS.ELEVATED,
    x = S && h,
    C = (0, i.throttle)(async e => {
      if (!!x) await d.Z.updateMFALevel({
        guildId: t.id,
        level: e ? E.BpS.ELEVATED : E.BpS.NONE,
        isEnabled: !e
      })
    }, 1e3);
  if (!N) return null;
  !x && (s = S ? _.Z.Messages.GUILD_SETTINGS_SAFETY_MFA_OWNER_DETAIL.format({
    settingsHook: () => r.Z.open(E.oAB.ACCOUNT)
  }) : _.Z.Messages.GUILD_SETTINGS_SAFETY_MFA_NON_OWNER_DETAIL);
  let R = t.hasFeature(E.oNc.DISCOVERABLE);
  return (0, n.jsxs)("div", {
    className: I.simpleItemWrapper,
    children: [(0, n.jsxs)("div", {
      className: I.itemContent,
      children: [(0, n.jsx)(a.Heading, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: _.Z.Messages.GUILD_SETTINGS_REQ_MFA_LABEL
      }), (0, n.jsxs)(a.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [_.Z.Messages.GUILD_SETTINGS_SAFETY_MFA_BODY, " ", s]
      })]
    }), !x || g && R ? (0, n.jsx)(a.Tooltip, {
      text: R ? _.Z.Messages.GUILD_SETTINGS_SAFETY_MFA_DISCOVERABLE_DISABLED_TOOLTIP : S ? _.Z.Messages.GUILD_SETTINGS_SAFETY_MFA_OWNER_TOOLTIP : _.Z.Messages.GUILD_SETTINGS_SAFETY_MFA_NON_OWNER_TOOLTIP,
      children: e => (0, n.jsx)(u.Z, {
        checked: g,
        disabled: !0,
        onChange: C,
        className: I.bringToFront,
        tooltipProps: e
      })
    }) : (0, n.jsx)(u.Z, {
      checked: g,
      onChange: C,
      className: I.bringToFront
    })]
  })
}