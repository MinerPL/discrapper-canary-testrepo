"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("470079"),
  l = s("399606"),
  n = s("674180"),
  i = s("594174"),
  r = s("63063"),
  o = s("223892"),
  d = s("58259"),
  u = s("158992"),
  c = s("159361"),
  E = s("377176"),
  _ = s("981631"),
  I = s("689938");

function T(e) {
  let t;
  let s = (0, o.useIsExpeditedOnboardingGuild)(e),
    T = null == e ? void 0 : e.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL),
    S = null == e ? void 0 : e.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE),
    f = (0, l.useStateFromStores)([i.default], () => {
      let t = i.default.getCurrentUser();
      return (null == e ? void 0 : e.isOwner(t)) === !0
    }),
    {
      error: m,
      loading: N,
      createEnableRequest: g,
      submittedRequest: h
    } = (0, d.default)(null == e ? void 0 : e.id),
    {
      loading: C,
      error: R,
      refresh: x,
      eligibility: L
    } = (0, u.default)(null == e ? void 0 : e.id),
    {
      isApplicationRejected: O,
      requestCooldownDuration: A
    } = (0, c.default)(L),
    p = (null == e ? void 0 : e.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(_.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) === !0,
    {
      isMonetizationReapplicationDisabled: M
    } = (0, n.useIsMonetizationReapplicationDisabled)(null == e ? void 0 : e.id),
    D = h || (null == L ? void 0 : L.isApplicationPending) === !0,
    v = (null == L ? void 0 : L.canApply) === !0,
    j = I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUIREMENTS_DESCRIPTION.format({
      faqUrl: r.default.getArticleURL(_.HelpdeskArticles.CREATOR_FAQ)
    });
  O && M ? t = !0 === T ? I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_HIGH_HARM.format({
    communityGuidelineUrl: _.MarketingURLs.GUIDELINES
  }) : I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_HIGH_HARM_ALT.format({
    communityGuidelineUrl: _.MarketingURLs.GUIDELINES
  }) : O && null != A && (t = I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_V2.format({
    requestCooldownDuration: A,
    creatorRevenuePolicyUrl: r.default.getArticleURL(_.HelpdeskArticles.CREATOR_POLICY)
  }));
  let G = s && f && !1 === S,
    U = s && !1 === T,
    P = (0, E.getCreatorMonetizationAcceptTermsCheckboxText)(),
    b = O && v && f ? I.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_RESUBMIT_V2.format() : void 0;
  return a.useEffect(() => {
    G && x()
  }, [x, G]), {
    resubmittingEnableRequest: N,
    resubmissionError: m,
    isGuildOwner: f,
    createEnableRequest: g,
    resubmittedRequest: h,
    eligibilityLoading: C,
    eligibilityError: R,
    refreshEligibility: x,
    eligibility: L,
    eligibleForMonetization: v,
    isApplicationPending: D,
    hasPreviousApplicationRejection: O,
    requestRejectedNoticeText: t,
    reapplyNoticeText: b,
    showAcceptTermsFlow: U,
    wasRejectedInV1: U && (p || O),
    requirementsFinePrintText: j,
    acceptTermsCheckboxText: P
  }
}