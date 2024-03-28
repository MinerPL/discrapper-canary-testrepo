"use strict";
n.r(t), n.d(t, {
  AutomodUserProfileQuarantineChatInputNotice: function() {
    return h
  }
}), n("47120");
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("100527"),
  i = n("906732"),
  r = n("545594"),
  o = n("760623"),
  u = n("295474"),
  d = n("981631"),
  c = n("689938"),
  f = n("895057");

function h(e) {
  var t, n;
  let {
    guild: h
  } = e, {
    analyticsLocations: m
  } = (0, i.default)(s.default.AUTOMOD_PROFILE_QUARANTINE_ALERT), [p, E] = (0, u.useOpenFixQuarantinedProfileModal)({
    guildId: null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : d.EMPTY_STRING_SNOWFLAKE_ID,
    analyticsLocations: m,
    openWithoutBackstack: !0
  }), C = E ? c.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_DESCRIPTION : c.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_NO_PERMS_DESCRIPTION, g = E ? c.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : c.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
  return (0, a.jsx)("div", {
    children: (0, a.jsx)(r.MessageNoticeBanner, {
      bannerIcon: (0, a.jsx)(o.default, {
        className: f.bannerIcon,
        width: 32,
        height: 32
      }),
      bannerHeader: c.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
        guildName: null !== (n = null == h ? void 0 : h.name) && void 0 !== n ? n : ""
      }),
      bannerSubtext: C,
      containerStyles: f.bannerContainer,
      headerStyles: f.bannerHeader,
      children: (0, a.jsx)(l.Button, {
        onClick: () => {
          p()
        },
        size: l.Button.Sizes.SMALL,
        children: g
      })
    })
  })
}