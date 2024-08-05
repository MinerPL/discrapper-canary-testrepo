n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(793030),
  r = n(442837),
  l = n(481060),
  o = n(230711),
  c = n(2052),
  u = n(906732),
  d = n(963249),
  _ = n(594174),
  E = n(626135),
  I = n(74538),
  m = n(163684),
  T = n(748770),
  h = n(474936),
  N = n(981631),
  C = n(689938),
  f = n(345478);

function p() {
  let e = (0, r.e7)([_.default], () => I.ZP.isPremium(_.default.getCurrentUser())),
{
  enabled: t,
  getNitroCTA: n
} = m.g.useExperiment({
  location: 'OutboundPromotionNotice'
}, {
  autoTrackExposure: !e,
  disable: e
}),
{
  location: p
} = (0, c.O)(),
{
  analyticsLocations: g
} = (0, u.ZP)(),
S = s.useCallback(() => {
  (0, d.Z)({
    subscriptionTier: I.ZP.getSkuIdForPremiumType(h.p9.TIER_2),
    analyticsLocations: g,
    analyticsObject: {
      ...p,
      object: N.qAy.BUTTON_CTA,
      objectType: N.Qqv.TIER_2
    }
  });
}, [
  g,
  p
]),
A = s.useCallback(() => {
  o.Z.open(N.oAB.INVENTORY), T.ZP.dismissOutboundPromotionNotice();
}, []),
R = s.useCallback(() => {
  E.default.track(N.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? S() : A();
}, [
  n,
  S,
  A
]);
  return (0, i.jsxs)(l.Notice, {
color: l.NoticeColors.PREMIUM_TIER_2,
children: [
  (0, i.jsx)(l.NoticeCloseButton, {
    noticeType: N.kVF.OUTBOUND_PROMOTION,
    onClick: () => {
      T.ZP.dismissOutboundPromotionNotice();
    }
  }),
  (0, i.jsx)(l.NitroWheelIcon, {
    size: 'md',
    color: 'currentColor',
    className: f.premiumIcon
  }),
  t ? n ? (0, i.jsxs)(a.x, {
    variant: 'text-sm/normal',
    className: f.text,
    children: [
      C.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE_V2,
      ' ',
      C.Z.Messages.LEARN_MORE_CLICK.format({
        onClick: A
      })
    ]
  }) : C.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE : C.Z.Messages.OUTBOUND_PROMOTION_NOTICE,
  (0, i.jsx)(l.PrimaryCTANoticeButton, {
    noticeType: N.kVF.OUTBOUND_PROMOTION,
    onClick: R,
    children: n ? C.Z.Messages.PREMIUM_UPSELL_GET_NITRO : C.Z.Messages.TAKE_ME_THERE
  })
]
  });
}