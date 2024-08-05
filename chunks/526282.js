var i = n(735250),
  a = n(470079),
  s = n(143927),
  r = n(481060),
  l = n(100527),
  o = n(970606),
  c = n(207796),
  d = n(689938),
  u = n(284471);
t.Z = a.memo(function() {
  let e = (0, c.GN)(e => e.setUserUpsellScreen, s.Z);
  a.useEffect(() => {
(0, o.tv)({
  location: l.Z.CLAN_DISCOVERY
});
  }, []);
  let t = a.useCallback(() => {
(0, o.GS)({
  location: l.Z.CLAN_DISCOVERY
}), e(c.o2.USER_ONBOARDING);
  }, [e]);
  return (0, i.jsx)('div', {
className: u.upsellContainer,
children: (0, i.jsxs)('div', {
  className: u.upsellDetails,
  children: [
    (0, i.jsx)(r.Heading, {
      className: u.upsellTitle,
      variant: 'heading-xxl/semibold',
      color: 'header-primary',
      children: d.Z.Messages.CLAN_DISCOVERY_UPSELL_TITLE
    }),
    (0, i.jsxs)(r.Text, {
      className: u.upsellSubtitle,
      variant: 'text-md/medium',
      color: 'header-secondary',
      children: [
        ' ',
        d.Z.Messages.CLAN_DISCOVERY_UPSELL_SUBTITLE
      ]
    }),
    (0, i.jsx)(r.Button, {
      onClick: t,
      children: (0, i.jsx)(r.Text, {
        variant: 'text-sm/medium',
        color: 'always-white',
        className: u.customizeButton,
        children: d.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
      })
    })
  ]
})
  });
});