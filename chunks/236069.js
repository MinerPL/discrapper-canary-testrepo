n.d(t, {
  Z: function() {
return o;
  }
}), n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
  s = n(295474),
  r = n(689938),
  l = n(708522);

function o(e) {
  let {
guildId: t,
analyticsLocations: n,
analyticsLocation: o
  } = e, [c, d] = (0, s.ww)({
guildId: t,
analyticsLocations: n,
analyticsLocation: o,
openWithoutBackstack: !0
  }), u = d ? r.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE : r.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_NO_PERMS, _ = d ? r.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_CTA : r.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_ACCOUNT_USERNAME_CTA;
  return (0, i.jsxs)(a.Notice, {
color: a.NoticeColors.CUSTOM,
className: l.quarantineNotice,
children: [
  u,
  (0, i.jsx)(a.NoticeButton, {
    onClick: c,
    children: _
  })
]
  });
}