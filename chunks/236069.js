"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("47120");
var s = n("735250");
n("470079");
var a = n("644766"),
  l = n("295474"),
  i = n("689938"),
  r = n("502786");

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
  }), c = d ? i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE : i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_NO_PERMS, f = d ? i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_CTA : i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_ACCOUNT_USERNAME_CTA;
  return (0, s.jsxs)(a.default, {
    color: a.NoticeColors.CUSTOM,
    className: r.quarantineNotice,
    children: [c, (0, s.jsx)(a.NoticeButton, {
      onClick: u,
      children: f
    })]
  })
}