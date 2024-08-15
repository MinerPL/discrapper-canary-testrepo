var l = t(735250),
  s = t(470079),
  a = t(481060),
  r = t(2052),
  i = t(906732),
  o = t(963249),
  c = t(626135),
  u = t(981631),
  d = t(474936),
  m = t(689938),
  E = t(38457),
  _ = t(458623);
n.Z = () => {
  let e = (0, r.O)(),
{
  analyticsLocations: n
} = (0, i.ZP)();
  return s.useEffect(() => {
c.default.track(u.rMx.PREMIUM_UPSELL_VIEWED, {
  type: d.cd.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
  location: e.location,
  location_stack: n
});
  }, []), (0, l.jsx)(a.FormItem, {
className: _.modalContent,
children: (0, l.jsxs)('div', {
  className: E.nitroUpsellContainer,
  children: [
    (0, l.jsxs)('div', {
      children: [
        (0, l.jsx)(a.Heading, {
          variant: 'heading-lg/bold',
          color: 'always-white',
          className: E.nitroUpsellTitle,
          children: m.Z.Messages.CLIPS_GO_LIVE_EA_UPSELL_TITLE
        }),
        (0, l.jsx)(a.Text, {
          className: E.nitroUpsellSubtitle,
          variant: 'text-sm/normal',
          color: 'always-white',
          children: m.Z.Messages.CLIPS_GO_LIVE_EA_UPSELL_BODY.format()
        })
      ]
    }),
    (0, l.jsx)(a.Button, {
      color: a.Button.Colors.BRAND_INVERTED,
      onClick: () => {
        (0, o.Z)({
          subscriptionTier: d.Si.TIER_2,
          analyticsLocations: n
        });
      },
      children: m.Z.Messages.CLIPS_GO_LIVE_EA_UPSELL_CTA
    })
  ]
})
  });
};