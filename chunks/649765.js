n.d(t, {
  E: function() {
return E;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(119269),
  l = n(227140),
  o = n(689938),
  c = n(256345);
let d = 'url(#dark-purple-gradient)',
  u = () => (0, i.jsxs)('div', {
className: c.coachtipContent,
children: [
  (0, i.jsx)(s.Heading, {
    variant: 'heading-sm/bold',
    children: o.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS
  }),
  (0, i.jsx)(s.Text, {
    variant: 'text-xs/normal',
    children: o.Z.Messages.REFERRAL_PROGRAM_HOME_BADGE_SUBHEADER.format({
      numReferrals: 3
    })
  })
]
  }),
  _ = () => (0, i.jsxs)('div', {
className: c.incentiveCoachtipContent,
children: [
  (0, i.jsx)(s.Heading, {
    variant: 'heading-md/extrabold',
    children: o.Z.Messages.REFERRAL_INCENTIVE_SHARE_NITRO_GET_DISCOUNT.format({
      discountRate: '40%'
    })
  }),
  (0, i.jsx)(s.Text, {
    variant: 'text-sm/medium',
    children: o.Z.Messages.REFERRAL_INCENTIVE_GET_DISCOUNT_OFF_YOUR_NEXT_MONTH.format({
      discountRate: '40%'
    })
  })
]
  }),
  E = e => {
let {
  children: t
} = e, n = (0, i.jsxs)('div', {
  className: c.coachTipContainer,
  children: [
    (0, i.jsx)('div', {
      className: c.iconContainer,
      children: (0, i.jsx)(r.Z, {
        staticPercentage: 100,
        iconClassName: c.icon,
        showAnimations: !0,
        progressCircleVariation: r.Q.NITRO_LOGO,
        ellipseOpacity: 1,
        customAnimationClassName: c.customCircleAnimation,
        circleColor: 'url(#purple-gradient)'
      })
    }),
    (0, i.jsx)(u, {})
  ]
});
return (0, i.jsx)(s.Tooltip, {
  text: n,
  position: 'right',
  'aria-label': o.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
  tooltipClassName: c.marketingBadgeTooltip,
  allowOverflow: !0,
  tooltipPointerClassName: void 0,
  tooltipContentClassName: (0, c.tooltipContent),
  children: e => (0, i.jsx)('div', {
    ...e,
    children: t
  })
});
  };
t.Z = e => {
  let {
isSelected: t,
onSelect: n
  } = e;
  return a.useEffect(() => {
t && n();
  }, [
t,
n
  ]), (0, i.jsx)(l.Z, {
copy: o.Z.Messages.NEW
  });
};