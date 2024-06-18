"use strict";
n.d(t, {
  G: function() {
    return N
  },
  S: function() {
    return f
  }
}), n(47120);
var i = n(913527),
  r = n.n(i),
  s = n(704215),
  o = n(835913),
  a = n(605236),
  l = n(675478),
  u = n(581883),
  _ = n(430824),
  d = n(709054),
  c = n(866817),
  E = n(637853),
  I = n(981631),
  T = n(921944);
let h = [s.z.GUILD_ONBOARDING_UPSELL_MODAL_V2, s.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, s.z.GUILD_ONBOARDING_UPSELL_NAGBAR],
  S = [0, 1, 7];

function f(e, t) {
  var n;
  let i = _.Z.getGuilds(),
    s = d.default.entries(i).some(e => {
      let [t, n] = e, i = (0, E.wC)(t), r = n.hasFeature(I.oNc.GUILD_ONBOARDING_EVER_ENABLED);
      return i && r
    });
  if (s || !(0, E.wC)(e)) return !1;
  let l = null === (n = u.Z.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
    T = null != l ? o.E.toDate(l) : void 0,
    f = null != T ? r()().diff(T, "days") : null,
    N = h.indexOf(t);
  if (-1 === N || !(null == f || f > S[N]) || h.find(e => !(0, a.un)(e)) !== t) return !1;
  let {
    showLifecycleUpsells: A
  } = c.Z.getCurrentConfig({
    guildId: e,
    location: "7f5b67_1"
  }, {
    disable: s || !(0, E.wC)(e),
    autoTrackExposure: !0
  });
  return A
}

function N(e, t) {
  let n = o.E.now();
  l.hW.updateAsync("userContent", e => {
    e.guildOnboardingUpsellDismissedAt = n
  }, l.fy.INFREQUENT_USER_ACTION), null != t && (0, a.EW)(t, {
    forceTrack: !0,
    dismissAction: T.L.AUTO,
    guildId: e
  })
}