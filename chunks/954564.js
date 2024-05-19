"use strict";
l.r(t);
var a = l("735250"),
  n = l("470079"),
  s = l("481060"),
  i = l("2052"),
  r = l("906732"),
  u = l("963249"),
  o = l("626135"),
  d = l("981631"),
  c = l("474936"),
  f = l("689938"),
  m = l("535581"),
  S = l("555066");
t.default = () => {
  let e = (0, i.useAnalyticsContext)(),
    {
      analyticsLocations: t
    } = (0, r.default)();
  return n.useEffect(() => {
    o.default.track(d.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: c.PremiumUpsellTypes.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
      location: e.location,
      location_stack: t
    })
  }, []), (0, a.jsx)(s.FormItem, {
    className: S.modalContent,
    children: (0, a.jsxs)("div", {
      className: m.nitroUpsellContainer,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-lg/bold",
          color: "always-white",
          className: m.nitroUpsellTitle,
          children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_TITLE
        }), (0, a.jsx)(s.Text, {
          className: m.nitroUpsellSubtitle,
          variant: "text-sm/normal",
          color: "always-white",
          children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_BODY.format()
        })]
      }), (0, a.jsx)(s.Button, {
        look: s.Button.Looks.INVERTED,
        onClick: () => {
          (0, u.default)({
            subscriptionTier: c.PremiumSubscriptionSKUs.TIER_2,
            analyticsLocations: t
          })
        },
        children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_CTA
      })]
    })
  })
}