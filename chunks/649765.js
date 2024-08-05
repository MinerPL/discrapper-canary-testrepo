n.d(t, {
  E: function() {
return d;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(481060),
  r = n(119269),
  l = n(227140),
  o = n(689938),
  c = n(612358);
let d = e => {
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
  (0, i.jsxs)('div', {
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
  })
]
  });
  return (0, i.jsx)(s.Tooltip, {
text: n,
position: 'right',
'aria-label': o.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
tooltipClassName: c.marketingBadgeTooltip,
allowOverflow: !0,
tooltipContentClassName: c.tooltipContent,
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