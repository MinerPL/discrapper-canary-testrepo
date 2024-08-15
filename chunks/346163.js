n.d(t, {
  Z: function() {
return T;
  }
});
var s = n(470079),
  a = n(399606),
  i = n(674180),
  r = n(594174),
  l = n(63063),
  o = n(223892),
  c = n(58259),
  d = n(158992),
  u = n(159361),
  _ = n(377176),
  I = n(981631),
  E = n(689938);

function T(e) {
  let t;
  let n = (0, o.Ob)(e),
T = null == e ? void 0 : e.hasFeature(I.oNc.CREATOR_MONETIZABLE_PROVISIONAL),
m = null == e ? void 0 : e.hasFeature(I.oNc.CREATOR_MONETIZABLE),
N = (0, a.e7)([r.default], () => {
  let t = r.default.getCurrentUser();
  return (null == e ? void 0 : e.isOwner(t)) === !0;
}),
{
  error: S,
  loading: h,
  createEnableRequest: g,
  submittedRequest: C
} = (0, c.Z)(null == e ? void 0 : e.id),
{
  loading: x,
  error: p,
  refresh: R,
  eligibility: f
} = (0, d.Z)(null == e ? void 0 : e.id),
{
  isApplicationRejected: L,
  requestCooldownDuration: O
} = (0, u.Z)(f),
A = (null == e ? void 0 : e.hasFeature(I.oNc.CREATOR_MONETIZABLE_RESTRICTED)) === !0 || (null == e ? void 0 : e.hasFeature(I.oNc.CREATOR_MONETIZABLE_DISABLED)) === !0,
{
  isMonetizationReapplicationDisabled: M
} = (0, i.eC)(null == e ? void 0 : e.id),
D = C || (null == f ? void 0 : f.isApplicationPending) === !0,
v = (null == f ? void 0 : f.canApply) === !0,
j = E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUIREMENTS_DESCRIPTION.format({
  faqUrl: l.Z.getArticleURL(I.BhN.CREATOR_FAQ)
});
  L && M ? t = !0 === T ? E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_HIGH_HARM.format({
communityGuidelineUrl: I.EYA.GUIDELINES
  }) : E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_HIGH_HARM_ALT.format({
communityGuidelineUrl: I.EYA.GUIDELINES
  }) : L && null != O && (t = E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_REJECTED_V2.format({
requestCooldownDuration: O,
creatorRevenuePolicyUrl: l.Z.getArticleURL(I.BhN.CREATOR_POLICY)
  }));
  let Z = n && N && !1 === m,
b = n && !1 === T,
U = (0, _.f)(),
G = L && v && N ? E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_ENABLE_REQUEST_RESUBMIT_V2.format() : void 0;
  return s.useEffect(() => {
Z && R();
  }, [
R,
Z
  ]), {
resubmittingEnableRequest: h,
resubmissionError: S,
isGuildOwner: N,
createEnableRequest: g,
resubmittedRequest: C,
eligibilityLoading: x,
eligibilityError: p,
refreshEligibility: R,
eligibility: f,
eligibleForMonetization: v,
isApplicationPending: D,
hasPreviousApplicationRejection: L,
requestRejectedNoticeText: t,
reapplyNoticeText: G,
showAcceptTermsFlow: b,
wasRejectedInV1: b && (A || L),
requirementsFinePrintText: j,
acceptTermsCheckboxText: U
  };
}