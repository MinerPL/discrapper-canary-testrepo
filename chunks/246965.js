n(411104);
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(774078),
  r = n(100527),
  l = n(906732),
  o = n(963249),
  c = n(639119),
  u = n(474936),
  d = n(981631),
  _ = n(689938),
  E = n(708522);
t.Z = function(e) {
  var t;
  let {
dismissCurrentNotice: n,
subscriptionTier: I
  } = e, {
analyticsLocations: m
  } = (0, l.ZP)(function(e) {
switch (e) {
  case u.Si.TIER_0:
    return r.Z.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE;
  case u.Si.TIER_2:
    return r.Z.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE;
  default:
    throw Error('Unsupported subscription tier: '.concat(e));
}
  }(I)), T = (0, c.N)(), h = (0, a.Z)(null != T && null != T.expires_at ? Date.parse(T.expires_at) : 0);
  return null == T || (null === (t = T.subscription_trial) || void 0 === t ? void 0 : t.sku_id) !== I || null == T.expires_at || Object.values(h).every(e => 0 === e) ? null : (0, i.jsxs)(s.Notice, {
color: function(e) {
  switch (e) {
    case u.Si.TIER_0:
      return s.NoticeColors.PREMIUM_TIER_0;
    case u.Si.TIER_2:
      return s.NoticeColors.PREMIUM_TIER_2;
    default:
      throw Error('Unsupported subscription tier: '.concat(e));
  }
}(I),
children: [
  (0, i.jsx)(s.NoticeCloseButton, {
    onClick: n
  }),
  (0, i.jsx)(s.NitroWheelIcon, {
    size: 'md',
    color: 'currentColor',
    className: E.premiumIcon
  }),
  function(e, t) {
    switch (e) {
      case u.Si.TIER_0:
        return t.days > 0 ? _.Z.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_DAYS_VARIANT.format({
          days: t.days
        }) : t.hours > 0 ? _.Z.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_HOURS_VARIANT.format({
          hours: t.hours
        }) : _.Z.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_MINUTES_VARIANT.format({
          minutes: Math.max(t.minutes, 1)
        });
      case u.Si.TIER_2:
        return t.days > 0 ? _.Z.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_DAYS_VARIANT.format({
          days: t.days
        }) : t.hours > 0 ? _.Z.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_HOURS_VARIANT.format({
          hours: t.hours
        }) : _.Z.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_MINUTES_VARIANT.format({
          minutes: Math.max(t.minutes, 1)
        });
      default:
        throw Error('Unsupported subscription tier: '.concat(e));
    }
  }(I, h),
  (0, i.jsx)(s.NoticeButton, {
    onClick: () => {
      (0, o.Z)({
        trialId: T.trial_id,
        subscriptionTier: I,
        analyticsLocations: m,
        analyticsObject: {
          page: d.ZY5.IN_APP,
          section: d.jXE.NOTIFICATION_BAR,
          object: d.qAy.BUTTON_CTA
        }
      });
    },
    children: function(e) {
      switch (e) {
        case u.Si.TIER_0:
          return _.Z.Messages.NOTICE_PREMIUM_TIER_0_TRIAL_ENDING_CTA_VARIANT;
        case u.Si.TIER_2:
          return _.Z.Messages.NOTICE_PREMIUM_TIER_2_TRIAL_ENDING_CTA_VARIANT;
        default:
          throw Error('Unsupported subscription tier: '.concat(e));
      }
    }(I)
  })
]
  });
};