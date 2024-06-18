"use strict";
t.d(s, {
  C: function() {
    return r
  },
  Z: function() {
    return a
  }
});
var n = t(442837),
  i = t(430824),
  l = t(981631);

function a(e) {
  return (0, n.e7)([i.Z], () => {
    let s = i.Z.getGuild(e);
    return null != s && s.hasFeature(l.oNc.GUILD_ONBOARDING_EVER_ENABLED)
  })
}

function r(e) {
  let s = i.Z.getGuild(e);
  return null != s && s.hasFeature(l.oNc.GUILD_ONBOARDING_EVER_ENABLED)
}