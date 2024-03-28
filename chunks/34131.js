"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("434404"),
  l = n("970731"),
  i = n("810090"),
  r = n("981631"),
  o = n("689938"),
  u = n("169067");

function d(e) {
  let {
    guildId: t,
    markAsDismissed: n
  } = e;
  return (0, a.jsx)("div", {
    className: u.container,
    children: (0, a.jsx)(l.default, {
      header: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_UPSELL_TITLE,
      content: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_UPSELL_BODY,
      asset: (0, a.jsx)(i.default, {
        className: u.video,
        src: "https://cdn.discordapp.com/assets/server-subscription-tier-template/upsell.mov",
        autoPlay: !0,
        loop: !0
      }),
      buttonCTA: o.default.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_UPSELL_CTA,
      onClick: () => {
        s.default.open(t, r.GuildSettingsSections.ROLE_SUBSCRIPTIONS, void 0, r.GuildSettingsSubsections.ROLE_SUBSCRIPTION_TIER_TEMPLATE)
      },
      secondaryButtonCTA: o.default.Messages.DISMISS,
      markAsDismissed: n
    })
  })
}