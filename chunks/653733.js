"use strict";
n.d(t, {
  h: function() {
    return o
  }
});
var i = n(358085),
  r = n(280234),
  s = n(480384);

function o(e) {
  if (!(0, i.isDesktop)()) return {
    isRecentlyOnlineUIEnabled: !1,
    shouldPrioritizeSubscription: !1
  };
  let {
    allowPrioritySubscriptions: t,
    isRecentlyOnlineEnabled: n
  } = r.Z.getCurrentConfig({
    location: "guild-subscriptions-store"
  }, {
    autoTrackExposure: !1
  });
  if (!n && !t) return {
    isRecentlyOnlineUIEnabled: !1,
    shouldPrioritizeSubscription: !1
  };
  let o = s.Z.getPriorityGuilds().includes(e);
  return {
    isRecentlyOnlineUIEnabled: o && n,
    shouldPrioritizeSubscription: o && t
  }
}