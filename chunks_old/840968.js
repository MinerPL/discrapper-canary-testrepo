"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var s = n("37983");
n("884691");
var a = n("489622"),
  l = n("956967"),
  i = n("782340"),
  r = n("231537");

function o(e) {
  let {
    guildId: t,
    analyticsLocations: n,
    analyticsLocation: o
  } = e, [u, d] = (0, l.useOpenFixQuarantinedProfileModal)({
    guildId: t,
    analyticsLocations: n,
    analyticsLocation: o,
    openWithoutBackstack: !0
  }), c = d ? i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE : i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_NO_PERMS, E = d ? i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_CTA : i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_ACCOUNT_USERNAME_CTA;
  return (0, s.jsxs)(a.default, {
    color: a.NoticeColors.CUSTOM,
    className: r.quarantineNotice,
    children: [c, (0, s.jsx)(a.NoticeButton, {
      onClick: u,
      children: E
    })]
  })
}