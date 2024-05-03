"use strict";
s.r(t), s.d(t, {
  useIsEligibleSenderForReferralProgram: function() {
    return d
  },
  useIsEligibleSenderForReferralProgramTabBadge: function() {
    return u
  }
});
var a = s("442837"),
  r = s("524437"),
  i = s("605236"),
  n = s("276444"),
  l = s("520540"),
  o = s("898997");
let u = e => {
    let t = d(e),
      s = (0, i.useIsDismissibleContentDismissed)(r.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE);
    return t && !s
  },
  d = e => {
    let {
      enabled: t
    } = l.ReferralProgramSender.useExperiment({
      location: e
    }, {
      autoTrackExposure: !1
    });
    (0, o.useMaybeFetchReferralsRemaining)(e, !t);
    let s = (0, a.useStateFromStores)([n.default], () => n.default.getIsEligibleToSendReferrals());
    return t && s
  }