var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(399606),
  l = n(481060),
  o = n(100527),
  c = n(182567),
  d = n(78839),
  _ = n(63063),
  u = n(74538),
  E = n(276800),
  T = n(248042),
  I = n(409100),
  R = n(725727),
  C = n(474936),
  g = n(981631),
  p = n(689938),
  A = n(482101);
t.Z = function(e) {
  let {
isFullScreen: t,
buttonClassName: a
  } = e, {
promotion: m
  } = (0, R.mq)(), N = (0, i.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
  if (!(0, T.Vi)())
return null;
  let f = new Date(m.endDate);
  return (0, s.jsx)(c.O, {
newLocations: [o.Z.PREMIUM_MARKETING_PAGE_BANNER],
children: (0, s.jsxs)('div', {
  className: r()(A.banner, {
    [A.bannerFullScreen]: t
  }),
  children: [
    (0, s.jsx)('div', {
      className: A.bannerLeftImageContainer,
      children: (0, s.jsx)('img', {
        alt: '',
        src: t ? n(277698) : n(144823),
        className: A.image
      })
    }),
    (0, s.jsxs)('div', {
      className: A.bannerContent,
      children: [
        (0, s.jsxs)('div', {
          children: [
            (0, s.jsx)(l.Heading, {
              variant: 'display-sm',
              color: 'always-white',
              children: null == N || null == (0, u.he)(N) ? p.Z.Messages.BOGO_MARKETING_PAGE_BANNER_HEADER_2024 : p.Z.Messages.BOGO_MARKETING_PAGE_BANNER_NON_NITRO_HEADER_2024
            }),
            (0, s.jsx)(l.Text, {
              className: A.countdown,
              variant: 'text-sm/bold',
              children: (0, s.jsx)(E.Z, {
                endDate: f
              })
            }),
            (0, s.jsx)(l.Text, {
              variant: 'text-sm/medium',
              color: 'always-white',
              children: p.Z.Messages.BOGO_MARKETING_PAGE_BANNER_SUBHEADER_2024.format({
                helpCenterLink: _.Z.getArticleURL(g.BhN.SUMMER_BOGO_2024)
              })
            })
          ]
        }),
        (0, s.jsx)(I.Z, {
          buttonText: p.Z.Messages.BOGO_CLAIM_OFFER,
          buttonTextClassName: A.subscribeButtonText,
          subscriptionTier: C.Si.TIER_2,
          showIcon: !1,
          className: null != a ? a : A.subscribeButton,
          forceInverted: !0
        })
      ]
    }),
    (0, s.jsx)('div', {
      className: A.bannerRightImageContainer,
      children: (0, s.jsx)('img', {
        alt: '',
        src: t ? n(10501) : n(485978),
        className: A.image
      })
    })
  ]
})
  });
};