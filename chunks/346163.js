"use strict";
t.d(s, {
  Z: function() {
    return T
  }
});
var n = t(470079),
  i = t(399606),
  l = t(674180),
  a = t(594174),
  r = t(63063),
  o = t(223892),
  c = t(58259),
  d = t(158992),
  u = t(159361),
  E = t(377176),
  _ = t(981631),
  I = t(689938);

function T(e) {
  let s;
  let t = (0, o.Ob)(e),
    T = null == e ? void 0 : e.hasFeature(_.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
    N = null == e ? void 0 : e.hasFeature(_.oNc.CREATOR_MONETIZABLE),
    m = (0, i.e7)([a.default], () => {
      let s = a.default.getCurrentUser();
      return (null == e ? void 0 : e.isOwner(s)) === !0
    }),
    {
      error: S,
      loading: h,
      createEnableRequest: g,
      submittedRequest: x
    } = (0, c.Z)(null == e ? void 0 : e.id),
    {
      loading: C,
      error: R,
      refresh: L,
      eligibility: O
    } = (0, d.Z)(null == e ? void 0 : e.id),
    {
      isApplicationRejected: A,
      requestCooldownDuration: p
    } = (0, u.Z)(O),
    M = (null == e ? void 0 : e.hasFeature(_.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(_.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
    {
      isMonetizationReapplicationDisabled: f
    } = (0, l.eC)(null == e ? void 0 : e.id),
    v = x || (null == O ? void 0 : O.isApplicationPending) === !0,
    D = (null == O ? void 0 : O.canApply) === !0,
    Z = I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUIREMENTS_DESCRIPTION.format({
      faqUrl: r.Z.getArticleURL(_.BhN.CREATOR_FAQ)
    });
  A && f ? s = !0 === T ? I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_HIGH_HARM.format({
    communityGuidelineUrl: _.EYA.GUIDELINES
  }) : I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_HIGH_HARM_ALT.format({
    communityGuidelineUrl: _.EYA.GUIDELINES
  }) : A && null != p && (s = I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_V2.format({
    requestCooldownDuration: p,
    creatorRevenuePolicyUrl: r.Z.getArticleURL(_.BhN.CREATOR_POLICY)
  }));
  let j = t && m && !1 === N,
    U = t && !1 === T,
    G = (0, E.f)(),
    P = A && D && m ? I.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_RESUBMIT_V2.format() : void 0;
  return n.useEffect(() => {
    j && L()
  }, [L, j]), {
    resubmittingEnableRequest: h,
    resubmissionError: S,
    isGuildOwner: m,
    createEnableRequest: g,
    resubmittedRequest: x,
    eligibilityLoading: C,
    eligibilityError: R,
    refreshEligibility: L,
    eligibility: O,
    eligibleForMonetization: D,
    isApplicationPending: v,
    hasPreviousApplicationRejection: A,
    requestRejectedNoticeText: s,
    reapplyNoticeText: P,
    showAcceptTermsFlow: U,
    wasRejectedInV1: U && (M || A),
    requirementsFinePrintText: Z,
    acceptTermsCheckboxText: G
  }
}