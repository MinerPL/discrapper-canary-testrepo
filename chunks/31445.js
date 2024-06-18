"use strict";
n.d(t, {
  Z: function() {
    return o
  },
  t: function() {
    return a
  }
});
var i = n(442837),
  r = n(160404),
  s = n(981631);

function o(e) {
  return (0, i.e7)([r.Z], () => {
    if ((null == e ? void 0 : e.id) == null) return !1;
    let t = r.Z.isFullServerPreview(e.id),
      n = r.Z.isOnboardingEnabled(e.id);
    return t && n
  }) || (null == e ? void 0 : e.hasFeature(s.oNc.GUILD_ONBOARDING_HAS_PROMPTS))
}

function a(e) {
  if (null == e) return !1;
  let t = r.Z.isFullServerPreview(e.id),
    n = r.Z.isOnboardingEnabled(e.id);
  return t && n || e.hasFeature(s.oNc.GUILD_ONBOARDING_HAS_PROMPTS)
}