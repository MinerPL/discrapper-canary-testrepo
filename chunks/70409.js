"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("372444"),
  i = s("267642"),
  r = s("981631"),
  o = s("474936"),
  d = s("689938"),
  u = s("522943");

function c(e) {
  let {
    guild: t,
    numSounds: s,
    isOutOfSlots: c
  } = e, E = t.premiumTier, _ = (0, i.getNextTier)(E, t.id), I = o.TotalSoundboardSoundCountsByTier[E] - 2;
  if (null == _ || E === r.BoostedGuildTiers.TIER_3 || s < I) return null;
  let T = c ? {
    color: l.ButtonColors.GREEN,
    look: l.ButtonLooks.FILLED,
    text: d.default.Messages.GUILD_SETTINGS_SOUNDBOARD_CTA
  } : void 0;
  return (0, a.jsx)(n.default, {
    header: d.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_BANNER_HEADER,
    text: d.default.Messages.GUILD_SETTINGS_SOUNDBOARD_UPSELL_BANNER_TEXT.format({
      level: _,
      numAdditional: (0, i.getIncrementalSoundboardSoundCountForTier)(_)
    }),
    headerColor: "header-primary",
    textColor: "text-normal",
    buttonProps: T,
    guild: t,
    analyticsLocation: {
      page: r.AnalyticsPages.GUILD_SETTINGS,
      section: r.AnalyticsSections.GUILD_SETTINGS_SOUNDBOARD,
      object: r.AnalyticsObjects.BOOST_UPSELL_BANNER_SLOTS_FULL,
      objectType: (0, i.boostedGuildTierToAnalyticsObjectType)(_)
    },
    className: u.container
  })
}