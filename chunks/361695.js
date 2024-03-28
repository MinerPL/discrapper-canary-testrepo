"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
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
  S = s("202022");

function E() {
  let e = (0, u.useUnseenOutboundPromotions)().length,
    t = (0, d.useIsPrepaidPaymentPastDue)(),
    s = (0, a.useStateFromStores)([c.default], () => c.default.getProps().impressionSource),
    E = (0, o.usePendingRequestCount)(),
    T = (0, i.useEnableClips)(),
    [_] = (0, r.useGetDismissibleContent)(T ? [n.DismissibleContent.CLIPS_SETTINGS_BETA_TAG] : []),
    f = "useGenerateUserSettingsSections";
  return (0, l.useTriggerDebuggingAA)({
    location: f + " auto on",
    autoTrackExposure: !0
  }), (0, l.useTriggerDebuggingAA)({
    location: f + " auto off",
    autoTrackExposure: !1
  }), (0, S.default)({
    unseenGiftCount: e,
    showPrepaidPaymentPastDueWarning: t,
    impressionSource: s,
    numOfPendingFamilyRequests: E,
    isClipsBetaTagShowing: _ === n.DismissibleContent.CLIPS_SETTINGS_BETA_TAG
  })
}