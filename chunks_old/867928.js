"use strict";
s.r(t), s.d(t, {
  default: function() {
    return i
  },
  isOnboardingWizardCompleted: function() {
    return r
  }
});
var a = s("446674"),
  l = s("305961"),
  n = s("49111");

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