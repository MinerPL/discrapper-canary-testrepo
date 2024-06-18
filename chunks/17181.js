"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  },
  discardOnboardingPromise: function() {
    return T
  },
  isOnboardingActiveForGuild: function() {
    return f
  },
  openAndWaitForOnboarding: function() {
    return S
  }
});
var i = n(512722),
  r = n.n(i),
  s = n(481060),
  o = n(749210),
  a = n(703656),
  l = n(549817),
  u = n(745752),
  _ = n(819553),
  d = n(679240),
  c = n(981631),
  E = n(176505);
let I = {};

function T(e) {
  I[e] = null
}
async function h(e) {
  let {
    guildId: t,
    returnChannelId: n,
    isPreview: i = !1
  } = e;
  (0, s.closeAllModals)(), r()(null == I[t], "should not double-join guilds");
  let l = await (0, o.V)(t);
  if (l.hasFeature(c.oNc.COMMUNITY)) {
    if (i)(0, u.I1)(t);
    else {
      if (!l.hasFeature(c.oNc.GUILD_ONBOARDING)) return;
      await (0, u.rK)(t)
    }
    _.ZP.shouldShowOnboarding(t) && (await S(t), null != n && (0, a.uL)(c.Z5c.CHANNEL(t, n)))
  }
}

function S(e) {
  return new Promise(t => {
    I[e] = t, (0, d.x)(e).then(() => {
      var t, n;
      null === (n = I[t = e]) || void 0 === n || n.call(I), I[t] = null, l.Z.finishOnboarding(e)
    }), (0, a.uL)(c.Z5c.CHANNEL(e, E.oC.GUILD_ONBOARDING))
  })
}

function f(e) {
  return null != I[e]
}