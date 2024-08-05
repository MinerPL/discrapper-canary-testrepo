n.d(t, {
  Z: function() {
return o;
  }
}), n(47120);
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(295474),
  r = n(689938),
  l = n(708522);

function o(e) {
  let {
guildId: t,
analyticsLocations: n,
analyticsLocation: o
  } = e, [c, u] = (0, a.ww)({
guildId: t,
analyticsLocations: n,
analyticsLocation: o,
openWithoutBackstack: !0
  }), d = u ? r.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE : r.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_NO_PERMS, _ = u ? r.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_CTA : r.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_ACCOUNT_USERNAME_CTA;
  return (0, i.jsxs)(s.Notice, {
color: s.NoticeColors.CUSTOM,
className: l.quarantineNotice,
children: [
  d,
  (0, i.jsx)(s.NoticeButton, {
    onClick: c,
    children: _
  })
]
  });
}