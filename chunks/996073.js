var r = n(470079),
  i = n(442837),
  a = n(230711),
  s = n(607070),
  o = n(663389),
  l = n(526761),
  u = n(981631);
let c = Object.freeze({
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
u = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
d = (0, i.e7)([o.Z], () => o.Z.getScrollPosition());
  (0, r.useEffect)(() => {
let r = e.current;
if (null != r && t === d)
  setTimeout(() => {
    let e = requestAnimationFrame(() => {
      r.scrollIntoView({
        behavior: u ? 'auto' : 'smooth',
        ...n
      }), a.Z.clearScrollPosition(c[t]);
    });
    return () => cancelAnimationFrame(e);
  }, l);
  }, [
e,
t,
d,
u,
n,
l
  ]);
};