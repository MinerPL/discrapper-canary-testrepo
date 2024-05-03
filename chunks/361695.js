"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
}), s("47120");
var a = s("442837"),
  n = s("524437"),
  l = s("634894"),
  i = s("924557"),
  r = s("706140"),
  o = s("631885"),
  d = s("160913"),
  u = s("725727"),
  c = s("663389"),
  S = s("202527"),
  E = s("168308"),
  T = s("202022");

function f() {
  let e = (0, u.useUnseenOutboundPromotions)().length,
    t = (0, d.useIsPrepaidPaymentPastDue)(),
    s = (0, a.useStateFromStores)([c.default], () => c.default.getProps().impressionSource),
    f = (0, o.usePendingRequestCount)(),
    m = (0, E.useShouldShowOverlaySettings)(),
    _ = (0, i.useEnableClips)(),
    [g] = (0, r.useGetDismissibleContent)(_ ? [n.DismissibleContent.CLIPS_SETTINGS_BETA_TAG] : []),
    h = "useGenerateUserSettingsSections";
  (0, l.useTriggerDebuggingAA)({
    location: h + " auto on",
    autoTrackExposure: !0
  }), (0, l.useTriggerDebuggingAA)({
    location: h + " auto off",
    autoTrackExposure: !1
  });
  let {
    shouldMergeGameSettings: I
  } = S.GameSettingsMergeExperiment.useExperiment({
    location: "settings"
  });
  return (0, T.default)({
    unseenGiftCount: e,
    showPrepaidPaymentPastDueWarning: t,
    impressionSource: s,
    numOfPendingFamilyRequests: f,
    isOverlaySupported: m,
    isClipsBetaTagShowing: g === n.DismissibleContent.CLIPS_SETTINGS_BETA_TAG,
    shouldMergeGameSettings: I
  })
}