var s = n(735250);
n(470079);
var a = n(399606),
  r = n(481060),
  i = n(78839),
  l = n(63063),
  o = n(276800),
  c = n(248042),
  d = n(409100),
  _ = n(725727),
  u = n(474936),
  E = n(981631),
  T = n(689938),
  I = n(482101);
t.Z = function(e) {
  let {
buttonClassName: t
  } = e, {
promotion: n
  } = (0, _.mq)(), R = (0, a.e7)([i.ZP], () => i.ZP.getPremiumTypeSubscription());
  if (!(0, c.Vi)())
return null;
  let C = new Date(n.endDate);
  return (0, s.jsxs)('div', {
className: I.banner,
children: [
  (0, s.jsx)('img', {
    alt: '',
    src: '',
    className: I.bannerLeftImage
  }),
  (0, s.jsxs)('div', {
    className: I.bannerContent,
    children: [
      (0, s.jsxs)('div', {
        children: [
          (0, s.jsx)(r.Heading, {
            variant: 'display-sm',
            color: 'header-primary',
            children: null == R ? T.Z.Messages.BOGO_MARKETING_PAGE_BANNER_HEADER_2024 : T.Z.Messages.BOGO_MARKETING_PAGE_BANNER_NON_NITRO_HEADER_2024
          }),
          (0, s.jsx)(r.Text, {
            className: I.countdown,
            variant: 'text-sm/bold',
            children: (0, s.jsx)(o.Z, {
              endDate: C
            })
          }),
          (0, s.jsx)(r.Text, {
            variant: 'text-sm/medium',
            color: 'header-primary',
            children: T.Z.Messages.BOGO_MARKETING_PAGE_BANNER_SUBHEADER_2024.format({
              helpCenterLink: l.Z.getArticleURL(E.BhN.SUMMER_BOGO_2024)
            })
          })
        ]
      }),
      (0, s.jsx)(d.Z, {
        buttonText: T.Z.Messages.BOGO_CLAIM_OFFER,
        buttonTextClassName: I.subscribeButtonText,
        subscriptionTier: u.Si.TIER_2,
        showIcon: !1,
        className: null != t ? t : I.subscribeButton,
        forceInverted: !0
      })
    ]
  }),
  (0, s.jsx)('img', {
    alt: '',
    src: '',
    className: I.bannerRightImage
  })
]
  });
};