var s = n(735250);
n(470079);
var a = n(780384),
  r = n(481060),
  i = n(410030),
  l = n(74538),
  o = n(650032),
  c = n(104494),
  d = n(639119),
  _ = n(197115),
  u = n(474936),
  E = n(689938),
  T = n(904683);
let I = e => {
let {
  showTrialCTA: t,
  subscriptionTier: n,
  shouldShowUpsells: s,
  trialDurationCopy: a,
  isPersistentCTA: r,
  shouldShowReferralTrialCopy: i,
  subscriptionTrial: o
} = e;
if (t && i)
  return E.Z.Messages.REFERRAL_PROGRAM_START_TRIAL;
if (t && (n === u.Si.TIER_2 || r))
  return (0, l.Rt)({
    intervalType: null == o ? void 0 : o.interval,
    intervalCount: null == o ? void 0 : o.interval_count
  });
if (t)
  return E.Z.Messages.GET_FREE_TRIAL.format({
    freeTrialText: a
  });
else if (s && n === u.Si.TIER_2)
  return E.Z.Messages.BOGO_CHANGE_LOG_REDEEM;
  },
  R = (e, t, n, s) => t || n ? E.Z.Messages.PREMIUM_DISCOUNT_CTA_WITHOUT_PERCENT : e === u.Si.TIER_2 ? E.Z.Messages.PREMIUM_DISCOUNT_CTA.format({
percent: s
  }) : void 0;
t.Z = e => {
  let {
forceInverted: t,
subscriptionTier: n,
isEligibleForBogoPromotion: C = !1,
isPersistentCTA: p = !1,
useShorterCTA: g = !1,
...A
  } = e, m = (0, i.ZP)(), N = (0, a.wj)(m) || t, f = (0, d.N)(), S = null == f ? void 0 : f.subscription_trial, h = (0, l.a5)({
intervalType: null == S ? void 0 : S.interval,
intervalCount: null == S ? void 0 : S.interval_count
  }), M = (0, c.Ng)(), x = null != S && n === S.sku_id, {
enabled: b
  } = o._.useExperiment({
location: 'SubscribeButton'
  }, {
autoTrackExposure: !1
  }), O = b && (null == f ? void 0 : f.trial_id) === u.a7, L = C ? E.Z.Messages.BOGO_CLAIM_OFFER : null != M ? R(n, g, p, M.discount.amount) : I({
showTrialCTA: x,
subscriptionTier: n,
shouldShowUpsells: !1,
trialDurationCopy: h,
isPersistentCTA: p,
shouldShowReferralTrialCopy: O,
subscriptionTrial: S
  });
  return (0, s.jsx)(_.Z, {
color: N ? r.ButtonColors.BRAND_INVERTED : r.ButtonColors.BRAND,
buttonShineClassName: 'buttonShineClassName' in A ? A.buttonShineClassName : N ? T.brandShine : void 0,
trialId: null == S ? void 0 : S.id,
buttonText: L,
buttonTextClassName: x ? T.freeTrialText : void 0,
onlyShineOnHover: !0,
subscriptionTier: n,
...A
  });
};