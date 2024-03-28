"use strict";
s.r(t);
var a = s("735250"),
  l = s("470079"),
  n = s("481060"),
  i = s("941524"),
  r = s("563115"),
  o = s("689938"),
  d = s("657620");
t.default = l.memo(function(e) {
  let {
    rule: t,
    onlyRoles: s = !1,
    onChangeRule: l
  } = e, u = (0, a.jsx)(i.default, {
    guildId: t.guildId,
    selectedChannelIds: t.exemptChannels,
    selectedRoleIds: t.exemptRoles,
    onChange: (e, s) => l({
      ...t,
      exemptChannels: e,
      exemptRoles: s
    }),
    disableEveryoneRole: !0,
    includeRoleRestrictedPrivateChannels: !0
  });
  return s && (u = (0, a.jsx)(r.default, {
    guildId: t.guildId,
    selectedRoleIds: t.exemptRoles,
    onChange: e => l({
      ...t,
      exemptRoles: e
    }),
    placeholder: o.default.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
    disableEveryoneRole: !0
  })), (0, a.jsxs)(n.FormItem, {
    children: [u, (0, a.jsx)(n.Text, {
      color: "header-secondary",
      variant: "text-xs/normal",
      className: d.exemptionHint,
      children: o.default.Messages.GUILD_AUTOMOD_EXEMPTION_HINT
    })]
  })
})