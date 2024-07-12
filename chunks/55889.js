var s = n(735250),
  a = n(470079),
  i = n(481060),
  r = n(941524),
  l = n(563115),
  o = n(689938),
  c = n(697636);
t.Z = a.memo(function(e) {
  let {
rule: t,
onlyRoles: n = !1,
onChangeRule: a
  } = e, d = (0, s.jsx)(r.Z, {
guildId: t.guildId,
selectedChannelIds: t.exemptChannels,
selectedRoleIds: t.exemptRoles,
onChange: (e, n) => a({
  ...t,
  exemptChannels: e,
  exemptRoles: n
}),
disableEveryoneRole: !0,
includeRoleRestrictedPrivateChannels: !0
  });
  return n && (d = (0, s.jsx)(l.Z, {
guildId: t.guildId,
selectedRoleIds: t.exemptRoles,
onChange: e => a({
  ...t,
  exemptRoles: e
}),
placeholder: o.Z.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
disableEveryoneRole: !0
  })), (0, s.jsxs)(i.FormItem, {
children: [
  d,
  (0, s.jsx)(i.Text, {
    color: 'header-secondary',
    variant: 'text-xs/normal',
    className: c.exemptionHint,
    children: o.Z.Messages.GUILD_AUTOMOD_EXEMPTION_HINT
  })
]
  });
});