"use strict";
n.r(t), n.d(t, {
  getChannelIdForGuildTransition: function() {
    return h
  },
  transitionToGuild: function() {
    return g
  }
});
var i = n("650033"),
  s = n("471706"),
  r = n("290886"),
  a = n("21121"),
  o = n("934306"),
  l = n("42203"),
  u = n("923959"),
  d = n("18494"),
  c = n("393414"),
  f = n("49111"),
  _ = n("724210");

function h(e) {
  var t;
  let n = d.default.getChannelId(e),
    i = null === (t = u.default.getDefaultChannel(e)) || void 0 === t ? void 0 : t.id;
  if (n === _.StaticChannelRoute.GUILD_ONBOARDING && !s.default.shouldShowOnboarding(e) || n === _.StaticChannelRoute.GUILD_HOME && !(0, r.canSeeOnboardingHome)(e)) return i;
  let a = l.default.getChannel(n);
  return null == a || a.isGuildVocal() ? i : n
}

function g(e, t) {
  let n = !(0, a.isInMainTabsExperiment)() || (0, o.shouldHandleNewPanelsRoute)(e) || i.default.get("navigate_to_last_channel") ? h(e) : void 0;
  (0, c.transitionTo)(f.Routes.CHANNEL(e, n), {
    navigationReplace: (0, o.shouldHandleNewPanelsRoute)(e) || i.default.get("navigate_to_last_channel"),
    ...t
  })
}