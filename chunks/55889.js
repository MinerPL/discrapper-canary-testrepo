"use strict";
var n = t(735250),
  i = t(470079),
  l = t(481060),
  a = t(941524),
  r = t(563115),
  o = t(689938),
  c = t(502114);
s.Z = i.memo(function(e) {
  let {
    rule: s,
    onlyRoles: t = !1,
    onChangeRule: i
  } = e, d = (0, n.jsx)(a.Z, {
    guildId: s.guildId,
    selectedChannelIds: s.exemptChannels,
    selectedRoleIds: s.exemptRoles,
    onChange: (e, t) => i({
      ...s,
      exemptChannels: e,
      exemptRoles: t
    }),
    disableEveryoneRole: !0,
    includeRoleRestrictedPrivateChannels: !0
  });
  return t && (d = (0, n.jsx)(r.Z, {
    guildId: s.guildId,
    selectedRoleIds: s.exemptRoles,
    onChange: e => i({
      ...s,
      exemptRoles: e
    }),
    placeholder: o.Z.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
    disableEveryoneRole: !0
  })), (0, n.jsxs)(l.FormItem, {
    children: [d, (0, n.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      className: c.exemptionHint,
      children: o.Z.Messages.GUILD_AUTOMOD_EXEMPTION_HINT
    })]
  })
})