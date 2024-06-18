"use strict";
var l = n(735250),
  s = n(470079),
  a = n(481060),
  i = n(2052),
  r = n(906732),
  o = n(963249),
  u = n(626135),
  c = n(981631),
  d = n(474936),
  m = n(689938),
  E = n(535581),
  _ = n(555066);
t.Z = () => {
  let e = (0, i.O)(),
    {
      analyticsLocations: t
    } = (0, r.ZP)();
  return s.useEffect(() => {
    u.default.track(c.rMx.PREMIUM_UPSELL_VIEWED, {
      type: d.cd.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
      location: e.location,
      location_stack: t
    })
  }, []), (0, l.jsx)(a.FormItem, {
    className: _.modalContent,
    children: (0, l.jsxs)("div", {
      className: E.nitroUpsellContainer,
      children: [(0, l.jsxs)("div", {
        children: [(0, l.jsx)(a.Heading, {
          variant: "heading-lg/bold",
          color: "always-white",
          className: E.nitroUpsellTitle,
          children: m.Z.Messages.CLIPS_GO_LIVE_EA_UPSELL_TITLE
        }), (0, l.jsx)(a.Text, {
          className: E.nitroUpsellSubtitle,
          variant: "text-sm/normal",
          color: "always-white",
          children: m.Z.Messages.CLIPS_GO_LIVE_EA_UPSELL_BODY.format()
        })]
      }), (0, l.jsx)(a.Button, {
        color: a.Button.Colors.BRAND_INVERTED,
        onClick: () => {
          (0, o.Z)({
            subscriptionTier: d.Si.TIER_2,
            analyticsLocations: t
          })
        },
        children: m.Z.Messages.CLIPS_GO_LIVE_EA_UPSELL_CTA
      })]
    })
  })
}