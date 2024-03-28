"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  },
  isOnboardingWizardCompleted: function() {
    return r
  }
});
var a = s("442837"),
  l = s("430824"),
  n = s("981631");

function i(e) {
  return (0, a.useStateFromStores)([l.default], () => {
    let t = l.default.getGuild(e);
    return null != t && t.hasFeature(n.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)
  })
}

function r(e) {
  let t = l.default.getGuild(e);
  return null != t && t.hasFeature(n.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED)
}