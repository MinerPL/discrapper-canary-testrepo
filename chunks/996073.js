"use strict";
var i = n(470079),
  r = n(442837),
  s = n(230711),
  o = n(607070),
  a = n(663389),
  l = n(526761),
  u = n(981631);
let _ = Object.freeze({
  [l.KQ.ProfileCustomizationScrollPositions.TRY_IT_OUT]: u.oAB.PROFILE_CUSTOMIZATION,
  [l.KQ.AccessibilityScrollPositions.REDUCED_MOTION]: u.oAB.ACCESSIBILITY,
  [l.KQ.AccessibilityScrollPositions.SYNC_PROFILE_THEME_WITH_USER_THEME]: u.oAB.ACCESSIBILITY,
  [l.KQ.AccessibilityScrollPositions.LEGACY_CHAT_INPUT]: u.oAB.ACCESSIBILITY,
  [l.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION]: u.oAB.VOICE,
  [l.KQ.AppearanceScrollPositions.CUSTOM_APP_ICONS]: u.oAB.APPEARANCE,
  [l.KQ.PrivacyAndSafetyScrollPositions.DM_SAFETY_ALERTS]: u.oAB.PRIVACY_AND_SAFETY,
  [l.KQ.PrivacyAndSafetyScrollPositions.MESSAGE_REQUESTS]: u.oAB.PRIVACY_AND_SAFETY,
  [l.KQ.PrivacyAndSafetyScrollPositions.EXPLICIT_MEDIA_REDACTION]: u.oAB.PRIVACY_AND_SAFETY
});
t.Z = function(e, t, n) {
  let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
    u = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
    d = (0, r.e7)([a.Z], () => a.Z.getScrollPosition());
  (0, i.useEffect)(() => {
    let i = e.current;
    if (null != i && t === d) setTimeout(() => {
      let e = requestAnimationFrame(() => {
        i.scrollIntoView({
          behavior: u ? "auto" : "smooth",
          ...n
        }), s.Z.clearScrollPosition(_[t])
      });
      return () => cancelAnimationFrame(e)
    }, l)
  }, [e, t, d, u, n, l])
}